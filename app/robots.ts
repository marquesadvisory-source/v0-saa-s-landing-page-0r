import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"
import { isHostingPreview, nonPublicPaths } from "@/lib/crawl-policy"

export default function robots(): MetadataRoute.Robots {
  if (isHostingPreview()) return { rules: { userAgent: "*", disallow: "/" } }
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: nonPublicPaths },
      { userAgent: "OAI-SearchBot", allow: "/", disallow: nonPublicPaths },
    ],
    sitemap: new URL("/sitemap.xml", siteConfig.domain).toString(),
    host: siteConfig.domain,
  }
}
