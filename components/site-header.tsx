"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { homeContent, localeLabels, type Locale } from "@/lib/home-content"

type SiteHeaderProps = {
  locale?: Locale
  onLocaleChange?: (locale: Locale) => void
}

const locales = Object.keys(localeLabels) as Locale[]
const localeStorageKey = "mai.locale.v1"

export function SiteHeader({ locale = "en", onLocaleChange }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const nav = homeContent[locale].nav

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24)
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : locale
  }, [locale])

  useEffect(() => {
    const saved = window.localStorage.getItem(localeStorageKey) as Locale | null
    if (saved && locales.includes(saved) && saved !== locale) onLocaleChange?.(saved)
  }, [locale, onLocaleChange])

  const setLanguage = (nextLocale: Locale) => {
    window.localStorage.setItem(localeStorageKey, nextLocale)
    onLocaleChange?.(nextLocale)
    setOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-[#c7a66a]/20 bg-[#091725]/95 shadow-[0_14px_40px_rgba(3,12,20,.16)] backdrop-blur-xl"
          : "border-white/10 bg-[#091725]/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[88px] max-w-[1440px] items-center justify-between px-5 md:px-8">
        <Link href="/" aria-label="Marques Advisory & Investments home" className="relative z-10 flex items-center">
          <Image
            src="/brand/marques-logo.png"
            alt="Marques Advisory & Investments"
            width={126}
            height={82}
            priority
            className="h-[72px] w-auto object-contain md:h-[78px]"
          />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 xl:flex">
          <div className="group relative">
            <button
              type="button"
              aria-haspopup="true"
              className="flex min-h-11 items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.12em] text-white/78 transition-colors hover:text-[#d7b779] focus-visible:text-[#d7b779]"
            >
              {nav.program}
              <ChevronDown aria-hidden="true" size={14} />
            </button>
            <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <Link
                href="/countries"
                className="grid grid-cols-[42px_1fr] items-center gap-4 border border-[#c7a66a]/25 bg-[#f5f0e7] p-5 text-[#0b1b2a] shadow-2xl transition-colors hover:bg-white"
              >
                <Image src="/costa-rica/coat-of-arms.svg" alt="" width={42} height={46} className="h-11 w-auto" />
                <span>
                  <strong className="block font-serif text-xl font-medium">{nav.costaRica}</strong>
                  <span className="mt-1 block text-[11px] uppercase tracking-[0.12em] text-[#8d6c34]">
                    {nav.costaRicaDetail}
                  </span>
                </span>
              </Link>
            </div>
          </div>

          <div className="group relative">
            <button
              type="button"
              aria-haspopup="true"
              className="flex min-h-11 items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.12em] text-white/78 transition-colors hover:text-[#d7b779] focus-visible:text-[#d7b779]"
            >
              {nav.advisory}
              <ChevronDown aria-hidden="true" size={14} />
            </button>
            <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="border border-[#c7a66a]/20 bg-[#0d2031] p-2 shadow-2xl">
                {[
                  [nav.investor, "investor"],
                  [nav.pensioner, "pensioner"],
                  [nav.rentier, "rentier"],
                ].map(([label, route]) => (
                  <Link
                    key={route}
                    href={`/residency#${route}`}
                    className="block border-b border-white/8 px-4 py-3 text-sm text-white/76 transition-colors last:border-0 hover:bg-white/5 hover:text-[#d7b779]"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/investments" className="text-[12px] font-medium uppercase tracking-[0.12em] text-white/78 transition-colors hover:text-[#d7b779]">
            {nav.investments}
          </Link>
          <Link href="/#experience" className="text-[12px] font-medium uppercase tracking-[0.12em] text-white/78 transition-colors hover:text-[#d7b779]">
            {nav.experience}
          </Link>
        </nav>

        <div className="hidden items-center gap-5 xl:flex">
          <div className="flex items-center gap-1 border-r border-white/15 pr-5" aria-label="Language">
            {locales.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLanguage(item)}
                aria-pressed={item === locale}
                className={`min-h-9 min-w-9 px-1 text-[11px] tracking-[0.08em] transition-colors ${
                  item === locale ? "text-[#d7b779]" : "text-white/45 hover:text-white"
                }`}
              >
                {localeLabels[item]}
              </button>
            ))}
          </div>
          <Link
            href="/residence-inquiry"
            className="inline-flex min-h-11 items-center border border-[#c7a66a] px-5 text-[11px] font-semibold uppercase tracking-[0.13em] text-[#d7b779] transition-colors hover:bg-[#c7a66a] hover:text-[#091725]"
          >
            {nav.consultation}
          </Link>
        </div>

        <button
          type="button"
          aria-label={nav.menu}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex min-h-11 min-w-11 items-center justify-center text-[#d7b779] xl:hidden"
        >
          {open ? <X aria-hidden="true" size={24} /> : <Menu aria-hidden="true" size={24} />}
        </button>
      </div>

      {open ? (
        <div className="max-h-[calc(100vh-88px)] overflow-y-auto border-t border-white/10 bg-[#091725] px-5 py-6 xl:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto flex max-w-xl flex-col">
            <p className="mb-2 text-[10px] uppercase tracking-[0.16em] text-[#d7b779]">{nav.program}</p>
            <Link href="/countries" onClick={() => setOpen(false)} className="border-b border-white/10 py-3 text-base text-white">
              {nav.costaRica} · {nav.costaRicaDetail}
            </Link>
            <p className="mb-2 mt-6 text-[10px] uppercase tracking-[0.16em] text-[#d7b779]">{nav.advisory}</p>
            {[
              [nav.investor, "investor"],
              [nav.pensioner, "pensioner"],
              [nav.rentier, "rentier"],
            ].map(([label, route]) => (
              <Link key={route} href={`/residency#${route}`} onClick={() => setOpen(false)} className="border-b border-white/10 py-3 text-base text-white/80">
                {label}
              </Link>
            ))}
            <Link href="/investments" onClick={() => setOpen(false)} className="border-b border-white/10 py-4 text-base text-white/80">
              {nav.investments}
            </Link>
            <Link href="/#experience" onClick={() => setOpen(false)} className="border-b border-white/10 py-4 text-base text-white/80">
              {nav.experience}
            </Link>
            <div className="my-5 flex flex-wrap gap-2" aria-label="Language">
              {locales.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setLanguage(item)}
                  aria-pressed={item === locale}
                  className={`min-h-11 min-w-12 border px-3 text-xs ${
                    item === locale ? "border-[#c7a66a] text-[#d7b779]" : "border-white/15 text-white/60"
                  }`}
                >
                  {localeLabels[item]}
                </button>
              ))}
            </div>
            <Link href="/residence-inquiry" onClick={() => setOpen(false)} className="mt-2 bg-[#c7a66a] px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.13em] text-[#091725]">
              {nav.consultation}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
