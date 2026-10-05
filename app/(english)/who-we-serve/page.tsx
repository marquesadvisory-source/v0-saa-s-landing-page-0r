import { LocaleLink as Link } from "@/components/locale-link"
import { ArrowUpRight } from "lucide-react"
import { T } from "@/components/language-provider"
import { SeoImage } from "@/components/seo-image"
import { JsonLd } from "@/components/json-ld"
import { SiteHeader } from "@/components/site-header"
import { breadcrumbSchema, createMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site"
import s from "./who-we-serve.module.css"

export const metadata = createMetadata({
  title: "Who We Serve",
  description:
    "Marqués Advisory & Investments supports private stakeholders evaluating real asset opportunities that require institutional preparation in Costa Rica.",
  path: "/who-we-serve",
})

const audiences = [
  {
    title: "Asset owners",
    body: "Owners seeking a more structured path to evaluate, prepare and position real assets for private institutional review.",
  },
  {
    title: "Developers and sponsors",
    body: "Project sponsors who need clearer documentation, phasing logic, diligence preparation and capital-facing materials.",
  },
  {
    title: "Family offices and private capital",
    body: "Capital allocators evaluating real asset opportunities in Costa Rica through a disciplined and documentation-led lens.",
  },
  {
    title: "Fiduciary, banking and legal stakeholders",
    body: "Professional counterparties that require clarity around structure, governance, risk allocation and transaction readiness.",
  },
]

export default function WhoWeServePage() {
  return (
    <main className={s.page}>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Who We Serve", path: "/who-we-serve" },
      ])} />
      <SiteHeader />

      <section className={s.hero} aria-labelledby="who-we-serve-title">
        <div className={s.heroCopy}>
          <p className={s.eyebrow}><T>Who We Serve</T></p>
          <h1 id="who-we-serve-title"><T>Built for stakeholders who need real asset opportunities to be privately evaluated with institutional discipline.</T></h1>
          <p><T>Marqués Advisory &amp; Investments supports conversations where assets, capital, legal structure and documentation must align before an opportunity can move forward responsibly.</T></p>
        </div>
        <figure className={s.heroImage}>
          <SeoImage src="/images/optimized/costa-rica-forest-1200.webp" alt="Costa Rica forest landscape" sizes="(max-width: 760px) 100vw, 48vw" fetchPriority="high" loading="eager" />
        </figure>
      </section>

      <section className={s.audiences} aria-labelledby="audiences-title">
        <div className={s.sectionIntro}>
          <p className={s.eyebrow}><T>Who We Serve</T></p>
          <h2 id="audiences-title"><T>Distinct perspectives. A shared need for clarity.</T></h2>
        </div>
        <ol className={s.audienceList}>
          {audiences.map(({ title, body }, index) => (
            <li key={title}>
              <span className={s.number} aria-hidden="true">0{index + 1}</span>
              <h3><T>{title}</T></h3>
              <p><T>{body}</T></p>
            </li>
          ))}
        </ol>
      </section>

      <section className={s.cta} aria-labelledby="who-we-serve-cta">
        <div>
          <p className={s.eyebrow}><T>Institutional Perspective</T></p>
          <h2 id="who-we-serve-cta"><T>Begin with the asset and the people around it.</T></h2>
        </div>
        <Link href="/institutional-inquiry" className={s.ctaLink}><T>Institutional Inquiry</T><ArrowUpRight size={16} aria-hidden="true" /></Link>
      </section>

      <p className={s.disclaimer}><T>{siteConfig.disclaimer}</T></p>
    </main>
  )
}
