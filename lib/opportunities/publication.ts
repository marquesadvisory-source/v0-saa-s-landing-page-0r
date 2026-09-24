import type { Opportunity } from "./types"

export function isPublicRealEstateOpportunity(asset: Opportunity): boolean {
  return asset.inventory === "real-estate" &&
    asset.publiclyListed === true &&
    !asset.confidential &&
    asset.status !== "private" &&
    asset.status !== "closed" &&
    asset.slug.trim().length > 0
}

export function publicRealEstateOpportunities(assets: Opportunity[]): Opportunity[] {
  return assets.filter(isPublicRealEstateOpportunity)
}

export function realEstateDetailPath(slug: string): string {
  return `/real-estate/${encodeURIComponent(slug)}`
}

export function opportunityDetailPath(asset: Pick<Opportunity, "inventory" | "slug">): string {
  return asset.inventory === "real-estate"
    ? realEstateDetailPath(asset.slug)
    : `/projects/${encodeURIComponent(asset.slug)}`
}
