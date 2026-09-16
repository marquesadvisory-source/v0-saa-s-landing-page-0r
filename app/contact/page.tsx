import { SeoImage } from "@/components/seo-image"
import { pageSeo } from "@/lib/page-seo"
import { T } from "@/components/language-provider"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { EnquiryButton } from "@/components/enquiry-provider"
import { ResidencyFooter } from "@/components/residency-editorial"
import { JsonLd } from "@/components/json-ld"
import { webPageSchema, breadcrumbSchema, createMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site"
import s from "@/app/residency/residency.module.css"

export const metadata = createMetadata(pageSeo["/contact"])

export default function ContactPage() {
  return <div className={s.page}><SiteHeader />
    <JsonLd data={[webPageSchema(pageSeo["/contact"], "ContactPage"),breadcrumbSchema([{name:"Home",path:"/"},{name:"Contact",path:"/contact"}])]} />
    <main className={s.section}><div className={s.container + " " + s.split}>
      <div className={s.copy}><p className={s.eyebrow}><T>CONTACT MARQUÉS</T></p><h1><T>A private conversation.</T><br /><T>A considered next step.</T></h1>
        <p style={{marginTop:24}}><T>Discuss your residence, real asset or investment objectives in Costa Rica with Marqués Advisory &amp; Investments.</T></p>
        <div className={s.actions}><EnquiryButton className={s.button}><T>General Enquiry</T><ArrowUpRight size={16} /></EnquiryButton><EnquiryButton kind="callback" className={s.textLink}><T>Request a Callback</T><ArrowUpRight size={16} /></EnquiryButton></div>
        <div className={s.requirements}><p><a href="mailto:info@marquescr.com">info@marquescr.com</a></p><p><a href={siteConfig.whatsapp}><T>{siteConfig.phone}</T></a></p></div>
        <p className={s.note} style={{marginTop:24}}><T>Please review our </T><Link className={s.textLink} href="/privacy"><T>Privacy Policy</T></Link><T> before sharing personal information.</T></p>
      </div><SeoImage src="/images/private-client/service-concierge.webp" alt="Illustrative private-client assistance in a quiet hospitality lounge" fetchPriority="high" loading="eager" />
    </div></main><ResidencyFooter />
  </div>
}
