import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { EnquiryProvider } from "@/components/enquiry-provider"
import { FixedCallback } from "@/components/fixed-callback"
import { LanguageProvider } from "@/components/language-provider"
import { JsonLd } from "@/components/json-ld"
import { organizationSchema, websiteSchema } from "@/lib/seo"
import { siteConfig } from "@/lib/site"
import { isHostingPreview } from "@/lib/crawl-policy"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default:
      "Marqués Advisory & Investments | Relationship-Driven Real Assets Platform",
    template: "%s | Marqués Advisory & Investments",
  },
  description:
    "Marqués Advisory & Investments is a relationship-driven real assets platform focused on origination, structuring and capital readiness in Costa Rica.",
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    "Marqués Advisory & Investments",
    "real assets Costa Rica",
    "real assets platform",
    "origination",
    "capital readiness",
    "institutional opportunities",
    "capital partners",
    "institutional preparation",
    "investment structuring",
    "project finance Costa Rica",
    "from origination to monetization",
  ],
  alternates: {
    canonical: siteConfig.domain,
  },
  openGraph: {
    title:
      "Marqués Advisory & Investments | Relationship-Driven Real Assets Platform",
    description:
      "A relationship-driven real assets platform focused on origination, structuring and capital readiness in Costa Rica.",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1672,
        height: 941,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marqués Advisory & Investments",
    description:
      "Origination, structuring and capital readiness for real assets in Costa Rica.",
    images: [siteConfig.ogImage],
  },
  robots: {
    index: !isHostingPreview(),
    follow: !isHostingPreview(),
    googleBot: {
      index: !isHostingPreview(),
      follow: !isHostingPreview(),
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "mdWw-KcfuQNUAy1PGgRQxKgz_RX75PcqWhMcx0rgQcg",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#0D1B2A]">
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <LanguageProvider><EnquiryProvider>{children}<FixedCallback /></EnquiryProvider></LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
