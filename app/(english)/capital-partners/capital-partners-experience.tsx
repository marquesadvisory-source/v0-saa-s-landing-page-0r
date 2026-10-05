"use client"

import { LocaleLink as Link } from "@/components/locale-link"
import { ArrowUpRight } from "lucide-react"
import { T, useLanguage } from "@/components/language-provider"
import { SeoImage } from "@/components/seo-image"
import { siteConfig } from "@/lib/site"
import { capitalPartnersCopy } from "./capital-partners-copy"
import s from "./capital-partners.module.css"

export function CapitalPartnersExperience() {
  const { locale, t } = useLanguage()
  const text = (key: string) => locale === "en" ? key : capitalPartnersCopy[key]?.[locale === "es" ? 0 : locale === "fr" ? 1 : 2] ?? t(key)

  return <>
    <section className={s.hero} aria-labelledby="capital-title">
      <div className={`${s.container} ${s.heroCopy}`}>
        <p className={s.eyebrow}>{text("CAPITAL PARTNERS")}</p>
        <h1 id="capital-title">{text("Capital relationships for real assets in Costa Rica.")}</h1>
        <p className={s.introduction}>{text("Marqués works with family offices, private and institutional investors, capital allocators and strategic investors considering opportunities in Costa Rica.")}</p>
      </div>
      <div className={s.heroImage}>
        <SeoImage src="/architecture-interior.jpg" alt={text("Contemporary architecture with natural materials and open living spaces")} sizes="100vw" fetchPriority="high" />
      </div>
    </section>

    <section className={`${s.container} ${s.opportunitySection}`} aria-label={text("Capital partner perspective")}>
      <div className={s.opportunityColumn}>
        <p className={s.sectionLabel}>{text("OPPORTUNITY CONTEXT")}</p>
        <h2>{text("Selected real assets and capital perspectives.")}</h2>
        <p>{text("Conversations may consider selected real estate, hospitality, industrial or strategic land opportunities, with co-investment perspectives where relevant to the parties and opportunity.")}</p>
      </div>
      <div className={s.opportunityColumn}>
        <p className={s.sectionLabel}>{text("LOCAL PERSPECTIVE")}</p>
        <h2>{text("A Costa Rica-based advisory relationship.")}</h2>
        <p>{text("Marqués brings local context to real asset and project conversations, including relevant structure, counterparties and execution considerations.")}</p>
        <p>{text("The scope of each relationship depends on the opportunity and the objectives of the parties involved.")}</p>
      </div>
    </section>

    <section className={s.cta} aria-labelledby="capital-inquiry-title">
      <div className={`${s.container} ${s.ctaInner}`}>
        <div>
          <p className={s.ctaEyebrow}>{text("PRIVATE CONVERSATION")}</p>
          <h2 id="capital-inquiry-title">{text("Begin with a capital conversation.")}</h2>
          <p>{text("A private starting point for discussing Costa Rica real assets and capital relationships.")}</p>
        </div>
        <Link href="/institutional-inquiry" className={s.ctaLink}>{text("Institutional Inquiry")}<ArrowUpRight size={17} aria-hidden="true" /></Link>
      </div>
    </section>

    <section className={s.disclaimer}>
      <p className={s.container}><T>{siteConfig.disclaimer}</T></p>
    </section>
  </>
}
