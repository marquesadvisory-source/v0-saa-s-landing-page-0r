import { SiteHeader } from "@/components/site-header"
import { JsonLd } from "@/components/json-ld"
import { ResidencyFooter } from "@/components/residency-editorial"
import { pageSeo } from "@/lib/page-seo"
import { breadcrumbSchema, createMetadata, webPageSchema } from "@/lib/seo"
import { InvestmentsExperience } from "./investments-experience"
import s from "@/app/residency/residency.module.css"

export const metadata = createMetadata(pageSeo["/investments"])

export default function InvestmentsPage() {
  return (
    <div className={s.page}>
      <SiteHeader />
      <JsonLd data={[
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Investments", path: "/investments" }]),
        webPageSchema(pageSeo["/investments"], "WebPage"),
      ]} />
      <InvestmentsExperience />
      <ResidencyFooter />
    </div>
  )
}
