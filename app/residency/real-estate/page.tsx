import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { T } from "@/components/language-provider"
import { EnquiryButton } from "@/components/enquiry-provider"
import { ResidencyHero, ResidencySchema } from "@/components/residency-editorial"
import { pageSeo } from "@/lib/page-seo"
import { createMetadata } from "@/lib/seo"
import s from "../residency.module.css"
import d from "./discovery.module.css"

export const metadata = createMetadata(pageSeo["/residency/real-estate"])

export default function ResidencyRealEstate() {
  return <>
    <ResidencySchema name="Real Estate and Investor Residency" path="/residency/real-estate" />
    <ResidencyHero
      eyebrow="COSTA RICA RESIDENCE BY INVESTMENT"
      title="Real Estate and Costa Rica Investor Residency"
      description="For some applicants, qualifying real-estate investment may form part of a Costa Rica Investor Residency strategy. Property ownership alone does not establish eligibility; each case remains subject to applicable legal requirements, documentation and verification."
      image="/costa-rica-coast.jpg"
      alt="Pacific coastline in Costa Rica"
      caption="Costa Rica · Residence and real-asset context"
    />

    <section className={s.section + " " + s.ivory}>
      <div className={s.container}>
        <dl className={d.institutionalFacts}>
          <div className={d.investmentFact}><dt><T>Minimum Qualifying Investment</T></dt><dd>US$150,000</dd></div>
          <div><dt><T>MAINTAIN THE INVESTMENT</T></dt><dd><T>The qualifying investment must be maintained continuously for renewal of Investor Residency.</T></dd></div>
          <div><dt><T>RESIDENCE CONTINUITY</T></dt><dd><T>Temporary residence may be cancelled if the resident remains outside Costa Rica for more than two consecutive years, subject to applicable legal exceptions.</T></dd></div>
        </dl>
      </div>
    </section>

    <section className={s.section} aria-labelledby="residency-real-estate-fit">
      <div className={s.container + " " + s.split}>
        <div>
          <p className={s.eyebrow}><T>RESIDENCE BY INVESTMENT</T></p>
          <h2 id="residency-real-estate-fit"><T>How real estate may fit</T></h2>
        </div>
        <div className={s.copy}>
          <p><T>A property decision and a residence application are related but separately evaluated. Any potential connection must be reviewed against applicable requirements and supporting documentation.</T></p>
          <p><T>Property ownership alone does not establish residence eligibility. Residence outcomes remain subject to applicable law, documentation, professional review and determination by the competent authorities.</T></p>
          <Link href="/real-estate" className={s.textLink}><T>Explore Marqués private real-estate advisory</T><ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>

    <section className={s.section + " " + s.navy}>
      <div className={s.container + " " + s.split}>
        <div><p className={s.eyebrow}><T>A PRIVATE CONVERSATION</T></p><h2><T>Your residence plans, considered individually.</T></h2></div>
        <div><p><T>Discuss how residence planning and real estate may relate to your objectives in Costa Rica.</T></p><div className={s.actions}><EnquiryButton className={s.button} kind="general"><T>PRIVATE CLIENT ENQUIRY</T><ArrowUpRight size={16} aria-hidden="true" /></EnquiryButton></div></div>
      </div>
    </section>
  </>
}
