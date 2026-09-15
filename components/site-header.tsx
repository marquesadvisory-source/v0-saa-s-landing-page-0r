"use client"
import { locales, localeDefinitions } from "@/lib/i18n/config"
import { T, useLanguage } from "@/components/language-provider"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Menu, Phone, X } from "lucide-react"
import { siteConfig } from "@/lib/site"
import styles from "./site-header.module.css"
import { EnquiryButton } from "./enquiry-provider"

export function SiteHeader() {
  const {locale, setLocale, t} = useLanguage()
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const desktop = window.matchMedia("(min-width: 1100px)")
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false) }
    document.addEventListener("keydown", closeOnEscape)
    desktop.addEventListener("change", closeOnDesktop)
    return () => {
      document.removeEventListener("keydown", closeOnEscape)
      desktop.removeEventListener("change", closeOnDesktop)
    }
  }, [open])

  return (
    <header className={styles.header} lang={locale === "zh-cn" ? "zh-Hans" : locale}>
      {pathname === "/" && <a href="#home-content" className={styles.skip}><T>Skip to content</T></a>}
      <div className={styles.utility}>
        <div className={styles.utilityInner}>
          <span className={styles.location}><T>Private advisory. Costa Rica.</T></span>
          <div className={styles.utilityLinks}>
            <EnquiryButton kind="callback" className={styles.callback}><T>
              Request a Callback </T><ArrowUpRight size={12} aria-hidden="true" />
            </EnquiryButton>
            <a href={siteConfig.whatsapp} className={styles.phone}>
              <Phone size={12} aria-hidden="true" /> <T>{siteConfig.phone}</T>
            </a>
            <div className={styles.languages} lang={locale === "zh-cn" ? "zh-Hans" : locale} aria-label={t("Website language")}>
              {locales.map((code, index) => <span key={code} className={styles.languageItem}>
                {index > 0 && <span aria-hidden="true">|</span>}
                <button type="button" lang={code === "zh-cn" ? "zh-Hans" : code} aria-label={localeDefinitions[code].label} aria-pressed={locale === code} className={locale === code ? styles.activeLanguage : undefined} onClick={() => setLocale(code)}>{localeDefinitions[code].shortLabel}</button>
              </span>)}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <Link href="/" className={styles.brand} aria-label={t(siteConfig.name + " home")}>
          <img src={siteConfig.logo} alt={siteConfig.name} width={1672} height={941} />
        </Link>
        <nav className={styles.desktopNav} aria-label={t("Main navigation")}>
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
              <T>{item.label}</T>
            </Link>
          ))}
        </nav>
        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          onClick={() => setOpen(!open)}
          aria-label={t(open ? "Close navigation" : "Open navigation")}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav id="mobile-navigation" className={styles.mobileNav} aria-label={t("Mobile navigation")}>
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={pathname === item.href ? "page" : undefined}>
              <T>{item.label}</T><ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          ))}
          <EnquiryButton kind="callback" onOpen={() => setOpen(false)} className={styles.mobileCallback}><T>
            Request a Callback </T><Phone size={16} aria-hidden="true" />
          </EnquiryButton>
        </nav>
      )}
    </header>
  )
}
