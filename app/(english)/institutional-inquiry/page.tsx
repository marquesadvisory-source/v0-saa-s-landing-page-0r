import { T } from "@/components/language-provider"
import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, createMetadata, webPageSchema } from "@/lib/seo"
import { siteConfig } from "@/lib/site"
import s from "./institutional-inquiry.module.css"

export const metadata: Metadata = createMetadata({
  title: "Institutional Inquiry",
  description:
    "Start a private institutional inquiry with Marqués Advisory & Investments regarding real asset preparation and structuring in Costa Rica.",
  path: "/institutional-inquiry",
})

export default function InstitutionalInquiryPage() {
  const pageDescription = "For institutional enquiries concerning Costa Rica real assets, selected investment opportunities, development or capital relationships."

  return <>
    <JsonLd
      data={[
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Institutional Inquiry", path: "/institutional-inquiry" },
        ]),
        webPageSchema({
          title: "Institutional Inquiry",
          description:
            "Start a private institutional inquiry with Marqués Advisory & Investments regarding real asset preparation and structuring in Costa Rica.",
          path: "/institutional-inquiry",
        }, "ContactPage"),
      ]}
    />
    <SiteHeader />
    <main className={s.page} id="main-content">
      <section className={s.inquiry} aria-labelledby="inquiry-title">
        <div className={s.container}>
          <div className={s.heading}>
            <p className={s.eyebrow}><T>INSTITUTIONAL INQUIRY</T></p>
            <h1 id="inquiry-title"><T>Investment, development and capital enquiries.</T></h1>
          </div>
          <div className={s.details}>
            <p><T>{pageDescription}</T></p>
            <p><T>Marqués welcomes direct institutional enquiries by email.</T></p>
            <div className={s.contact}>
              <p><T>INSTITUTIONAL CONTACT</T></p>
              <a href="mailto:presidencia@marquescr.com" className={s.contactLink}>
                presidencia@marquescr.com <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={s.disclaimer}>
        <p className={s.container}><T>{siteConfig.disclaimer}</T></p>
      </section>
    </main>
  </>
}
