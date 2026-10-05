import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { SiteHeader } from "@/components/site-header"
import { breadcrumbSchema, createMetadata, webPageSchema } from "@/lib/seo"
import { FrameworkExperience } from "./framework-experience"

export const metadata: Metadata = createMetadata({
  title: "Investment Framework",
  description:
    "Investment framework for Costa Rica real assets, capital readiness, investment structuring, institutional review and real asset opportunities with Marqués Advisory & Investments.",
  path: "/investment-framework",
})

export default function InvestmentFrameworkPage() {
  return <>
    <JsonLd data={[
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Investment Framework", path: "/investment-framework" },
      ]),
      webPageSchema({
        title: "Investment Framework",
        description:
          "A disciplined framework for evaluating Costa Rica real asset opportunities before capital, execution and monetization.",
        path: "/investment-framework",
      }),
    ]} />
    <SiteHeader />
    <FrameworkExperience />
  </>
}
