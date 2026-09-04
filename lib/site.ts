export const siteConfig = {
  name: "Marques Advisory & Investments",
  shortName: "Marques Advisory",
  domain: "https://www.marquescr.com",
  tagline: "Become a Resident in Costa Rica",
  description:
    "Private coordination of Costa Rica residence pathways for investors, pensioners, rentiers and globally mobile families.",
  locale: "en_US",
  email: "presidencia@marquescr.com",
  legalEmail: "legal@marquescr.com",
  legalEntity: "Besta & Violeta SRL",
  corporateId: "3-102-875808",
  legalAddress: "500 meters north of the Public School of Barrio Limón, Santa Cruz, Guanacaste 50301, Costa Rica",
  phone: "+506 7267-9806",
  whatsapp: "https://wa.me/50672679806",
  linkedIn: "https://www.linkedin.com/company/marquesadvisory",
  logo: "/brand/marques-logo.png",
  ogImage: "/brand/social-preview.jpg",
  disclaimer:
    "Marques Advisory & Investments coordinates residence pathways and selected investment opportunities with qualified independent professionals. It does not guarantee immigration approval, investment performance or tax outcomes.",
  nav: [
    { label: "Program", href: "/residency" },
    { label: "Residence Advisory", href: "/residency#investor" },
    { label: "Investments", href: "/investments" },
    { label: "The MA&I Experience", href: "/#experience" },
  ],
} as const

export const siteRoutes = [
  "/",
  "/countries",
  "/countries/costa-rica",
  "/residency",
  "/residency/real-estate",
  "/investments",
  "/residence-inquiry",
  "/investment-inquiry",
  "/privacy",
  "/terms",
] as const
