import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"
import { isNonProductionDeployment, nonPublicPaths } from "@/lib/crawl-policy"

export default function robots(): MetadataRoute.Robots {
  const rules = [
    { userAgent: "*", allow: "/", disallow: nonPublicPaths },
    { userAgent: "OAI-SearchBot", allow: "/", disallow: nonPublicPaths },
  ]

  if (isNonProductionDeployment()) return { rules }

  return {
    rules,
    sitemap: new URL("/sitemap.xml", siteConfig.domain).toString(),
    host: siteConfig.domain,
  }
}
