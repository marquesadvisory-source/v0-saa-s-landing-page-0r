import { locales, type Locale } from "./config"

export function resolveBrowserLocale(saved: string | null, languages: readonly string[]): Locale {
  if (locales.includes(saved as Locale)) return saved as Locale
  for (const language of languages) {
    const code = language.toLowerCase()
    if (/^es(?:-|$)/.test(code)) return "es"
    if (/^fr(?:-|$)/.test(code)) return "fr"
    if (/^en(?:-|$)/.test(code)) return "en"
    // Traditional Chinese explicitly falls back to English, not Simplified Chinese.
    if (/^zh-(?:tw|hk|mo|hant)(?:-|$)/.test(code)) return "en"
    if (/^zh-(?:cn|sg|hans)(?:-|$)/.test(code)) return "zh-cn"
  }
  return "en"
}
