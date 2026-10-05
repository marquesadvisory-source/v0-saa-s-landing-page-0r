import { T } from "@/components/language-provider"
import type { Metadata } from "next"
import { LocaleLink as Link } from "@/components/locale-link"
import { ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { ResidencyFooter } from "@/components/residency-editorial"
import { ProjectHeroImage } from "@/components/project-hero-image"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, createMetadata, webPageSchema } from "@/lib/seo"
import s from "../project-detail.module.css"

const heroImage = "/projects/decima-avenida-rdr.jpg"

const projectDisclaimer =
  "Information regarding this opportunity is provided for institutional context only. Nothing on this page constitutes a public offering of securities, investment solicitation, securities offering, real estate brokerage listing, guarantee of investment performance or invitation to invest. Additional materials may be shared only with qualified parties following appropriate review, confidentiality procedures and legal documentation."

const projectSeo = {
  title: "Décima Avenida",
  description:
    "Décima Avenida is an institutional mixed-use real asset opportunity in El Roble, Alajuela, Costa Rica, currently under institutional review and structuring.",
  path: "/projects/decima-avenida",
  image: heroImage,
}
export const metadata: Metadata = createMetadata(projectSeo)

const snapshot = [
  ["Asset Class", "Mixed-Use Real Asset Opportunity"],
  ["Location", "El Roble, Alajuela, Costa Rica"],
  ["Stage", "Early-Stage Structuring"],
  ["MA&I Role", "Investment Structuring"],
]

export default function DecimaAvenidaPage() {
  return (
    <>
      <JsonLd
        data={[{...webPageSchema(projectSeo), spatialCoverage: {"@type": "Place", name: "El Roble, Alajuela, Costa Rica"}}, breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Institutional Opportunities", path: "/projects" },
          { name: "Décima Avenida", path: "/projects/decima-avenida" },
        ])]}
      />
      <SiteHeader />
      <main className={s.page}>
        <section className={s.hero}>
          <div className={s.heroMedia}>
            <ProjectHeroImage src={heroImage} alt="Décima Avenida mixed-use tower rendering in El Roble, Alajuela" objectPosition="58% 12%" />
          </div>
          <div className={s.heroShade} />
          <div className={s.heroInner}>
            <div className={s.heroCopy}>
              <p className={s.eyebrow}><T>Institutional Mixed-Use Opportunity</T></p>
              <h1 className={s.title}><T>Décima Avenida</T></h1>
              <p className={s.location}><T>El Roble, Alajuela, Costa Rica</T></p>
              <p className={s.heroLead}><T>A mixed-use real asset opportunity at an early stage of structuring.</T></p>
              <Link href="/institutional-inquiry" className={s.heroAction}><T>Institutional Inquiry</T><ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className={s.detailSection}>
          <div className={s.container + " " + s.sectionStack}>
            <section>
              <p className={s.darkEyebrow + " " + s.eyebrow}><T>Opportunity Snapshot</T></p>
              <h2 className={s.sectionTitle}><T>Project location, concept and current stage.</T></h2>
              <div className={s.snapshot}>
                {snapshot.map(([label, value]) => <div key={label} className={s.snapshotItem}>
                  <p className={s.snapshotLabel}><T>{label}</T></p>
                  <p className={s.snapshotValue}><T>{value}</T></p>
                </div>)}
              </div>
            </section>

            <section className={s.editorialSplit}>
              <div>
                <p className={s.darkEyebrow + " " + s.eyebrow}><T>Development Concept</T></p>
                <h2 className={s.sectionTitle}><T>Potential mixed-use configuration.</T></h2>
              </div>
              <p className={s.bodyCopy}><T>Potential alignment of residential, commercial and service uses within an urban real asset framework.</T></p>
            </section>
          </div>
        </section>

        <section className={s.disclaimer}>
          <div className={s.container}>
            <p><T>Institutional Disclaimer</T><br /><T>{projectDisclaimer}</T></p>
          </div>
        </section>
      </main>
      <ResidencyFooter variant="institutional" />
    </>
  )
}
