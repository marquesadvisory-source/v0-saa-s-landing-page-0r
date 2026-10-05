import type { Locale } from "@/lib/i18n/config"
import type { Opportunity } from "./types"

export function propertyDescriptionForLocale(asset: Opportunity, locale: Locale): string {
  if (locale === "en") {
    return asset.localized?.longDescription?.en ?? asset.longDescription ?? asset.localized?.shortDescription?.en ?? asset.shortDescription
  }

  return asset.localized?.longDescription?.[locale] ??
    asset.localized?.shortDescription?.[locale] ??
    asset.longDescription ??
    asset.shortDescription
}
