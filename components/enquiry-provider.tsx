"use client"
import { T, useLanguage } from "@/components/language-provider"

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react"
import Link from "next/link"
import { ArrowUpRight, Download, Mail, MessageCircle, X } from "lucide-react"
import { getEnquiryForm, type EnquiryKind } from "@/lib/forms/config"
import { factSheets, getResidenceFactSheet } from "@/lib/documents"
import { emitEvent } from "@/lib/analytics/events"
import { siteConfig } from "@/lib/site"
import s from "./enquiry.module.css"

type Kind = EnquiryKind | "fact-sheet"
type Request = { kind: Kind; subject?: string }
const Context = createContext<(request: Request) => void>(() => {})
const titles: Record<Kind, string> = {
  general: getEnquiryForm("general").modalLabel, callback: getEnquiryForm("callback").modalLabel,
  "real-estate": getEnquiryForm("real-estate").modalLabel, "fact-sheet": "Costa Rica Residence Guide",
}

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const {locale, t} = useLanguage()
  const [request, setRequest] = useState<Request | null>(null)
  const [language, setLanguage] = useState("en")
  const dialog = useRef<HTMLDialogElement>(null)
  const trigger = useRef<HTMLElement | null>(null)
  useEffect(() => {
    if (!request) return
    const element = dialog.current
    const previousOverflow = document.body.style.overflow
    const scrollPosition = { left: window.scrollX, top: window.scrollY }
    element?.showModal()
    document.body.style.overflow = "hidden"
    return () => {
      element?.close()
      document.body.style.overflow = previousOverflow
      if (trigger.current?.isConnected) trigger.current.focus({ preventScroll: true })
      else document.querySelector<HTMLButtonElement>('button[aria-controls="mobile-navigation"]')?.focus({ preventScroll: true })
      window.scrollTo({ ...scrollPosition, behavior: "instant" })
    }
  }, [request])
  const open = (next: Request) => {
    trigger.current = document.activeElement as HTMLElement
    setLanguage(locale)
    setRequest(next)
    if (next.kind !== "fact-sheet") emitEvent({ name: next.kind === "callback" ? "callback_opened" : next.kind === "real-estate" ? "real_estate_enquiry_opened" : "general_enquiry_opened" })
  }
  const embed = request && request.kind !== "fact-sheet" ? getEnquiryForm(request.kind).publicUrl : null
  const sheet = getResidenceFactSheet(language)
  return <Context.Provider value={open}>
    {children}
    {request && <dialog ref={dialog} className={s.dialog + (embed ? " " + s.formDialog : "")} aria-labelledby="enquiry-title"
      onCancel={() => setRequest(null)} onClose={() => setRequest(null)}
      onClick={event => { if (event.target === event.currentTarget) setRequest(null) }}>
      <div className={s.inner}>
        <button className={s.close} type="button" onClick={() => setRequest(null)} aria-label={t("Close enquiry")}><X size={22} /></button>
        <p className={s.eyebrow}><T>MARQUÉS ADVISORY &amp; INVESTMENTS</T></p>
        <h2 id="enquiry-title"><T>{titles[request.kind]}</T></h2>
        {request.kind === "fact-sheet" ? <>
          <p><T>The approved Costa Rica residence guide, in your preferred language.</T></p>
          <label className={s.label} htmlFor="guide-language"><T>Guide language</T></label>
          <select id="guide-language" value={sheet.language} onChange={event => setLanguage(event.target.value)}>
            {factSheets.map(item => <option key={item.language} value={item.language}><T>{item.label}</T></option>)}
          </select>
          <a className={s.primary} href={sheet.href} onClick={() => emitEvent({ name: "fact_sheet_downloaded", locale: sheet.language })} download><T>Download Fact Sheet </T><Download size={17} /></a>
          <a className={s.secondary} href={sheet.href} target="_blank" rel="noopener noreferrer"><T>Read in browser </T><ArrowUpRight size={16} /></a>
        </> : <>
          {request.subject && <p className={s.subject}><T>{request.subject}</T></p>}
          {embed ? <iframe key={embed} src={embed} title={t(titles[request.kind]) + " - Zoho Forms"} className={s.embed} /> : <div data-integration-slot={request.kind}>
            <p><T>{request.kind === "callback" ? "To arrange a callback, contact our team with your preferred time and contact details." : "Begin a private conversation with our team about your objectives in Costa Rica."}</T></p>
            <p className={s.notice}><T>Online enquiries are not yet available. Please contact us directly.</T></p>
            <a className={s.primary} href={"mailto:" + siteConfig.email + "?subject=" + encodeURIComponent(titles[request.kind] + (request.subject ? " — " + request.subject : ""))}><T>Email our team </T><Mail size={17} /></a>
            <a className={s.secondary} href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer"><T>WhatsApp · </T><T>{siteConfig.phone}</T> <MessageCircle size={17} /></a>
          </div>}
          <p className={s.privacy}><T>Please review our </T><Link href="/privacy" target="_blank" rel="noopener noreferrer"><T>Privacy Policy</T></Link><T> before sharing personal information. Do not send sensitive documents through an initial enquiry.</T></p>
        </>}
      </div>
    </dialog>}
  </Context.Provider>
}

export function EnquiryButton({ children, kind = "general", subject, className, onOpen, ariaLabel }: {
  children: ReactNode; kind?: Kind; subject?: string; className?: string; onOpen?: () => void; ariaLabel?: string
}) {
  const open = useContext(Context)
  const {t} = useLanguage()
  return <button type="button" aria-label={ariaLabel ? t(ariaLabel) : undefined} className={className} onClick={() => { onOpen?.(); open({kind, subject}) }}>{children}</button>
}
