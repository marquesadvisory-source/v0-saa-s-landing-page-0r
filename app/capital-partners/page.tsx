import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, createMetadata, webPageSchema } from "@/lib/seo"
import { CapitalPartnersExperience } from "./capital-partners-experience"
import s from "./capital-partners.module.css"

export const metadata: Metadata = createMetadata({
  title: "Capital Partners",
  description:
    "Capital partners, family offices, institutional investment relationships, Costa Rica real assets platform, origination, structuring and capital readiness with Marqués Advisory & Investments.",
  path: "/capital-partners",
})

export default function CapitalPartnersPage() {
  return (
    <main className={s.page}>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Capital Partners", path: "/capital-partners" },
          ]),
          webPageSchema({
            title: "Capital Partners",
            description:
              "How Marqués Advisory & Investments works with capital partners and institutional counterparties around Costa Rica real asset opportunities.",
            path: "/capital-partners",
          }),
        ]}
      />

      <SiteHeader />
      <CapitalPartnersExperience />
    </main>
  )
}
