"use client"

import { useLanguage } from "@/components/language-provider"
import { localeDefinitions, localePath, type Locale } from "@/lib/i18n/config"
import { internationalSeo } from "@/lib/international-seo"
import { usePathname } from "next/navigation"
import { translate } from "@/lib/translations"

type JsonLdProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>>
}

function localizeJsonLd(value: unknown, locale: Locale, pagePath: string, parentType = ""): unknown {
  if (Array.isArray(value)) return value.map(item => localizeJsonLd(item, locale, pagePath, parentType))
  if (!value || typeof value !== "object") return value

  const source = value as Record<string, unknown>
  const types = Array.isArray(source["@type"]) ? source["@type"] : [source["@type"]]
  const type = types.filter((item): item is string => typeof item === "string").join(" ") || parentType
  const stableEntity = /Organization|WebSite|ImageObject/.test(type)

  return Object.fromEntries(Object.entries(source).map(([key, child]) => {
    if (key === "inLanguage" && !/Organization|ImageObject/.test(type)) {
      return [key, localeDefinitions[locale].htmlLang]
    }
    if (["name", "description"].includes(key) && typeof child === "string" && !stableEntity) {
      const translated = /WebPage|ContactPage|AboutPage|CollectionPage/.test(type)
        ? internationalSeo[pagePath]?.[key === "name" ? "title" : "description"]?.[locale]
        : undefined
      return [key, translated ?? translate(child, locale)]
    }
    if (["url", "item", "@id"].includes(key) && typeof child === "string" && !stableEntity) {
      try {
        const parsed = new URL(child)
        if (parsed.origin === "https://marquescr.com" && !/\.[a-z0-9]{2,8}$/i.test(parsed.pathname)) {
          const stableId = /#(?:organization|website)$/.test(parsed.href)
          if (!stableId) parsed.pathname = localePath(parsed.pathname || "/", locale)
          return [key, parsed.toString()]
        }
      } catch {
        return [key, child]
      }
    }
    return [key, localizeJsonLd(child, locale, pagePath, type)]
  }))
}

export function JsonLd({ data }: JsonLdProps) {
  const { locale } = useLanguage()
  const pathname = usePathname()
  const pagePath = pathname.replace(/^\/(?:es|fr|zh-hans)(?=\/|$)/, "") || "/"
  const localized = localizeJsonLd(data, locale, pagePath)
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localized).replace(/</g, "\\u003c"),
      }}
    />
  )
}
