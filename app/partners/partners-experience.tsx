"use client"

import { useEffect, useRef, useState, type FormEvent } from "react"
import Image from "next/image"
import Link from "next/link"
import { track } from "@vercel/analytics"
import { T, useLanguage } from "@/components/language-provider"
import { ResidencyFooter } from "@/components/residency-editorial"
import styles from "./partners.module.css"

const enquiryOptions = [
  "I have a client interested in Costa Rica residence",
  "I am interested in introducing clients to Marqués",
  "I have a specific question",
]

export function PartnersExperience() {
  const { locale, t } = useLanguage()
  const [enquiryType, setEnquiryType] = useState("")
  const [submissionState, setSubmissionState] = useState<"idle" | "sending" | "success" | "error">("idle")
  const submitting = useRef(false)
  const started = useRef(false)

  useEffect(() => {
    try { track("partners_page_view", { locale }) } catch { /* Analytics must not block partner contact. */ }
  }, [locale])

  const trackClick = (name: string) => {
    try { track(name, { locale }) } catch { /* Analytics must not block partner contact. */ }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    if (submitting.current) return
    if (!form.reportValidity()) return

    const data = new FormData(form)
    const field = (name: string) => String(data.get(name) ?? "").trim()
    submitting.current = true
    setSubmissionState("sending")
    try {
      const response = await fetch("/api/partner-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          enquiryType: field("enquiryType"),
          question: field("question"),
          salutation: field("salutation"),
          firstName: field("firstName"),
          lastName: field("lastName"),
          phone: field("phone"),
          email: field("email"),
          companyName: field("companyName"),
          companyLocation: field("companyLocation"),
          companyPosition: field("companyPosition"),
          privacyConsent: data.get("privacyConsent") === "on",
          website: field("website"),
        }),
      })
      const result = await response.json().catch(() => null)
      if (!response.ok || !result || result.ok !== true) throw new Error("Partner enquiry submission failed")
      if (result.ignored !== true) trackClick("partner_enquiry_submitted")
      setSubmissionState("success")
    } catch {
      setSubmissionState("error")
    } finally {
      submitting.current = false
    }
  }

  return <>
    <section className={styles.hero} aria-labelledby="partners-title">
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}><T>MARQUÉS PARTNER NETWORK</T></p>
        <h1 id="partners-title"><T>Become a Partner</T></h1>
        <p className={styles.heroLead}><T>Work with Marqués to support clients considering residence in Costa Rica.</T></p>
        <p className={styles.heroBody}><T>Marqués Advisory & Investments works with individuals, advisors and organizations around the world whose clients or contacts may be interested in establishing residence in Costa Rica.</T></p>
        <p className={styles.heroBody}><T>Whether you are introducing a client or exploring a broader institutional relationship, every partnership begins with a conversation.</T></p>
      </div>
      <figure className={styles.heroImage}>
        <Image src="/images/private-client/service-support.webp" alt={t("A discreet private-client conversation in Costa Rica")} fill priority sizes="(max-width: 800px) 100vw, 48vw" />
        <figcaption><T>Costa Rica · Residence and private-client coordination</T></figcaption>
      </figure>
    </section>

    <section id="introducers" className={styles.introducers} aria-labelledby="introducers-title">
      <div className={styles.introducerCopy}>
        <p className={styles.eyebrow}><T>INTRODUCERS & INTERMEDIARIES</T></p>
        <h2 id="introducers-title"><T>Do you work with clients or international buyers considering Costa Rica?</T></h2>
        <p><T>Marqués works with individuals and organizations around the world whose clients, contacts or buyers may be considering residence in Costa Rica.</T></p>
        <p><T>Whether you are introducing a specific client or looking to complement the experience you already offer international buyers, Marqués provides specialized Costa Rica residence support through a trusted local relationship.</T></p>
        <p className={styles.compensation}><T>For eligible introducer relationships, commercial terms may include referral compensation under the corresponding agreement and applicable requirements.</T></p>
        <p><T>You do not need to be based in Costa Rica to work with Marqués.</T></p>
        <p><T>Represent a developer, brokerage, global mobility firm or organization serving international clients?</T>{" "}<a className={styles.textLink} href="#strategic-partnerships"><T>Explore Strategic Partnerships</T><span aria-hidden="true"> →</span></a></p>
        <a className={styles.textLink} href="#partner-intake"><T>Request a Partner Conversation</T><span aria-hidden="true">↓</span></a>
      </div>

      <div id="partner-intake" className={styles.intake} aria-labelledby="partner-intake-title">
        <div className={styles.intakeIntro}>
          <p className={styles.eyebrow}><T>PARTNER ENQUIRY</T></p>
          <h2 id="partner-intake-title"><T>Let's Talk</T></h2>
          <p><T>Please select the option that best describes your enquiry and provide your basic contact details.</T></p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit} onFocusCapture={() => {
          if (!started.current) {
            started.current = true
            trackClick("partner_enquiry_started")
          }
        }}>
          <fieldset className={styles.enquiryTypes}>
            <legend><T>How can we assist?</T></legend>
            {enquiryOptions.map(option => <label key={option}>
              <input type="radio" name="enquiryType" value={option} checked={enquiryType === option} onChange={() => setEnquiryType(option)} required />
              <span><T>{option}</T></span>
            </label>)}
          </fieldset>

          {enquiryType === "I have a specific question" && <label className={styles.questionField}>
            <span><T>Your question</T> *</span>
            <textarea name="question" maxLength={5000} rows={4} required />
          </label>}

          <div className={styles.fields}>
            <p className={styles.formSectionLabel}><T>Contact Information</T></p>
            <label><T>Salutation</T> *<select name="salutation" autoComplete="honorific-prefix" required defaultValue="">
              <option value=""><T>Select one</T></option>
              {["Mr", "Mrs", "Ms", "Dr", "Other"].map(value => <option key={value} value={value}><T>{value}</T></option>)}
            </select></label>
            <label><T>First Name</T> *<input name="firstName" autoComplete="given-name" required /></label>
            <label><T>Last Name</T> *<input name="lastName" autoComplete="family-name" required /></label>
            <label><T>Telephone / WhatsApp</T> *<input type="tel" name="phone" autoComplete="tel" required /></label>
            <label><T>E-mail Address</T> *<input type="email" name="email" autoComplete="email" required /></label>
            <label><T>Company Name</T><input name="companyName" autoComplete="organization" /></label>
            <label><T>Company Location / Country</T> *<input name="companyLocation" autoComplete="country-name" required /></label>
            <label><T>Company Position</T><input name="companyPosition" autoComplete="organization-title" /></label>
          </div>

          <div className={styles.honeypot} aria-hidden="true">
            <label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
          </div>

          <label className={styles.consent}>
            <input type="checkbox" name="privacyConsent" required />
            <span><T>I have read the</T> <Link href="/privacy" target="_blank" rel="noopener noreferrer"><T>Privacy Policy</T></Link> <T>and authorize Marqués Advisory & Investments to use this information to respond to my enquiry.</T> *</span>
          </label>
          <button className={styles.submit} type="submit" disabled={submissionState === "sending" || submissionState === "success"} aria-busy={submissionState === "sending"}>
            <T>Request a Partner Conversation</T><span aria-hidden="true">↗</span>
          </button>
          {submissionState !== "idle" && <p className={styles.formStatus} role="status" aria-live="polite" aria-atomic="true">
            <T>{submissionState === "sending" ? "Sending…" : submissionState === "success" ? "Your enquiry has been sent to Marqués." : "Your enquiry could not be sent. Please try again."}</T>
          </p>}
        </form>
      </div>
    </section>

    <section id="strategic-partnerships" className={styles.strategic} aria-labelledby="strategic-title">
      <div>
        <p className={styles.eyebrow}><T>STRATEGIC PARTNERSHIPS</T></p>
        <h2 id="strategic-title"><T>Looking to integrate Costa Rica residence support into your client offering?</T></h2>
      </div>
      <div>
        <p><T>Marqués works with selected real estate developers, brokerages, global mobility firms, family offices and other organizations serving international clients.</T></p>
        <p><T>We develop tailored relationships that allow organizations to complement their existing client experience with specialized Costa Rica residence support.</T></p>
        <a className={styles.textLink} href={`mailto:presidencia@marquescr.com?subject=${encodeURIComponent("Strategic partnership conversation")}`} onClick={() => trackClick("strategic_partnership_clicked")}><T>Contact Marqués about a Strategic Partnership</T><span aria-hidden="true">↗</span></a>
      </div>
    </section>

    <section className={styles.investment} aria-labelledby="investment-capital-title">
      <div>
        <p className={styles.eyebrow}><T>INVESTMENT & CAPITAL</T></p>
        <h2 id="investment-capital-title"><T>Investment & Capital Opportunities</T></h2>
      </div>
      <div>
        <p><T>Investment opportunities, co-investment proposals, development projects and real asset transactions are reviewed separately by Marqués Advisory & Investments.</T></p>
        <a className={styles.investmentEmail} href="mailto:presidencia@marquescr.com" onClick={() => trackClick("investment_capital_clicked")}>presidencia@marquescr.com</a>
        <a className={styles.textLink} href={`mailto:presidencia@marquescr.com?subject=${encodeURIComponent("Investment & Capital Opportunities")}`} onClick={() => trackClick("investment_capital_clicked")}><T>Contact Investment & Capital</T><span aria-hidden="true">↗</span></a>
      </div>
    </section>
    <ResidencyFooter />
  </>
}
