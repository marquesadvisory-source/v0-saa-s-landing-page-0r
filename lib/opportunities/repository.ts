import "server-only"
import type { Opportunity } from "./types"
import { localOpportunityRepository } from "./local"

// Only this server module selects the provider; no database imports belong in UI.
const repository = localOpportunityRepository

export async function getOpportunities(inventory?: Opportunity["inventory"]): Promise<Opportunity[]> {
  const records = await repository.list()
  return records.filter(record => !record.confidential && record.status !== "private" && record.status !== "closed" && (!inventory || record.inventory === inventory))
}
export async function getOpportunityBySlug(slug: string): Promise<Opportunity | null> {
  return (await getOpportunities()).find(record => record.slug === slug) ?? null
}
export async function getFeaturedOpportunities(): Promise<Opportunity[]> {
  return (await getOpportunities()).filter(record => record.featured)
}
