import { Localized } from "@/components/language-provider"
import { SeoImage } from "@/components/seo-image"
import { pageSeo } from "@/lib/page-seo"
import { T } from "@/components/language-provider"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { createMetadata } from "@/lib/seo"
import { countries } from "@/lib/residency"
import { ResidencyHero, ResidencyContact, ResidencySchema } from "@/components/residency-editorial"
import s from "../residency.module.css"

export const metadata = createMetadata(pageSeo["/residency/about-costa-rica"])
const reasons = [
  ["Stability", "A long-term perspective begins with an understanding of the country's institutions and political context."],
  ["Rule of Law", "Legal review and well-documented arrangements are central to a considered move or investment."],
  ["Connectivity", "Location in Central America provides a regional base for international personal and business relationships."],
  ["Lifestyle", "A range of urban, coastal and rural settings allows residence planning to reflect personal priorities."],
  ["Real Assets", "Residential, commercial and development opportunities require local knowledge and asset-specific diligence."],
  ["Long-Term Presence", "Residence, property and ongoing local coordination should be considered together."],
]
export default function AboutCostaRica() {
  return <>
    <ResidencySchema name="About Costa Rica" path="/residency/about-costa-rica" />
    <ResidencyHero eyebrow="COSTA RICA" title="A Strategic Place to Establish a Long-Term Presence." description="A country to consider through the lens of family, residence and real assets. A local perspective to help connect your plans with the realities of establishing a presence." image="/costa-rica-forest.jpg" alt="Monteverde forest canopy in Costa Rica" caption="Costa Rica · Nature and perspective" />
    <section className={s.section}><div className={s.container + " " + s.country}>
      <div><div className={s.countryIdentity}><Localized as="img" className={s.coat} src={countries[0].coatOfArms} alt="Official coat of arms of Costa Rica" width={96} height={105} /><div><p className={s.eyebrow}><T>COUNTRY PERSPECTIVE</T></p><h2><T>Costa Rica</T></h2></div></div>
        <p><T>A constitutional democracy in Central America, Costa Rica offers a setting in which international individuals and families can consider residence and long-term plans. The right approach balances personal objectives with local legal, practical and investment considerations.</T></p>
        <div className={s.factLine}><span><T>Region</T></span><strong><T>Central America</T></strong></div>
        <p className={s.note} style={{marginTop:24}}><T>Marqués Advisory &amp; Investments is a private advisory firm and is not affiliated with the Government of Costa Rica.</T></p>
      </div><SeoImage className={s.countryPhoto} src="/costa-rica-coast.jpg" alt="Costa Rica coastline and Pacific Ocean" loading="lazy" />
    </div></section>
    <section className={s.section + " " + s.ivory}><div className={s.container + " " + s.split}>
      <SeoImage className={s.tallPhoto} src="/images/private-client/country-life.webp" alt="Illustrative scene of a couple enjoying a tropical residential terrace" loading="lazy" />
      <div><p className={s.eyebrow}><T>WHY COSTA RICA</T></p><h2><T>More than a destination.</T><br /><T>A long-term perspective.</T></h2>
        <ol className={s.reasons}>{reasons.map(([title,copy],i)=><li key={title}><span className={s.number}>0{i+1}</span><div><h3><T>{title}</T></h3><p><T>{copy}</T></p></div></li>)}</ol>
      </div>
    </div></section>
    <section className={s.section}><div className={s.container}>
      <div className={s.intro}><div><p className={s.eyebrow}><T>YOUR PRESENCE IN COSTA RICA</T></p><h2><T>Connect the country</T><br /><T>with your plans.</T></h2></div><p><T>Residence planning and real estate decisions are connected, but distinct. Each deserves its own evaluation, documentation and professional review.</T></p></div>
      <div className={s.split}><div className={s.copy}><h3><T>Residence by Investment</T></h3><p><T>Understand the three pathways and the preparation process.</T></p><Link href="/residency" className={s.textLink}><T>Explore residence pathways</T><ArrowUpRight size={16} /></Link></div><div className={s.copy}><h3><T>Real Estate</T></h3><p><T>Consider the relationship between qualifying investment and a long-term residence strategy.</T></p><Link href="/residency/real-estate" className={s.textLink}><T>Explore Costa Rica Real Estate</T><ArrowUpRight size={16} /></Link></div></div>
    </div></section><ResidencyContact />
  </>
}
