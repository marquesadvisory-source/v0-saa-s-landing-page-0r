import type { MetadataRoute } from "next"
import { absoluteUrl } from "@/lib/seo"
import { isNonProductionDeployment } from "@/lib/crawl-policy"
import { getPublicRealEstateOpportunities } from "@/lib/opportunities/repository"
import { hasCompletePropertyTranslation, localizedRoutes, localizedUrl } from "@/lib/international-seo"
import { locales } from "@/lib/i18n/config"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (isNonProductionDeployment()) return []
  // Explicit public-route allowlist. Do not manufacture lastmod dates on each build.
  const publicAssets = await getPublicRealEstateOpportunities()
  const propertyRoutes = publicAssets.map(asset => `/real-estate/${encodeURIComponent(asset.slug)}`)
  const routes = [...new Set([...localizedRoutes, "/privacy", ...propertyRoutes])]
  return routes.flatMap(route => {
    if (route === "/privacy") return [{ url: absoluteUrl(route) }]
    const asset = route.startsWith("/real-estate/")
      ? publicAssets.find(item => `/real-estate/${encodeURIComponent(item.slug)}` === route)
      : undefined
    const hasAlternates = !asset || hasCompletePropertyTranslation(asset)
    const availableLocales = hasAlternates ? locales : ["en"] as const
    const languages = Object.fromEntries([
      ...availableLocales.map(code => [code === "zh-cn" ? "zh-Hans" : code, localizedUrl(route, code)]),
      ...(hasAlternates ? [["x-default", absoluteUrl(route)]] : []),
    ])
    return availableLocales.map(locale => ({
      url: localizedUrl(route, locale),
      ...(hasAlternates ? { alternates: { languages } } : {}),
    }))
  })
}
