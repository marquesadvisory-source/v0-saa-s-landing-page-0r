import "server-only"
import type { Opportunity } from "./types"
import { localOpportunityRepository } from "./local"
import { publicRealEstateOpportunities } from "./publication"

// Only this server module selects the provider; no database imports belong in UI.
const repository = localOpportunityRepository

export async function getOpportunities(inventory?: Opportunity["inventory"]): Promise<Opportunity[]> {
  const records = await repository.list()
  return records.filter(record => {
    if (inventory && record.inventory !== inventory) return false
    if (record.inventory === "real-estate") return publicRealEstateOpportunities([record]).length > 0
    return !record.confidential && record.status !== "private" && record.status !== "closed"
  })
}
export async function getOpportunityBySlug(slug: string): Promise<Opportunity | null> {
  return (await getOpportunities()).find(record => record.slug === slug) ?? null
}
export async function getFeaturedOpportunities(): Promise<Opportunity[]> {
  return (await getOpportunities()).filter(record => record.featured)
}
export async function getPublicRealEstateOpportunities(): Promise<Opportunity[]> {
  return publicRealEstateOpportunities(await repository.list())
}
export async function getPublicRealEstateOpportunityBySlug(slug: string): Promise<Opportunity | null> {
  return (await getPublicRealEstateOpportunities()).find(record => record.slug === slug) ?? null
}
