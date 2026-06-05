"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { siteConfig } from "@/lib/site"

const GOLD = "#C9A96E"
const NAVY = "#0D1B2A"
const GOLD20 = "rgba(201,169,110,0.20)"
const WHITE70 = "rgba(255,255,255,0.70)"

const navItems = [
  { label: "Platform", href: "/about" },
  { label: "Who We Serve", href: "/who-we-serve" },
  { label: "Capabilities", href: "/what-we-do" },
  { label: "Opportunities", href: "/projects" },
  { label: "Investment Framework", href: "/#tesis" },
  { label: "Capital Partners", href: "/capital-partners" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 50)
    update()
    window.addEventListener("scroll", update)
    return () => window.removeEventListener("scroll", update)
  }, [])

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(13,27,42,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid ${GOLD20}` : "none",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex shrink-0 items-center gap-3">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20sin%20fondo-76W6yyCO5gUzFF2qWEPYIWgP3amG1g.png"
            alt={siteConfig.name}
            className="h-14 w-auto object-contain"
            style={{ filter: "drop-shadow(0 0 8px rgba(201,169,110,0.18))" }}
          />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-widest transition-colors hover:text-[#C9A96E]"
              style={{ color: WHITE70, fontWeight: 500, letterSpacing: "0.08em" }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="/institutional-inquiry"
          className="hidden items-center gap-2 border px-5 py-2 text-xs uppercase tracking-widest transition-colors hover:bg-[#C9A96E] hover:text-[#0D1B2A] lg:inline-flex"
          style={{ borderColor: GOLD, color: GOLD, fontWeight: 600, letterSpacing: "0.1em" }}
        >
          Institutional Inquiry
        </a>

        <button
          className="p-2 lg:hidden"
          style={{ color: GOLD }}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          className="flex flex-col gap-4 px-6 pb-6 lg:hidden"
          style={{ backgroundColor: "rgba(13,27,42,0.98)", borderTop: `1px solid ${GOLD20}` }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b py-2 text-left text-sm transition-colors hover:text-[#C9A96E]"
              style={{ color: WHITE70, borderColor: GOLD20 }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/institutional-inquiry"
            className="mt-2 border px-5 py-3 text-center text-xs uppercase tracking-widest"
            style={{ borderColor: GOLD, color: GOLD, fontWeight: 600 }}
          >
            Institutional Inquiry
          </a>
        </div>
      )}
    </header>
  )
}
