"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { ResidencySubnav } from "@/components/residency-subnav"
import { SiteHeader } from "@/components/site-header"
import type { Locale } from "@/lib/home-content"
import { residencyContent } from "@/lib/residency-content"

export default function RealEstatePage() {
  const [locale, setLocale] = useState<Locale>("en")
  const copy = residencyContent[locale].realEstate
  return <main className="min-h-screen bg-[#f5f0e7] text-[#0b1b2a]"><SiteHeader locale={locale} onLocaleChange={setLocale} /><section className="grid min-h-[620px] bg-[#091725] pt-[88px] text-white lg:grid-cols-2"><div className="flex items-center px-6 py-20 md:px-10 lg:px-[max(4rem,calc((100vw-1360px)/2))]"><div><p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#d7b779]">{copy.kicker}</p><h1 className="mt-6 max-w-2xl font-serif text-[clamp(3.2rem,6vw,6.2rem)] leading-[.95] tracking-[-.04em]">{copy.title}</h1><p className="mt-7 max-w-xl text-base leading-8 text-white/68">{copy.body}</p></div></div><div className="relative min-h-[420px]"><Image src="/costa-rica/residence-hero.jpg" alt="Costa Rica coastal real estate" fill priority sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" /><div className="absolute inset-0 bg-[#091725]/25" /></div></section><ResidencySubnav locale={locale} active="realEstate" /><section className="px-6 py-20 md:px-10 md:py-28"><div className="mx-auto grid max-w-[1360px] gap-10 border-y border-[#b89a65]/35 py-12 md:grid-cols-[1fr_auto] md:items-center"><div><p className="text-[10px] uppercase tracking-[.18em] text-[#96733b]">{copy.status}</p><p className="mt-4 max-w-2xl font-serif text-3xl leading-snug">{copy.statusDetail}</p></div><Link href="/investment-inquiry" className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#091725] px-6 text-sm font-semibold text-white">{copy.enquiry}<ArrowRight aria-hidden="true" size={17} /></Link></div></section></main>
}

