import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, createMetadata, webPageSchema } from "@/lib/seo"
import { PartnersExperience } from "./partners-experience"
import styles from "./partners.module.css"

const page = {
  title: "Become a Partner",
  description: "Explore strategic partnerships and introducer relationships with Marqués for Costa Rica residence and private-client services.",
  path: "/partners",
  image: "/images/private-client/service-support.webp",
}

export const metadata: Metadata = createMetadata(page)

export default function PartnersPage() {
  return <main className={styles.page} data-partners-page="true">
    <JsonLd data={[
      webPageSchema(page),
      breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Become a Partner", path: "/partners" }]),
    ]} />
    <SiteHeader />
    <PartnersExperience />
  </main>
}
