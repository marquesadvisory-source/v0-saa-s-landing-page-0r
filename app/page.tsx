import { Localized } from "@/components/language-provider"
import { SeoImage } from "@/components/seo-image"
import { pageSeo } from "@/lib/page-seo"
import { createMetadata, webPageSchema } from "@/lib/seo"
import { JsonLd } from "@/components/json-ld"
import { T } from "@/components/language-provider"
import Link from "next/link"
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { footerNavigation } from "@/lib/footer-navigation"
import { siteConfig } from "@/lib/site"
import styles from "./home.module.css"

export const metadata = createMetadata(pageSeo["/"])

const towerImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/D%C3%A9cima%20Avenida%20Rdr-fqy4LI79dGShBO9WtIpkK9WaN4dQ2e.jpg"

function TextLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
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

export default function Home() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <JsonLd data={webPageSchema(pageSeo["/"])} />
      <main id="home-content" tabIndex={-1}>
        <section id="hero" className={styles.hero} aria-labelledby="hero-heading">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><T>Marqués Advisory &amp; Investments</T></p>
            <h1 id="hero-heading"><span className={styles.heroLead}><T>YOUR COSTA RICAN PARTNER FOR</T></span>{" "}<span><T>RESIDENCE BY INVESTMENT</T></span>{" "}<span><T>AND STRATEGIC REAL ASSETS</T></span></h1>
            <div className={styles.goldRule} />
            <p className={styles.heroDescription}><T>Private advisory, co-investment and project structuring through one trusted local relationship.</T></p>
            <div className={styles.heroActions}>
              <Link href="/residency" className={styles.primaryButton}><T>
                Explore Residence by Investment </T><ArrowRight size={17} strokeWidth={1.4} aria-hidden="true" />
              </Link>
              <TextLink href="/investments"><T>Explore Investments</T></TextLink>
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

        <Localized as="section" className={styles.pathways} aria-label="Private Clients and Investments">
          <div className={styles.container}>
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}><T>One firm. Two principal paths.</T></p>
              <h2><T>Private objectives.</T><br /><T>Investment perspective.</T></h2>
            </div>
            <div className={styles.pathwayGrid}>
              <article className={styles.pathway}>
                <div className={styles.pathwayMedia}><EditorialImage src="/architecture-interior.jpg" alt="Contemporary Costa Rican residence with natural materials and an open interior" /></div>
                <div className={styles.pathwayTop}><p className={styles.eyebrow}><T>Private Clients</T></p><span className={styles.smallNumber}>01</span></div>
                <h3><T>Residence, real estate and private client services.</T></h3>
                <p><T>Personal objectives considered through a local relationship and coordinated professional perspective.</T></p>
                <ul className={styles.pathwayLinks}>
                  <li><Link href="/residency"><T>Residence by Investment</T><ArrowUpRight size={15} aria-hidden="true" /></Link></li>
                  <li><Link href="/real-estate"><T>Luxury Real Estate</T><ArrowUpRight size={15} aria-hidden="true" /></Link></li>
                  <li><Link href="/services"><T>Private Client Services</T><ArrowUpRight size={15} aria-hidden="true" /></Link></li>
                </ul>
              </article>
              <article className={styles.pathway}>
                <div className={styles.pathwayMedia}><EditorialImage src={towerImage} alt="Mixed-use urban district concept in Costa Rica" className={styles.tower} /></div>
                <div className={styles.pathwayTop}><p className={styles.eyebrow}><T>Investments &amp; Capital</T></p><span className={styles.smallNumber}>02</span></div>
                <h3><T>Strategic real assets and capital relationships.</T></h3>
                <p><T>A Costa Rican investment perspective for private investors and institutional counterparties.</T></p>
                <ul className={styles.pathwayLinks}>
                  <li><Link href="/investments"><T>Strategic Real Assets</T><ArrowUpRight size={15} aria-hidden="true" /></Link></li>
                  <li><Link href="/projects"><T>Selected Opportunities</T><ArrowUpRight size={15} aria-hidden="true" /></Link></li>
                  <li><Link href="/capital-partners"><T>Capital Partners</T><ArrowUpRight size={15} aria-hidden="true" /></Link></li>
                </ul>
              </article>
            </div>
          </div>
        </Localized>

        <section className={styles.context} aria-labelledby="context-heading">
          <div className={styles.editorialSplit}>
            <div className={styles.editorialCopy}>
              <p className={styles.eyebrow}><T>Investment Perspective</T></p>
              <h2 id="context-heading"><T>Local context.</T><br /><T>Considered capital.</T></h2>
              <p><T>Marqués works within Costa Rica’s real-assets landscape and engages with capital partners and counterparties where objectives may align.</T></p>
              <TextLink href="/projects"><T>View Selected Opportunities</T></TextLink>
            </div>
            <figure className={styles.contextMedia}>
              <EditorialImage src="/projects/plaza-los-mangos.png" alt="Costa Rican mixed-use real asset concept rendering" />
              <figcaption><T>Institutional opportunity context</T></figcaption>
            </figure>
          </div>
        </section>

        <section id="contacto" className={styles.finalCta} aria-labelledby="contact-heading">
          <div className={styles.container}>
            <div className={styles.conversionIntro}><p className={styles.eyebrow}><T>A considered first conversation</T></p><h2 id="contact-heading"><T>Begin with the path</T><br /><T>that fits your objectives.</T></h2></div>
            <div className={styles.conversionPaths}>
              <div><p className={styles.eyebrow}><T>Private Clients</T></p><p><T>Residence, real estate or personal coordination in Costa Rica.</T></p><TextLink href="/contact" light><T>Contact Marqués</T></TextLink></div>
              <div><p className={styles.eyebrow}><T>Investments &amp; Capital</T></p><p><T>Investment objectives, capital relationships and institutional counterparties.</T></p><TextLink href="/institutional-inquiry" light><T>Begin Institutional Inquiry</T></TextLink></div>
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
            {footerNavigation.map((group, index) => <div className={styles.footerGroup} key={group.label}><h3><T>{group.label}</T></h3><Localized as="nav" aria-label={group.label}>{group.links.map(item => <Link key={item.href} href={item.href}><T>{item.label}</T></Link>)}{index === 3 && <><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><a href={siteConfig.whatsapp}>{siteConfig.phone}</a></>}</Localized></div>)}
          </div>
          <p className={styles.disclaimer}><T>{siteConfig.disclaimer}</T></p>
          <div className={styles.footerBottom}><p>© {new Date().getFullYear()}<T> Marqués Advisory &amp; Investments. All rights reserved.</T></p><span><T>Costa Rica</T></span></div>
          <p className={styles.credits}><T>Photography: </T><a href="https://unsplash.com/photos/HOWad0OR_AQ" target="_blank" rel="noopener noreferrer"><T>César Badilla Miranda</T></a> / <a href="https://unsplash.com/photos/6W8f3vRk6vk" target="_blank" rel="noopener noreferrer"><T>Tom Podmore</T></a><T> / Unsplash.</T></p>
        </div>
      </footer>
    </div>
  )
}
