import { Localized } from "@/components/language-provider"
import { SeoImage } from "@/components/seo-image"
import { pageSeo } from "@/lib/page-seo"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { ResidencyFooter } from "@/components/residency-editorial"
import { EnquiryButton } from "@/components/enquiry-provider"
import { OpportunityDiscovery } from "@/components/opportunity-discovery"
import { T } from "@/components/language-provider"
import { JsonLd } from "@/components/json-ld"
import { getOpportunities } from "@/lib/opportunities/repository"
import { webPageSchema, opportunityListSchema, breadcrumbSchema, createMetadata } from "@/lib/seo"
import s from "@/app/residency/residency.module.css"
import styles from "./investments.module.css"

export const metadata = createMetadata(pageSeo["/investments"])

const quickFacts = [
  ["PRIVATE MARKET ACCESS", "Selected opportunities sourced through local relationships, direct owners, developers and private networks."],
  ["INVESTMENT TYPES", "Real estate, operating businesses, hospitality, industrial assets, mixed-use and development opportunities."],
  ["STRUCTURING", "Opportunities may involve direct acquisitions, co-investment, strategic capital or other transaction structures depending on the asset."],
  ["INVESTOR RESIDENCY", "Certain qualifying investments from USD 150,000 may support an Investor Residency strategy, subject to applicable requirements and verification."],
  ["TAX & REGULATORY POSITION", "Immigration residence does not automatically determine Costa Rican tax residence. Investment, legal and tax considerations require separate professional review."],
]

// Preserve the public institutional framework, after the opportunity discovery experience.
const stages = [
  ["ORIGINATION", "Opportunity sourced through local relationships, direct access or private networks."],
  ["EVALUATION & STRUCTURING", "Asset, transaction framework, capital requirements and strategic fit are reviewed."],
  ["CAPITAL READINESS", "Information, diligence, financial logic and counterparties are prepared for investor review."],
  ["EXECUTION COORDINATION", "Legal, financial, technical and commercial professionals are coordinated as required."],
  ["INVESTMENT STRATEGY", "Acquisition, development, stabilization, refinancing, sale or long-term ownership considerations are assessed according to the opportunity."],
]

export default async function InvestmentsPage() {
  const approvedOpportunities = await getOpportunities()
  return <div className={s.page}>
    <SiteHeader />
    <JsonLd data={[
      breadcrumbSchema([{name:"Home",path:"/"},{name:"Investments",path:"/investments"}]),
      {...webPageSchema(pageSeo["/investments"], "CollectionPage"), mainEntity: opportunityListSchema(approvedOpportunities, "/investments")},
    ]}/>
    <main>
      <section className={styles.hero}>
        <SeoImage src="/costa-rica-coast.jpg" alt="Pacific coastline in Costa Rica" fetchPriority="high" loading="eager" sizes="100vw"/>
        <div className={s.container}>
          <p className={s.eyebrow}><T>INVESTING IN COSTA RICA</T></p>
          <h1><T>Private Investment Opportunities in Costa Rica</T></h1>
          <p><T>Marqués originates and structures selected opportunities across real assets, operating businesses, hospitality, industrial assets, development projects and private off-market transactions.</T></p>
          <p><T>For international investors, certain qualifying investments may also support a Costa Rica Investor Residency strategy, subject to applicable requirements and independent verification.</T></p>
        </div>
      </section>

      <Localized as="section" className={styles.factsSection+" "+s.ivory} id="investment-context" aria-label="Private investment context">
        <div className={s.container}>
          <dl className={styles.facts}>{quickFacts.map(([label,value])=><div key={label}><dt><T>{label}</T></dt><dd><T>{value}</T></dd></div>)}</dl>
        </div>
      </Localized>

      <section className={styles.pathwaysSection} id="selected-opportunities">
        <div className={s.container}>
          <h2 className={styles.discoveryHeading}><T>SELECTED OPPORTUNITIES</T></h2>
          <h3 style={{marginTop:18}}><T>Selected Investment Opportunities</T></h3>
          <p style={{marginTop:16}}><T>Direct access to selected real estate, operating businesses and privately sourced investment opportunities in Costa Rica.</T></p>
          <OpportunityDiscovery assets={approvedOpportunities} scope="investments"/>
          <p className={styles.disclaimer}><T>Investor Residency eligibility is assessed separately from the investment opportunity itself. Investment amount alone does not establish eligibility, and residence, renewal, tax and regulatory outcomes remain subject to applicable requirements and professional review.</T></p>
        </div>
      </section>

      <section className={s.section} id="investment-framework">
        <div className={s.container}>
          <div className={s.intro}>
            <div><p className={s.eyebrow}><T>HOW MARQUÉS EVALUATES OPPORTUNITIES</T></p><h2><T>From Origination to Execution.</T></h2></div>
            <p><T>A disciplined path from asset access to execution.</T></p>
          </div>
          <ol className={styles.stages}>{stages.map(([title,body],index)=><li key={title}><span className={s.number}>{String(index+1).padStart(2,"0")}</span><h3><T>{title}</T></h3><p><T>{body}</T></p></li>)}</ol>
          <p className={styles.frameworkNote}><T>Each opportunity is reviewed through a repeatable institutional lens.</T></p>
          <ol className={styles.lens}>{["Asset","Thesis","Structure","Capital","Execution","Outcome"].map(label=><li key={label}><T>{label}</T></li>)}</ol>
          <Link className={s.textLink} href="/investment-framework"><T>Our institutional framework</T><ArrowUpRight size={16}/></Link>
        </div>
      </section>

      <section className={s.section+" "+s.navy}>
        <div className={s.container+" "+s.split}>
          <div><p className={s.eyebrow}><T>YOUR NEXT STEP</T></p><h2><T>Start with the investment objective.</T></h2></div>
          <div><p><T>Whether you are evaluating a direct acquisition, private opportunity, development project or broader Costa Rica investment strategy, Marqués begins with the investor’s objectives and the opportunity itself.</T></p><div className={s.actions}><EnquiryButton className={s.button}><T>Begin a Private Conversation</T><ArrowUpRight size={16}/></EnquiryButton></div></div>
        </div>
      </section>
    </main>
    <ResidencyFooter />
  </div>
}
