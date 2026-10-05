import { T } from "@/components/language-provider"
import { LocaleLink as Link } from "@/components/locale-link"
import { ArrowUpRight } from "lucide-react"
import { pageSeo } from "@/lib/page-seo"
import { JsonLd } from "@/components/json-ld"
import { SiteHeader } from "@/components/site-header"
import { SeoImage } from "@/components/seo-image"
import { breadcrumbSchema, createMetadata, webPageSchema } from "@/lib/seo"
import { siteConfig } from "@/lib/site"
import s from "./about.module.css"

export const metadata = createMetadata(pageSeo["/about"])

export default function AboutPage() {
  return <>
    <JsonLd data={[webPageSchema(pageSeo["/about"], "AboutPage"), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Platform", path: "/about" }])]} />
    <SiteHeader />
    <main className={s.page} id="main-content">
      <section className={s.hero}>
        <SeoImage src="/costa-rica-coast.jpg" alt="Pacific coastline in Costa Rica" loading="eager" fetchPriority="high" sizes="100vw" />
        <div className={s.container + " " + s.heroCopy}>
          <p className={s.eyebrow}><T>ABOUT MARQUÉS ADVISORY &amp; INVESTMENTS</T></p>
          <h1><T>A Costa Rica-based advisory firm for private clients and institutional investors.</T></h1>
          <p><T>Marqués Advisory &amp; Investments is a Costa Rica–based private investment advisory firm focused on investment origination, structuring and local execution.</T></p>
        </div>
      </section>

      <section className={s.practiceSection} aria-labelledby="practice-title">
        <div className={s.container}>
          <p className={s.sectionLabel}><T>ONE FIRM. TWO CONNECTED PRACTICES.</T></p>
          <h2 id="practice-title"><T>Distinct needs. One local perspective.</T></h2>
          <div className={s.practiceGrid}>
            <Link className={s.practice} href="/residency">
              <span className={s.practiceEyebrow}><T>PRIVATE CLIENTS</T></span>
              <h3><T>Residence and real estate</T></h3>
              <p><T>Residence planning and selected real estate opportunities for international clients considering Costa Rica.</T></p>
              <span className={s.practiceLink}><T>Explore the private-client practice</T><ArrowUpRight size={17} aria-hidden="true" /></span>
            </Link>
            <Link className={s.practice} href="/capital-partners">
              <span className={s.practiceEyebrow}><T>INSTITUTIONAL</T></span>
              <h3><T>Investments and capital relationships</T></h3>
              <p><T>Real asset opportunities and capital relationships for investors, family offices, developers and strategic counterparties.</T></p>
              <span className={s.practiceLink}><T>Explore capital relationships</T><ArrowUpRight size={17} aria-hidden="true" /></span>
            </Link>
          </div>
        </div>
      </section>

      <section className={s.contextSection} aria-labelledby="context-title">
        <div className={s.container + " " + s.contextGrid}>
          <div>
            <p className={s.sectionLabel}><T>ROOTED IN COSTA RICA</T></p>
            <h2 id="context-title"><T>Local context.<br />International outlook.</T></h2>
          </div>
          <div className={s.copy}>
            <p><T>Based in Costa Rica, Marqués works with international private clients, investors, family offices, developers and strategic counterparties considering opportunities in the country.</T></p>
            <p><T>The firm brings a local perspective to residence planning, real assets and capital conversations, connecting distinct needs through one advisory platform.</T></p>
            <p className={s.note}><T>Legal, tax, immigration, fiduciary and other regulated services are provided by the corresponding qualified professionals where required.</T></p>
          </div>
        </div>
      </section>

      <div className={s.disclaimer}><p className={s.container}><T>{siteConfig.disclaimer}</T></p></div>
    </main>
  </>
}
