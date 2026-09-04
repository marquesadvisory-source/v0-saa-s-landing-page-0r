"use client"

import { useState } from "react"
import { Download } from "lucide-react"

export function FactSheetGate() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState("")
  return submitted ? <a href="/documents/costa-rica-residence-guide-en.pdf" className="inline-flex items-center gap-2 border border-primary px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-primary"><Download size={14} /> Download Fact Sheet</a> : <form onSubmit={(event) => { event.preventDefault(); if (email.trim()) setSubmitted(true) }} className="grid gap-3 border border-border bg-card p-5"><label htmlFor="fact-sheet-email" className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary">Email to receive the fact sheet</label><div className="flex flex-col gap-2 sm:flex-row"><input id="fact-sheet-email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" className="min-h-11 flex-1 border border-input bg-background px-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring" /><button type="submit" className="min-h-11 bg-primary px-5 text-[10px] font-bold uppercase tracking-[0.15em] text-primary-foreground">Continue</button></div><p className="text-xs leading-5 text-muted-foreground">By continuing, you agree that we may use your details to respond to your request. See our <a href="/privacy" className="underline">Privacy Policy</a>.</p></form>
}
