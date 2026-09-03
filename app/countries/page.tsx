"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { homeContent, type Locale } from "@/lib/home-content"
import { residencyContent } from "@/lib/residency-content"

export default function CountriesPage() {
  const [locale, setLocale] = useState<Locale>("en")
  const copy = residencyContent[locale].countries
  return <main className="min-h-screen bg-[#f5f0e7] text-[#0b1b2a]"><SiteHeader locale={locale} onLocaleChange={setLocale} /><section className="px-6 pb-20 pt-40 md:px-10 md:pb-28 md:pt-48"><div className="mx-auto max-w-[1360px]"><p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#96733b]">{copy.kicker}</p><h1 className="mt-6 max-w-4xl font-serif text-[clamp(3rem,6vw,6rem)] leading-[.98] tracking-[-.04em]">{copy.title}</h1><p className="mt-7 max-w-2xl text-base leading-8 text-[#53606b]">{copy.body}</p><Link href="/residency" className="mt-16 grid items-center gap-7 border-y border-[#b89a65]/35 py-8 transition-colors hover:bg-white/55 md:grid-cols-[90px_1fr_auto] md:px-6"><Image src="/costa-rica/coat-of-arms.svg" alt="Coat of arms of Costa Rica" width={72} height={80} className="h-20 w-auto" /><span><span className="block font-serif text-4xl">{homeContent[locale].hero.country}</span><span className="mt-2 block text-xs uppercase tracking-[.15em] text-[#96733b]">{copy.type}</span></span><span className="flex items-center gap-3 text-sm font-semibold">{copy.action}<ArrowRight aria-hidden="true" size={18} /></span></Link></div></section></main>
}
