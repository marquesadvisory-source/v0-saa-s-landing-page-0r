import { Localized } from "@/components/language-provider"
import { SeoImage } from "@/components/seo-image"
import { pageSeo } from "@/lib/page-seo"
import { createMetadata, webPageSchema } from "@/lib/seo"
import { JsonLd } from "@/components/json-ld"
import { T } from "@/components/language-provider"
import Link from "next/link"
import { ArrowDown, ArrowRight, ArrowUpRight, Mail, Phone } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { EnquiryButton } from "@/components/enquiry-provider"
import { siteConfig } from "@/lib/site"
import styles from "./home.module.css"

export const metadata = createMetadata(pageSeo["/"])

const INQUIRY = "/institutional-inquiry"
const towerImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/D%C3%A9cima%20Avenida%20Rdr-fqy4LI79dGShBO9WtIpkK9WaN4dQ2e.jpg"

function TextLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  if (href === INQUIRY) return (
    <EnquiryButton className={light ? styles.lightLink : styles.textLink}>
      <span>{children}</span><ArrowUpRight size={17} strokeWidth={1.4} aria-hidden="true" />
    </EnquiryButton>
  )
  return (
    <Link href={href} className={light ? styles.lightLink : styles.textLink}>
      <span>{children}</span><ArrowUpRight size={17} strokeWidth={1.4} aria-hidden="true" />
    </Link>
  )
}

function EditorialImage({ src, alt, className = "", eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  return (
    <SeoImage
      src={src}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      decoding="async"
    />
  )
}

const services = [
  {
    number: "01", name: "Residence", id: "residence-services",
    description: "A considered starting point for your presence in Costa Rica, with attention to your personal objectives and professional coordination.",
    focus: "Personal priorities / Local coordination",
    image: "/costa-rica-forest.jpg", alt: "Suspension bridge through Costa Rica's Monteverde cloud forest",
    cta: "Discuss your plans",
  },
  {
    number: "02", name: "Real Estate", id: "real-estate-services",
    description: "A real asset perspective that connects location, intended use and long-term objectives with documentation and institutional review.",
    focus: "Asset review / Structuring / Diligence",
    image: "/architecture-interior.jpg", alt: "Contemporary residence with natural materials and an open interior",
    cta: "Explore our real asset approach",
  },
  {
    number: "03", name: "Concierge", id: "concierge-services",
    description: "A personal conversation about the local arrangements, introductions and practical coordination your plans may require.",
    focus: "Local introductions / Individual priorities",
    image: "/costa-rica-coast.jpg", alt: "An aerial perspective of Costa Rica's Pacific coastline",
    cta: "Begin a private conversation",
  },
  {
    number: "04", name: "Additional Services", id: "additional-services",
    description: "Coordination around needs that extend beyond an individual asset, working alongside appropriate legal, financial and specialist professionals.",
    focus: "Professional relationships / Coordinated review",
    image: "/architecture-interior.jpg", alt: "Thoughtfully arranged contemporary living and dining space",
    cta: "Discuss your requirements",
  },
]

const reasons = [
  { title: "Stability", text: "A long-term perspective on place, family and opportunity." },
  { title: "Rule of Law", text: "Legal and documentation review at the heart of every decision." },
  { title: "Connectivity", text: "A base in Central America for an international outlook." },
  { title: "Lifestyle", text: "Pacific coastlines, green landscapes and a different daily rhythm." },
  { title: "Real Assets", text: "Residential, hospitality and mixed-use opportunities to evaluate." },
  { title: "Long-Term Presence", text: "A considered foundation for the next chapter of your life." },
]

export default function Home() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <JsonLd data={webPageSchema(pageSeo["/"])} />
      <main id="home-content" tabIndex={-1}>
        <section id="hero" className={styles.hero} aria-labelledby="hero-heading">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><T>Marqués Advisory &amp; Investments</T></p>
            <h1 id="hero-heading"><span><T>Establish Your</T></span><T> Presence in </T><span className={styles.countryName}><T>Costa Rica.</T></span></h1>
            <div className={styles.goldRule} />
            <p className={styles.heroDescription}><T>Private advisory for residency, real assets and investment opportunities in Costa Rica.</T></p>
            <div className={styles.heroActions}>
              <Link href="/residency" className={styles.primaryButton}><T>
                Become a Resident in Costa Rica </T><ArrowRight size={17} strokeWidth={1.4} aria-hidden="true" />
              </Link>
              <TextLink href="/investments"><T>Explore Investment Opportunities</T></TextLink>
            </div>
            <a href="#about-marques" className={styles.heroScroll}>
              <ArrowDown size={14} aria-hidden="true" /><T> A local perspective. An international outlook.
            </T></a>
          </div>
          <figure className={styles.heroMedia}>
            <EditorialImage src="/costa-rica-coast.jpg" alt="Costa Rica's Pacific coastline, where forested hills meet the ocean" eager />
            <figcaption><span><T>Costa Rica</T></span><span><T>Pacific perspective</T></span></figcaption>
          </figure>
        </section>

        <Localized as="div" className={styles.pillarStrip} aria-label="Marqués areas of focus">
          <div className={styles.container}>
            <span className={styles.pillarLabel}><T>One considered perspective</T></span>
            <Link href="/residency"><T>Residency by Investment</T></Link>
            <Link href="/investment-framework"><T>Institutional Structuring</T></Link>
            <Link href="/projects"><T>Real Assets</T></Link>
          </div>
        </Localized>

        <section id="about-marques" className={styles.section} aria-labelledby="about-heading">
          <div className={styles.editorialSplit}>
            <div className={styles.editorialCopy}>
              <p className={styles.eyebrow}><T>About Marqués</T></p>
              <h2 id="about-heading"><T>Advisory Meets</T><br /><T>Investment.</T></h2>
              <p className={styles.lead}><T>Global perspective.</T><br /><T>A personal connection to Costa Rica.</T></p>
              <p><T>Marqués Advisory &amp; Investments is a relationship-driven platform focused on real assets, structuring and capital readiness in Costa Rica.</T></p>
              <p><T>We bring an institutional lens to private decisions, connecting opportunities with the preparation and professional coordination they require.</T></p>
              <TextLink href="/about"><T>Discover Marqués</T></TextLink>
            </div>
            <figure className={styles.aboutMedia}>
              <EditorialImage src="/architecture-interior.jpg" alt="Natural light, stone and wood in a contemporary residential interior" />
              <figcaption><T>Perspective begins with how you want to live.</T></figcaption>
            </figure>
          </div>
        </section>

        <Localized as="section" className={styles.pathways} aria-label="Residency and investment perspectives">
          <div className={styles.container}>
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}><T>Your presence. Your perspective.</T></p>
              <h2><T>Two conversations.</T><br /><T>One connection to Costa Rica.</T></h2>
            </div>
            <div className={styles.pathwayGrid}>
              <article id="residency" className={styles.pathway}>
                <div className={styles.pathwayMedia}><EditorialImage src="/costa-rica-forest.jpg" alt="A walkway through the lush Monteverde cloud forest in Costa Rica" /></div>
                <div className={styles.pathwayTop}><p className={styles.eyebrow}><T>Residency</T></p><span className={styles.smallNumber}>01</span></div>
                <h3><T>A place to call your own.</T></h3>
                <p><T>Your next chapter begins with your objectives, your family and a private conversation about Costa Rica.</T></p>
                <div className={styles.categories}><span><T>Personal objectives</T></span><span><T>Local perspective</T></span><span><T>Professional review</T></span></div>
                <TextLink href="/residency"><T>Discuss your presence in Costa Rica</T></TextLink>
              </article>
              <article id="investments" className={styles.pathway}>
                <div className={styles.pathwayMedia}><EditorialImage src={towerImage} alt="Décima Avenida mixed-use tower concept rendering in Alajuela" className={styles.tower} /></div>
                <div className={styles.pathwayTop}><p className={styles.eyebrow}><T>Investments</T></p><span className={styles.smallNumber}>02</span></div>
                <h3><T>A more considered opportunity.</T></h3>
                <p><T>Real asset opportunities evaluated through an institutional framework, from origination and structuring to capital readiness.</T></p>
                <div className={styles.categories}><span><T>Real assets</T></span><span><T>Structuring</T></span><span><T>Capital readiness</T></span></div>
                <TextLink href="/investments"><T>Explore Investment Opportunities</T></TextLink>
              </article>
            </div>
          </div>
        </Localized>

        <section id="private-client-services" className={styles.services} aria-labelledby="services-heading">
          <span id="que-hacemos" className={styles.anchor} />
          <div className={styles.container}>
            <div className={styles.directoryHeading}>
              <div><p className={styles.eyebrow}><T>Private Client Services</T></p><h2 id="services-heading"><T>A considered approach.</T><br /><T>A personal relationship.</T></h2></div>
              <p><T>Individual priorities. Local knowledge. A coordinated perspective across the decisions that shape your presence in Costa Rica.</T></p>
            </div>
            <div className={styles.serviceDirectory}>
              {services.map((service) => (
                <article key={service.number} id={service.id} className={styles.serviceRow}>
                  <div className={styles.serviceMedia}><EditorialImage src={service.image} alt={service.alt} /></div>
                  <div className={styles.serviceCopy}>
                    <div className={styles.serviceTitle}><span className={styles.smallNumber}><T>{service.number}</T></span><h3><T>{service.name}</T></h3></div>
                    <p><T>{service.description}</T></p>
                    <p className={styles.serviceFocus}><T>{service.focus}</T></p>
                    <TextLink href={service.number === "02" ? "/residency/real-estate" : INQUIRY}><T>{service.cta}</T></TextLink>
                  </div>
                </article>
              ))}
            </div>
            <article className={styles.developmentFeature}>
              <div className={styles.developmentMedia}>
                <EditorialImage src="/projects/plaza-los-mangos.png" alt="Plaza Los Mangos mixed-use development concept rendering" />
                <span><T>Plaza Los Mangos / Concept rendering</T></span>
              </div>
              <div className={styles.developmentCopy}>
                <p className={styles.eyebrow}><T>Private Client Services / 05</T></p>
                <h3><T>Properties &amp;</T><br /><T>Hotel Development</T></h3>
                <p><T>From the underlying asset to an institutional development framework. Origination, structuring and coordination across legal, financial, technical and commercial stakeholders.</T></p>
                <TextLink href="/what-we-do"><T>Explore development capabilities</T></TextLink>
              </div>
            </article>
          </div>
        </section>

        <section id="sovereign-portfolio" className={styles.portfolio} aria-labelledby="portfolio-heading">
          <span id="tesis" className={styles.anchor} />
          <span id="como-pensamos" className={styles.anchor} />
          <div className={styles.container}>
            <div className={styles.portfolioIntro}>
              <div><p className={styles.eyebrow}><T>Sovereign Portfolio</T></p><h2 id="portfolio-heading"><T>The whole picture.</T><br /><T>Thoughtfully connected.</T></h2></div>
              <p><T>A coordinated view of residency, real assets, capital and private client priorities. Each decision considered in the context of your wider objectives.</T></p>
            </div>
            <ol className={styles.portfolioStages}>
              {[
                ["Residency", "The starting point for a personal connection to Costa Rica."],
                ["Real Assets", "Place, purpose and the underlying asset."],
                ["Capital", "Structuring and preparation for disciplined review."],
                ["Private Client Coordination", "Professional relationships aligned around your objectives."],
              ].map(([title, description], index) => (
                <li key={title}><span className={styles.smallNumber}>0{index + 1}</span><h3><T>{title}</T></h3><p><T>{description}</T></p></li>
              ))}
            </ol>
            <TextLink href="/investment-framework" light><T>Our institutional framework</T></TextLink>
          </div>
        </section>

        <section id="proyectos" className={styles.opportunities} aria-labelledby="opportunities-heading">
          <div className={styles.editorialSplit}>
            <div className={styles.editorialCopy}>
              <p className={styles.eyebrow}><T>Private Investment Perspective</T></p>
              <h2 id="opportunities-heading"><T>Selected</T><br /><T>Opportunities.</T></h2>
              <p className={styles.lead}><T>Access begins with alignment.</T></p>
              <p><T>Selected opportunities are presented privately based on investor profile, availability and qualification.</T></p>
              <p><T>Public showcases provide institutional context for assets under review or in structuring. Further discussion remains subject to diligence and appropriate documentation.</T></p>
              <TextLink href={INQUIRY}><T>Discuss Investment Opportunities</T></TextLink>
              <div className={styles.projectReferences}>
                <Link href="/projects/plaza-los-mangos"><T>Plaza Los Mangos </T><ArrowUpRight size={14} aria-hidden="true" /></Link>
                <Link href="/projects/decima-avenida"><T>Décima Avenida </T><ArrowUpRight size={14} aria-hidden="true" /></Link>
              </div>
            </div>
            <figure className={styles.opportunityMedia}>
              <EditorialImage src={towerImage} alt="Décima Avenida tower and urban district concept rendering" />
              <figcaption><span><T>Décima Avenida</T></span><span><T>El Roble, Alajuela / Concept rendering</T></span></figcaption>
            </figure>
          </div>
        </section>

        <section id="costa-rica" className={styles.costaRica} aria-labelledby="costa-rica-heading">
          <div className={styles.countryGrid}>
            <figure className={styles.countryMedia}>
              <EditorialImage src="/costa-rica-coast.jpg" alt="Pacific coastline and open landscape in Guanacaste, Costa Rica" />
              <figcaption><T>Costa Rica / A longer view</T></figcaption>
            </figure>
            <div className={styles.countryCopy}>
              <p className={styles.eyebrow}><T>Why Costa Rica</T></p>
              <h2 id="costa-rica-heading"><T>A compelling destination</T><br /><T>for global citizens.</T></h2>
              <ol className={styles.countryReasons}>
                {reasons.map((reason, index) => (
                  <li key={reason.title}><span className={styles.smallNumber}>0{index + 1}</span><div><h3><T>{reason.title}</T></h3><p><T>{reason.text}</T></p></div></li>
                ))}
              </ol>
              <TextLink href={INQUIRY}><T>Explore your connection to Costa Rica</T></TextLink>
            </div>
          </div>
        </section>

        <section id="contacto" className={styles.finalCta} aria-labelledby="contact-heading">
          <div className={styles.container}>
            <div><p className={styles.eyebrow}><T>A private conversation</T></p><h2 id="contact-heading"><T>Your next chapter</T><br /><T>starts with a conversation.</T></h2></div>
            <div className={styles.finalActions}>
              <p><T>Share your perspective. Let us consider what comes next, together.</T></p>
              <EnquiryButton className={styles.goldButton}><T>Begin a Private Conversation </T><ArrowUpRight size={18} aria-hidden="true" /></EnquiryButton>
              <a href={siteConfig.whatsapp} className={styles.finalPhone}><Phone size={14} aria-hidden="true" /> <T>{siteConfig.phone}</T></a>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <Link href="/" aria-label={siteConfig.name + " home"}><Localized as="img" src={siteConfig.logo} alt={siteConfig.name} width={1672} height={941} /></Link>
              <p><T>A local perspective.</T><br /><T>An international outlook.</T></p>
            </div>
            <div><h3><T>Explore Marqués</T></h3><Localized as="nav" aria-label="Footer navigation">{siteConfig.nav.map(item => <Link key={item.href} href={item.href}><T>{item.label}</T></Link>)}</Localized></div>
            <div><h3><T>Institutional Perspective</T></h3><Localized as="nav" aria-label="Institutional resources"><Link href="/who-we-serve"><T>Who We Serve</T></Link><Link href="/what-we-do"><T>Capabilities</T></Link><Link href="/investment-framework"><T>Investment Framework</T></Link><Link href="/capital-partners"><T>Capital Partners</T></Link><Link href="/projects"><T>Institutional Opportunities</T></Link></Localized></div>
            <div className={styles.footerContact}><h3><T>Connect</T></h3><a href={"mailto:" + siteConfig.email}><Mail size={14} aria-hidden="true" /><T>{siteConfig.email}</T></a><a href={siteConfig.whatsapp}><Phone size={14} aria-hidden="true" /><T>{siteConfig.phone}</T></a><a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer"><T>WhatsApp </T><ArrowUpRight size={14} aria-hidden="true" /></a></div>
          </div>
          <p className={styles.disclaimer}><T>{siteConfig.disclaimer}</T></p>
          <div className={styles.footerBottom}><p>© {new Date().getFullYear()}<T> Marqués Advisory &amp; Investments. All rights reserved.</T></p><span><T>Costa Rica</T></span></div>
          <p className={styles.credits}><T>Photography: </T><a href="https://unsplash.com/photos/HOWad0OR_AQ" target="_blank" rel="noopener noreferrer"><T>César Badilla Miranda</T></a> / <a href="https://unsplash.com/photos/6W8f3vRk6vk" target="_blank" rel="noopener noreferrer"><T>Tom Podmore</T></a><T> / Unsplash.</T></p>
        </div>
      </footer>
    </div>
  )
}
