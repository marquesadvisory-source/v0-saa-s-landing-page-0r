import type { Metadata } from "next"
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react"
import { EnquiryButton } from "@/components/enquiry-provider"
import { LocaleLink as Link } from "@/components/locale-link"
import { ResidencyFooter } from "@/components/residency-editorial"
import { SiteHeader } from "@/components/site-header"
import { siteConfig } from "@/lib/site"
import { FeaturedPropertyCards, type FeaturedProperty } from "./featured-properties"
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
    narrative: [
      "Completed in 2025, Casa Ensueño is a refined estate set on over half an acre within the Los Almendros enclave at Hacienda Pinilla. Offering 5,156 sq ft, the single-level residence includes five spacious en-suite bedrooms, thoughtfully arranged for privacy and comfortable indoor-outdoor living.",
      "Expansive glass openings connect the interiors to a private resort-style pool and covered terrace, an inviting setting for gathering with family and friends throughout the year.",
      "Its location, distinctive architecture and high-end appeal may be attractive to buyers considering rental use as well as personal enjoyment. Any rental projection should be assessed separately; no financial return is represented.",
    ],
    facts: [
      { value: "5,156", label: "SQ FT" }, { value: "5", label: "BEDROOMS" },
      { value: "5 + 2", label: "FULL + POWDER BATHROOMS" }, { value: "Private", label: "SWIMMING POOL" },
      { value: "4", label: "PARKING SPACES" }, { value: "1", label: "FLOOR" },
    ],
    images: [
      { file: "https://www.haciendapinilla.com/assets/real-estate/51/51-1.jpg?v=1777474943", alt: "Casa Ensueño official property gallery photo 1" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/51/51-2.jpg?v=1777474943", alt: "Casa Ensueño official property gallery photo 2" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/51/51-3.jpg?v=1777474944", alt: "Casa Ensueño official property gallery photo 3" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/51/51-4.jpg?v=1777474944", alt: "Casa Ensueño official property gallery photo 4" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/51/51-5.jpg?v=1777474945", alt: "Casa Ensueño official property gallery photo 5" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/51/51-6.jpg?v=1777474945", alt: "Casa Ensueño official property gallery photo 6" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/51/51-7.jpg?v=1777474946", alt: "Casa Ensueño official property gallery photo 7" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/51/51-8.jpg?v=1777474947", alt: "Casa Ensueño official property gallery photo 8" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/51/51-9.jpg?v=1777474947", alt: "Casa Ensueño official property gallery photo 9" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/51/51-10.jpg?v=1777474948", alt: "Casa Ensueño official property gallery photo 10" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/51/51-11.jpg?v=1777474949", alt: "Casa Ensueño official property gallery photo 11" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/51/51-12.jpg?v=1777474950", alt: "Casa Ensueño official property gallery photo 12" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/51/51-13.jpg?v=1777474951", alt: "Casa Ensueño official property gallery photo 13" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/51/51-14.jpg?v=1777474952", alt: "Casa Ensueño official property gallery photo 14" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/51/51-15.jpg?v=1777474953", alt: "Casa Ensueño official property gallery photo 15" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/51/51-16.jpg?v=1777474953", alt: "Casa Ensueño official property gallery photo 16" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/51/51-17.jpg?v=1777474954", alt: "Casa Ensueño official property gallery photo 17" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/51/51-18.jpg?v=1777474954", alt: "Casa Ensueño official property gallery photo 18" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/51/51-19.jpg?v=1777474955", alt: "Casa Ensueño official property gallery photo 19" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/51/51-20.jpg?v=1777474955", alt: "Casa Ensueño official property gallery photo 20" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/51/51-21.jpg?v=1777474956", alt: "Casa Ensueño official property gallery photo 21" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/51/51-22.jpg?v=1777474957", alt: "Casa Ensueño official property gallery photo 22" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/51/51-23.jpg?v=1777474958", alt: "Casa Ensueño official property gallery photo 23" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/51/51-24.jpg?v=1777474958", alt: "Casa Ensueño official property gallery photo 24" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/51/51-25.jpg?v=1777474958", alt: "Casa Ensueño official property gallery photo 25" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/51/51-26.jpg?v=1777474958", alt: "Casa Ensueño official property gallery photo 26" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/51/51-27.jpg?v=1777474958", alt: "Casa Ensueño official property gallery photo 27" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/51/51-28.jpg?v=1777474959", alt: "Casa Ensueño official property gallery photo 28" },
    ],
  },
  {
    name: "Villa Senderos",
    kind: "residence",
    description: "A refined four-bedroom tropical villa with private pool, generous terrace and access to a community pool.",
    price: "$999,000",
    highlights: "4 bedrooms · 4 full baths + 1 powder room · 4,553 sq ft",
    narrative: [
      "Villa Senderos offers a refined take on tropical luxury within the exclusive Senderos community at Hacienda Pinilla. This move-in-ready, four-bedroom residence combines sophisticated comfort with effortless indoor-outdoor living.",
      "The home features four full bathrooms, a powder room, private pool, expansive terrace and access to a community pool, framed by lush tropical landscaping. With two floors and parking for two vehicles, the residence is designed for privacy, relaxation and time together.",
      "Whether enjoyed as a personal retreat, vacation residence or prospective investment property, Villa Senderos provides a sophisticated connection to the natural setting of Hacienda Pinilla. Any financial or rental performance should be evaluated separately.",
    ],
    facts: [
      { value: "4,553", label: "SQ FT" }, { value: "4", label: "BEDROOMS" },
      { value: "4 + 1", label: "FULL + POWDER BATHROOMS" }, { value: "Private + shared", label: "POOL ACCESS" },
      { value: "2", label: "PARKING SPACES" }, { value: "2", label: "FLOORS" },
    ],
    images: [
      { file: "https://www.haciendapinilla.com/assets/real-estate/64/64-1.jpg?v=1792693171", alt: "Villa Senderos official property gallery photo 1" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/64/64-2.jpg?v=1792693169", alt: "Villa Senderos official property gallery photo 2" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/64/64-3.jpg?v=1792693172", alt: "Villa Senderos official property gallery photo 3" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/64/64-4.jpg?v=1792693166", alt: "Villa Senderos official property gallery photo 4" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/64/64-5.jpg?v=1793025172", alt: "Villa Senderos official property gallery photo 5" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/64/64-6.jpg?v=1792693168", alt: "Villa Senderos official property gallery photo 6" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/64/64-7.jpg?v=1792693162", alt: "Villa Senderos official property gallery photo 7" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/64/64-8.jpg?v=1792693162", alt: "Villa Senderos official property gallery photo 8" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/64/64-9.jpg?v=1792693163", alt: "Villa Senderos official property gallery photo 9" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/64/64-10.jpg?v=1792693161", alt: "Villa Senderos official property gallery photo 10" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/64/64-11.jpg?v=1792693163", alt: "Villa Senderos official property gallery photo 11" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/64/64-12.jpg?v=1792693165", alt: "Villa Senderos official property gallery photo 12" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/64/64-13.jpg?v=1793025163", alt: "Villa Senderos official property gallery photo 13" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/64/64-14.jpg?v=1792693170", alt: "Villa Senderos official property gallery photo 14" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/64/64-15.jpg?v=1793025157", alt: "Villa Senderos official property gallery photo 15" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/64/64-16.jpg?v=1792693167", alt: "Villa Senderos official property gallery photo 16" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/64/64-17.jpg?v=1792693171", alt: "Villa Senderos official property gallery photo 17" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/64/64-18.jpg?v=1792693171", alt: "Villa Senderos official property gallery photo 18" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/64/64-19.jpg?v=1792693167", alt: "Villa Senderos official property gallery photo 19" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/64/64-20.jpg?v=1792693170", alt: "Villa Senderos official property gallery photo 20" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/64/64-21.jpg?v=1792693169", alt: "Villa Senderos official property gallery photo 21" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/64/64-22.jpg?v=1792693171", alt: "Villa Senderos official property gallery photo 22" },
      { file: "https://www.haciendapinilla.com/assets/real-estate/64/64-23.jpg?v=1792693170", alt: "Villa Senderos official property gallery photo 23" },
    ],
  },
  {
    name: "El Jaguar",
    kind: "homesite",
    description: "An opportunity to acquire a homesite and create a residence tailored to your family.",
    narrative: [
      "El Jaguar presents a different path to living at Hacienda Pinilla: choosing a residential homesite and developing a residence around your own architectural vision, subject to the applicable community and construction requirements.",
      "The accompanying images illustrate the community context. Contact Marqués for confirmed lot sizes, pricing, current availability and applicable development guidelines.",
    ],
    facts: [ { value: "Homesites", label: "PROPERTY TYPE" }, { value: "Custom", label: "RESIDENCE POTENTIAL" }, { value: "On request", label: "LOT PRICING" } ],
    images: [
      { file: "el-jaguar.webp", alt: "Illustration of the El Jaguar homesite community", caption: "Community illustration" },
      { file: "el-jaguar-aerial.webp", alt: "The coastline and grounds of Hacienda Pinilla seen from the El Jaguar virtual tour", caption: "Aerial view from the El Jaguar tour" },
    ],
  },
  {
    name: "Las Lapas",
    kind: "homesite",
    description: "Residential land near the golf setting, offering a canvas for a custom-built home.",
    narrative: [
      "Las Lapas offers residential homesites for buyers who prefer to create their own residence rather than purchase an existing home. Its setting within Hacienda Pinilla may appeal to those who value both the coastal lifestyle and proximity to golf.",
      "Review the site plan and its enlarged detail, then speak with Marqués about available lots, dimensions, current prices and any construction or access conditions that apply.",
    ],
    facts: [ { value: "Homesites", label: "PROPERTY TYPE" }, { value: "Custom", label: "RESIDENCE POTENTIAL" }, { value: "On request", label: "LOT PRICING" } ],
    images: [
      { file: "las-lapas.webp", alt: "Las Lapas site plan showing residential lots within Hacienda Pinilla", caption: "Community site plan" },
      { file: "las-lapas-plan-detail.webp", alt: "Enlarged section of the Las Lapas lot layout beside the golf course", caption: "Site plan detail" },
    ],
  },
] satisfies readonly FeaturedProperty[]

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
        <FeaturedPropertyCards opportunities={opportunities} />
        <p className={styles.availability}>Selected opportunities shown for preliminary review. No representation is made regarding current availability or included amenity memberships.</p>
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
