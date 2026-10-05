export const locales = ["en", "es", "fr", "zh-cn"] as const
export type Locale = typeof locales[number]
export type LocaleSegment = "en" | "es" | "fr" | "zh-hans"
export const localeDefinitions = {
  en: { label: "English", shortLabel: "EN", htmlLang: "en", segment: "en", openGraph: "en_US" },
  es: { label: "Español", shortLabel: "ES", htmlLang: "es", segment: "es", openGraph: "es_ES" },
  fr: { label: "Français", shortLabel: "FR", htmlLang: "fr", segment: "fr", openGraph: "fr_FR" },
  "zh-cn": { label: "简体中文", shortLabel: "中文", htmlLang: "zh-Hans", segment: "zh-hans", openGraph: "zh_CN" },
} as const
export function normalizeLocale(value: string): Locale {
  const normalized = value.toLowerCase()
  return locales.find(locale => locale === normalized) ?? "en"
}
export type Localized<T> = Partial<Record<Locale, T>>
export function localizedValue<T>(values: Localized<T> | undefined, locale: Locale, fallback: T): T {
  return values?.[locale] ?? values?.en ?? fallback
}

export function localeFromSegment(segment: string): Locale | null {
  if (segment === "zh-hans" || segment === "zh-cn") return "zh-cn"
  return locales.includes(segment as Locale) ? segment as Locale : null
}

export function localePath(path: string, locale: Locale): string {
  const [pathname, suffix = ""] = path.match(/^[^?#]*|[?#][\s\S]*$/g) ?? [path]
  if (!pathname.startsWith("/") || pathname === "/privacy") return path

  const normalized = pathname.replace(/^\/(?:es|fr|zh-hans)(?=\/|$)/, "") || "/"
  if (locale === "en") return `${normalized}${suffix}`
  const prefix = `/${localeDefinitions[locale].segment}`
  return `${prefix}${normalized === "/" ? "" : normalized}${suffix}`
}

export function routePathForLocale(path: string, locale: Locale): string {
  return localePath(path, locale)
}
