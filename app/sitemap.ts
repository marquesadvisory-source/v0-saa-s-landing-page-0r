import type { MetadataRoute } from "next"
import { siteRoutes } from "@/lib/site"
import { absoluteUrl } from "@/lib/seo"
import { isNonProductionDeployment } from "@/lib/crawl-policy"
import { getPublicRealEstateOpportunities } from "@/lib/opportunities/repository"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (isNonProductionDeployment()) return []
  // Explicit public-route allowlist. Do not manufacture lastmod dates on each build.
  const propertyRoutes = (await getPublicRealEstateOpportunities()).map(asset => `/real-estate/${encodeURIComponent(asset.slug)}`)
  return [...new Set([...siteRoutes, ...propertyRoutes])].map(route => ({ url: absoluteUrl(route) }))
}
