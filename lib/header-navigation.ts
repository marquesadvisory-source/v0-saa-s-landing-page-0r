export type HeaderLink = { label: string; href: string }
export type HeaderGroup = { label?: string; href?: string; links: readonly HeaderLink[] }
export type HeaderItem = {
  id: string
  label: string
  href?: string
  groups?: readonly HeaderGroup[]
}

export const headerNavigation: readonly HeaderItem[] = [
  { id: "firm", label: "The Firm", href: "/about" },
  {
    id: "private-clients",
    label: "Private Clients",
    groups: [{ links: [
      { label: "Residence by Investment", href: "/residency" },
      { label: "Luxury Real Estate", href: "/real-estate" },
      { label: "Private Client Services", href: "/services" },
    ] }],
  },
  {
    id: "investments",
    label: "Investments",
    groups: [{ links: [
      { label: "Strategic Real Assets", href: "/investments" },
      { label: "Investment Framework", href: "/investment-framework" },
      { label: "Institutional Opportunities", href: "/projects" },
    ] }],
  },
  { id: "capital-partners", label: "Capital Partners", href: "/capital-partners" },
  { id: "contact", label: "Contact", href: "/contact" },
]
