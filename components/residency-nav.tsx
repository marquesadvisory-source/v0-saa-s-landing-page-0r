"use client"
import { T, useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLayoutEffect, useRef } from "react"
import s from "@/app/residency/residency.module.css"
const links = [
  ["About Costa Rica", "/residency/about-costa-rica"],
  ["Residence by Investment", "/residency"],
  ["Real Estate", "/residency/real-estate"],
] as const
export function ResidencyNav() {
  const {t, locale} = useLanguage()
  const navRef = useRef<HTMLElement>(null)
  const pathname = usePathname()
  useLayoutEffect(() => {
    if (!window.location.hash) window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [pathname])
  useLayoutEffect(() => {
    const nav = navRef.current
    const active = nav?.querySelector<HTMLElement>('[aria-current="page"]')
    if (!nav || !active) return
    // Reveal the current tab horizontally without moving the page or its hash target.
    const bounds = nav.getBoundingClientRect()
    const tab = active.getBoundingClientRect()
    if (tab.left < bounds.left || tab.right > bounds.right) {
      nav.scrollLeft += tab.left - bounds.left - (nav.clientWidth - tab.width) / 2
    }
  }, [pathname, locale])
  return <nav ref={navRef} className={s.contextNav} aria-label={t("Costa Rica residency")}>
    {links.map(([label, href]) => <Link key={href} href={href} scroll={false} onNavigate={() => window.scrollTo({ top: 0, left: 0, behavior: "instant" })} aria-current={pathname === href ? "page" : undefined}><T>{label}</T></Link>)}
  </nav>
}
