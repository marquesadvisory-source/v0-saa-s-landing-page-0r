import type { Metadata } from "next"
import { siteConfig } from "@/lib/site"
import { seoImages } from "@/lib/seo-images"

type SeoOptions = { title: string; description: string; path?: string; image?: string }

export function absoluteUrl(path = "/") {
  if (path === "/") return siteConfig.domain
  return new URL(path, siteConfig.domain).toString()
}
export function createMetadata({ title, description, path = "/", image = siteConfig.ogImage }: SeoOptions): Metadata {
  const url = absoluteUrl(path)
  const fullTitle = title.includes(siteConfig.name) ? title : title + " | " + siteConfig.name
  const imageInfo = seoImages[image]
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle, description, url, siteName: siteConfig.name, locale: siteConfig.locale, type: "website",
      images: [{ url: absoluteUrl(image), width: imageInfo?.width, height: imageInfo?.height, alt: imageInfo?.alt ?? title }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [{url: absoluteUrl(image), alt: imageInfo?.alt ?? title}] },
  }
}
export function imageSchema(image: string, caption?: string) {
  const info = seoImages[image]
  return {
    "@type": "ImageObject", "@id": absoluteUrl(image) + "#image", contentUrl: absoluteUrl(image),
    url: absoluteUrl(image), caption: caption ?? info?.alt,
    width: info?.width, height: info?.height,
  }
}
export function organizationSchema() {
  return {
    "@context": "https://schema.org", "@type": "Organization", "@id": absoluteUrl("/#organization"),
    name: siteConfig.name, url: absoluteUrl(), logo: imageSchema(siteConfig.logo),
    description: siteConfig.description, slogan: siteConfig.tagline,
    email: siteConfig.email, telephone: siteConfig.phone,
    areaServed: { "@type": "Country", name: "Costa Rica" },
  }
}
export function websiteSchema() {
  return {
    "@context": "https://schema.org", "@type": "WebSite", "@id": absoluteUrl("/#website"),
    name: siteConfig.name, url: absoluteUrl(), description: siteConfig.description,
    inLanguage: "en", publisher: { "@id": absoluteUrl("/#organization") },
  }
}
export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "@id": absoluteUrl(items[items.length - 1]?.path ?? "/") + "#breadcrumbs",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem", position: index + 1, name: item.name, item: absoluteUrl(item.path),
    })),
  }
}
export function webPageSchema({ title, description, path = "/", image }: SeoOptions, type: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" = "WebPage") {
  return {
    "@context": "https://schema.org", "@type": type, "@id": absoluteUrl(path) + "#webpage",
    url: absoluteUrl(path), name: title, description, inLanguage: "en",
    isPartOf: { "@id": absoluteUrl("/#website") },
    publisher: { "@id": absoluteUrl("/#organization") },
    about: { "@id": absoluteUrl("/#organization") },
    ...(path !== "/" ? { breadcrumb: { "@id": absoluteUrl(path) + "#breadcrumbs" } } : {}),
    ...(image ? { primaryImageOfPage: imageSchema(image) } : {}),
  }
}
export function opportunityListSchema(items: Array<{name: string; slug: string}>, path: string) {
  return {
    "@type": "ItemList", "@id": absoluteUrl(path) + "#opportunities", numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem", position: index + 1, name: item.name, url: absoluteUrl("/projects/" + item.slug),
    })),
  }
}
