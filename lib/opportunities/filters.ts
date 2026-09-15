import type { Opportunity } from "./types"

export const investmentCategories = [
  "Hospitality", "Commercial", "Industrial", "Development", "Mixed-Use",
  "Operating Businesses", "Productive Projects", "Sustainable Tourism Infrastructure", "Shares / Corporate Participation",
  "Securities / Investment Structures", "Venture Capital / Private Capital Structures", "Private Real Assets", "Other Opportunities",
] as const

export const realEstatePropertyTypes = ["Luxury Homes", "Residential", "Villa", "Condominium", "Development", "Other Real Estate"] as const

export type OpportunityFilters = { inventory: Opportunity["inventory"]; location: string; category: string; relevance: string; sort: string; bedrooms?: number; maxPrice?: number; priceCurrency?: string }
export function filterOpportunities(assets: Opportunity[], filters: OpportunityFilters): Opportunity[] {
  return assets.filter(asset => {
    if (asset.confidential || asset.status === "closed") return false
    if (asset.inventory !== filters.inventory) return false
    const verification = asset.residencyVerificationStatus
    const potentiallyRelevant = asset.residencyRelevance === "potentially-relevant" &&
      ["potentially-relevant", "under-verification", "verified"].includes(verification)
    if (filters.location && asset.location !== filters.location) return false
    const assetType = filters.inventory === "real-estate" ? asset.propertyType : asset.category
    if (filters.category && assetType !== filters.category) return false
    if (filters.inventory === "real-estate") {
      if (filters.bedrooms !== undefined && asset.propertyDetails?.bedrooms !== filters.bedrooms) return false
      if (filters.maxPrice !== undefined && (asset.propertyDetails?.askingPrice === undefined || asset.propertyDetails.askingPrice > filters.maxPrice || asset.currency !== filters.priceCurrency)) return false
    }
    if (filters.relevance === "potentially-relevant" && !potentiallyRelevant) return false
    if (filters.relevance === "under-verification" && verification !== "under-verification") return false
    if (filters.relevance === "investment-only" && asset.residencyRelevance !== "investment-only" && verification !== "not-applicable") return false
    return true
  }).sort((a,b) => filters.sort === "location" ? a.location.localeCompare(b.location) : filters.sort === "name" ? a.name.localeCompare(b.name) : Number(b.featured)-Number(a.featured))
}
