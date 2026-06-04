import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { JsonLd } from "@/components/json-ld"
import { organizationSchema, websiteSchema } from "@/lib/seo"
import { siteConfig } from "@/lib/site"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default:
      "Marqués Advisory & Investments | Institutional Real Asset Structuring in Costa Rica",
    template: "%s | Marqués Advisory & Investments",
  },
  description:
    "A boutique advisory and investment structuring platform focused on institutional preparation for real assets in Costa Rica, from origination to monetization.",
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    "Marqués Advisory & Investments",
    "real assets Costa Rica",
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
      "Marqués Advisory & Investments | Institutional Real Asset Structuring in Costa Rica",
    description:
      "A boutique advisory and investment structuring platform focused on institutional preparation for real assets in Costa Rica.",
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
    title: "Marqués Advisory & Investments",
    description:
      "Institutional preparation and structuring for real assets in Costa Rica.",
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
      <body className={`${montserrat.variable} ${playfair.variable} font-sans antialiased`}>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
