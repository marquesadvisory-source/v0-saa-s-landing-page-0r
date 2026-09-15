"use client"

import { createContext, createElement, useContext, useEffect, useState, type ReactNode, type ImgHTMLAttributes } from "react"
import { usePathname } from "next/navigation"
import { translate, type Locale } from "@/lib/translations"

import { locales } from "@/lib/i18n/config"
const translatedPages = ["/", "/about", "/residency", "/residency/about-costa-rica", "/residency/real-estate", "/contact", "/investments", "/projects", "/projects/plaza-los-mangos", "/projects/decima-avenida", "/capital-partners", "/investment-framework", "/institutional-inquiry", "/who-we-serve", "/what-we-do"]
const Context = createContext<{ locale: Locale; setLocale: (locale: Locale) => void }>({locale: "en", setLocale: () => {}})

export function LanguageProvider({children}: {children: ReactNode}) {
  const [locale, setLanguage] = useState<Locale>("en")
  const pathname = usePathname()
  useEffect(() => {
    try {
      const saved = localStorage.getItem("marques-language") as Locale
      if (locales.includes(saved)) setLanguage(saved)
    } catch { /* Browsing with storage disabled still supports in-session switching. */ }
  }, [])
  useEffect(() => {
    document.documentElement.lang = translatedPages.includes(pathname) ? (locale === "zh-cn" ? "zh-Hans" : locale) : "en"
  }, [locale, pathname])
  const setLocale = (next: Locale) => {
    setLanguage(next)
    try { localStorage.setItem("marques-language", next) } catch { /* Preference is optional. */ }
  }
  return <Context.Provider value={{locale, setLocale}}>{children}</Context.Provider>
}

export function useLanguage() {
  const context = useContext(Context)
  return {...context, t: (text: string) => translate(text, context.locale)}
}

// Explicit text boundaries keep translation inside React, without mutating the DOM.
export function T({children}: {children: ReactNode}) {
  const {t} = useLanguage()
  const render = (value: ReactNode): ReactNode => typeof value === "string" ? t(value) : Array.isArray(value) ? value.map(render) : value
  return <>{render(children)}</>
}

// Attribute-only boundary for server-rendered landmarks and native images.
export function Localized({as, children, ...props}: ImgHTMLAttributes<HTMLElement> & {as: keyof HTMLElementTagNameMap}) {
  const {t} = useLanguage()
  return createElement(as, {...props,
    ...(props.alt ? {alt: t(props.alt)} : {}),
    ...(props.title ? {title: t(props.title)} : {}),
    ...(props["aria-label"] ? {"aria-label": t(props["aria-label"])} : {}),
  }, children)
}

export function LanguageNotice({legal = false}: {legal?: boolean}) {
  const {locale, t} = useLanguage()
  if (locale === "en") return null
  return <p lang={locale === "zh-cn" ? "zh-Hans" : locale}>{t(legal ? "The approved Privacy Policy is available in English only. The English legal text remains the source of truth." : "This page is currently available in English. Navigation follows your selected language.")}</p>
}
