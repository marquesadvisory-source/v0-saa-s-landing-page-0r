export const locales = ["en", "es", "fr", "zh-cn"] as const
export type Locale = typeof locales[number]
export const localeDefinitions = {
  en: { label: "English", shortLabel: "EN", htmlLang: "en" },
  es: { label: "Español", shortLabel: "ES", htmlLang: "es" },
  fr: { label: "Français", shortLabel: "FR", htmlLang: "fr" },
  "zh-cn": { label: "简体中文", shortLabel: "中文", htmlLang: "zh-Hans" },
} as const
export function normalizeLocale(value: string): Locale {
  const normalized = value.toLowerCase()
  return locales.find(locale => locale === normalized) ?? "en"
}
export type Localized<T> = Partial<Record<Locale, T>>
export function localizedValue<T>(values: Localized<T> | undefined, locale: Locale, fallback: T): T {
  return values?.[locale] ?? values?.en ?? fallback
}
