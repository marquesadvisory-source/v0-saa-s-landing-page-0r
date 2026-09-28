import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Localized, T } from "@/components/language-provider"
import { HomepageImage } from "@/components/homepage-image"
import { JsonLd } from "@/components/json-ld"
import { SiteHeader } from "@/components/site-header"
import { pageSeo } from "@/lib/page-seo"
import { createMetadata, webPageSchema } from "@/lib/seo"
import { footerNavigation } from "@/lib/footer-navigation"
import { siteConfig } from "@/lib/site"
import styles from "./homepage.module.css"

export const metadata = createMetadata(pageSeo["/"])

function EditorialLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return <Link href={href} className={light ? styles.lightLink : styles.textLink}>
    <span>{children}</span><ArrowUpRight size={16} strokeWidth={1.4} aria-hidden="true" />
  </Link>
}

export default function Home() {
  return <div className={styles.page} data-homepage="true">
    <SiteHeader />
    <JsonLd data={webPageSchema(pageSeo["/"])} />
    <main id="home-content" tabIndex={-1}>
      <section id="hero" className={styles.hero} aria-labelledby="hero-heading">
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>MARQUÉS ADVISORY &amp; INVESTMENTS</p>
            <h1 id="hero-heading"><T>Costa Rica Residence &amp; Real Assets.</T></h1>
            <span className={styles.goldRule} aria-hidden="true" />
            <p className={styles.heroDescription}><T>Private advisory for international clients, investors and capital partners through one trusted local relationship.</T></p>
          </div>
          <figure className={styles.heroMedia}>
            <HomepageImage src="/costa-rica-coast.jpg" alt="Pacific coastline and forested headland in Costa Rica" sizes="(max-width: 760px) 100vw, (max-width: 1200px) 56vw, 55vw" priority />
            <figcaption><T>Costa Rica</T><span aria-hidden="true">/</span><T>Pacific perspective</T></figcaption>
          </figure>
        </div>
      </section>

      <section id="two-paths" className={styles.paths} aria-labelledby="paths-heading">
        <div className={styles.container}>
          <div className={styles.pathsIntro}>
            <p className={styles.eyebrow}><T>One firm. Two principal paths.</T></p>
            <h2 id="paths-heading"><T>Two ways to work with Marqués.</T></h2>
          </div>
          <div className={styles.pathGrid}>
            <article id="private-clients" className={styles.path}>
              <div className={styles.pathHeader}><span>01</span><p className={styles.eyebrow}><T>Private Clients</T></p></div>
              <h3><T>Residence, real estate and private-client coordination in Costa Rica.</T></h3>
              <Localized as="nav" className={styles.pathLinks} aria-label="Private client services">
                <Link href="/residency"><T>Residence by Investment</T></Link>
                <Link href="/real-estate"><T>Luxury Real Estate</T></Link>
                <Link href="/services"><T>Private Client Services</T></Link>
              </Localized>
              <EditorialLink href="/services"><T>Explore Private Clients</T></EditorialLink>
            </article>

            <article className={styles.path}>
              <div className={styles.pathHeader}><span>02</span><p className={styles.eyebrow}><T>Investments &amp; Capital</T></p></div>
              <h3><T>Strategic real assets, development opportunities and capital relationships.</T></h3>
              <Localized as="nav" className={styles.pathLinks} aria-label="Investments and capital">
                <Link href="/investments"><T>Strategic Real Assets</T></Link>
                <Link href="/projects"><T>Selected Opportunities</T></Link>
                <Link href="/capital-partners"><T>Capital Partners</T></Link>
              </Localized>
              <EditorialLink href="/investments"><T>Explore Investments &amp; Capital</T></EditorialLink>
            </article>
          </div>
        </div>
      </section>

      <section id="about-marques" className={styles.about} aria-labelledby="about-heading">
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div>
              <p className={styles.eyebrow}><T>About Marqués</T></p>
              <h2 id="about-heading"><T>Local perspective. International standards.</T></h2>
            </div>
            <div className={styles.aboutCopy}>
              <p><T>Marqués Advisory &amp; Investments is a Costa Rica-focused private advisory firm serving international clients, investors and capital partners across residence, real estate and strategic real assets.</T></p>
              <p><T>We coordinate specialized local capabilities through one trusted relationship, helping clients navigate Costa Rica with greater clarity, discretion and continuity.</T></p>
            </div>
          </div>
          <Localized as="ul" className={styles.pillars} aria-label="Marqués areas of work">
            <li><span>01</span><h3><T>Residence</T></h3></li>
            <li><span>02</span><h3><T>Real Assets</T></h3></li>
            <li><span>03</span><h3><T>Relationships</T></h3></li>
          </Localized>
        </div>
      </section>

      <section id="residence" className={styles.residence} aria-labelledby="residence-heading">
        <div className={styles.residenceGrid}>
          <figure className={styles.residenceMedia}>
            <HomepageImage src="/images/private-client/service-residence.webp" alt="Couple walking through a contemporary tropical residence" sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 48vw" />
            <figcaption><T>Residence by Investment</T><span>·</span><T>Costa Rica</T></figcaption>
          </figure>
          <div className={styles.residenceCopy}>
            <p className={styles.eyebrow}><T>Private Clients</T><span aria-hidden="true">/</span><T>Costa Rica</T></p>
            <h2 id="residence-heading"><T>Residence in Costa Rica.</T><br /><T>Structured around your life and investment.</T></h2>
            <p><T>Marqués coordinates Costa Rica residence pathways for international clients through a private, structured and locally connected relationship.</T></p>
            <Localized as="ul" className={styles.residenceTypes} aria-label="Residence categories">
              <li><T>Investor</T></li>
              <li><T>Rentista</T></li>
              <li><T>Pensionado</T></li>
            </Localized>
            <EditorialLink href="/residency"><T>Explore Costa Rica Residence</T></EditorialLink>
          </div>
        </div>
      </section>

      <section id="investments-capital" className={styles.investments} aria-labelledby="investments-heading">
        <div className={styles.investmentsGrid}>
          <figure className={styles.investmentsMedia}>
            <HomepageImage src="/images/private-client/service-development.webp" alt="Architectural model reviewed by a development team" sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 48vw" />
            <figcaption><T>Development perspective · Illustrative concept</T></figcaption>
          </figure>
          <div className={styles.investmentsCopy}>
            <p className={styles.eyebrow}><T>Investments &amp; Capital</T></p>
            <h2 id="investments-heading"><T>Strategic Real Assets.</T><br /><T>Local Context. Institutional Perspective.</T></h2>
            <p><T>Marqués works across selected real assets, development opportunities and capital relationships in Costa Rica, connecting local context with disciplined investment conversations.</T></p>
            <div className={styles.assetAreas}>
              <p className={styles.areaLabel}><T>Selected areas of consideration</T></p>
              <p><T>Industrial · Hospitality · Development · Strategic Real Estate</T></p>
            </div>
            <div className={styles.investmentActions}>
              <EditorialLink href="/investments" light><T>Explore Investments</T></EditorialLink>
              <EditorialLink href="/projects" light><T>View Selected Opportunities</T></EditorialLink>
            </div>
          </div>
        </div>
      </section>

      <section id="relationships" className={styles.relationships} aria-labelledby="relationships-heading">
        <div className={styles.container}>
          <div className={styles.relationshipGrid}>
            <div>
              <p className={styles.eyebrow}><T>BUILT THROUGH RELATIONSHIPS</T></p>
              <h2 id="relationships-heading"><T>Local expertise. Global relationships.</T></h2>
            </div>
            <div className={styles.relationshipCopy}>
              <p><T>Marqués works across a network of professional, real estate, mobility and capital relationships to coordinate the expertise required by each engagement.</T></p>
              <div className={styles.relatedLinks}>
                <EditorialLink href="/who-we-serve"><T>Who We Serve</T></EditorialLink>
                <EditorialLink href="/capital-partners"><T>Capital Partners</T></EditorialLink>
                <EditorialLink href="/partners"><T>Become a Partner</T></EditorialLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className={styles.finalCta} aria-labelledby="contact-heading">
        <div className={styles.container}>
          <div className={styles.finalIntro}>
            <p className={styles.eyebrow}><T>A PRIVATE CONVERSATION</T></p>
            <h2 id="contact-heading"><T>Begin with a conversation.</T></h2>
          </div>
          <div className={styles.conversionPaths}>
            <article>
              <p className={styles.eyebrow}><T>Private Clients</T></p>
              <p><T>Residence, real estate and private client coordination.</T></p>
              <EditorialLink href="/contact" light><T>Contact Marqués</T></EditorialLink>
            </article>
            <article>
              <p className={styles.eyebrow}><T>Investments &amp; Capital</T></p>
              <p><T>Real assets, development and capital relationships.</T></p>
              <EditorialLink href="/institutional-inquiry" light><T>Institutional Enquiry</T></EditorialLink>
            </article>
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
          {footerNavigation.map((group, index) => <div className={styles.footerGroup} key={group.label}>
            <h3><T>{group.label}</T></h3>
            <Localized as="nav" aria-label={group.label}>
              {group.links.map(item => <Link key={item.href} href={item.href}><T>{item.label}</T></Link>)}
              {index === 3 && <><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><a href={siteConfig.whatsapp}>{siteConfig.phone}</a></>}
            </Localized>
          </div>)}
        </div>
        <p className={styles.disclaimer}><T>{siteConfig.disclaimer}</T></p>
        <div className={styles.footerBottom}><p>© {new Date().getFullYear()}<T> Marqués Advisory &amp; Investments. All rights reserved.</T></p><span><T>Costa Rica</T></span></div>
        <p className={styles.credits}><T>Photography: </T><a href="https://unsplash.com/photos/HOWad0OR_AQ" target="_blank" rel="noopener noreferrer"><T>César Badilla Miranda</T></a> / <a href="https://unsplash.com/photos/6W8f3vRk6vk" target="_blank" rel="noopener noreferrer"><T>Tom Podmore</T></a><T> / Unsplash.</T></p>
      </div>
    </footer>
  </div>
}
