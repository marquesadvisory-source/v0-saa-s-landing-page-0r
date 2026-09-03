import type { MetadataRoute } from "next"
import { siteConfig, siteRoutes } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return siteRoutes.map((route) => ({
    url: new URL(route, siteConfig.domain).toString(),
    lastModified: new Date("2026-09-03"),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/residency" || route === "/investments" ? 0.9 : 0.7,
  }))
}
