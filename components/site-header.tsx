"use client"
import { locales, localeDefinitions } from "@/lib/i18n/config"
import { T, useLanguage } from "@/components/language-provider"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, ChevronDown, Menu, Phone, X } from "lucide-react"
import { siteConfig } from "@/lib/site"
import { headerNavigation, type HeaderItem } from "@/lib/header-navigation"
import styles from "./site-header.module.css"
import { EnquiryButton } from "./enquiry-provider"

export function SiteHeader() {
  const {locale, setLocale, t} = useLanguage()
  const [open, setOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileSection, setMobileSection] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const triggers = useRef<Record<string, HTMLButtonElement | null>>({})
  const clickedMenu = useRef<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()
  const matchesPath = (href: string) => pathname === href || pathname.startsWith(href + "/")
  const isItemActive = (item: HeaderItem) => (item.href ? matchesPath(item.href) : false) || item.groups?.some(group => group.links.some(link => matchesPath(link.href))) === true

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = null
  }
  const closeMenus = () => {
    cancelClose()
    clickedMenu.current = null
    setOpen(false)
    setActiveMenu(null)
    setMobileSection(null)
  }
  const openDesktop = (id: string) => {
    cancelClose()
    if (activeMenu !== id) clickedMenu.current = null
    setActiveMenu(id)
  }
  const scheduleClose = () => {
    cancelClose()
    closeTimer.current = setTimeout(() => {
      // Do not dismiss a panel a keyboard user is still navigating.
      if (!headerRef.current?.querySelector('[data-header-panel]:focus-within')) {
        clickedMenu.current = null
        setActiveMenu(null)
      }
    }, 220)
  }

  useEffect(() => { closeMenus() }, [pathname])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && (open || activeMenu)) {
        event.preventDefault()
        const trigger = activeMenu ? triggers.current[activeMenu] : toggleRef.current
        // Focus first: focus-driven opening must not undo the dismissal.
        trigger?.focus()
        closeMenus()
      }
    }
    const closeOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) closeMenus()
    }
    const desktop = window.matchMedia("(min-width: 1100px)")
    const closeOnResize = () => closeMenus()
    document.addEventListener("keydown", closeOnEscape)
    document.addEventListener("pointerdown", closeOutside)
    desktop.addEventListener("change", closeOnResize)
    return () => {
      document.removeEventListener("keydown", closeOnEscape)
      document.removeEventListener("pointerdown", closeOutside)
      desktop.removeEventListener("change", closeOnResize)
      cancelClose()
    }
  }, [open, activeMenu])

  const panelLinks = (item: HeaderItem) => (
    <div className={styles.panelInner}>
      <p className={styles.panelTitle}><T>{item.label}</T></p>
      <div className={styles.groups}>
        {item.groups?.map((group, index) => (
          <div className={styles.group} key={group.label ?? index}>
            {group.label && <h3 className={styles.groupTitle}>
              {group.href ? <Link href={group.href} onClick={closeMenus}><T>{group.label}</T></Link> : <T>{group.label}</T>}
            </h3>}
            <ul className={styles.linkList}>
              {group.links.map(link => <li key={link.label}>
                <Link href={link.href} onClick={closeMenus} aria-current={!link.href.includes("#") && pathname === link.href ? "page" : undefined}>
                  <T>{link.label}</T>
                </Link>
              </li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <header ref={headerRef} className={styles.header} lang={locale === "zh-cn" ? "zh-Hans" : locale}
      onMouseEnter={cancelClose} onMouseLeave={scheduleClose}
      onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) closeMenus() }}>
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
          <ul className={styles.primaryList}>
            {headerNavigation.map(item => <li key={item.id} className={styles.navItem}
              onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) item.groups ? openDesktop(item.id) : setActiveMenu(null) }}>
              <div className={styles.navLabel} data-active={activeMenu === item.id || isItemActive(item) || undefined}>
                {item.href && <Link href={item.href} onClick={closeMenus} className={styles.primaryLink} aria-current={pathname === item.href ? "page" : undefined}
                  onFocus={event => { if (event.currentTarget.matches(":focus-visible")) item.groups ? openDesktop(item.id) : setActiveMenu(null) }}>
                  <T>{item.label}</T>
                </Link>}
                {item.groups && <button type="button" ref={node => { triggers.current[item.id] = node }}
                  className={item.href ? styles.disclosure : styles.primaryButton}
                  aria-expanded={activeMenu === item.id} aria-controls={`header-${item.id}`}
                  aria-label={item.href ? `${t(activeMenu === item.id ? "Collapse navigation section" : "Expand navigation section")}: ${t(item.label)}` : undefined}
                  onFocus={event => { if (event.currentTarget.matches(":focus-visible")) openDesktop(item.id) }}
                  onClick={() => {
                    cancelClose()
                    const shouldClose = clickedMenu.current === item.id && activeMenu === item.id
                    clickedMenu.current = shouldClose ? null : item.id
                    setActiveMenu(shouldClose ? null : item.id)
                  }}
                  onKeyDown={event => {
                    if (event.key === "ArrowDown") {
                      event.preventDefault()
                      openDesktop(item.id)
                      requestAnimationFrame(() => headerRef.current?.querySelector<HTMLElement>(`#header-${item.id} a`)?.focus())
                    }
                  }}>
                  {!item.href && <T>{item.label}</T>}
                  <ChevronDown size={12} aria-hidden="true" />
                </button>}
              </div>
              {item.groups && <div id={`header-${item.id}`} data-header-panel hidden={activeMenu !== item.id}
                className={styles.panel}>
                {panelLinks(item)}
              </div>}
            </li>)}
          </ul>
        </nav>
        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          onClick={() => { setOpen(!open); setMobileSection(null); setActiveMenu(null) }}
          aria-label={t(open ? "Close navigation" : "Open navigation")}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav id="mobile-navigation" className={styles.mobileNav} aria-label={t("Mobile navigation")}>
          <ul className={styles.mobileList}>
            {headerNavigation.map(item => <li key={item.id}>
              <div className={styles.mobileRow} data-active={isItemActive(item) || undefined}>
                {item.href && <Link href={item.href} onClick={closeMenus} aria-current={pathname === item.href ? "page" : undefined}><T>{item.label}</T></Link>}
                {item.groups && <button type="button" className={item.href ? styles.mobileDisclosure : styles.mobileSectionButton}
                  aria-expanded={mobileSection === item.id} aria-controls={`mobile-${item.id}`}
                  aria-label={item.href ? `${t(mobileSection === item.id ? "Collapse navigation section" : "Expand navigation section")}: ${t(item.label)}` : undefined}
                  onClick={() => setMobileSection(current => current === item.id ? null : item.id)}>
                  {!item.href && <T>{item.label}</T>}<ChevronDown size={16} aria-hidden="true" />
                </button>}
              </div>
              {item.groups && <div id={`mobile-${item.id}`} hidden={mobileSection !== item.id} className={styles.mobilePanel}>{panelLinks(item)}</div>}
            </li>)}
          </ul>
          <EnquiryButton kind="callback" onOpen={closeMenus} className={styles.mobileCallback}><T>
            Request a Callback </T><Phone size={16} aria-hidden="true" />
          </EnquiryButton>
        </nav>
      )}
    </header>
  )
}
