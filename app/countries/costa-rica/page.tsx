"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { ResidencySubnav } from "@/components/residency-subnav"
import { SiteHeader } from "@/components/site-header"
import type { Locale } from "@/lib/home-content"
import { residencyContent } from "@/lib/residency-content"

export default function CostaRicaPage() {
  const [locale, setLocale] = useState<Locale>("en")
  const copy = residencyContent[locale].about
  return <main className="min-h-screen bg-[#f5f0e7] text-[#0b1b2a]"><SiteHeader locale={locale} onLocaleChange={setLocale} /><section className="grid min-h-[620px] pt-[88px] lg:grid-cols-[.95fr_1.05fr]"><div className="flex items-center px-6 py-20 md:px-10 lg:px-[max(4rem,calc((100vw-1360px)/2))]"><div><div className="flex items-center gap-5"><Image src="/costa-rica/coat-of-arms.svg" alt="Coat of arms of Costa Rica" width={62} height={70} className="h-16 w-auto" /><p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#96733b]">{copy.kicker}</p></div><h1 className="mt-7 font-serif text-[clamp(3.6rem,7vw,7rem)] leading-none">{copy.title}</h1><p className="mt-7 max-w-xl text-base leading-8 text-[#53606b]">{copy.body}</p><p className="mt-5 max-w-xl text-sm leading-7 text-[#6b737a]">{copy.note}</p><Link href="/residency" className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-[#96733b] text-sm font-semibold">{copy.action}<ArrowRight aria-hidden="true" size={17} /></Link></div></div><div className="relative min-h-[420px]"><Image src="/costa-rica/residence-hero.jpg" alt="Costa Rica Pacific coast" fill priority sizes="(max-width:1024px) 100vw, 55vw" className="object-cover" /></div></section><ResidencySubnav locale={locale} active="about" /></main>
}

