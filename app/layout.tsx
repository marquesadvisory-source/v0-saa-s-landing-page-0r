import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { JsonLd } from "@/components/json-ld"
import { organizationSchema, websiteSchema } from "@/lib/seo"
import { siteConfig } from "@/lib/site"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default:
      "Become a Resident in Costa Rica | Marques Advisory & Investments",
    template: "%s | Marques Advisory & Investments",
  },
  description:
    "Private coordination of Costa Rica residence pathways for investors, pensioners, rentiers and globally mobile families.",
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    "Marques Advisory & Investments",
    "Costa Rica residence",
    "Costa Rica residence by investment",
    "Costa Rica investor residence",
    "Costa Rica pensioner residence",
    "Costa Rica rentier residence",
    "Private Client Advisory",
    "Costa Rica investment opportunities",
  ],
  alternates: {
    canonical: siteConfig.domain,
  },
  openGraph: {
    title:
      "Become a Resident in Costa Rica | Marques Advisory & Investments",
    description:
      "Private coordination of Costa Rica residence pathways for globally mobile individuals and families.",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marques Advisory & Investments",
    description:
      "Private coordination of Costa Rica residence pathways and selected investment opportunities.",
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
      <body className="font-sans antialiased">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
