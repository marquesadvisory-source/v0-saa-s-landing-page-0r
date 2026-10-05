import { T } from "@/components/language-provider"
import type { Metadata } from "next"
import { LocaleLink as Link } from "@/components/locale-link"
import { ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { ResidencyFooter } from "@/components/residency-editorial"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, createMetadata, webPageSchema } from "@/lib/seo"
import s from "../project-detail.module.css"

const projectDisclaimer =
  "Information regarding this project is provided for institutional context only. Nothing on this page constitutes a public offering of securities, investment solicitation, real estate brokerage listing, guarantee of investment performance or invitation to invest. Additional materials may be shared only with qualified parties following appropriate review, confidentiality procedures and legal documentation."

const projectSeo = {
  title: "Plaza Los Mangos",
  description:
    "Plaza Los Mangos is currently under structuring as a mixed-use real asset development in Santa Cruz, Guanacaste, Costa Rica.",
  path: "/projects/plaza-los-mangos",
  image: "/projects/plaza-los-mangos.png",
}
export const metadata: Metadata = createMetadata(projectSeo)

const assetProfile = [
  { label: "Project name", value: "Plaza Los Mangos" },
  { label: "Location", value: "Santa Cruz, Guanacaste, Costa Rica" },
  { label: "Asset type", value: "Mixed-use real asset development" },
  { label: "Status", value: "Predevelopment" },
]

const components = [
  "Commercial",
  "Hospitality",
  "Residential",
  "Service-oriented retail",
  "Parking",
]

export default function PlazaLosMangosPage() {
  return (
    <>
      <JsonLd
        data={[{...webPageSchema(projectSeo), spatialCoverage: {"@type": "Place", name: "Santa Cruz, Guanacaste, Costa Rica"}}, breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Institutional Opportunities", path: "/projects" },
          { name: "Plaza Los Mangos", path: "/projects/plaza-los-mangos" },
        ])]}
      />
      <SiteHeader />
      <main className={s.page}>
        <section className={s.plazaIntro}>
          <div className={s.container + " " + s.introGrid}>
            <div>
              <p className={s.eyebrow}><T>Institutional Showcase</T></p>
              <h1 className={s.title}><T>Plaza Los Mangos</T></h1>
              <p className={s.location}><T>Santa Cruz, Guanacaste, Costa Rica</T></p>
            </div>
            <div className={s.introCopy}>
              <p><T>The current Plaza Los Mangos concept considers commercial, hospitality, residential and service-oriented uses within a mixed-use development in Santa Cruz, Guanacaste.</T></p>
              <Link href="/institutional-inquiry" className={s.inquiryLink}>
                <T>Begin institutional inquiry</T><ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className={s.content}>
          <div className={s.container + " " + s.contentStack}>
            <section className={s.profileGrid}>
              <article className={s.profileBlock}>
                <h2 className={s.subheading}><T>Asset Profile</T></h2>
                <dl className={s.recordList}>
                  {assetProfile.map(item => <div key={item.label} className={s.recordRow}>
                    <dt className={s.recordLabel}><T>{item.label}</T></dt>
                    <dd className={s.recordValue}><T>{item.value}</T></dd>
                  </div>)}
                </dl>
              </article>
              <article className={s.profileBlock}>
                <h2 className={s.subheading}><T>Uses Under Consideration</T></h2>
                <ul className={s.componentList}>{components.map(component => <li key={component}><T>{component}</T></li>)}</ul>
              </article>
            </section>

            <section className={s.roleGrid}>
              <article className={s.roleItem}>
                <h2><T>MA&I Role</T></h2>
                <p className={s.bodyCopy}><T>Marqués Advisory & Investments supports project origination and investment structuring.</T></p>
              </article>
            </section>
          </div>
        </section>

        <section className={s.disclaimer}>
          <div className={s.container}>
            <p><T>Disclaimer</T><br /><T>{projectDisclaimer}</T></p>
          </div>
        </section>
      </main>
      <ResidencyFooter variant="institutional" />
    </>
  )
}
