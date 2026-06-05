import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, FileText, Layers, Scale, ShieldCheck } from "lucide-react"
import { JsonLd } from "@/components/json-ld"
import { SiteHeader } from "@/components/site-header"
import { breadcrumbSchema, createMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = createMetadata({
  title: "Investment Framework",
  description:
    "Investment framework for Costa Rica real assets, capital readiness, investment structuring, institutional review and real asset opportunities with Marqués Advisory & Investments.",
  path: "/investment-framework",
})

const reviewLens = [
  {
    title: "Asset",
    body: "What is the underlying real asset?",
  },
  {
    title: "Thesis",
    body: "Why does the opportunity matter?",
  },
  {
    title: "Structure",
    body: "How can the opportunity be organized?",
  },
  {
    title: "Capital",
    body: "What kind of capital or financing logic may fit?",
  },
  {
    title: "Execution",
    body: "What stakeholders, documents and risks must be coordinated?",
  },
  {
    title: "Monetization",
    body: "What are the possible paths to value realization?",
  },
]

const evaluationDimensions = [
  "Location & Market Logic",
  "Documentation Readiness",
  "Counterparty Alignment",
  "Capital Stack Thinking",
  "Regulatory & Legal Review",
  "Execution Feasibility",
]

const assetClasses = [
  "Mixed-Use",
  "Industrial & Logistics",
  "Hospitality",
  "Strategic Land",
  "Build-to-Suit",
  "Sale-Leaseback",
]

const limitations = [
  "It does not guarantee returns.",
  "It does not replace legal, tax or regulated financial advice.",
  "It does not constitute a public offering or investment solicitation.",
  "It does not convert every opportunity into an investable opportunity.",
]

export default function InvestmentFrameworkPage() {
  return (
    <main className="min-h-screen bg-[#0D1B2A] text-white">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Investment Framework", path: "/investment-framework" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Investment Framework",
            url: `${siteConfig.domain}/investment-framework`,
            description:
              "A disciplined framework for evaluating Costa Rica real asset opportunities before capital, execution and monetization.",
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
              Investment Framework
            </p>
            <h1 className="font-serif text-4xl leading-tight md:text-6xl">
              A disciplined lens for evaluating real asset opportunities before capital, execution and monetization.
            </h1>
          </div>
          <div className="space-y-6 text-base leading-8 text-white/70">
            <p>
              Marqués Advisory & Investments evaluates real asset opportunities through a structured lens designed to clarify asset logic, investment thesis, organization, capital readiness, execution risk and monetization pathways.
            </p>
            <p>
              The framework is conceptual and methodological. It supports private review before an opportunity is positioned for institutional counterparties, financing conversations or execution coordination.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F1EB] px-6 py-20 text-[#0D1B2A]">
        <div className="mx-auto max-w-7xl space-y-16">
          <section className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
                Why Framework Matters
              </p>
              <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                Real asset preparation requires more than location and pricing.
              </h2>
            </div>
            <p className="text-sm leading-7 text-slate-700">
              Real asset opportunities require more than location and pricing. MA&I reviews asset logic, thesis, structure, capital readiness, execution risk and monetization pathways before an opportunity can be positioned for institutional review.
            </p>
          </section>

          <section>
            <div className="mb-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
                  The MA&I Review Lens
                </p>
                <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                  A repeatable sequence from asset clarity to monetization logic.
                </h2>
              </div>
              <p className="text-sm leading-7 text-slate-700">
                Each dimension is reviewed to determine whether an opportunity has the clarity, documentation and coordination logic required for disciplined institutional evaluation.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviewLens.map((item, index) => (
                <article key={item.title} className="border border-[#E5DDD0] bg-white p-7">
                  <p className="mb-5 text-xs font-mono text-[#C9A96E]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm leading-7 text-slate-600">{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <div className="mb-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
                  Evaluation Dimensions
                </p>
                <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                  The practical filters behind institutional preparation.
                </h2>
              </div>
              <p className="text-sm leading-7 text-slate-700">
                The framework helps identify what must be organized, reviewed or coordinated before a real asset opportunity can be discussed responsibly with capital relationships.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {evaluationDimensions.map((dimension) => (
                <article key={dimension} className="border border-[#E5DDD0] bg-white p-7">
                  <ShieldCheck className="mb-5 text-[#C9A96E]" size={24} />
                  <h3 className="text-base font-semibold">{dimension}</h3>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
                Asset Classes Reviewed
              </p>
              <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                Generic real asset categories that may require structured review.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {assetClasses.map((assetClass) => (
                <div key={assetClass} className="border border-[#E5DDD0] bg-white p-6">
                  <Layers className="mb-4 text-[#C9A96E]" size={22} />
                  <p className="text-sm font-semibold">{assetClass}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
                What The Framework Does Not Do
              </p>
              <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                A disciplined review lens, not an investment product.
              </h2>
            </div>
            <div className="grid gap-4">
              {limitations.map((limitation) => (
                <div key={limitation} className="flex gap-4 border border-[#E5DDD0] bg-white p-6">
                  <Scale className="mt-1 shrink-0 text-[#C9A96E]" size={20} />
                  <p className="text-sm leading-7 text-slate-700">{limitation}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 border-y border-[#C9A96E]/20 py-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
              Private Review
            </p>
            <h2 className="font-serif text-3xl leading-tight md:text-4xl">
              Apply the Framework to an Opportunity
            </h2>
          </div>
          <div>
            <p className="mb-8 text-sm leading-7 text-white/65">
              If an opportunity, mandate or capital relationship may require institutional preparation, MA&I can begin with a private review conversation.
            </p>
            <Link
              href="/institutional-inquiry"
              className="inline-flex items-center gap-2 bg-[#C9A96E] px-6 py-3 text-sm font-semibold text-[#0D1B2A] transition-opacity hover:opacity-90"
            >
              Begin Institutional Inquiry
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-12">
        <p className="mx-auto max-w-5xl text-xs leading-6 text-white/45">{siteConfig.disclaimer}</p>
      </section>
    </main>
  )
}
