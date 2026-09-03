"use client"

import Image from "next/image"
import Link from "next/link"
import { useMemo, useState } from "react"
import { ArrowRight, Download, MessageCircle } from "lucide-react"
import { ResidencySubnav } from "@/components/residency-subnav"
import { SiteHeader } from "@/components/site-header"
import { factSheetByLocale, homeContent, type Locale } from "@/lib/home-content"
import { residencyContent } from "@/lib/residency-content"
import { siteConfig } from "@/lib/site"

export default function ResidencyPage() {
  const [locale, setLocale] = useState<Locale>("en")
  const copy = residencyContent[locale].program
  const home = homeContent[locale]
  const factSheet = factSheetByLocale[locale]
  const share = useMemo(() => {
    const messages: Record<Locale, string> = {
      en: `Costa Rica Residence Fact Sheet by Marques Advisory & Investments: ${siteConfig.domain}${factSheet}`,
      es: `Te comparto el Fact Sheet de residencia en Costa Rica de Marques Advisory & Investments: ${siteConfig.domain}${factSheet}`,
      fr: `Voici la fiche de résidence au Costa Rica de Marques Advisory & Investments : ${siteConfig.domain}${factSheet}`,
      zh: `与您分享 Marques Advisory & Investments 哥斯达黎加居留项目概览：${siteConfig.domain}${factSheet}`,
    }
    return `https://wa.me/?text=${encodeURIComponent(messages[locale])}`
  }, [factSheet, locale])

  return (
    <main className="min-h-screen bg-[#f5f0e7] text-[#0b1b2a]">
      <SiteHeader locale={locale} onLocaleChange={setLocale} />
      <section className="grid min-h-[660px] bg-[#091725] pt-[88px] text-white lg:grid-cols-[1fr_1fr]">
        <div className="flex items-center px-6 py-20 md:px-10 lg:px-[max(4rem,calc((100vw-1360px)/2))]">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#d7b779]">{copy.kicker}</p>
            <h1 className="mt-6 font-serif text-[clamp(3.4rem,6vw,6.6rem)] leading-[.93] tracking-[-.045em]">{copy.title}</h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-white/68">{copy.body}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/residence-inquiry" className="inline-flex min-h-12 items-center gap-2 bg-[#c7a66a] px-6 text-sm font-semibold text-[#091725]">{copy.enquiry}<ArrowRight aria-hidden="true" size={17} /></Link>
              <a href={factSheet} download className="inline-flex min-h-12 items-center gap-2 border border-white/25 px-6 text-sm font-semibold"><Download aria-hidden="true" size={17} />{copy.factSheet}</a>
            </div>
          </div>
        </div>
        <div className="relative min-h-[440px]"><Image src="/costa-rica/residence-hero.jpg" alt="Costa Rica coastal residence" fill priority sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#091725]/55 to-transparent" /><div className="absolute bottom-7 left-7 right-7 flex items-center gap-4 border border-white/20 bg-[#091725]/82 p-5 backdrop-blur-md"><Image src="/costa-rica/coat-of-arms.svg" alt="Coat of arms of Costa Rica" width={48} height={54} className="h-13 w-auto" /><span className="font-serif text-2xl">Costa Rica</span><Image src="/costa-rica/flag.svg" alt="Flag of Costa Rica" width={54} height={34} className="ml-auto h-auto w-14" /></div></div>
      </section>
      <ResidencySubnav locale={locale} active="program" />

      <section className="grid bg-white lg:grid-cols-2">
        <div className="bg-[#435a6b] px-6 py-16 text-white md:px-12 lg:px-[max(4rem,calc((100vw-1360px)/2))] lg:py-24">
          <p className="text-[10px] uppercase tracking-[.18em] text-[#e0c58f]">{home.overview.kicker}</p>
          <h2 className="mt-6 max-w-xl font-serif text-[clamp(2.6rem,4.5vw,4.8rem)] leading-[1.02]">{home.overview.title}</h2>
          <p className="mt-7 max-w-xl text-sm leading-7 text-white/72">{home.overview.body}</p>
        </div>
        <div className="grid gap-px bg-[#b89a65]/25 p-6 md:p-12 lg:py-20">
          <div className="bg-[#f8f5ef] p-8"><p className="text-[10px] uppercase tracking-[.16em] text-[#96733b]">{copy.investment}</p><p className="mt-4 font-serif text-3xl">{copy.investmentDetail}</p></div>
          <div className="bg-[#f8f5ef] p-8"><p className="text-[10px] uppercase tracking-[.16em] text-[#96733b]">{copy.benefit}</p><p className="mt-4 font-serif text-3xl">{copy.benefitDetail}</p></div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid border-y border-[#b89a65]/35 lg:grid-cols-3">
            <article id="investor" className="border-b border-[#b89a65]/35 py-9 lg:border-b-0 lg:border-r lg:px-8">
              <p className="font-mono text-xs text-[#96733b]">01</p>
              <h2 className="mt-7 font-serif text-4xl">{home.pathways.investor.title}</h2>
              <p className="mt-5 min-h-[84px] text-sm leading-7 text-[#53606b]">{home.pathways.investor.body}</p>
              <div className="mt-6 flex flex-col items-start gap-3">
                <Link href="/residence-inquiry?route=investor" className="border-b border-[#96733b] py-2 text-sm font-semibold">{home.pathways.investor.existing}</Link>
                <Link href="/residency/real-estate" className="border-b border-[#96733b] py-2 text-sm font-semibold">{home.pathways.investor.explore}</Link>
              </div>
            </article>
            {(["pensioner", "rentier"] as const).map((id, index) => {
              const item = home.pathways[id]
              return (
                <article id={id} key={id} className="border-b border-[#b89a65]/35 py-9 last:border-b-0 lg:border-b-0 lg:border-r lg:px-8 lg:last:border-r-0">
                  <p className="font-mono text-xs text-[#96733b]">0{index + 2}</p>
                  <h2 className="mt-7 font-serif text-4xl">{item.title}</h2>
                  <p className="mt-5 min-h-[84px] text-sm leading-7 text-[#53606b]">{item.body}</p>
                  <Link href={`/residence-inquiry?route=${id}`} className="mt-6 inline-flex border-b border-[#96733b] py-2 text-sm font-semibold">{item.action}</Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#0c1c2b] px-6 py-20 text-white md:px-10"><div className="mx-auto grid max-w-[1100px] gap-9 md:grid-cols-[1fr_auto] md:items-center"><div><p className="text-[10px] uppercase tracking-[.18em] text-[#d7b779]">PDF · 2 pages</p><h2 className="mt-4 font-serif text-4xl">{home.overview.factSheetTitle}</h2><p className="mt-4 max-w-xl text-sm leading-7 text-white/62">{home.overview.factSheetBody}</p></div><div className="flex flex-col gap-3 sm:flex-row"><a href={factSheet} download className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#c7a66a] px-5 text-sm font-semibold text-[#091725]"><Download aria-hidden="true" size={17} />{home.overview.download}</a><a href={share} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/25 px-5 text-sm font-semibold"><MessageCircle aria-hidden="true" size={17} />{home.overview.share}</a></div></div></section>
    </main>
  )
}
