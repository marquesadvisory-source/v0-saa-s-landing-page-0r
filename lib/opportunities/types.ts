import type { realEstatePropertyTypes } from "./filters"
import type { Localized } from "@/lib/i18n/config"

export type Opportunity = {
  inventory: "real-estate" | "other-investments"
  propertyType?: typeof realEstatePropertyTypes[number]
  // Populate property details only from approved public residential documentation.
  propertyDetails?: { askingPrice?: number; bedrooms?: number; bathrooms?: number; totalArea?: number; areaUnit?: "m²" | "ft²" }
  id: string; slug: string; name: string; location: string; category: string
  primaryImage: string; gallery: string[]; investmentAmount?: number; currency?: string
  longDescription?: string
  localized?: { name?: Localized<string>; shortDescription?: Localized<string>; longDescription?: Localized<string> }
  shortDescription: string; residencyRelevance: "not-established" | "investment-only" | "potentially-relevant"
  residencyVerificationStatus: "not-reviewed" | "potentially-relevant" | "under-verification" | "verified" | "not-applicable"
  confidential: boolean; ndaRequired: boolean; featured: boolean
  status: "available" | "private" | "under-review" | "coming-soon" | "closed"
  publicStatus: string; imagePosition?: string
}


export interface OpportunityRepository {
  list(): Promise<Opportunity[]>
}
