import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { T, Localized } from "@/components/language-provider"
import { SeoImage } from "@/components/seo-image"
import { EnquiryButton } from "@/components/enquiry-provider"
import { ResidencyFooter } from "@/components/residency-editorial"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, createMetadata, webPageSchema } from "@/lib/seo"
import h from "../home.module.css"
import s from "./services.module.css"

const seo = {
  title: "Private Client Services in Costa Rica",
  description: "Investment-led private client services in Costa Rica: residence planning, real estate review, concierge support and development coordination through Marqués.",
  path: "/services",
  image: "/images/private-client/service-residence.webp",
}
export const metadata = createMetadata(seo)

const services = [
  {
    name: "Residence", id: "residence", image: "service-residence",
    alt: "Illustrative couple arriving at a contemporary tropical residence",
    description: "A considered starting point for your presence in Costa Rica, with attention to your personal objectives and professional coordination.",
    focus: "Personal priorities / Local coordination", cta: "Explore residence pathways", href: "/residency",
  },
  {
    name: "Real Estate", id: "real-estate", image: "service-real-estate",
    alt: "Illustrative penthouse interior with a green highland city outlook",
    description: "A real asset perspective that connects location, intended use and long-term objectives with documentation and institutional review.",
    focus: "Asset review / Structuring / Diligence", cta: "Explore our real asset approach", href: "/residency/real-estate",
  },
  {
    name: "Concierge", id: "concierge", image: "service-concierge",
    alt: "Illustrative private-client assistance in a quiet hospitality lounge",
    description: "A personal conversation about the local arrangements, introductions and practical coordination your plans may require.",
    focus: "Local introductions / Individual priorities", cta: "Begin a private conversation", href: null,
  },
  {
    name: "Additional Services", id: "additional-services", image: "service-support",
    alt: "Illustrative private-client coordination near Costa Rica's National Theatre",
    description: "Marqués coordinates additional services as needed, shaped around your objectives and circumstances, with the appropriate local professionals.",
    focus: "Professional relationships / Coordinated review", cta: "Discuss your requirements", href: null,
  },
]

export default function ServicesPage() {
  return <div className={h.page + " " + s.page}>
    <SiteHeader />
    <JsonLd data={[webPageSchema(seo), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])]} />
    <main>
      <section className={s.intro} aria-labelledby="services-heading">
        <div className={h.container}>
          <p className={h.eyebrow}><T>COSTA RICA INVESTMENT PLATFORM</T></p>
          <h1 id="services-heading"><T>Investment-Led Private Client Services</T></h1>
          <p className={s.lead}><T>Residence, real estate and local execution, coordinated around your priorities.</T></p>
          <Localized as="nav" className={s.index} aria-label="Private client service directory">
            {services.map((service,index) => <Link href={"#" + service.id} key={service.id}><span>0{index+1}</span><T>{service.name}</T></Link>)}
            <Link href="#development"><span>05</span><T>Properties &amp; Hotel Development</T></Link>
          </Localized>
        </div>
      </section>
      <Localized as="section" className={s.directory} aria-label="Services">
        <div className={h.container}>
          <div className={h.serviceDirectory}>
            {services.map((service,index) => <article id={service.id} key={service.id} className={h.serviceRow + " " + s.row}>
              <div className={h.serviceMedia + " " + s.media}><SeoImage src={"/images/private-client/" + service.image + ".webp"} alt={service.alt} loading={index === 0 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : "auto"} /></div>
              <div className={h.serviceCopy}>
                <div className={h.serviceTitle}><span className={h.smallNumber}>0{index+1}</span><h2><T>{service.name}</T></h2></div>
                <p><T>{service.description}</T></p><p className={h.serviceFocus}><T>{service.focus}</T></p>
                {service.href ? <Link className={h.textLink} href={service.href}><T>{service.cta}</T><ArrowUpRight size={17} aria-hidden="true" /></Link>
                  : <EnquiryButton kind="general" className={h.textLink}><T>{service.cta}</T><ArrowUpRight size={17} aria-hidden="true" /></EnquiryButton>}
              </div>
            </article>)}
          </div>
          <article id="development" className={h.developmentFeature + " " + s.development}>
            <div className={h.developmentMedia}><SeoImage src="/images/private-client/service-development.webp" alt="Illustrative architectural model and development coordination discussion" loading="lazy" /><span><T>Development coordination · Illustrative concept</T></span></div>
            <div className={h.developmentCopy}>
              <p className={h.eyebrow}><T>Private Client Services / 05</T></p>
              <h2><T>Properties &amp; Hotel Development</T></h2>
              <p><T>From the underlying asset to an institutional development framework. Origination, structuring and coordination across legal, financial, technical and commercial stakeholders.</T></p>
              <EnquiryButton kind="general" className={h.textLink}><T>Discuss your plans</T><ArrowUpRight size={17} aria-hidden="true" /></EnquiryButton>
            </div>
          </article>
          <p className={s.note}><T>Legal, tax, immigration, fiduciary and other regulated services are provided by the corresponding qualified professionals where required.</T></p>
        </div>
      </Localized>
    </main>
    <ResidencyFooter />
  </div>
}
