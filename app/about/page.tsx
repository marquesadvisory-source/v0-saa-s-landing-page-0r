import { T } from "@/components/language-provider"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { pageSeo } from "@/lib/page-seo"
import { JsonLd } from "@/components/json-ld"
import { SiteHeader } from "@/components/site-header"
import { SeoImage } from "@/components/seo-image"
import { EnquiryButton } from "@/components/enquiry-provider"
import { breadcrumbSchema, createMetadata, webPageSchema } from "@/lib/seo"
import { siteConfig } from "@/lib/site"
import s from "./about.module.css"

export const metadata = createMetadata(pageSeo["/about"])

const platform = [
  ["PRIVATE INVESTMENT OPPORTUNITIES", "Locally sourced and privately introduced investment opportunities."],
  ["OPERATING BUSINESSES", "Acquisition and investment opportunities in established businesses."],
  ["REAL ASSETS", "Hospitality, industrial, commercial, residential and mixed-use assets."],
  ["DEVELOPMENT", "Projects requiring capital, strategic partners or investment structuring."],
  ["OFF-MARKET", "Private opportunities that may not be broadly marketed."],
  ["CAPITAL & CO-INVESTMENT", "Coordination with private investors, investment groups and regional capital partners."],
]
const process = [
  ["ORIGINATION", "Identifying and sourcing opportunities through local relationships, market access and private networks."],
  ["STRUCTURING", "Evaluating the opportunity, capital requirements and investment framework required to move a transaction forward."],
  ["EXECUTION", "Coordinating the local professionals, counterparties and relationships required to support implementation."],
]

export default function AboutPage() {
  return <main className={s.page} >
    <JsonLd data={[webPageSchema(pageSeo["/about"], "AboutPage"), breadcrumbSchema([{name:"Home",path:"/"},{name:"Platform",path:"/about"}])]} />
    <SiteHeader />
    <section className={s.hero}>
      <SeoImage src="/costa-rica-coast.jpg" alt="Aerial view of Costa Rica's Pacific coastline and coastal built environment" loading="eager" fetchPriority="high" sizes="100vw" />
      <div className={s.container + " " + s.heroCopy}>
        <p className={s.eyebrow}><T>ABOUT MARQUÉS ADVISORY &amp; INVESTMENTS</T></p>
        <h1><T>Connecting Capital with Opportunity in Costa Rica.</T></h1>
        <p><T>Marqués Advisory &amp; Investments is a Costa Rica–based private investment advisory firm focused on investment origination, structuring and local execution.</T></p>
        <div className={s.actions}>
          <Link className={s.button} href="/investments"><T>Explore Investment Opportunities</T><ArrowUpRight size={16} /></Link>
          <EnquiryButton kind="general" className={s.lightLink}><T>Private Client Enquiry</T><ArrowUpRight size={16} /></EnquiryButton>
        </div>
      </div>
    </section>

    <section className={s.section}>
      <div className={s.container + " " + s.intro}>
        <div className={s.copy}>
          <p><T>We work across real assets, operating businesses, hospitality, industrial assets, mixed-use developments and private off-market opportunities, connecting capital with locally sourced investment opportunities in Costa Rica and the region.</T></p>
          <p><T>Our Residence by Investment practice complements this platform by helping international clients align residence planning with real estate and broader investment opportunities.</T></p>
        </div>
      </div>
    </section>

    <section className={s.section + " " + s.ivory}>
      <div className={s.container}>
        <h2><T>Our Investment Platform</T></h2>
        <ul className={s.platform}>{platform.map(([title,text]) => <li key={title}><h3><T>{title}</T></h3><p><T>{text}</T></p></li>)}</ul>
      </div>
    </section>

    <section className={s.section + " " + s.navy}>
      <div className={s.container}>
        <h2><T>From Opportunity to Execution</T></h2>
        <ol className={s.process}>{process.map(([title,text],i) => <li key={title}><span><T>0</T>{i+1}</span><h3><T>{title}</T></h3><p><T>{text}</T></p></li>)}</ol>
        <p className={s.statement}><T>We do not simply present opportunities. We work to make them investable.</T></p>
      </div>
    </section>

    <section className={s.section}>
      <div className={s.container + " " + s.twoCol}>
        <h2><T>Residence by Investment</T></h2>
        <div className={s.copy}>
          <p><T>Costa Rica Residence by Investment complements our broader investment platform.</T></p>
          <p><T>For international clients considering Costa Rica as part of their long-term residence and investment strategy, Marqués can coordinate residence planning alongside real estate and private investment opportunities.</T></p>
          <p><T>For investors who are not seeking residence, our investment platform remains available independently.</T></p>
          <Link className={s.textLink} href="/residency"><T>Explore Residence by Investment</T><ArrowUpRight size={16} /></Link>
        </div>
      </div>
    </section>

    <section className={s.section + " " + s.ivory}>
      <div className={s.container + " " + s.twoCol}>
        <h2><T>Local Access.</T><br /><T>International Perspective.</T></h2>
        <div className={s.copy}>
          <p><T>International capital entering Costa Rica requires more than access to an opportunity.</T></p>
          <p><T>Marqués coordinates the local relationships, investment considerations and professional counterparties required to move from opportunity to execution.</T></p>
          <p className={s.note}><T>Legal, tax, immigration, fiduciary and other regulated services are provided by the corresponding qualified professionals where required.</T></p>
        </div>
      </div>
    </section>

    <section className={s.section + " " + s.closing}>
      <div className={s.container}>
        <h2><T>We originate opportunity.</T><br /><T>We structure investment.</T><br /><T>We coordinate execution.</T></h2>
        <p><T>Costa Rica based. Internationally oriented. Investment driven.</T></p>
        <div className={s.actions}>
          <Link className={s.button} href="/investments"><T>View Investment Opportunities</T><ArrowUpRight size={16} /></Link>
          <EnquiryButton kind="general" className={s.textLink}><T>Speak With Marqués</T><ArrowUpRight size={16} /></EnquiryButton>
        </div>
      </div>
    </section>
    <div className={s.disclaimer}><p className={s.container}><T>{siteConfig.disclaimer}</T></p></div>
  </main>
}
