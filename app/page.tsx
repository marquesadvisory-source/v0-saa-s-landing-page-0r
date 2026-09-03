"use client"

import Image from "next/image"
import Link from "next/link"
import { useMemo, useState } from "react"
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Download,
  MessageCircle,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import {
  factSheetByLocale,
  homeContent,
  type Locale,
} from "@/lib/home-content"
import { siteConfig } from "@/lib/site"

const routeLinks = {
  investor: "/residence-inquiry?route=investor",
  pensioner: "/residence-inquiry?route=pensioner",
  rentier: "/residence-inquiry?route=rentier",
}

function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] ${
        light ? "text-[#d7b779]" : "text-[#96733b]"
      }`}
    >
      {children}
    </p>
  )
}

function ArrowLink({
  href,
  children,
  light = false,
}: {
  href: string
  children: React.ReactNode
  light?: boolean
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center gap-2 border-b py-2 text-sm font-semibold transition-colors ${
        light
          ? "border-[#c7a66a]/50 text-[#e0c58f] hover:border-[#e0c58f] hover:text-white"
          : "border-[#9a773d]/45 text-[#765624] hover:border-[#765624] hover:text-[#0b1b2a]"
      }`}
    >
      {children}
      <ArrowRight aria-hidden="true" size={16} />
    </Link>
  )
}

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>("en")
  const copy = homeContent[locale]
  const factSheet = factSheetByLocale[locale]
  const whatsappShare = useMemo(() => {
    const message =
      locale === "es"
        ? `Te comparto el Fact Sheet del programa de residencia en Costa Rica de Marques Advisory & Investments: ${siteConfig.domain}${factSheet}`
        : locale === "fr"
          ? `Voici la fiche du programme de résidence au Costa Rica de Marques Advisory & Investments : ${siteConfig.domain}${factSheet}`
          : locale === "zh"
            ? `与您分享 Marques Advisory & Investments 哥斯达黎加居留项目概览：${siteConfig.domain}${factSheet}`
            : `Costa Rica Residence Fact Sheet by Marques Advisory & Investments: ${siteConfig.domain}${factSheet}`
    return `https://wa.me/?text=${encodeURIComponent(message)}`
  }, [factSheet, locale])

  return (
    <main className="overflow-hidden bg-[#f5f0e7] text-[#0b1b2a]">
      <SiteHeader locale={locale} onLocaleChange={setLocale} />

      <section className="relative min-h-screen bg-[#091725] px-6 pb-10 pt-36 text-white md:px-10 md:pt-44">
        <Image
          src="/costa-rica/residence-hero.jpg"
          alt="Costa Rica coastal real estate"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07131f] via-[#091725]/95 to-[#091725]/45" />
        <div className="relative mx-auto flex min-h-[calc(100vh-11rem)] max-w-[1360px] flex-col justify-between gap-14">
          <div className="max-w-5xl">
            <Kicker light>{copy.landing.eyebrow}</Kicker>
            <h1 className="max-w-5xl font-serif text-[clamp(3.1rem,6.6vw,7rem)] font-normal leading-[.94] tracking-[-0.045em] text-[#f7f1e7]">
              {copy.landing.title}
            </h1>
            <p className="mt-8 max-w-3xl text-base leading-8 text-white/72 md:text-lg">{copy.landing.body}</p>
          </div>

          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[.18em] text-[#d7b779]">{copy.landing.choose}</p>
            <div className="grid overflow-hidden border border-white/18 bg-[#07131f]/72 backdrop-blur-lg lg:grid-cols-2">
              <Link href="/residency" className="group p-7 transition-colors hover:bg-[#c7a66a] hover:text-[#091725] md:p-9 lg:border-r lg:border-white/18">
                <span className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#d7b779] group-hover:text-[#60471f]">{copy.landing.advisoryLabel}</span>
                <span className="mt-3 flex items-end justify-between gap-5 font-serif text-3xl leading-tight md:text-4xl">
                  {copy.landing.advisoryTitle}<ArrowRight aria-hidden="true" className="mb-1 shrink-0" />
                </span>
                <span className="mt-4 block text-xs tracking-[.08em] text-white/52 group-hover:text-[#091725]/68">{copy.landing.advisoryDetail}</span>
              </Link>
              <Link href="/investments" className="group border-t border-white/18 p-7 transition-colors hover:bg-[#f5f0e7] hover:text-[#091725] md:p-9 lg:border-t-0">
                <span className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#d7b779] group-hover:text-[#765624]">{copy.landing.investmentsLabel}</span>
                <span className="mt-3 flex items-end justify-between gap-5 font-serif text-3xl leading-tight md:text-4xl">
                  {copy.landing.investmentsTitle}<ArrowRight aria-hidden="true" className="mb-1 shrink-0" />
                </span>
                <span className="mt-4 block text-xs tracking-[.08em] text-white/52 group-hover:text-[#091725]/68">{copy.landing.investmentsDetail}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="residence" className="grid min-h-[720px] scroll-mt-20 bg-[#091725] text-white lg:grid-cols-[1.02fr_.98fr]">
        <div className="relative flex items-center px-6 py-20 md:px-12 lg:px-[max(4rem,calc((100vw-1440px)/2+2rem))] lg:py-24">
          <div className="relative z-10 max-w-[760px]">
            <Kicker light>{copy.hero.eyebrow}</Kicker>
            <h1 className="max-w-[820px] font-serif text-[clamp(3.35rem,7vw,7.2rem)] font-normal leading-[0.93] tracking-[-0.045em] text-[#f7f1e7]">
              {copy.hero.title}
            </h1>
            <div className="my-8 h-px w-20 bg-[#c7a66a]" />
            <p className="max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              {copy.hero.body}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/residency"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#c7a66a] px-7 text-sm font-semibold text-[#091725] transition-colors hover:bg-[#dfc58f]"
              >
                {copy.hero.primary}
                <ArrowRight aria-hidden="true" size={17} />
              </Link>
              <Link
                href="/residence-inquiry"
                className="inline-flex min-h-12 items-center justify-center border border-white/25 px-7 text-sm font-semibold text-white transition-colors hover:border-[#c7a66a] hover:text-[#dfc58f]"
              >
                {copy.hero.secondary}
              </Link>
            </div>
          </div>
        </div>

        <div className="relative min-h-[520px] overflow-hidden lg:min-h-full">
          <Image
            src="/costa-rica/residence-hero.jpg"
            alt="Coastal residence overlooking the Pacific Ocean in Costa Rica"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#091725]/78 via-transparent to-[#091725]/10 lg:bg-gradient-to-r lg:from-[#091725]/45 lg:via-transparent lg:to-transparent" />
          <div className="absolute inset-x-5 bottom-5 border border-white/20 bg-[#091725]/84 p-5 backdrop-blur-md md:inset-x-8 md:bottom-8 md:p-6">
            <div className="flex items-center gap-4">
              <Image src="/costa-rica/coat-of-arms.svg" alt="Coat of arms of Costa Rica" width={52} height={58} className="h-14 w-auto" />
              <span className="h-12 w-px bg-[#c7a66a]/50" />
              <div>
                <p className="font-serif text-2xl text-white">{copy.hero.country}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#d7b779]">{copy.hero.program}</p>
              </div>
              <Image src="/costa-rica/flag.svg" alt="Flag of Costa Rica" width={58} height={35} className="ml-auto h-auto w-14 border border-white/15" />
            </div>
            <p className="mt-4 border-t border-white/12 pt-4 text-sm leading-6 text-white/65">{copy.hero.note}</p>
          </div>
        </div>
      </section>

      <section id="program" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1360px]">
          <div className="mb-12 grid gap-6 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <div>
              <Kicker>{copy.pathways.kicker}</Kicker>
              <h2 className="max-w-2xl font-serif text-[clamp(2.4rem,5vw,4.8rem)] font-normal leading-[1.02] tracking-[-0.035em]">
                {copy.pathways.title}
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[#47515b] lg:justify-self-end">
              {copy.pathways.intro}
            </p>
          </div>

          <div className="grid border-y border-[#b89a65]/35 lg:grid-cols-3">
            <article id="investor" className="scroll-mt-28 border-b border-[#b89a65]/35 py-9 lg:border-b-0 lg:border-r lg:px-8">
              <p className="mb-8 font-mono text-xs text-[#96733b]">01</p>
              <h3 className="font-serif text-4xl">{copy.pathways.investor.title}</h3>
              <p className="mt-5 min-h-[84px] max-w-sm text-sm leading-7 text-[#53606b]">{copy.pathways.investor.body}</p>
              <div className="mt-7 flex flex-col items-start gap-2">
                <ArrowLink href={routeLinks.investor}>{copy.pathways.investor.existing}</ArrowLink>
                <ArrowLink href="#investments">{copy.pathways.investor.explore}</ArrowLink>
              </div>
            </article>

            <article id="pensioner" className="scroll-mt-28 border-b border-[#b89a65]/35 py-9 lg:border-b-0 lg:border-r lg:px-8">
              <p className="mb-8 font-mono text-xs text-[#96733b]">02</p>
              <h3 className="font-serif text-4xl">{copy.pathways.pensioner.title}</h3>
              <p className="mt-5 min-h-[84px] max-w-sm text-sm leading-7 text-[#53606b]">{copy.pathways.pensioner.body}</p>
              <div className="mt-7">
                <ArrowLink href={routeLinks.pensioner}>{copy.pathways.pensioner.action}</ArrowLink>
              </div>
            </article>

            <article id="rentier" className="scroll-mt-28 py-9 lg:px-8">
              <p className="mb-8 font-mono text-xs text-[#96733b]">03</p>
              <h3 className="font-serif text-4xl">{copy.pathways.rentier.title}</h3>
              <p className="mt-5 min-h-[84px] max-w-sm text-sm leading-7 text-[#53606b]">{copy.pathways.rentier.body}</p>
              <div className="mt-7">
                <ArrowLink href={routeLinks.rentier}>{copy.pathways.rentier.action}</ArrowLink>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#0c1c2b] px-6 py-20 text-white md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1360px] gap-14 lg:grid-cols-[1.02fr_.98fr]">
          <div>
            <Kicker light>{copy.overview.kicker}</Kicker>
            <h2 className="max-w-3xl font-serif text-[clamp(2.5rem,5vw,5rem)] font-normal leading-[1.02] tracking-[-0.035em]">
              {copy.overview.title}
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/68">{copy.overview.body}</p>
            <dl className="mt-10 grid gap-5 border-t border-[#c7a66a]/25 pt-8 sm:grid-cols-3">
              {copy.overview.facts.map(([label, value]) => (
                <div key={label}>
                  <dt className="text-[10px] uppercase tracking-[0.16em] text-[#d7b779]">{label}</dt>
                  <dd className="mt-2 text-sm leading-6 text-white/78">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="self-end border border-[#c7a66a]/28 bg-white/[0.035] p-7 md:p-10">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#d7b779]">PDF · 2 pages</p>
                <h3 className="mt-4 font-serif text-3xl leading-tight">{copy.overview.factSheetTitle}</h3>
              </div>
              <Image src="/costa-rica/flag.svg" alt="" width={64} height={39} className="h-auto w-16 border border-white/15" />
            </div>
            <p className="mt-5 text-sm leading-7 text-white/62">{copy.overview.factSheetBody}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={factSheet}
                download
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#c7a66a] px-5 text-sm font-semibold text-[#091725] hover:bg-[#dfc58f]"
              >
                <Download aria-hidden="true" size={17} />
                {copy.overview.download}
              </a>
              <a
                href={whatsappShare}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/20 px-5 text-sm font-semibold text-white hover:border-[#c7a66a]"
              >
                <MessageCircle aria-hidden="true" size={17} />
                {copy.overview.share}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section id="experience" className="scroll-mt-24 bg-[#eee5d7] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1360px]">
          <Kicker>{copy.experience.kicker}</Kicker>
          <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
            <h2 className="font-serif text-[clamp(2.5rem,4.5vw,4.6rem)] font-normal leading-[1.03] tracking-[-0.035em]">
              {copy.experience.title}
            </h2>
            <div>
              <div className="grid gap-px bg-[#b89a65]/35 md:grid-cols-2">
                {copy.experience.items.map((item) => (
                  <blockquote key={item} className="bg-[#f8f4ed] p-8 md:p-10">
                    <span className="font-serif text-5xl leading-none text-[#b28b4f]">“</span>
                    <p className="-mt-2 font-serif text-2xl leading-[1.45] text-[#192735]">{item}</p>
                    <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.15em] text-[#80663d]">
                      <Check aria-hidden="true" size={15} />
                      Marques Advisory & Investments
                    </div>
                  </blockquote>
                ))}
              </div>
              <p className="mt-4 text-xs text-[#6d747a]">{copy.experience.note}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="investments" className="scroll-mt-24 bg-[#f8f5ef] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1360px] overflow-hidden border border-[#b89a65]/30 bg-white lg:grid-cols-[1.05fr_.95fr]">
          <div className="p-8 md:p-14 lg:p-16">
            <Kicker>{copy.investments.kicker}</Kicker>
            <h2 className="max-w-2xl font-serif text-[clamp(2.5rem,4.5vw,4.7rem)] font-normal leading-[1.02] tracking-[-0.035em]">
              {copy.investments.title}
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#53606b]">{copy.investments.body}</p>
            <div className="mt-9">
              <ArrowLink href="/investment-inquiry">{copy.investments.action}</ArrowLink>
            </div>
          </div>
          <div className="relative flex min-h-[360px] items-end overflow-hidden bg-[#0a1a29] p-8 text-white md:p-12">
            <Image
              src="/costa-rica/residence-hero.jpg"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#091725] via-[#091725]/55 to-transparent" />
            <div className="relative">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#d7b779]">{copy.investments.status}</p>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/70">{copy.investments.detail}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#c7a66a] px-6 py-20 text-[#091725] md:px-10 md:py-24">
        <div className="mx-auto flex max-w-[1360px] flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <Kicker>{copy.closing.kicker}</Kicker>
            <h2 className="max-w-4xl font-serif text-[clamp(2.7rem,5vw,5.2rem)] font-normal leading-[.98] tracking-[-0.04em]">
              {copy.closing.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#243444]">{copy.closing.body}</p>
          </div>
          <Link
            href="/residence-inquiry"
            className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 bg-[#091725] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#122b40]"
          >
            {copy.closing.action}
            <ArrowUpRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>

      <footer className="bg-[#07131f] px-6 py-12 text-white md:px-10">
        <div className="mx-auto grid max-w-[1360px] gap-10 border-b border-white/10 pb-10 md:grid-cols-[.75fr_1.25fr]">
          <Image src="/brand/marques-logo.png" alt="Marques Advisory & Investments" width={138} height={174} className="h-28 w-auto object-contain" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-[#d7b779]">{copy.footer.email}</p>
              <a href={`mailto:${siteConfig.email}`} className="mt-3 block text-sm text-white/70 hover:text-white">{siteConfig.email}</a>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-[#d7b779]">Legal</p>
              <div className="mt-3 flex flex-col gap-2">
                <Link href="/privacy" className="text-sm text-white/70 hover:text-white">{copy.footer.privacy}</Link>
                <Link href="/terms" className="text-sm text-white/70 hover:text-white">{copy.footer.terms}</Link>
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-[#d7b779]">Costa Rica</p>
              <p className="mt-3 text-sm text-white/70">Residence Advisory · Investments</p>
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1360px] flex-col gap-5 pt-8 text-xs leading-6 text-white/42 md:flex-row md:justify-between">
          <p className="max-w-4xl">{copy.footer.disclaimer}</p>
          <p className="shrink-0">© {new Date().getFullYear()} MA&I</p>
        </div>
      </footer>
    </main>
  )
}
