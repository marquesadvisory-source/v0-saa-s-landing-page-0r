export const siteConfig = {
  name: "Marqués Advisory & Investments",
  shortName: "Marqués Advisory",
  domain: "https://marquesai.vercel.app",
  tagline: "From origination to monetization",
  description:
    "A relationship-driven real assets platform focused on origination, structuring and capital readiness in Costa Rica.",
  locale: "en_US",
  email: "marquesadvisory@gmail.com",
  phone: "+506 7267-9806",
  whatsapp: "https://wa.me/50672679806",
  linkedIn: "https://www.linkedin.com/company/marquesadvisory",
  logo: "/logo.jpg",
  ogImage: "/logo.jpg",
  disclaimer:
    "Marqués Advisory & Investments does not present this website as a public offering of securities, investment solicitation, regulated financial advice or guarantee of investment performance. All opportunities are evaluated privately and remain subject to appropriate diligence, documentation, regulatory compliance and legal review.",
  nav: [
    { label: "Platform", href: "/about" },
    { label: "Who We Serve", href: "/who-we-serve" },
    { label: "Capabilities", href: "/what-we-do" },
    { label: "Opportunities", href: "/projects" },
    { label: "Investment Framework", href: "/#tesis" },
    { label: "Capital Partners", href: "/capital-partners" },
  ],
} as const

export const siteRoutes = [
  "/",
  "/about",
  "/who-we-serve",
  "/what-we-do",
  "/capital-partners",
  "/projects",
  "/projects/plaza-los-mangos",
  "/projects/decima-avenida",
  "/institutional-inquiry",
] as const
