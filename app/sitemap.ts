import type { MetadataRoute } from "next"
import { siteConfig, siteRoutes } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return siteRoutes.map((route) => ({
    url: new URL(route, siteConfig.domain).toString(),
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }))
}
