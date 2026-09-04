"use client"

import { useState } from "react"
import { Menu, X, Globe2, Phone, MapPin, Mail } from "lucide-react"
import { siteConfig } from "@/lib/site"

const logo = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/New%20Logo-K4BZxNsQJQRLDM8SHeb64TIytnrXgn.png"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <header className="fixed inset-x-0 top-0 z-50 bg-card text-primary shadow-sm">
    <div className="border-b border-border bg-secondary"><div className="mx-auto flex max-w-7xl items-center justify-end gap-4 px-5 py-2 text-[10px] uppercase tracking-[0.12em] text-primary md:gap-7 md:px-8"><button className="inline-flex items-center gap-2 hover:text-accent"><Globe2 size={16} /> EN <span aria-hidden>⌄</span></button><a href="/contact" className="inline-flex items-center gap-2 hover:text-accent"><Phone size={15} /> Callback</a><a href="tel:+50672679806" className="hidden items-center gap-2 hover:text-accent sm:inline-flex"><Phone size={15} /> +506 72679806</a><a href="/contact" className="hidden items-center gap-2 hover:text-accent md:inline-flex"><MapPin size={15} /> Worldwide Offices</a></div></div>
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8 md:py-4"><a href="/" aria-label={siteConfig.name}><img src={logo} alt={siteConfig.name} className="h-14 w-auto object-contain" /></a><nav className="hidden items-center gap-7 lg:flex"><a href="/residency" className="text-sm hover:text-accent">Residence</a><a href="/investments" className="text-sm hover:text-accent">Investments</a><a href="/insights" className="text-sm hover:text-accent">Insights</a><a href="/about" className="text-sm hover:text-accent">About</a><a href="/contact" className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-primary-foreground"><Mail size={15} /> Contact</a><span className="flex flex-col items-center gap-1 text-[9px] uppercase tracking-wider"><Menu size={22} strokeWidth={1} />Menu</span></nav><button className="p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X size={22} /> : <Menu size={22} />}</button></div>
    <div className="border-t border-border"><nav className="mx-auto flex max-w-7xl items-center gap-0 overflow-x-auto px-5 md:px-8"><a href="/residency" className="whitespace-nowrap border-r border-border px-5 py-3 pl-0 text-sm hover:text-accent">About Costa Rica</a><a href="/residency" className="whitespace-nowrap border-r border-border px-5 py-3 text-sm hover:text-accent">Residence by Investment</a><a href="/residency/real-estate" className="whitespace-nowrap px-5 py-3 text-sm hover:text-accent">Real Estate</a></nav></div>
    {open && <nav className="flex flex-col gap-4 border-t border-border bg-card px-5 pb-6 pt-5 lg:hidden"><a href="/residency" onClick={() => setOpen(false)}>Residence</a><a href="/investments" onClick={() => setOpen(false)}>Investments</a><a href="/insights" onClick={() => setOpen(false)}>Insights</a><a href="/about" onClick={() => setOpen(false)}>About</a><a href="/contact" onClick={() => setOpen(false)} className="bg-primary px-4 py-3 text-center text-xs uppercase tracking-widest text-primary-foreground">Contact</a></nav>}
  </header>
}

export { SiteHeader as EditorialHeader }
