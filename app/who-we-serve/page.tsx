import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { SiteHeader } from "@/components/site-header"
import { breadcrumbSchema, createMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = createMetadata({
  title: "Who We Serve",
  description:
    "Marqués Advisory & Investments supports private stakeholders evaluating real asset opportunities that require institutional preparation in Costa Rica.",
  path: "/who-we-serve",
})

const audiences = [
  {
    title: "Asset owners",
    body: "Owners seeking a more structured path to evaluate, prepare and position real assets for private institutional review.",
  },
  {
    title: "Developers and sponsors",
    body: "Project sponsors who need clearer documentation, phasing logic, diligence preparation and capital-facing materials.",
  },
  {
    title: "Family offices and private capital",
    body: "Capital allocators evaluating real asset opportunities in Costa Rica through a disciplined and documentation-led lens.",
  },
  {
    title: "Fiduciary, banking and legal stakeholders",
    body: "Professional counterparties that require clarity around structure, governance, risk allocation and transaction readiness.",
  },
]

export default function WhoWeServePage() {
  return (
    <main className="min-h-screen bg-[#0D1B2A] text-white">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Who We Serve", path: "/who-we-serve" },
        ])}
      />
      <SiteHeader />

      <section className="px-6 pb-20 pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">Who We Serve</p>
          <h1 className="max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
            Built for stakeholders who need real asset opportunities to be privately evaluated with institutional discipline.
          </h1>
          <p className="mt-8 max-w-3xl text-base leading-8 text-white/70">
            Marqués Advisory & Investments supports conversations where assets, capital, legal structure and documentation must align before an opportunity can move forward responsibly.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F1EB] px-6 py-20 text-[#0D1B2A]">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {audiences.map((audience) => (
            <article key={audience.title} className="border border-[#E5DDD0] bg-white p-8">
              <h2 className="mb-4 text-lg font-semibold">{audience.title}</h2>
              <p className="text-sm leading-7 text-slate-600">{audience.body}</p>
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
