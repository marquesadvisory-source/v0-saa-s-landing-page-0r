import type { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, createMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Learn about Marqués Advisory & Investments, a boutique platform focused on institutional preparation and structuring for real assets in Costa Rica.",
  path: "/about",
})

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0D1B2A] text-white">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <section className="px-6 py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-[0.16em] text-[#C9A96E] uppercase">
            Marqués Advisory & Investments
          </Link>
          <Link href="/institutional-inquiry" className="border border-[#C9A96E] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#C9A96E]">
            Institutional Inquiry
          </Link>
        </div>
      </section>

      <section className="px-6 pb-24 pt-16">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">About</p>
            <h1 className="font-serif text-4xl leading-tight md:text-6xl">
              A boutique platform for real asset structuring in Costa Rica.
            </h1>
          </div>
          <div className="space-y-6 text-base leading-8 text-white/70">
            <p>
              Marqués Advisory & Investments is focused on institutional preparation, advisory and structuring for real assets in Costa Rica.
            </p>
            <p>
              The platform supports asset owners, sponsors and capital-facing stakeholders in moving from origination to monetization through clearer documentation, governance, diligence preparation and strategic positioning.
            </p>
            <p>
              Marqués Advisory & Investments is not positioned as a traditional real estate brokerage. Its work helps structure opportunities so they can be evaluated privately with greater clarity, discipline and institutional readiness.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F1EB] px-6 py-20 text-[#0D1B2A]">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {[
            ["Thesis", "From origination to monetization."],
            ["Focus", "Real assets, institutional preparation and Costa Rica-based opportunities."],
            ["Approach", "Prudent structuring, private evaluation and documentation-led readiness."],
          ].map(([title, body]) => (
            <div key={title} className="border-l border-[#C9A96E] pl-6">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#C9A96E]">{title}</h2>
              <p className="text-sm leading-7 text-slate-700">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-12">
        <p className="mx-auto max-w-5xl text-xs leading-6 text-white/45">{siteConfig.disclaimer}</p>
      </section>
    </main>
  )
}
