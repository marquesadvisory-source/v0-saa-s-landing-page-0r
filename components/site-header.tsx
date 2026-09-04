"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { siteConfig } from "@/lib/site"

const GOLD = "#C9A96E"
const NAVY = "#0D1B2A"
const GOLD20 = "rgba(201,169,110,0.20)"
const WHITE70 = "rgba(255,255,255,0.70)"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24)
    update()
    window.addEventListener("scroll", update)
    return () => window.removeEventListener("scroll", update)
  }, [])

  return (
    <header className="fixed left-0 right-0 top-0 z-50 text-white" style={{ backgroundColor: scrolled ? "rgba(13,27,42,0.98)" : NAVY, backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: `1px solid ${GOLD20}` }}>
      <div className="border-b border-white/10"><div className="mx-auto flex max-w-7xl justify-end gap-5 px-5 py-2 text-[10px] uppercase tracking-[0.14em] text-white/60 md:px-6"><a href="/contact" className="hover:text-[#C9A96E]">Request a Callback</a><span>+506 7267-9806</span><span className="border-l border-white/20 pl-5">EN⌄</span></div></div>
      <div className="hidden border-b border-white/10 md:block">
        <div className="mx-auto flex max-w-7xl justify-end gap-5 px-6 py-2 text-[10px] uppercase tracking-[0.15em] text-white/60">
          <a href="/contact" className="hover:text-[#C9A96E]">Request a Callback</a><span>+506 7267-9806</span><span className="border-l border-white/20 pl-5">EN⌄</span>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-6 md:py-4">
        <a href="/" className="flex shrink-0 items-center"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/New%20Logo-K4BZxNsQJQRLDM8SHeb64TIytnrXgn.png" alt={siteConfig.name} className="h-14 w-auto object-contain" /></a>
        <nav className="hidden items-center gap-6 lg:flex">{siteConfig.nav.map((item) => <a key={item.href} href={item.href} className="text-xs uppercase tracking-[0.12em] text-white/70 transition-colors hover:text-[#C9A96E]">{item.label}</a>)}</nav>
        <a href="/contact" className="hidden border px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C9A96E] transition-colors hover:bg-[#C9A96E] hover:text-[#0D1B2A] lg:inline-flex">Contact</a>
        <button className="p-2 lg:hidden" style={{ color: GOLD }} onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
      <div className="border-t border-white/10"><nav className="mx-auto flex max-w-7xl items-center gap-0 overflow-x-auto px-5 md:px-6"><a className="whitespace-nowrap border-r border-white/15 px-5 py-3 pl-0 text-[10px] uppercase tracking-[0.15em] text-white/55 hover:text-[#C9A96E]" href="/residency">About Costa Rica</a><a className="whitespace-nowrap border-r border-white/15 px-5 py-3 text-[10px] uppercase tracking-[0.15em] text-[#C9A96E]" href="/residency">Residence by Investment</a><a className="whitespace-nowrap px-5 py-3 text-[10px] uppercase tracking-[0.15em] text-white/55 hover:text-[#C9A96E]" href="/residency/real-estate">Real Estate</a></nav></div>
      {open && <div className="flex flex-col gap-4 border-t border-white/10 px-5 pb-6 pt-4 lg:hidden" style={{ backgroundColor: NAVY }}>{siteConfig.nav.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-white/10 py-2 text-sm uppercase tracking-[0.12em] text-white/75">{item.label}</a>)}<a href="/contact" className="mt-2 border px-5 py-3 text-center text-xs uppercase tracking-widest" style={{ borderColor: GOLD, color: GOLD }}>Contact</a></div>}
    </header>
  )
}

export { SiteHeader as EditorialHeader }
