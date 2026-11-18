import type { Metadata } from "next"
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react"
import { EnquiryButton } from "@/components/enquiry-provider"
import { LocaleLink as Link } from "@/components/locale-link"
import { ResidencyFooter } from "@/components/residency-editorial"
import { SiteHeader } from "@/components/site-header"
import { siteConfig } from "@/lib/site"
import { PropertyGallery, type PropertyImage } from "./property-gallery"
import styles from "./hacienda-pinilla.module.css"

export const metadata: Metadata = {
  title: "Hacienda Pinilla | Marqués Luxury Real Estate",
  description: "Explore Hacienda Pinilla's championship golf, gated coastal estate, Beach Club and selected residential opportunities through Marqués Advisory & Investments.",
  robots: { index: false, follow: false }, // Preview only. Revisit when translations and property details are approved.
}

const photos = {
  hero: "https://www.haciendapinilla.com/assets/img/amenities/beach-club/beach-club-1.jpg",
  golf: "https://www.haciendapinilla.com/assets/img/amenities/golf/golf-1.jpg",
  beach: "https://www.haciendapinilla.com/assets/img/amenities/beach-club/main.jpg",
  map: "https://www.haciendapinilla.com/assets/img/maps/hp-map.png",
} as const

const opportunities = [
  {
    name: "Casa Ensueño",
    kind: "residence",
    description: "Completed in 2025 in Los Almendros, this five-bedroom estate pairs expansive glass living spaces with a private pool and covered terrace.",
    price: "$3,125,000",
    highlights: "5 beds · 5 full baths + 2 powder rooms · 5,156 sq ft",
    images: [
      { file: "casa-ensueno.webp", alt: "Casa Ensueño and its private pool at dusk" },
      { file: "casa-ensueno-living.webp", alt: "Casa Ensueño living room opening onto the terrace" },
      { file: "casa-ensueno-terrace.webp", alt: "Casa Ensueño covered terrace beside the pool" },
    ],
  },
  {
    name: "Villa Senderos",
    kind: "residence",
    description: "A four-bedroom villa with a private pool and a spacious outdoor terrace.",
    images: [
      { file: "villa-senderos.webp", alt: "Villa Senderos dining and kitchen area opening onto a garden" },
      { file: "villa-senderos-bedroom.webp", alt: "A bedroom at Villa Senderos" },
      { file: "villa-senderos-bathroom.webp", alt: "A double vanity and shower at Villa Senderos" },
    ],
  },
  {
    name: "El Jaguar",
    kind: "homesite",
    description: "Invest in a residential lot surrounded by nature, with room to build a home designed around your family.",
    images: [
      { file: "el-jaguar.webp", alt: "Illustration of the El Jaguar homesite community", caption: "Community illustration" },
      { file: "el-jaguar-aerial.webp", alt: "The coastline and grounds of Hacienda Pinilla seen from the El Jaguar virtual tour", caption: "Aerial view from the El Jaguar tour" },
    ],
  },
  {
    name: "Las Lapas",
    kind: "homesite",
    description: "Invest in a residential lot in Hacienda Pinilla’s golf-course community and build a residence of your own.",
    images: [
      { file: "las-lapas.webp", alt: "Las Lapas site plan showing residential lots within Hacienda Pinilla", caption: "Community site plan" },
      { file: "las-lapas-plan-detail.webp", alt: "Enlarged section of the Las Lapas lot layout beside the golf course", caption: "Site plan detail" },
    ],
  },
] satisfies readonly {
  name: string
  kind: "residence" | "homesite"
  description: string
  price?: string
  highlights?: string
  images: readonly [PropertyImage, PropertyImage, ...PropertyImage[]]
}[]

const estateHighlights = [
  { number: "4,500+", label: "Gated acres" },
  { number: "18", label: "Golf holes" },
  { number: "72", label: "Course par" },
  { number: "Pacific", label: "Coastal setting" },
] as const

export default function HaciendaPinillaPage() {
  return <div className={styles.shell}>
    <SiteHeader />
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="hacienda-title">
        <img className={styles.heroImage} src={photos.hero} alt="Hacienda Pinilla Beach Club overlooking the Pacific coast" fetchPriority="high" />
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <p className={styles.kicker}>MARQUÉS LUXURY REAL ESTATE <span aria-hidden="true">/</span> GUANACASTE, COSTA RICA</p>
          <h1 id="hacienda-title">Hacienda Pinilla</h1>
          <p>Private residences and homesites on Costa Rica’s Pacific coast.</p>
          <a href="#opportunities-title" className={styles.heroCta}>View homes and homesites <ArrowDownRight size={18} aria-hidden="true" /></a>
        </div>
        <div className={styles.heroBrand}>HACIENDA PINILLA <span>—</span> PRESENTED BY MARQUÉS</div>
      </section>

      <section className={styles.opportunities} aria-labelledby="opportunities-title">
        <div className={styles.sectionHeading}><h2 id="opportunities-title">Private residences <em>and homesites</em></h2><p className={styles.sectionNote}>Property details, pricing and availability are confirmed privately through Marqués.</p></div>
        <div className={styles.propertyGrid}>
          {opportunities.map((item) => {
            const isHomesite = item.kind === "homesite"
            const message = encodeURIComponent(`Hello Marqués, I would like information about ${item.name} at Hacienda Pinilla.`)
            const linkLabel = isHomesite ? "Request homesite details" : "Request property details"

            return (
              <article className={styles.property} key={item.name}>
                <PropertyGallery name={item.name} kind={item.kind} images={item.images} />
                <div className={styles.propertyBody}>
                  <p className={styles.propertyType}>{isHomesite ? "Homesites · Land investment" : "Private residence"}</p>
                  <h3>{item.name}</h3>
                  {"price" in item && item.price && <p className={styles.propertyPrice}><span>ASKING PRICE</span> {item.price}</p>}
                  <p className={styles.propertyDescription}>{item.description}</p>
                  {"highlights" in item && item.highlights && <p className={styles.propertyHighlights}>{item.highlights}</p>}
                  {item.name === "Casa Ensueño" && <a className={styles.exploreResidence} href="#casa-ensueno-spotlight">Explore Casa Ensueño <ArrowDownRight size={17} aria-hidden="true" /></a>}
                  <a href={siteConfig.whatsapp + "?text=" + message} target="_blank" rel="noopener noreferrer" className={styles.propertyLink} aria-label={`${linkLabel} for ${item.name} from Marqués`}>
                    {linkLabel} <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
        <p className={styles.availability}>Selected opportunities shown for preliminary review. No representation is made regarding current availability or included amenity memberships.</p>
      </section>

      <section className={styles.spotlight} id="casa-ensueno-spotlight" aria-labelledby="casa-ensueno-heading">
        <div className={styles.spotlightLead}>
          <div>
            <p className={styles.kickerDark}>FEATURED RESIDENCE / LOS ALMENDROS</p>
            <h2 id="casa-ensueno-heading">Casa Ensueño.<br /><em>Made for extraordinary living.</em></h2>
          </div>
          <div className={styles.spotlightIntro}>
            <p className={styles.spotlightPrice}>$3,125,000 <span>USD · ASKING PRICE</span></p>
            <p>Completed in 2025, Casa Ensueño is an elegant single-level estate set on more than half an acre within Los Almendros at Hacienda Pinilla. Spacious en-suite bedrooms and open, light-filled interiors offer a natural balance of privacy and connection.</p>
          </div>
        </div>
        <div className={styles.spotlightFacts} aria-label="Casa Ensueño property characteristics">
          <div><strong>5,156</strong><span>SQ FT · RESIDENCE</span></div>
          <div><strong>5</strong><span>EN-SUITE BEDROOMS</span></div>
          <div><strong>5 + 2</strong><span>FULL BATHS + POWDER ROOMS</span></div>
          <div><strong>Private</strong><span>POOL & COVERED TERRACE</span></div>
          <div><strong>4</strong><span>PARKING SPACES</span></div>
          <div><strong>1</strong><span>FLOOR</span></div>
        </div>
        <div className={styles.spotlightGallery}>
          <figure className={styles.spotlightHeroPhoto}>
            <img src="/images/real-estate/hacienda-pinilla/casa-ensueno.webp" alt="Casa Ensueño private swimming pool and residence at dusk" loading="lazy" />
            <figcaption>PRIVATE POOL & ARCHITECTURE</figcaption>
          </figure>
          <figure>
            <img src="/images/real-estate/hacienda-pinilla/casa-ensueno-living.webp" alt="Casa Ensueño open-plan living space" loading="lazy" />
            <figcaption>INTERIOR LIVING</figcaption>
          </figure>
          <figure>
            <img src="/images/real-estate/hacienda-pinilla/casa-ensueno-terrace.webp" alt="Casa Ensueño covered terrace and poolside space" loading="lazy" />
            <figcaption>COVERED TERRACE</figcaption>
          </figure>
        </div>
        <div className={styles.spotlightBottom}>
          <p>Floor-to-ceiling openings connect the main living areas with a private, resort-style pool and a covered terrace. The estate offers an inviting setting for entertaining or simply enjoying the rhythms of coastal life. Its location and design may also appeal to buyers considering managed rental use, subject to individual financial, legal and operating review.</p>
          <a className={styles.spotlightInquiry} href={siteConfig.whatsapp + "?text=" + encodeURIComponent("Hello Marqués, I would like to request the complete photo gallery, property information and a private viewing of Casa Ensueño at Hacienda Pinilla (USD 3,125,000).")} target="_blank" rel="noopener noreferrer">Request full gallery & private viewing <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
      </section>

      <section className={styles.intro} id="discover" aria-labelledby="estate-intro">
        <div className={styles.introLabel}><span>01</span> THE DESTINATION</div>
        <div>
          <h2 id="estate-intro">An entire world,<br /><em>within the gates.</em></h2>
          <p>Set along Costa Rica's Pacific coast, Hacienda Pinilla spans more than 4,500 gated acres. Distinct residential neighborhoods, recreational facilities and a natural coastal landscape create a setting designed for a more considered way of life.</p>
          <p className={styles.smallNote}>The estate includes controlled entrances and a security office. Specific access privileges and services vary by community and membership.</p>
        </div>
      </section>

      <section className={styles.stats} aria-label="Estate highlights">
        {estateHighlights.map(item => <div key={item.label}><strong>{item.number}</strong><span>{item.label}</span></div>)}
      </section>

      <section className={styles.mapSection} aria-labelledby="map-title">
        <div className={styles.mapHeading}>
          <div><p className={styles.kickerDark}>EXPLORE THE ESTATE</p><h2 id="map-title">See the bigger picture.</h2></div>
          <p>Discover the scale of Hacienda Pinilla, from its Pacific coastline and natural corridors to its interconnected residential and recreational areas.</p>
        </div>
        <figure className={styles.mapFigure}>
          <img src={photos.map} alt="Official Hacienda Pinilla estate trail map, showing the coastline, internal routes and landscape" loading="lazy" />
          <figcaption>Official estate and mountain-bike trail map. Trail routes are highlighted; this is not a residential lot plan.</figcaption>
        </figure>
        <details className={styles.mapDetails}>
          <summary>View larger map <ArrowUpRight size={16} aria-hidden="true" /></summary>
          <div className={styles.mapZoom}><img src={photos.map} alt="Enlarged Hacienda Pinilla estate and trails map" loading="lazy" /></div>
        </details>
      </section>

      <section className={styles.golfSection} aria-labelledby="golf-title">
        <div className={styles.golfImageWrap}><img src={photos.golf} alt="The championship golf course at Hacienda Pinilla" loading="lazy" /></div>
        <div className={styles.golfCopy}>
          <p className={styles.kicker}>02 <span aria-hidden="true">/</span> THE SIGNATURE EXPERIENCE</p>
          <h2 id="golf-title">Championship golf.<br /><em>Designed by Mike Young.</em></h2>
          <p>An 18-hole, par-72 championship course stretching up to 7,200 yards, shaped by acclaimed golf architect Mike Young to follow the natural contours of Hacienda Pinilla.</p>
          <div className={styles.golfFacts}><div><strong>18</strong><span>HOLES</span></div><div><strong>PAR 72</strong><span>CHAMPIONSHIP COURSE</span></div><div><strong>7,200</strong><span>YARDS · UP TO</span></div></div>
          <p className={styles.golfFootnote}>The course has been recognized through the Audubon Cooperative Sanctuary Program.</p>
        </div>
      </section>

      <section className={styles.lifestyle} aria-labelledby="lifestyle-title">
        <div className={styles.sectionHeading}><p className={styles.kickerDark}>03 / THE LIFESTYLE</p><h2 id="lifestyle-title">A different rhythm<br /><em>of coastal living.</em></h2></div>
        <div className={styles.lifestyleGrid}>
          <figure className={styles.lifestyleImage}><img src={photos.beach} alt="Hacienda Pinilla Beach Club at sunset" loading="lazy" /><figcaption>THE BEACH CLUB</figcaption></figure>
          <div className={styles.lifestyleText}><h3>Everything, in its own time.</h3><p>Beachfront relaxation, golf, horseback riding, tennis, pickleball, surfing and trails through Guanacaste's distinctive landscapes.</p><p>Whether you're searching for a family retreat or a lasting connection to Costa Rica, the lifestyle extends well beyond the front door.</p></div>
        </div>
      </section>

      <section className={styles.contact} aria-labelledby="contact-title">
        <p className={styles.kicker}>YOUR PRIVATE ADVISOR IN COSTA RICA</p>
        <h2 id="contact-title">Discover Hacienda Pinilla<br /><em>through Marqués.</em></h2>
        <p>For property information, private viewings and a thoughtful introduction to Costa Rica's luxury residential market, begin a conversation with our team.</p>
        <div className={styles.contactActions}>
          <EnquiryButton kind="real-estate" subject="Hacienda Pinilla" className={styles.contactButton}>Private enquiry <ArrowUpRight size={18} aria-hidden="true" /></EnquiryButton>
          <a href={siteConfig.whatsapp + "?text=" + encodeURIComponent("Hello Marqués, I would like to explore Hacienda Pinilla real estate.")} target="_blank" rel="noopener noreferrer" className={styles.contactSecondary}>Speak with Marqués on WhatsApp</a>
        </div>
        <div className={styles.back}><MapPin size={15} aria-hidden="true" /> Santa Cruz, Guanacaste, Costa Rica <span aria-hidden="true">·</span> <Link href="/real-estate">Explore Marqués Real Estate</Link></div>
      </section>
    </main>
    <ResidencyFooter />
  </div>
}
