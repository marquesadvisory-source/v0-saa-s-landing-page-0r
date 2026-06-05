import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Building2, FileText, Layers, MapPin, ShieldCheck } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, createMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site"

const heroImage =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/D%C3%A9cima%20Avenida%20Rdr-fqy4LI79dGShBO9WtIpkK9WaN4dQ2e.jpg"

const projectDisclaimer =
  "Information regarding this opportunity is provided for institutional context only. Nothing on this page constitutes a public offering of securities, investment solicitation, securities offering, real estate brokerage listing, guarantee of investment performance or invitation to invest. Additional materials may be shared only with qualified parties following appropriate review, confidentiality procedures and legal documentation."

export const metadata: Metadata = createMetadata({
  title: "Décima Avenida",
  description:
    "Décima Avenida is an institutional mixed-use real asset opportunity in El Roble, Alajuela, Costa Rica, currently under institutional review and structuring.",
  path: "/projects/decima-avenida",
})

const snapshot = [
  ["Asset Class", "Mixed-Use Real Asset Opportunity"],
  ["Location", "El Roble, Alajuela, Costa Rica"],
  ["Stage", "Origination / Under Structuring"],
  ["Status", "Early-Stage Institutional Review"],
  ["MA&I Role", "Structuring & Institutional Positioning"],
  ["Review Basis", "Subject to diligence, documentation and institutional review"],
]

const platformStages = ["Origination", "Structuring", "Capital Readiness", "Execution", "Monetization"]

export default function DecimaAvenidaPage() {
  return (
    <main className="min-h-screen bg-[#0D1B2A] text-white">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Institutional Opportunities", path: "/projects" },
          { name: "Décima Avenida", path: "/projects/decima-avenida" },
        ])}
      />

      <SiteHeader />

      <section className="relative min-h-screen overflow-hidden bg-[#0D1B2A]">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundPosition: "58% 12%",
          }}
          aria-label="Décima Avenida tower rendering"
        />
        <div className="absolute inset-0 bg-[#0D1B2A]/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/10 via-[#0D1B2A]/25 to-[#0D1B2A]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/85 via-[#0D1B2A]/35 to-transparent" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-20 pt-44">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
              Institutional Mixed-Use Opportunity
            </p>
            <h1 className="font-serif text-4xl leading-tight md:text-6xl">Décima Avenida</h1>
            <p className="mt-5 text-sm uppercase tracking-[0.14em] text-white/55">
              El Roble, Alajuela, Costa Rica
            </p>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/75">
              A mixed-use real asset opportunity positioned within the Coyol-Airport growth corridor and currently under institutional review and structuring.
            </p>
            <Link
              href="/institutional-inquiry"
              className="mt-9 inline-flex items-center gap-2 bg-[#C9A96E] px-6 py-3 text-sm font-semibold text-[#0D1B2A] transition-opacity hover:opacity-90"
            >
              Institutional Inquiry
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F1EB] px-6 py-20 text-[#0D1B2A]">
        <div className="mx-auto max-w-7xl space-y-16">
          <section className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
                Why This Opportunity Matters
              </p>
              <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                A strategically located real asset opportunity within an expanding growth corridor.
              </h2>
            </div>
            <div className="space-y-5 text-sm leading-7 text-slate-700">
              <p>
                Décima Avenida is positioned within the Coyol-Airport ecosystem, a corridor shaped by corporate, industrial, logistics and service-oriented activity.
              </p>
              <p>
                The opportunity is being reviewed through residential, commercial and service demand drivers, with a focus on mixed-use urban integration and long-term institutional relevance.
              </p>
              <p>
                Any future strategy remains subject to diligence, market validation, documentation and stakeholder coordination.
              </p>
            </div>
          </section>

          <section>
            <div className="mb-8">
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
                Opportunity Snapshot
              </p>
              <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                Institutional information for preliminary review.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {snapshot.map(([label, value]) => (
                <article key={label} className="border border-[#E5DDD0] bg-white p-7">
                  <p className="mb-3 text-xs uppercase tracking-[0.14em] text-[#C9A96E]">{label}</p>
                  <p className="text-sm leading-7 text-slate-700">{value}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-3">
            <article className="border border-[#E5DDD0] bg-white p-8 md:col-span-2">
              <FileText className="mb-5 text-[#C9A96E]" size={24} />
              <h2 className="mb-4 text-xl font-semibold">Our Role</h2>
              <p className="text-sm leading-7 text-slate-700">
                Marqués Advisory & Investments is evaluating the opportunity from a structuring, positioning and institutional-readiness perspective. Any future development strategy remains subject to diligence, documentation, market validation and stakeholder coordination.
              </p>
            </article>
            <article className="border border-[#E5DDD0] bg-white p-8">
              <ShieldCheck className="mb-5 text-[#C9A96E]" size={24} />
              <h2 className="mb-4 text-xl font-semibold">Current Stage</h2>
              <p className="text-sm leading-7 text-slate-700">
                Origination / Under Structuring. Review remains subject to diligence and institutional validation.
              </p>
            </article>
          </section>

          <section>
            <div className="mb-8">
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
                Position Within the MA&I Platform
              </p>
              <h2 className="max-w-3xl font-serif text-3xl leading-tight md:text-4xl">
                From origination to monetization, with current emphasis on early structuring.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-5">
              {platformStages.map((stage, index) => {
                const active = stage === "Origination" || stage === "Structuring"
                return (
                  <article
                    key={stage}
                    className="border p-6"
                    style={{
                      borderColor: active ? "#C9A96E" : "#E5DDD0",
                      backgroundColor: active ? "#112032" : "#FFFFFF",
                      color: active ? "#FFFFFF" : "#0D1B2A",
                    }}
                  >
                    <p className="mb-4 text-xs font-mono text-[#C9A96E]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-sm font-semibold">{stage}</h3>
                    {active && (
                      <p className="mt-4 text-xs leading-6 text-white/60">
                        Current stage: Origination / Under Structuring
                      </p>
                    )}
                  </article>
                )
              })}
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-3">
            {[
              [MapPin, "Strategic Location", "Coyol-Airport corridor positioning with corporate, industrial and service-oriented demand drivers."],
              [Building2, "Mixed-Use Integration", "Potential alignment of residential, commercial and service uses within an urban real asset framework."],
              [Layers, "Institutional Relevance", "Reviewed for long-term positioning, documentation quality and disciplined structuring readiness."],
            ].map(([Icon, title, body]) => {
              const CardIcon = Icon as typeof MapPin
              return (
                <article key={title as string} className="border border-[#E5DDD0] bg-white p-8">
                  <CardIcon className="mb-5 text-[#C9A96E]" size={24} />
                  <h2 className="mb-4 text-xl font-semibold">{title as string}</h2>
                  <p className="text-sm leading-7 text-slate-700">{body as string}</p>
                </article>
              )
            })}
          </section>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
            Institutional Disclaimer
          </p>
          <p className="text-xs leading-6 text-white/45">{projectDisclaimer}</p>
        </div>
      </section>
    </main>
  )
}
