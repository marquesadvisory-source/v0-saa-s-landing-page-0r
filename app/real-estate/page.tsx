import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { EnquiryButton } from "@/components/enquiry-provider"
import { JsonLd } from "@/components/json-ld"
import { ResidencyFooter } from "@/components/residency-editorial"
import { SeoImage } from "@/components/seo-image"
import { SiteHeader } from "@/components/site-header"
import { T } from "@/components/language-provider"
import { OpportunityDiscovery } from "@/components/opportunity-discovery"
import { getPublicRealEstateOpportunities } from "@/lib/opportunities/repository"
import { breadcrumbSchema, createMetadata, webPageSchema } from "@/lib/seo"
import { pageSeo } from "@/lib/page-seo"
import s from "@/app/residency/residency.module.css"
import styles from "./real-estate.module.css"

export const metadata = createMetadata(pageSeo["/real-estate"])

const propertyPerspectives = [
  "Luxury Homes",
  "Oceanfront & Coastal",
  "Villas & Estates",
  "Investment Properties",
  "Development Opportunities",
  "Other Property",
] as const

export default async function RealEstatePage() {
  const approvedProperties = await getPublicRealEstateOpportunities()

  return <div className={s.page}>
    <SiteHeader />
    <JsonLd data={[
      webPageSchema(pageSeo["/real-estate"], "WebPage"),
      breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Luxury Real Estate", path: "/real-estate" }]),
    ]} />
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="real-estate-title">
        <div className={styles.heroCopy}>
          <p className={s.eyebrow}><T>PRIVATE CLIENT REAL ESTATE</T></p>
          <h1 id="real-estate-title"><T>Luxury Real Estate in Costa Rica</T></h1>
          <p className={styles.lead}><T>Private real-estate advisory for international buyers considering property in Costa Rica.</T></p>
          <p className={styles.summary}><T>Whether for a second home, a lifestyle property or an investment, begin with the objectives that matter to you. Residence planning is not required.</T></p>
          <EnquiryButton kind="real-estate" className={s.button}><T>Discuss Your Real Estate Objectives</T><ArrowUpRight size={16} aria-hidden="true" /></EnquiryButton>
        </div>
        <figure className={styles.heroMedia}>
          <SeoImage
            src="/images/private-client/service-real-estate.webp"
            alt="Illustrative penthouse interior with a green highland city outlook"
            sizes="(max-width: 760px) 100vw, 52vw"
            fetchPriority="high"
            loading="eager"
          />
          <figcaption><T>Illustrative residential perspective</T></figcaption>
        </figure>
      </section>

      <section className={styles.universe} aria-labelledby="property-perspectives-title">
        <div className={styles.sectionIntro}>
          <p className={s.eyebrow}><T>PROPERTY PERSPECTIVES</T></p>
          <h2 id="property-perspectives-title"><T>Real estate considered in context.</T></h2>
          <p><T>Property perspectives for personal use, investment and development, considered in relation to buyer objectives.</T></p>
        </div>
        <ul className={styles.categoryList}>
          {propertyPerspectives.map((category, index) => <li key={category}>
            <span aria-hidden="true">0{index + 1}</span><h3><T>{category}</T></h3>
          </li>)}
        </ul>
      </section>

      <section className={`${styles.inventory} ${approvedProperties.length === 0 ? styles.inventoryEmpty : ""}`} aria-labelledby="selected-properties-title">
        {approvedProperties.length > 0 ? <>
          <div className={styles.inventoryIntro}>
            <p className={s.eyebrow}><T>PRIVATE PROPERTY OPPORTUNITIES</T></p>
            <h2 id="selected-properties-title"><T>Selected Real Estate Opportunities</T></h2>
            <p><T>Explore selected property opportunities with information on location and property context.</T></p>
          </div>
          <OpportunityDiscovery assets={approvedProperties} />
        </> : <div className={styles.privateAccessState}>
          <div>
            <p className={styles.lightEyebrow}><T>PRIVATE REAL ESTATE ADVISORY</T></p>
            <h2 id="selected-properties-title"><T>A considered property conversation.</T></h2>
          </div>
          <div className={styles.privateCopy}>
            <p><T>No public property listings are currently available.</T></p>
            <p><T>Begin with your objectives, intended use and location preferences. A private conversation can bring Costa Rica context to your property plans.</T></p>
            <EnquiryButton kind="real-estate" className={styles.lightLink}><T>Discuss Your Real Estate Objectives</T><ArrowUpRight size={16} aria-hidden="true" /></EnquiryButton>
          </div>
        </div>}
      </section>

      {approvedProperties.length > 0 && <section className={styles.privateAccess} aria-labelledby="private-access-title">
        <div>
          <p className={styles.lightEyebrow}><T>PRIVATE REAL ESTATE ADVISORY</T></p>
          <h2 id="private-access-title"><T>A considered property conversation.</T></h2>
        </div>
        <div className={styles.privateCopy}>
          <p><T>Property conversations can focus on intended use, location preferences and the priorities important to you. Availability and information vary by property.</T></p>
          <EnquiryButton kind="real-estate" className={styles.lightLink}><T>Discuss Your Real Estate Objectives</T><ArrowUpRight size={16} aria-hidden="true" /></EnquiryButton>
        </div>
      </section>}

      <section className={styles.residenceLink} aria-labelledby="residence-link-title">
        <div>
          <p className={s.eyebrow}><T>RESIDENCE BY INVESTMENT</T></p>
          <h2 id="residence-link-title"><T>Considering Residence by Investment?</T></h2>
        </div>
        <div>
          <p><T>Where a buyer is also considering Costa Rica Residence by Investment, certain qualifying real-estate investments may form part of that separate strategy, subject to applicable legal requirements, documentation and verification.</T></p>
          <Link className={styles.textLink} href="/residency/real-estate"><T>Explore the Residence by Investment real-estate relationship</T><ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
    <ResidencyFooter />
  </div>
}
