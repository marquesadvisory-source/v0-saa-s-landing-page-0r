"use client"

import * as Accordion from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { T, useLanguage } from "@/components/language-provider"
import { SeoImage } from "@/components/seo-image"
import { siteConfig } from "@/lib/site"
import { capitalPartnersCopy } from "./capital-partners-copy"
import s from "./capital-partners.module.css"

const capabilities = [
  ["REAL ASSET OPPORTUNITIES", "Selected opportunities across real estate, hospitality, industrial, strategic land and related sectors."],
  ["CO-INVESTMENT", "Opportunities may be evaluated alongside aligned capital partners where structure, objectives and execution are compatible."],
  ["PROJECT STRUCTURING", "We help prepare opportunities around transaction logic, ownership, counterparties and execution pathways."],
  ["CAPITAL COORDINATION", "We coordinate relevant capital relationships and support disciplined institutional review where appropriate."],
  ["EXECUTION ALIGNMENT", "We help align the legal, financial, technical and commercial relationships required to move an opportunity forward."],
]
const engagements = ["Advisory", "Origination", "Structuring", "Co-Investment Evaluation", "Strategic Partnerships"]

export function CapitalPartnersExperience() {
  const { locale, t } = useLanguage()
  const text = (key: string) => locale === "en" ? key : capitalPartnersCopy[key]?.[locale === "es" ? 0 : locale === "fr" ? 1 : 2] ?? t(key)

  return (
    <>
      <section className={s.hero} aria-labelledby="capabilities-title">
        <div className={s.container}>
          <p className={s.eyebrow}>{text("CAPITAL PARTNERS")}</p>
          <h1 id="capabilities-title">{text("Local access. Structured opportunities. Aligned capital.")}</h1>
          <p className={s.introduction}>{text("Marqués connects disciplined real asset preparation in Costa Rica with qualified capital relationships, co-investment perspectives and strategic counterparties.")}</p>
        </div>
        <div className={s.heroImage}>
          <SeoImage src="/architecture-interior.jpg" alt={text("Contemporary architecture with natural materials and open living spaces")} sizes="100vw" fetchPriority="high" />
        </div>
      </section>

      <section className={`${s.container} ${s.capabilities}`} aria-labelledby="our-capabilities">
        <h2 id="our-capabilities">{text("How We Work With Capital")}</h2>
        <Accordion.Root type="single" defaultValue="capability-0" collapsible className={s.accordion}>
          {capabilities.map(([title, body], i) => (
            <Accordion.Item value={`capability-${i}`} key={title} className={s.item}>
              <Accordion.Header className={s.rowHeading}>
                <Accordion.Trigger className={s.trigger}>
                  <span className={s.number} aria-hidden="true">0{i + 1}</span>
                  <span className={s.rowTitle}>{text(title)}</span>
                  <ChevronDown size={22} strokeWidth={1} aria-hidden="true" className={s.chevron} />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className={s.answer}>
                <p className={s.answerCopy}>{text(body)}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </section>

      <section className={s.positioning} aria-labelledby="institutional-discipline">
        <div className={s.container}>
          <div className={s.positioningTop}>
            <h2 id="institutional-discipline">{text("A Costa Rica relationship for strategic capital.")}</h2>
            <p>{text("From opportunity identification to capital alignment and execution coordination, Marqués provides a disciplined local relationship across the real asset lifecycle.")}</p>
          </div>
          <p className={s.audience}>{text("For family offices, institutional investors, developers, real asset operators and strategic capital relationships seeking disciplined access to Costa Rica opportunities.")}</p>
        </div>
      </section>

      <section className={`${s.container} ${s.engagement}`} aria-labelledby="how-we-engage">
        <h2 id="how-we-engage">{text("How We Engage")}</h2>
        <ul>{engagements.map(label => <li key={label}>{text(label)}</li>)}</ul>
      </section>

      <section className={`${s.container} ${s.cta}`} aria-labelledby="discuss-opportunity">
        <div>
          <h2 id="discuss-opportunity">{text("Discuss a Capital Relationship")}</h2>
          <p className={s.ctaCopy}>{text("Private conversations regarding real assets, co-investment and strategic opportunities in Costa Rica.")}</p>
        </div>
        <Link href="/institutional-inquiry" className={s.ctaLink}>{text("Institutional Inquiry")}</Link>
      </section>
      <section className={s.disclaimer}>
        <p className={s.container}><T>{siteConfig.disclaimer}</T></p>
      </section>
    </>
  )
}
