import type { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, createMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = createMetadata({
  title: "What We Do",
  description:
    "Marqués Advisory & Investments helps structure real asset opportunities through institutional preparation, diligence materials and strategic positioning.",
  path: "/what-we-do",
})

const services = [
  {
    title: "Institutional preparation",
    body: "Supports the organization of opportunity narratives, diligence materials, risk framing and decision-ready documentation.",
  },
  {
    title: "Real asset structuring",
    body: "Helps structure assets and project concepts so legal, financial and strategic considerations can be reviewed coherently.",
  },
  {
    title: "Capital-facing materials",
    body: "Develops private materials that communicate thesis, asset logic, use of proceeds, phasing and institutional considerations.",
  },
  {
    title: "Origination to monetization",
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
            { name: "What We Do", path: "/what-we-do" },
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
              "Support for institutional preparation, documentation and structuring of private real asset opportunities.",
          },
        ]}
      />
      <section className="px-6 py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-[0.16em] text-[#C9A96E] uppercase">
            Marqués Advisory & Investments
          </Link>
          <Link href="/institutional-inquiry" className="border border-[#C9A96E] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#C9A96E]">
            Begin Inquiry
          </Link>
        </div>
      </section>

      <section className="px-6 pb-20 pt-16">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">What We Do</p>
            <h1 className="font-serif text-4xl leading-tight md:text-6xl">
              We help structure real asset opportunities for private institutional evaluation.
            </h1>
          </div>
          <p className="text-base leading-8 text-white/70">
            The work is centered on clarity: asset logic, documentation, governance, risk framing and the preparation required before sophisticated capital can evaluate an opportunity responsibly.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F1EB] px-6 py-20 text-[#0D1B2A]">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="border border-[#E5DDD0] bg-white p-8">
              <h2 className="mb-4 text-lg font-semibold">{service.title}</h2>
              <p className="text-sm leading-7 text-slate-600">{service.body}</p>
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
