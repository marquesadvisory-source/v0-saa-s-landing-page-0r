import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Layers } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, createMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = createMetadata({
  title: "Institutional Opportunities",
  description:
    "Institutional opportunities, real assets platform context, origination, structuring, capital readiness and capital relationships in Costa Rica from Marqués Advisory & Investments.",
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

const decimaAvenidaImage =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/D%C3%A9cima%20Avenida%20Rdr-fqy4LI79dGShBO9WtIpkK9WaN4dQ2e.jpg"

const opportunities = [
  {
    name: "Plaza Los Mangos",
    location: "Santa Cruz, Guanacaste, Costa Rica",
    visualLabel: "Mixed-use institutional framework",
    image: "/projects/plaza-los-mangos.png",
    imagePosition: "center",
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
    visualLabel: "Coyol-Airport growth corridor",
    image: decimaAvenidaImage,
    imagePosition: "58% 18%",
    assetClass: "Mixed-Use / Real Asset Opportunity",
    status: "Early-Stage Institutional Review",
    stage: "Origination / Under Structuring",
    role: "Early-stage thesis development, structuring review and strategic positioning.",
    thesis:
      "A preliminary real asset opportunity under evaluation in the Coyol-Airport ecosystem, with potential for phased positioning subject to diligence, documentation and institutional review.",
    href: "/projects/decima-avenida",
    cta: "View Institutional Overview",
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
              Opportunities shown on this page are not public offerings, investment solicitations or brokerage listings. They are institutional showcases of real asset opportunities under evaluation, structuring or capital readiness preparation.
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
                className="grid overflow-hidden border border-[#C9A96E]/15 bg-[#112032] text-white shadow-[0_24px_70px_rgba(0,0,0,0.16)] lg:grid-cols-[0.95fr_1.05fr]"
              >
                <div className="relative min-h-[320px] overflow-hidden bg-[#0D1B2A] lg:min-h-full">
                  {opportunity.image ? (
                    <div
                      className="absolute inset-0 bg-cover bg-no-repeat"
                      style={{
                        backgroundImage: `url(${opportunity.image})`,
                        backgroundPosition: opportunity.imagePosition,
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(201,169,110,0.26),transparent_30%),linear-gradient(135deg,rgba(17,32,50,0.95),rgba(13,27,42,0.94))]">
                      <div className="absolute inset-x-8 top-10 h-px bg-[#C9A96E]/35" />
                      <div className="absolute inset-y-10 left-10 w-px bg-[#C9A96E]/25" />
                      <div className="absolute bottom-12 left-10 right-10 grid grid-cols-5 gap-3">
                        {["Commercial", "Hospitality", "Residential", "Retail", "Parking"].map((component) => (
                          <div key={component} className="min-h-24 border border-[#C9A96E]/25 bg-white/[0.04] p-3">
                            <div className="mb-3 h-1.5 w-8 bg-[#C9A96E]/60" />
                            <p className="text-[10px] uppercase leading-4 tracking-[0.12em] text-white/55">
                              {component}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="absolute right-10 top-12 flex h-24 w-24 items-center justify-center border border-[#C9A96E]/30 bg-[#0D1B2A]/35">
                        <Layers className="text-[#C9A96E]" size={30} />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A]/28 via-[#0D1B2A]/52 to-[#0D1B2A]/88" />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0D1B2A] to-transparent" />

                  <div className="relative flex min-h-[320px] flex-col justify-end p-8 md:p-12 lg:min-h-[520px]">
                    <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
                      Institutional Opportunity
                    </p>
                    <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                      {opportunity.name}
                    </h2>
                    <p className="mt-5 max-w-md text-sm leading-7 text-white/68">
                      {opportunity.location}
                    </p>
                    <p className="mt-6 inline-flex w-fit border border-[#C9A96E]/35 bg-[#0D1B2A]/45 px-3 py-2 text-[10px] uppercase tracking-[0.14em] text-[#C9A96E]">
                      {opportunity.visualLabel}
                    </p>
                  </div>
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
