"use client"

import Link from "next/link"
import type { ComponentProps } from "react"
import { useLanguage } from "@/components/language-provider"
import { localeDefinitions, localePath } from "@/lib/i18n/config"

type Props = Omit<ComponentProps<typeof Link>, "href"> & { href: string }

export function LocaleLink({ href, ...props }: Props) {
  const { locale } = useLanguage()
  const [pathname, suffix = ""] = href.match(/^[^?#]*|[?#][\s\S]*$/g) ?? [href]
  const localizedHref = pathname === "/privacy" && locale !== "en"
    ? `${pathname}?lang=${localeDefinitions[locale].segment}${suffix.startsWith("?") ? `&${suffix.slice(1)}` : suffix}`
    : localePath(href, locale)
  return <Link href={localizedHref} {...props} />
}
