import "server-only"
import type { Locale } from "./i18n/config"

const enquiryTypes = [
  "I have a client interested in Costa Rica residence",
  "I am interested in introducing clients to Marqués",
  "I have a specific question",
] as const
const salutations = ["Mr", "Mrs", "Ms", "Dr", "Other"] as const
const localeLabels: Record<Locale, string> = { en: "EN", es: "ES", fr: "FR", "zh-cn": "ZH-CN" }
const limits = { enquiryType: 100, question: 5000, salutation: 20, firstName: 100, lastName: 100, phone: 60, email: 254, companyName: 160, companyLocation: 120, companyPosition: 120 } as const
const defaultRecipient = "info@marquescr.com"
const defaultSender = "Marqués Partner Network <notifications@marquescr.com>"
const mailboxPattern = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/u

export type PartnerEnquiryRouting = { to: string; from: string }
export type PartnerEnquiryDeliveryConfig = PartnerEnquiryRouting & { apiKey: string }

export function getPartnerEnquiryDeliveryConfig(environment: Record<string, string | undefined> = process.env): PartnerEnquiryDeliveryConfig | null {
  const apiKey = environment.RESEND_API_KEY?.trim()
  const to = environment.PARTNER_ENQUIRY_TO?.trim() || defaultRecipient
  const from = environment.PARTNER_ENQUIRY_FROM?.trim() || defaultSender
  const senderMatch = /^(?:[^<>\r\n]{1,100}\s+<([^<>\s]+)>|([^<>\s]+))$/u.exec(from)
  const senderAddress = senderMatch?.[1] ?? senderMatch?.[2]

  if (!apiKey || !mailboxPattern.test(to) || !senderAddress || !mailboxPattern.test(senderAddress)) return null
  return { apiKey, to, from }
}

export type PartnerEnquiry = {
  locale: Locale
  enquiryType: (typeof enquiryTypes)[number]
  question: string
  salutation: (typeof salutations)[number]
  firstName: string
  lastName: string
  phone: string
  email: string
  companyName: string
  companyLocation: string
  companyPosition: string
}
export type PartnerEnquiryValidation = { ok: true; value: PartnerEnquiry } | { ok: false; issue: "malformed" | "invalid" | "honeypot" }

function clean(value: string) {
  return value.replace(/\r\n?/g, "\n").replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim()
}

function readString(record: Record<string, unknown>, key: string, optional = false): string | null {
  const value = record[key]
  if (value === undefined || (optional && value === null)) return optional ? "" : null
  return typeof value === "string" ? clean(value) : null
}

export function validatePartnerEnquiry(input: unknown): PartnerEnquiryValidation {
  if (!input || typeof input !== "object" || Array.isArray(input)) return { ok: false, issue: "malformed" }
  const record = input as Record<string, unknown>
  if (typeof record.website === "string" && clean(record.website)) return { ok: false, issue: "honeypot" }
  if (record.website !== undefined && typeof record.website !== "string") return { ok: false, issue: "invalid" }
  const locale = record.locale
  if (typeof locale !== "string" || !["en", "es", "fr", "zh-cn"].includes(locale)) return { ok: false, issue: "invalid" }

  const requiredKeys = ["enquiryType", "salutation", "firstName", "lastName", "phone", "email", "companyLocation"] as const
  const values: Record<string, string> = {}
  for (const key of requiredKeys) {
    const value = readString(record, key)
    if (value === null || !value || value.length > limits[key]) return { ok: false, issue: "invalid" }
    values[key] = value
  }
  const optionalKeys = ["question", "companyName", "companyPosition"] as const
  for (const key of optionalKeys) {
    const value = readString(record, key, true)
    if (value === null || value.length > limits[key]) return { ok: false, issue: "invalid" }
    values[key] = value
  }
  if (!enquiryTypes.includes(values.enquiryType as (typeof enquiryTypes)[number])) return { ok: false, issue: "invalid" }
  if (!salutations.includes(values.salutation as (typeof salutations)[number])) return { ok: false, issue: "invalid" }
  if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/u.test(values.email)) return { ok: false, issue: "invalid" }
  if (values.enquiryType === "I have a specific question" && !values.question) return { ok: false, issue: "invalid" }
  if (record.privacyConsent !== true) return { ok: false, issue: "invalid" }
  return { ok: true, value: { ...values, locale: locale as Locale } as PartnerEnquiry }
}

export function createPartnerEnquiryEmail(enquiry: PartnerEnquiry, submittedAt = new Date(), routing: PartnerEnquiryRouting = { to: defaultRecipient, from: defaultSender }) {
  const fields: [string, string][] = [
    ["Enquiry type", enquiry.enquiryType],
    ...(enquiry.question ? [["Specific question", enquiry.question] as [string, string]] : []),
    ["Salutation", enquiry.salutation], ["First Name", enquiry.firstName], ["Last Name", enquiry.lastName],
    ["Telephone / WhatsApp", enquiry.phone], ["Email Address", enquiry.email],
    ...(enquiry.companyName ? [["Company Name", enquiry.companyName] as [string, string]] : []),
    ["Company Location / Country", enquiry.companyLocation],
    ...(enquiry.companyPosition ? [["Company Position", enquiry.companyPosition] as [string, string]] : []),
    ["Submitted from", "Marqués Partner Network"], ["Submission language", localeLabels[enquiry.locale]],
    ["Timestamp (UTC)", submittedAt.toISOString()],
  ]
  const escapeHtml = (value: string) => value.replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" })[character]!)
  return {
    from: routing.from,
    to: [routing.to],
    reply_to: enquiry.email,
    subject: "Partner conversation request — Marqués Partner Network",
    text: fields.map(([label, value]) => `${label}:\n${value}`).join("\n\n"),
    html: fields.map(([label, value]) => `<p style="white-space:pre-wrap"><strong>${escapeHtml(label)}</strong><br>${escapeHtml(value)}</p>`).join("\n"),
  }
}

export async function sendPartnerEnquiryEmail(email: ReturnType<typeof createPartnerEnquiryEmail>, apiKey: string, fetcher: typeof fetch = fetch): Promise<boolean> {
  const response = await fetcher("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(email),
  })
  return response.ok
}
