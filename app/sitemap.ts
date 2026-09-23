import type { MetadataRoute } from "next"
import { siteRoutes } from "@/lib/site"
import { absoluteUrl } from "@/lib/seo"
import { isNonProductionDeployment } from "@/lib/crawl-policy"

export default function sitemap(): MetadataRoute.Sitemap {
  if (isNonProductionDeployment()) return []
  // Explicit public-route allowlist. Do not manufacture lastmod dates on each build.
  return [...new Set(siteRoutes)].map(route => ({ url: absoluteUrl(route) }))
}
