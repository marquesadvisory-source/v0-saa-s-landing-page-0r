import { normalizeLocale, type Locale } from "@/lib/i18n/config"

export interface ResidenceFactSheet { language: Locale; label: string; href: string }

export const factSheets = [
  { language: "en", label: "English", href: "/documents/costa-rica-residence-guide-en.pdf" },
  { language: "es", label: "Español", href: "/documents/costa-rica-residence-guide-es.pdf" },
  { language: "fr", label: "Français", href: "/documents/costa-rica-residence-guide-fr.pdf" },
  { language: "zh-cn", label: "简体中文", href: "/documents/costa-rica-residence-guide-zh-cn.pdf" },
] as const satisfies readonly ResidenceFactSheet[]


export function getResidenceFactSheet(locale: string): ResidenceFactSheet {
  return factSheets.find(sheet => sheet.language === normalizeLocale(locale)) ?? factSheets[0]
}
