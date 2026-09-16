import { SeoImage } from "@/components/seo-image"
import { pageSeo } from "@/lib/page-seo"
import { T } from "@/components/language-provider"
import Link from "next/link"
import { ArrowUpRight, House, ShieldCheck, FileCheck2, Scale } from "lucide-react"
import { createMetadata } from "@/lib/seo"
import { realEstatePropertyTypes } from "@/lib/opportunities"
import { EnquiryButton } from "@/components/enquiry-provider"
import { ResidencyHero, ResidencySchema } from "@/components/residency-editorial"
import s from "../residency.module.css"
import d from "./discovery.module.css"
import { OpportunityDiscovery } from "./discovery"
import { getOpportunities } from "@/lib/opportunities/repository"

export const metadata = createMetadata(pageSeo["/residency/real-estate"])
export default async function ResidencyRealEstate() {
  const assets = await getOpportunities("real-estate")
  return <>
    <ResidencySchema name="Costa Rica Real Estate" path="/residency/real-estate" />
    <ResidencyHero eyebrow="COSTA RICA REAL ESTATE" title="Selected Real Estate Opportunities in Costa Rica" description="Selected real estate opportunities may form part of a Costa Rica residence-by-investment strategy, subject to applicable requirements, documentation and verification." image="/architecture-interior.jpg" alt="Contemporary architecture and residential interior" caption="Architectural perspective · Not a property listing" enquiry="real-estate" />
    <section className={s.section + " " + s.ivory + " " + d.factsSection} aria-labelledby="real-estate-facts-heading"><div className={s.container}>
      <div className={d.factsLead}>
        <div className={d.factsIntro}><span className={d.factsRule} aria-hidden="true" /><h2 id="real-estate-facts-heading"><T>Costa Rica Real Estate</T></h2><p><T>Selected real estate opportunities may form part of a Costa Rica residence-by-investment strategy, subject to applicable requirements, documentation and verification.</T></p></div>
        <div className={d.investmentFact}><span><T>Minimum Qualifying Investment</T></span><strong><T>USD 150,000</T></strong><p><T>Qualifying investment must satisfy applicable immigration requirements and be appropriately documented and verified.</T></p></div>
      </div>
      <dl className={d.editorialFacts}>{[
        ["RESIDENCY CONNECTION", "Qualifying, documented and verifiable real estate may form part of an Investor Residency strategy, subject to applicable immigration requirements and verification."],
        ["RESIDENCE STATUS", "Temporary residence, renewable subject to applicable requirements."],
        ["DOCUMENTATION", "The qualifying investment must be appropriately documented and verifiable."],
        ["TAX RESIDENCE", "Immigration residence does not automatically determine Costa Rican tax residence."],
      ].map(([label,value],index)=>{const Icon=[House,ShieldCheck,FileCheck2,Scale][index];return <div key={label}><div className={d.factMarker} aria-hidden="true"><Icon size={24} strokeWidth={1.4} /><span>0{index+1}</span></div><dt><T>{label}</T></dt><dd><T>{value}</T></dd></div>})}</dl>
    </div></section>
    <section className={s.section} id="selected-opportunities"><div className={s.container}>
      <div className={d.sectionHeading}><h2 style={{fontSize:28,lineHeight:1.3}}><T>SELECTED OPPORTUNITIES</T></h2><p><T>Luxury homes, residential properties and selected real estate, reviewed individually for your objectives.</T></p></div>
      <OpportunityDiscovery assets={assets} />
      <p className={s.note} style={{marginTop:24}}><T>No properties are presented here as verified for residence eligibility. Any future opportunity remains subject to availability, diligence, documentation and professional review.</T></p>
    </div></section>
    <section className={s.section}><div className={s.container + " " + s.split}>
      <SeoImage src="/architecture-interior.jpg" alt="Modern residential interior opening to a landscaped outdoor area" loading="lazy" />
      <div><p className={s.eyebrow}><T>REAL ESTATE CATEGORIES</T></p><h2><T>A range of assets.</T><br /><T>An individual review.</T></h2><p><T>Categories for consideration, not a catalogue of available or residence-qualified properties.</T></p><ol className={s.categoryList}>{realEstatePropertyTypes.map((category,i)=><li key={category}><span className={s.number}>0{i+1}</span><h3><T>{category}</T></h3></li>)}</ol></div>
    </div></section>
    <section className={s.section}><div className={s.container + " " + s.split}>
      <div className={s.copy}><p className={s.eyebrow}><T>HOW MARQUÉS COORDINATES</T></p><h2><T>From your objectives</T><br /><T>to a structured review.</T></h2><p><T>Marqués helps coordinate the asset, professional and residence-planning considerations around your objectives in Costa Rica.</T></p></div>
      <ol className={s.reasons}>{[["Profile & objectives","Clarify your intended use, priorities and investment parameters."],["Asset & documentation","Review available information with the relevant legal, technical and commercial professionals."],["Residence alignment","Assess potential eligibility separately with appropriate immigration professionals."],["Ongoing coordination","Align stakeholders and the next steps, subject to diligence and agreed engagement."]].map(([title,copy],i)=><li key={title}><span className={s.number}>0{i+1}</span><div><h3><T>{title}</T></h3><p><T>{copy}</T></p></div></li>)}</ol>
    </div></section>
    <section className={s.section + " " + s.navy}><div className={s.container + " " + s.split}><div><p className={s.eyebrow}><T>A PRIVATE CONVERSATION</T></p><h2><T>Begin with your</T><br /><T>Costa Rica objectives.</T></h2></div><div><p><T>Discuss the relationship between your real estate plans and residence strategy.</T></p><div className={s.actions}><EnquiryButton kind="real-estate" className={s.button}><T>REAL ESTATE ENQUIRY</T><ArrowUpRight size={16} /></EnquiryButton></div></div></div></section>
    <div className={s.container} style={{paddingBlock:28}}><Link className={s.textLink} href="/residency"><T>Return to Residence by Investment</T><ArrowUpRight size={16} /></Link></div>
  </>
}
