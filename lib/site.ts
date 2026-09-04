export const siteConfig = {
  name: "Marqués Advisory & Investments",
  shortName: "Marqués Advisory",
  domain: "https://marquescr.com",
  tagline: "Global mobility + real assets",
  description:
    "Independent advisory for global mobility through Costa Rica residency and carefully structured real assets investment.",
  locale: "en_US",
  email: "advisory@marquezadvisory.com",
  phone: "+506 7267-9806",
  whatsapp: "https://wa.me/50672679806",
  linkedIn: "https://www.linkedin.com/company/marquezadvisory",
  logo: "/logo.jpg",
  ogImage: "/logo.jpg",
  legalDisclaimer: {
    residency: "This website does not constitute legal, tax or investment advice. Costa Rica residency pathways are subject to government regulations, economic conditions and individual circumstances. Consult qualified legal and tax professionals before proceeding.",
    investments: "Márquez Advisory & Investments does not present this website as a public offering of securities, investment solicitation, regulated financial advice or guarantee of investment performance. All opportunities are evaluated privately and subject to diligence, documentation, regulatory compliance and legal review.",
  },
  nav: [
    { label: "Residency", href: "/residency" },
    { label: "Investments", href: "/investments" },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  residency: {
    pathways: [
      {
        id: "investor",
        name: "Investor",
        minAmount: 150000,
        minAmountUSD: "US$150,000",
        description: "Qualifying, documented and verifiable investment in Costa Rica.",
      },
      {
        id: "independent-income",
        name: "Independent Income (Rentista)",
        minAmount: 2500,
        minAmountUSD: "US$2,500 / month",
        description: "Stable and permanent income for at least 2 years.",
      },
      {
        id: "retiree",
        name: "Retiree (Pensionado)",
        minAmount: 1000,
        minAmountUSD: "US$1,000 / month",
        description: "Lifetime pension issued by a competent authority.",
      },
    ],
    guideURL: "/guides/costa-rica-residency-guide.pdf",
    contactEmail: "residency@marquezadvisory.com",
  },
  investments: {
    contactEmail: "investments@marquezadvisory.com",
    disclaimer: "Investment opportunities are private, off-market structures requiring qualification and diligence.",
  },
  contact: {
    defaultEmail: "advisory@marquezadvisory.com",
  },
} as const

export const siteRoutes = [
  "/",
  "/residency",
  "/residency/real-estate",
  "/investments",
  "/insights",
  "/about",
  "/contact",
  "/privacy",
] as const
