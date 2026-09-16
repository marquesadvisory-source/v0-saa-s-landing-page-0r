export const countries = [{
  name: "Costa Rica",
  path: "/residency",
  image: "/costa-rica-coast.jpg",
  coatOfArms: "/images/Coat_of_arms_of_Costa_Rica.svg.webp",
  description: "Costa Rica offers residence pathways for investors, independent-income applicants and retirees seeking a long-term presence in the country.",
  investment: "From USD 150,000",
}] as const

export { factSheets } from "./documents"

export const pathways = [
  { title: "Investor", category: "Investor", amount: "USD 150,000", detail: "Qualifying, documented and verifiable investment in Costa Rica." },
  { title: "Independent Income", category: "Rentista", amount: "USD 2,500 / month", detail: "Stable and permanent income for at least two years." },
  { title: "Retiree", category: "Pensionado", amount: "USD 1,000 / month", detail: "Lifetime pension issued by a competent authority." },
] as const

export const processSteps = [
  ["Evaluation", "Profile, family and goals."],
  ["Pathway", "Applicable category and structure."],
  ["Coordination", "Local execution of the application."],
  ["Continuity", "DIMEX, renewal and long-term planning."],
] as const

export const propertyCategories = ["Residential", "Hospitality", "Commercial", "Industrial", "Mixed-Use", "Development"] as const

export type ResidenceOpportunity = {
  id: string
  name: string
  location: string
  category: typeof propertyCategories[number]
  primaryImage: { src: string; alt: string }
  gallery: { src: string; alt: string }[]
  amount?: { label: string; value: string; approvedForPublicDisplay: boolean }
  description: string
  residencyEligibility: { status: "unverified" | "verified"; approvedStatement?: string }
  approvedMetrics: { label: string; value: string }[]
  confidentiality: "public" | "nda" | "confidential"
  publicationStatus: "draft" | "approved"
}

// No live inventory has been approved for this experience.
export const residenceOpportunities: ResidenceOpportunity[] = []
