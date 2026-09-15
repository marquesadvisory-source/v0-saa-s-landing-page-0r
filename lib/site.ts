export const siteConfig = {
  name: "Marqués Advisory & Investments",
  shortName: "Marqués Advisory",
  domain: "https://marquescr.com",
  tagline: "From origination to monetization",
  description:
    "Private advisory for residency, real assets and investment opportunities in Costa Rica.",
  locale: "en_US",
  email: "info@marquescr.com",
  phone: "+506 7267-9806",
  whatsapp: "https://wa.me/50672679806",
  linkedIn: "https://www.linkedin.com/company/marquesadvisory",
  logo: "/images/marques-official.png",
  ogImage: "/images/marques-official.png",
  disclaimer:
    "Marqués Advisory & Investments does not present this website as a public offering of securities, investment solicitation, regulated financial advice or guarantee of investment performance. All opportunities are evaluated privately and remain subject to appropriate diligence, documentation, regulatory compliance and legal review.",
  nav: [
    { label: "Become a Resident in Costa Rica", href: "/residency" },
    { label: "Investments", href: "/investments" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const

export const siteRoutes = [
  "/services",
  "/investments",
  "/contact",
  "/residency",
  "/residency/about-costa-rica",
  "/residency/real-estate",
  "/privacy",
  "/",
  "/about",
  "/who-we-serve",
  "/what-we-do",
  "/investment-framework",
  "/capital-partners",
  "/projects",
  "/projects/plaza-los-mangos",
  "/projects/decima-avenida",
  "/institutional-inquiry",
] as const
