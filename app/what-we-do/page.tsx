import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { SiteHeader } from "@/components/site-header"
import { breadcrumbSchema, createMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = createMetadata({
  title: "Capabilities",
  description:
    "Marqués Advisory & Investments provides platform capabilities for real assets, origination, structuring, capital readiness and execution coordination in Costa Rica.",
  path: "/what-we-do",
})

const capabilities = [
  {
    title: "Capital Readiness",
    body: "Supports the organization of opportunity narratives, diligence materials, risk framing and decision-ready documentation.",
  },
  {
    title: "Real Asset Structuring",
    body: "Helps structure assets and project concepts so legal, financial and strategic considerations can be reviewed coherently.",
  },
  {
    title: "Capital Relationship Materials",
    body: "Develops private materials that communicate thesis, asset logic, use of proceeds, phasing and institutional considerations.",
  },
  {
    title: "Origination to Monetization",
    body: "Connects early opportunity assessment with the documentation, governance and positioning required for private evaluation.",
  },
]

export default function WhatWeDoPage() {
  return (
    <main className="min-h-screen bg-[#0D1B2A] text-white">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Capabilities", path: "/what-we-do" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Institutional real asset preparation and structuring",
            provider: {
              "@type": "Organization",
              name: siteConfig.name,
            },
            areaServed: "Costa Rica",
            description:
              "Platform capabilities for institutional preparation, documentation, capital readiness and structuring of private real asset opportunities.",
          },
        ]}
      />
      <SiteHeader />

      <section className="px-6 pb-20 pt-40">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">Capabilities</p>
            <h1 className="font-serif text-4xl leading-tight md:text-6xl">
              Platform capabilities for origination, structuring and capital readiness.
            </h1>
          </div>
          <p className="text-base leading-8 text-white/70">
            The work is centered on clarity: asset logic, documentation, governance, risk framing and the capital readiness required before sophisticated capital relationships can evaluate an institutional opportunity responsibly.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F1EB] px-6 py-20 text-[#0D1B2A]">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {capabilities.map((capability) => (
            <article key={capability.title} className="border border-[#E5DDD0] bg-white p-8">
              <h2 className="mb-4 text-lg font-semibold">{capability.title}</h2>
              <p className="text-sm leading-7 text-slate-600">{capability.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-12">
        <p className="mx-auto max-w-5xl text-xs leading-6 text-white/45">{siteConfig.disclaimer}</p>
      </section>
    </main>
  )
}
