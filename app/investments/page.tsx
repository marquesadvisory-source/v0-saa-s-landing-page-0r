"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import type { Locale } from "@/lib/home-content"
import { residencyContent } from "@/lib/residency-content"

export default function InvestmentsPage() {
  const [locale, setLocale] = useState<Locale>("en")
  const copy = residencyContent[locale].investments
  return <main className="min-h-screen bg-[#091725] text-white"><SiteHeader locale={locale} onLocaleChange={setLocale} /><section className="px-6 pb-20 pt-40 md:px-10 md:pb-28 md:pt-48"><div className="mx-auto max-w-[1360px]"><p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#d7b779]">{copy.kicker}</p><h1 className="mt-6 max-w-5xl font-serif text-[clamp(3.5rem,7vw,7.2rem)] leading-[.92] tracking-[-.045em]">{copy.title}</h1><p className="mt-8 max-w-3xl text-base leading-8 text-white/68 md:text-lg">{copy.body}</p><div className="mt-14 grid border-y border-white/15 md:grid-cols-2"><Link href="/residency/real-estate" className="group p-8 transition-colors hover:bg-[#c7a66a] hover:text-[#091725] md:border-r md:border-white/15"><span className="font-serif text-4xl">{copy.realEstate}</span><ArrowRight aria-hidden="true" className="mt-8" /></Link><div className="p-8"><p className="font-serif text-4xl">{copy.realAssets}</p><p className="mt-8 text-xs uppercase tracking-[.16em] text-[#d7b779]">{copy.comingSoon}</p></div></div><Link href="/investment-inquiry" className="mt-10 inline-flex min-h-12 items-center gap-2 bg-[#c7a66a] px-6 text-sm font-semibold text-[#091725]">{copy.enquiry}<ArrowRight aria-hidden="true" size={17} /></Link></div></section></main>
}

