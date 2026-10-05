import { LocaleLink as Link } from "@/components/locale-link"
import { ArrowUpRight } from "lucide-react"
import { T } from "@/components/language-provider"
import { SeoImage } from "@/components/seo-image"
import { JsonLd } from "@/components/json-ld"
import { SiteHeader } from "@/components/site-header"
import { absoluteUrl, breadcrumbSchema, createMetadata, webPageSchema } from "@/lib/seo"
import { siteConfig } from "@/lib/site"
import s from "./what-we-do.module.css"

export const metadata = createMetadata({
  title: "Capabilities",
  description:
    "Marqués Advisory & Investments provides platform capabilities for real assets, origination, structuring, capital readiness and execution coordination in Costa Rica.",
  path: "/what-we-do",
})

const capabilities = [
  {
    title: "Capital Readiness",
    body: "Supports the organization of opportunity narratives, diligence materials, risk framing and decision-ready documentation.",
  },
  {
    title: "Real Asset Structuring",
    body: "Helps structure assets and project concepts so legal, financial and strategic considerations can be reviewed coherently.",
  },
  {
    title: "Capital Relationship Materials",
    body: "Develops private materials that communicate thesis, asset logic, use of proceeds, phasing and institutional considerations.",
  },
  {
    title: "Origination to Monetization",
    body: "Connects early opportunity assessment with the documentation, governance and positioning required for private evaluation.",
  },
]

export default function WhatWeDoPage() {
  const description = "Marqués Advisory & Investments provides platform capabilities for real assets, origination, structuring, capital readiness and execution coordination in Costa Rica."
  return (
    <main className={s.page}>
      <JsonLd data={[
        {
          ...webPageSchema({ title: "Capabilities", description, path: "/what-we-do" }),
          mainEntity: { "@id": absoluteUrl("/what-we-do#service") },
        },
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Capabilities", path: "/what-we-do" },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": absoluteUrl("/what-we-do#service"),
          url: absoluteUrl("/what-we-do"),
          name: "Institutional real asset preparation and structuring",
          mainEntityOfPage: { "@id": absoluteUrl("/what-we-do#webpage") },
          provider: { "@id": absoluteUrl("/#organization") },
          areaServed: "Costa Rica",
          description: "Platform capabilities for institutional preparation, documentation, capital readiness and structuring of private real asset opportunities.",
        },
      ]} />
      <SiteHeader />

      <section className={s.hero} aria-labelledby="capabilities-title">
        <div className={s.heroCopy}>
          <p className={s.eyebrow}><T>Capabilities</T></p>
          <h1 id="capabilities-title"><T>Platform capabilities for origination, structuring and capital readiness.</T></h1>
          <p><T>The work is centered on clarity: asset logic, documentation, governance, risk framing and the capital readiness required before sophisticated capital relationships can evaluate an institutional opportunity responsibly.</T></p>
        </div>
        <figure className={s.heroImage}>
          <SeoImage src="/images/optimized/architecture-interior-1400.webp" alt="Contemporary architectural interior with natural materials" sizes="(max-width: 760px) 100vw, 48vw" fetchPriority="high" loading="eager" />
        </figure>
      </section>

      <section className={s.capabilitySection} aria-labelledby="capability-list-title">
        <div className={s.capabilityIntro}>
          <p className={s.eyebrow}><T>Capabilities</T></p>
          <h2 id="capability-list-title"><T>What We Do</T></h2>
        </div>
        <ol className={s.capabilityList}>
          {capabilities.map(({ title, body }, index) => (
            <li key={title}>
              <span className={s.number} aria-hidden="true">0{index + 1}</span>
              <h3><T>{title}</T></h3>
              <p><T>{body}</T></p>
            </li>
          ))}
        </ol>
      </section>

      <section className={s.cta} aria-labelledby="framework-cta">
        <div>
          <p className={s.eyebrow}><T>Investment Framework</T></p>
          <h2 id="framework-cta"><T>From opportunity to institutional readiness.</T></h2>
        </div>
        <Link href="/investment-framework" className={s.ctaLink}><T>Explore the Investment Framework</T><ArrowUpRight size={16} aria-hidden="true" /></Link>
      </section>

      <p className={s.disclaimer}><T>{siteConfig.disclaimer}</T></p>
    </main>
  )
}
