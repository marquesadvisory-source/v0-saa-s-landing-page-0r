import type { Metadata } from "next"
import { siteConfig } from "@/lib/site"

type SeoOptions = {
  title: string
  description: string
  path?: string
  image?: string
}

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.domain).toString()
}

export function createMetadata({
  title,
  description,
  path = "/",
  image = siteConfig.ogImage,
}: SeoOptions): Metadata {
  const url = absoluteUrl(path)
  const imageUrl = absoluteUrl(image)

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  }
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.domain,
    logo: absoluteUrl(siteConfig.logo),
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: {
      "@type": "Country",
      name: "Costa Rica",
    },
    sameAs: [siteConfig.linkedIn],
  }
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.domain,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  }
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}
