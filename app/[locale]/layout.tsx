import type React from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Cormorant_Garamond, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { EnquiryProvider } from "@/components/enquiry-provider"
import { FixedCallback } from "@/components/fixed-callback"
import { LanguageProvider } from "@/components/language-provider"
import { JsonLd } from "@/components/json-ld"
import { absoluteUrl, organizationSchema, websiteSchema } from "@/lib/seo"
import { siteConfig } from "@/lib/site"
import { isNonProductionDeployment } from "@/lib/crawl-policy"
import { localeDefinitions, localeFromSegment, locales, type Locale } from "@/lib/i18n/config"
import { internationalSeo } from "@/lib/international-seo"
import "../globals.css"

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-inter" })
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-cormorant" })

export const dynamicParams = false

export function generateStaticParams() {
  return locales.filter(locale => locale !== "en").map(locale => ({ locale: localeDefinitions[locale].segment }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const segment = (await params).locale
  const locale = localeFromSegment(segment)
  if (!locale || locale === "en") return {}
  const home = internationalSeo["/"]
  return {
    metadataBase: new URL(siteConfig.domain),
    title: { default: home.title[locale], template: `%s | ${siteConfig.name}` },
    description: home.description[locale],
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    openGraph: { siteName: siteConfig.name, locale: localeDefinitions[locale].openGraph, type: "website", url: absoluteUrl("/") },
    robots: {
      index: !isNonProductionDeployment(), follow: !isNonProductionDeployment(),
      googleBot: { index: !isNonProductionDeployment(), follow: !isNonProductionDeployment(), "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    },
    verification: { google: "mdWw-KcfuQNUAy1PGgRQxKgz_RX75PcqWhMcx0rgQcg" },
  }
}

export default async function LocaleRootLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const segment = (await params).locale
  const locale = localeFromSegment(segment)
  if (!locale || locale === "en") notFound()
  return <html lang={localeDefinitions[locale].htmlLang} className="bg-[#0D1B2A]"><body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
    <LanguageProvider initialLocale={locale as Locale}>
      <JsonLd data={[organizationSchema(), websiteSchema()]} />
      <EnquiryProvider>{children}<FixedCallback /></EnquiryProvider>
      <Analytics />
    </LanguageProvider>
  </body></html>
}
