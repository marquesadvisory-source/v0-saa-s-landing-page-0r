// Client-safe compatibility entry point. Data providers are server-only.
export type { Opportunity, OpportunityRepository } from "./opportunities/types"
export { filterOpportunities, investmentCategories, realEstatePropertyTypes } from "./opportunities/filters"
export type { OpportunityFilters } from "./opportunities/filters"
