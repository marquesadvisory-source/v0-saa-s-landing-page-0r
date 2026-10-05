import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, createMetadata, webPageSchema, opportunityListSchema } from "@/lib/seo"
import { OpportunitiesExperience } from "./opportunities-experience"
import { opportunities } from "./opportunities-data"
import s from "./opportunities.module.css"

export const metadata: Metadata = createMetadata({
  title: "Institutional Opportunities",
  description:
    "Selected institutional real asset opportunity showcases in Costa Rica, including Plaza Los Mangos and Décima Avenida, presented for review subject to diligence and appropriate institutional procedures.",
  path: "/projects",
})

const pageDisclaimer =
  "Information regarding specific opportunities is provided for institutional context only. Nothing on this page constitutes a public offering of securities, investment solicitation, real estate brokerage listing, guarantee of investment performance or invitation to invest. Additional materials may be shared only with qualified parties following appropriate review, confidentiality procedures and legal documentation."

export default function ProjectsPage() {
  return (
    <main className={s.page}>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Institutional Opportunities", path: "/projects" },
          ]),
          {
            ...webPageSchema({title: "Institutional Opportunities", description: "Selected real asset opportunities reviewed through MA&I's institutional preparation framework in Costa Rica.", path: "/projects"}, "CollectionPage"),
            mainEntity: opportunityListSchema(opportunities.map(opportunity => ({name: opportunity.name, slug: opportunity.href.split("/").pop()!})), "/projects"),
          },
        ]}
      />

      <SiteHeader />
      <OpportunitiesExperience disclaimer={pageDisclaimer} />
    </main>
  )
}
