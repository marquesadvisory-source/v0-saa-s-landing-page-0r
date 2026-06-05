import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Building2, FileText, Layers, ShieldCheck } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, createMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = createMetadata({
  title: "Institutional Opportunities",
  description:
    "Institutional opportunities, real asset structuring, capital readiness and Costa Rica investment platform context from Marqués Advisory & Investments.",
  path: "/projects",
})

const pipelineStages = [
  {
    title: "Origination",
    body: "Identified opportunity or relationship-driven asset access.",
  },
  {
    title: "Under Structuring",
    body: "Opportunity being evaluated, documented and shaped into an institutional framework.",
  },
  {
    title: "Capital Readiness",
    body: "Materials, diligence, financial logic and counterparties being prepared for capital review.",
  },
  {
    title: "Execution Coordination",
    body: "Legal, financial, technical and commercial stakeholders being coordinated.",
  },
  {
    title: "Monetization",
    body: "Exit, refinancing, sale, lease-up, stabilization or long-term ownership strategy.",
  },
]

const reviewFramework = ["Asset", "Thesis", "Structure", "Capital", "Execution", "Monetization"]

const opportunities = [
  {
    name: "Plaza Los Mangos",
    location: "Santa Cruz, Guanacaste, Costa Rica",
    assetClass: "Mixed-Use Real Asset Development",
    status: "Predevelopment & Institutional Structuring",
    stage: "Under Structuring / Capital Readiness",
    role: "Origination, structuring, capital readiness and institutional positioning.",
    thesis:
      "A mixed-use real asset opportunity currently in structuring, designed to integrate commercial, hospitality, residential, service-oriented retail and parking uses within a single institutional development framework.",
    href: "/projects/plaza-los-mangos",
    cta: "View Institutional Overview",
  },
  {
    name: "Décima Avenida",
    location: "El Roble, Alajuela, Costa Rica",
    assetClass: "Mixed-Use / Real Asset Opportunity",
    status: "Early-Stage Institutional Review",
    stage: "Origination / Under Structuring",
    role: "Early-stage thesis development, structuring review and strategic positioning.",
    thesis:
      "A preliminary real asset opportunity under evaluation in the Coyol-Airport ecosystem, with potential for phased positioning subject to diligence, documentation and institutional review.",
    href: null,
    cta: "Institutional overview in preparation",
  },
]

const pageDisclaimer =
  "Information regarding specific opportunities is provided for institutional context only. Nothing on this page constitutes a public offering of securities, investment solicitation, real estate brokerage listing, guarantee of investment performance or invitation to invest. Additional materials may be shared only with qualified parties following appropriate review, confidentiality procedures and legal documentation."

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0D1B2A] text-white">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Institutional Opportunities", path: "/projects" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Institutional Opportunities",
            url: `${siteConfig.domain}/projects`,
            description:
              "Selected real asset opportunities reviewed through MA&I's institutional preparation framework in Costa Rica.",
            publisher: {
              "@type": "Organization",
              name: siteConfig.name,
            },
            mainEntity: opportunities.map((opportunity) => ({
              "@type": "CreativeWork",
              name: opportunity.name,
              description: opportunity.thesis,
            })),
          },
        ]}
      />

      <SiteHeader />

      <section className="px-6 pb-20 pt-40">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
              Institutional Pipeline
            </p>
            <h1 className="font-serif text-4xl leading-tight md:text-6xl">
              Institutional Opportunities
            </h1>
          </div>
          <div className="space-y-6 text-base leading-8 text-white/70">
            <p>
              Selected real asset opportunities reviewed through MA&I&apos;s institutional preparation framework.
            </p>
            <p>
              Projects shown on this page are not public offerings, investment solicitations or brokerage listings. They are institutional showcases of opportunities under evaluation, structuring or preparation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F1EB] px-6 py-20 text-[#0D1B2A]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
                Opportunity Pipeline Stages
              </p>
              <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                A disciplined path from asset access to monetization strategy.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {pipelineStages.map((stage, index) => (
                <article
                  key={stage.title}
                  className="border border-[#E5DDD0] bg-white p-6"
                >
                  <p className="mb-4 text-xs font-mono text-[#C9A96E]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mb-3 text-base font-semibold">{stage.title}</h3>
                  <p className="text-sm leading-7 text-slate-600">{stage.body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
                How MA&I Reviews Opportunities
              </p>
              <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                Each opportunity is reviewed through a repeatable institutional lens.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {reviewFramework.map((item, index) => (
                <div key={item} className="border border-[#E5DDD0] bg-white p-5">
                  <p className="mb-2 text-xs font-mono text-[#C9A96E]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="text-sm font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-8">
            {opportunities.map((opportunity) => (
              <article
                key={opportunity.name}
                className="grid overflow-hidden bg-[#112032] text-white lg:grid-cols-[0.85fr_1.15fr]"
              >
                <div className="flex min-h-[340px] flex-col justify-end bg-[#0D1B2A] p-8 md:p-12">
                  <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
                    Institutional Opportunity
                  </p>
                  <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                    {opportunity.name}
                  </h2>
                  <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
                    {opportunity.location}
                  </p>
                </div>

                <div className="p-8 md:p-12">
                  <div className="mb-6 inline-block border border-[#C9A96E]/40 bg-[#C9A96E]/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-[#C9A96E]">
                    {opportunity.status}
                  </div>
                  <p className="mb-8 text-sm leading-7 text-white/70">
                    {opportunity.thesis}
                  </p>

                  <div className="mb-8 grid gap-5 border-y border-[#C9A96E]/20 py-6 sm:grid-cols-2">
                    {[
                      ["Asset Class", opportunity.assetClass],
                      ["Pipeline Stage", opportunity.stage],
                      ["MA&I Role", opportunity.role],
                      ["Review Basis", "Subject to diligence and institutional review"],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <p className="mb-1 text-xs uppercase tracking-[0.12em] text-[#C9A96E]">
                          {label}
                        </p>
                        <p className="text-sm text-white">{value}</p>
                      </div>
                    ))}
                  </div>

                  {opportunity.href ? (
                    <Link
                      href={opportunity.href}
                      className="inline-flex items-center gap-2 bg-[#C9A96E] px-6 py-3 text-sm font-semibold text-[#0D1B2A] transition-opacity hover:opacity-90"
                    >
                      {opportunity.cta}
                      <ArrowRight size={16} />
                    </Link>
                  ) : (
                    <div className="inline-flex items-center gap-2 border border-white/25 px-6 py-3 text-sm font-semibold text-white/70">
                      {opportunity.cta}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
            Institutional Disclaimer
          </p>
          <p className="text-xs leading-6 text-white/45">{pageDisclaimer}</p>
        </div>
      </section>
    </main>
  )
}
