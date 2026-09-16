"use client"
import { T, useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLayoutEffect } from "react"
import s from "@/app/residency/residency.module.css"
const links = [
  ["About Costa Rica", "/residency/about-costa-rica"],
  ["Residence by Investment", "/residency"],
  ["Real Estate", "/residency/real-estate"],
] as const
export function ResidencyNav() {
  const {t} = useLanguage()
  const pathname = usePathname()
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [pathname])
  return <nav className={s.contextNav} aria-label={t("Costa Rica residency")}>
    {links.map(([label, href]) => <Link key={href} href={href} scroll={false} onNavigate={() => window.scrollTo({ top: 0, left: 0, behavior: "instant" })} aria-current={pathname === href ? "page" : undefined}><T>{label}</T></Link>)}
  </nav>
}
