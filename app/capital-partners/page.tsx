import { T } from "@/components/language-provider"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Building2, FileText, Handshake, Landmark, Layers, ShieldCheck } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, createMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = createMetadata({
  title: "Capital Partners",
  description:
    "Capital partners, family offices, institutional investment relationships, Costa Rica real assets platform, origination, structuring and capital readiness with Marqués Advisory & Investments.",
  path: "/capital-partners",
})

const audiences = [
  "Family Offices",
  "Institutional Investors",
  "Developers",
  "Real Asset Operators",
  "Banks & Fiduciaries",
  "Strategic Capital Relationships",
]

const capitalFramework = [
  "Relationships",
  "Origination",
  "Structuring",
  "Capital Readiness",
  "Execution Coordination",
  "Monetization",
]

const valueCards = [
  {
    title: "Local Origination",
    body: "Access to relationship-driven real asset opportunities in Costa Rica.",
  },
  {
    title: "Structuring Discipline",
    body: "Investment logic, risk visibility, documentation readiness and capital stack thinking.",
  },
  {
    title: "Execution Coordination",
    body: "Alignment with legal, financial, technical, construction and commercial stakeholders.",
  },
  {
    title: "Institutional Positioning",
    body: "Transforming opportunities from informal assets into structured reviewable platforms.",
  },
]

const notList = [
  "MA&I is not a public securities offering platform.",
  "MA&I does not guarantee investment performance.",
  "MA&I does not provide public investment solicitations.",
  "MA&I does not replace legal, tax, regulatory or licensed financial advice.",
  "Engagements remain subject to qualification, diligence, confidentiality and professional review.",
]

const engagementModels = [
  "Advisory",
  "Structuring",
  "Origination Mandate",
  "Success-Based Engagement",
  "Co-Investment Evaluation",
  "Strategic Alliance",
]

export default function CapitalPartnersPage() {
  return (
    <main className="min-h-screen bg-[#0D1B2A] text-white">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Capital Partners", path: "/capital-partners" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Capital Partners",
            url: `${siteConfig.domain}/capital-partners`,
            description:
              "How Marqués Advisory & Investments works with capital partners and institutional counterparties around Costa Rica real asset opportunities.",
            publisher: {
              "@type": "Organization",
              name: siteConfig.name,
            },
          },
        ]}
      />

      <SiteHeader />

      <section className="px-6 pb-24 pt-40">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
              <T>Capital Partners
            </T></p>
            <h1 className="font-serif text-4xl leading-tight md:text-6xl">
              <T>A relationship-driven platform for institutional real asset opportunities in Costa Rica.
            </T></h1>
          </div>
          <div className="space-y-6 text-base leading-8 text-white/70">
            <p>
              <T>Marqués Advisory & Investments works with select capital relationships, developers, operators and institutional counterparties to evaluate, structure and prepare real asset opportunities for disciplined review and execution.
            </T></p>
            <p>
              <T>Marqués Advisory & Investments is a relationship-driven real assets platform focused on origination, structuring and capital readiness in Costa Rica.
            </T></p>
            <Link
              href="/institutional-inquiry"
              className="inline-flex items-center gap-2 bg-[#C9A96E] px-6 py-3 text-sm font-semibold text-[#0D1B2A] transition-opacity hover:opacity-90"
            >
              <T>Begin Institutional Inquiry
              </T><ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F1EB] px-6 py-20 text-[#0D1B2A]">
        <div className="mx-auto max-w-7xl space-y-16">
          <section>
            <div className="mb-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
                  <T>Who This Is For
                </T></p>
                <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                  <T>Institutional counterparties aligned with real asset preparation and execution.
                </T></h2>
              </div>
              <p className="text-sm leading-7 text-slate-700">
                <T>The platform is designed for private, qualified and relationship-driven conversations where assets, capital, structure and execution must be evaluated with discipline.
              </T></p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {audiences.map((audience) => (
                <article key={audience} className="border border-[#E5DDD0] bg-white p-7">
                  <Handshake className="mb-5 text-[#C9A96E]" size={24} />
                  <h3 className="text-base font-semibold"><T>{audience}</T></h3>
                </article>
              ))}
            </div>
          </section>

          <section>
            <div className="mb-8">
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
                <T>How MA&I Works With Capital
              </T></p>
              <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                <T>From relationships to institutional monetization strategy.
              </T></h2>
            </div>
            <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-6">
              {capitalFramework.map((stage, index) => (
                <article key={stage} className="border border-[#E5DDD0] bg-white p-5">
                  <p className="mb-4 text-xs font-mono text-[#C9A96E]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-sm font-semibold"><T>{stage}</T></h3>
                </article>
              ))}
            </div>
          </section>

          <section>
            <div className="mb-8">
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
                <T>What We Bring to the Table
              </T></p>
              <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                <T>Platform capabilities for institutional preparation.
              </T></h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[Landmark, ShieldCheck, Layers, FileText].map((Icon, index) => (
                <article key={valueCards[index].title} className="border border-[#E5DDD0] bg-white p-7">
                  <Icon className="mb-5 text-[#C9A96E]" size={24} />
                  <h3 className="mb-3 text-base font-semibold"><T>{valueCards[index].title}</T></h3>
                  <p className="text-sm leading-7 text-slate-600"><T>{valueCards[index].body}</T></p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border border-[#E5DDD0] bg-white p-8">
              <Building2 className="mb-5 text-[#C9A96E]" size={24} />
              <h2 className="mb-5 text-xl font-semibold"><T>What MA&I Is Not</T></h2>
              <div className="space-y-4">
                {notList.map((item) => (
                  <p key={item} className="border-b border-[#E5DDD0] pb-4 text-sm leading-7 text-slate-700">
                    <T>{item}</T>
                  </p>
                ))}
              </div>
            </div>
            <div className="border border-[#E5DDD0] bg-white p-8">
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
                <T>Engagement Models
              </T></p>
              <h2 className="mb-5 text-xl font-semibold"><T>Potential relationship structures</T></h2>
              <p className="mb-6 text-sm leading-7 text-slate-700">
                <T>Potential engagement models may vary by opportunity, jurisdiction, counterparty and professional review.
              </T></p>
              <div className="grid gap-3 sm:grid-cols-2">
                {engagementModels.map((model) => (
                  <div key={model} className="border border-[#E5DDD0] p-4 text-sm font-semibold">
                    <T>{model}</T>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#112032] p-8 text-white md:p-12">
            <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
              <T>Institutional Inquiry
            </T></p>
            <h2 className="max-w-3xl font-serif text-3xl leading-tight md:text-4xl">
              <T>Begin with a private institutional conversation.
            </T></h2>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-white/70">
              <T>If there may be alignment between your investment mandate, capital relationships or real asset strategy and MA&I&apos;s platform, the appropriate next step is a private institutional conversation.
            </T></p>
            <Link
              href="/institutional-inquiry"
              className="mt-8 inline-flex items-center gap-2 bg-[#C9A96E] px-6 py-3 text-sm font-semibold text-[#0D1B2A] transition-opacity hover:opacity-90"
            >
              <T>Begin Institutional Inquiry
              </T><ArrowRight size={16} />
            </Link>
          </section>
        </div>
      </section>

      <section className="px-6 py-12">
        <p className="mx-auto max-w-5xl text-xs leading-6 text-white/45"><T>{siteConfig.disclaimer}</T></p>
      </section>
    </main>
  )
}
