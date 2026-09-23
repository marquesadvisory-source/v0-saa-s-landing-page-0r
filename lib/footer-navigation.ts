export type FooterLink = { label: string; href: string }
export type FooterGroup = { label: string; links: readonly FooterLink[] }

export const footerNavigation: readonly FooterGroup[] = [
  { label: "Private Clients", links: [
    { label: "Residence by Investment", href: "/residency" },
    { label: "Luxury Real Estate", href: "/real-estate" },
    { label: "Private Client Services", href: "/services" },
  ] },
  { label: "Investments", links: [
    { label: "Strategic Real Assets", href: "/investments" },
    { label: "Investment Framework", href: "/investment-framework" },
    { label: "Institutional Opportunities", href: "/projects" },
    { label: "Capital Partners", href: "/capital-partners" },
  ] },
  { label: "The Firm", links: [
    { label: "About Marqués", href: "/about" },
    { label: "Who We Serve", href: "/who-we-serve" },
    { label: "Capabilities", href: "/what-we-do" },
  ] },
  { label: "Contact / Legal", links: [
    { label: "Contact", href: "/contact" },
    { label: "Institutional Inquiry", href: "/institutional-inquiry" },
    { label: "Privacy Policy", href: "/privacy" },
  ] },
]
