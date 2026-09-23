import { Localized } from "@/components/language-provider"
import { SeoImage } from "@/components/seo-image"
import { pageSeo } from "@/lib/page-seo"
import { T } from "@/components/language-provider"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { EnquiryButton } from "./enquiry-provider"
import { JsonLd } from "./json-ld"
import { webPageSchema, breadcrumbSchema } from "@/lib/seo"
import { siteConfig } from "@/lib/site"
import { footerNavigation } from "@/lib/footer-navigation"
import type { ResidenceOpportunity } from "@/lib/residency"
import s from "@/app/residency/residency.module.css"

export function ResidencyHero({ eyebrow, title, description, image, alt, caption, enquiry = "general" }: {
  eyebrow: string; title: string; description: string; image: string; alt: string; caption: string; enquiry?: "general" | "real-estate"
}) {
  return <section className={s.hero}>
    <SeoImage src={image} alt={alt} fetchPriority="high" loading="eager" sizes="100vw" />
    <div className={s.container + " " + s.heroCopy}>
      <p className={s.eyebrow}><T>{eyebrow}</T></p><h1><T>{title}</T></h1><p><T>{description}</T></p>
      <EnquiryButton kind={enquiry} className={s.button}><T>{enquiry === "real-estate" ? "REAL ESTATE ENQUIRY" : "PRIVATE CLIENT ENQUIRY"}</T><ArrowUpRight size={16} /></EnquiryButton>
    </div><span className={s.heroCaption}><T>{caption}</T></span>
  </section>
}
export function ResidencySchema({ name, path }: { name: string; path: string }) {
  const items = [{ name: "Home", path: "/" }, { name: "Residence by Investment", path: "/residency" }]
  if (path !== "/residency") items.push({name, path})
  const seo = pageSeo[path as keyof typeof pageSeo]
  return <JsonLd data={[webPageSchema(seo ?? {title: name, description: name, path}), breadcrumbSchema(items)]} />
}
export function ResidencyContact() {
  return <section className={s.section + " " + s.navy}><div className={s.container + " " + s.split}>
    <div><p className={s.eyebrow}><T>A PRIVATE CONVERSATION</T></p><h2><T>Your next chapter.</T><br /><T>Thoughtfully coordinated.</T></h2></div>
    <div><p><T>Discuss your profile, priorities and long-term plans for Costa Rica with our team.</T></p><div className={s.actions}><EnquiryButton className={s.button}><T>PRIVATE CLIENT ENQUIRY</T><ArrowUpRight size={16} /></EnquiryButton></div></div>
  </div></section>
}
export function ResidencyFooter() {
  return <footer className={s.footer}><div className={s.container}>
    <div className={s.footerTop}>
      <strong><T>Marqués Advisory &amp; Investments</T></strong>
      <div className={s.footerGroups}>
        {footerNavigation.map((group, index) => <section key={group.label}>
          <h2><T>{group.label}</T></h2>
          <Localized as="nav" aria-label={group.label}>
            {group.links.map(link => <Link key={link.href} href={link.href}><T>{link.label}</T></Link>)}
            {index === 3 && <><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><a href={siteConfig.whatsapp}><T>{siteConfig.phone}</T></a></>}
          </Localized>
        </section>)}
      </div>
    </div>
    <p className={s.note}><T>Marqués Advisory &amp; Investments is a private advisory firm and is not affiliated with the Government of Costa Rica. Residence applications remain subject to applicable law, documentation, professional review and determination by the competent authorities.</T><br /><br /><T>{siteConfig.disclaimer}</T></p>
    <p className={s.copyright}>© {new Date().getFullYear()}<T> Marqués Advisory &amp; Investments</T></p>
  </div></footer>
}
export function ResidenceOpportunityView({ opportunity }: { opportunity: ResidenceOpportunity }) {
  if (opportunity.publicationStatus !== "approved" || opportunity.confidentiality !== "public") return null
  return <article className={s.split}>
    <Localized as="img" src={opportunity.primaryImage.src} alt={opportunity.primaryImage.alt} loading="lazy" />
    <div className={s.copy}><p className={s.eyebrow}><T>{opportunity.category}</T> · <T>{opportunity.location}</T></p><h3><T>{opportunity.name}</T></h3><p><T>{opportunity.description}</T></p>
      {opportunity.amount?.approvedForPublicDisplay && <p><T>{opportunity.amount.label}</T>: <T>{opportunity.amount.value}</T></p>}
      {opportunity.residencyEligibility.status === "verified" && opportunity.residencyEligibility.approvedStatement && <p><T>{opportunity.residencyEligibility.approvedStatement}</T></p>}
      {opportunity.approvedMetrics.map(metric => <p key={metric.label}><T>{metric.label}</T>: <T>{metric.value}</T></p>)}
      <EnquiryButton kind="real-estate" subject={opportunity.name} className={s.textLink}><T>Request Information</T><ArrowUpRight size={16} /></EnquiryButton>
    </div>
  </article>
}
