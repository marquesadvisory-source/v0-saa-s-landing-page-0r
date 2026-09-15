import type { Locale } from "@/lib/i18n/config"

export type AnalyticsEventName =
  | "residency_cta_clicked" | "investments_cta_clicked"
  | "fact_sheet_downloaded" | "fact_sheet_shared"
  | "callback_opened" | "general_enquiry_opened" | "real_estate_enquiry_opened"
  | "whatsapp_clicked" | "opportunity_viewed" | "nda_requested"
export interface AnalyticsEvent { name: AnalyticsEventName; locale?: Locale }
export interface AnalyticsProvider { track(event: AnalyticsEvent): void }

// No additional collection is enabled. Existing Vercel page analytics stays unchanged.
let provider: AnalyticsProvider | undefined
export function setAnalyticsProvider(next: AnalyticsProvider): () => void {
  provider = next
  return () => { if (provider === next) provider = undefined }
}
export function emitEvent(event: AnalyticsEvent): void {
  if (typeof window === "undefined") return
  try { provider?.track(event) } catch { /* Analytics must never prevent navigation or enquiries. */ }
}
