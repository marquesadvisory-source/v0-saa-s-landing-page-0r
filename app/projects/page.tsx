import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Building2, FileText, Layers, ShieldCheck } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, createMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = createMetadata({
  title: "Projects",
  description:
    "Institutional project framework for private real asset opportunities supported by Marqués Advisory & Investments in Costa Rica.",
  path: "/projects",
})

const projectFramework = [
  {
    title: "Origination",
    body: "Initial asset context, sponsor objectives, location logic and preliminary opportunity framing.",
  },
  {
    title: "Institutional preparation",
    body: "Documentation, diligence readiness, risk framing and governance considerations before private evaluation.",
  },
  {
    title: "Structuring",
    body: "Financial, legal and strategic structuring paths reviewed with appropriate professional counterparties.",
  },
  {
    title: "Monetization path",
    body: "Private positioning of the opportunity once the asset, documentation and structure are sufficiently developed.",
  },
]

const projectFacts = [
  { label: "Location", value: "El Roble, Alajuela" },
  { label: "Asset profile", value: "Mixed-use real asset" },
  { label: "Current stage", value: "Institutional pre-feasibility" },
  { label: "Strategic context", value: "Coyol-Airport corridor" },
]

const plazaFacts = [
  { label: "Location", value: "Santa Cruz, Guanacaste" },
  { label: "Asset profile", value: "Mixed-use real asset development" },
  { label: "Current stage", value: "Predevelopment & institutional structuring" },
  { label: "Components", value: "Commercial, hospitality, residential and service-oriented uses" },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0D1B2A] text-white">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Projects",
            url: `${siteConfig.domain}/projects`,
            description:
              "Institutional project framework for private real asset opportunities supported by Marqués Advisory & Investments.",
            publisher: {
              "@type": "Organization",
              name: siteConfig.name,
            },
          },
        ]}
      />

      <SiteHeader />

      <section className="px-6 pb-20 pt-40">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
              Projects Framework
            </p>
            <h1 className="font-serif text-4xl leading-tight md:text-6xl">
              Real asset opportunities reviewed through an institutional preparation lens.
            </h1>
          </div>
          <div className="space-y-6 text-base leading-8 text-white/70">
            <p>
              Marqués Advisory & Investments presents projects as private opportunities in preparation, not as public offerings or investment products.
            </p>
            <p>
              Each opportunity is framed through the platform thesis: from origination to monetization, with emphasis on documentation, diligence readiness, governance and appropriate professional review.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F1EB] px-6 py-20 text-[#0D1B2A]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
                Institutional Process
              </p>
              <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                A disciplined framework before any capital-facing conversation.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {projectFramework.map((item, index) => (
                <article key={item.title} className="border border-[#E5DDD0] bg-white p-6">
                  <p className="mb-4 text-xs font-mono text-[#C9A96E]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mb-3 text-base font-semibold">{item.title}</h3>
                  <p className="text-sm leading-7 text-slate-600">{item.body}</p>
                </article>
              ))}
            </div>
          </div>

          <article className="mb-10 grid overflow-hidden bg-[#112032] text-white lg:grid-cols-2">
            <div className="flex min-h-[340px] flex-col justify-end bg-[#0D1B2A] p-8 md:p-12">
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
                Institutional Showcase
              </p>
              <h2 className="font-serif text-3xl leading-tight md:text-4xl">Plaza Los Mangos</h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
                Santa Cruz, Guanacaste, Costa Rica
              </p>
            </div>
            <div className="p-8 md:p-12">
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
                Project in Structuring
              </p>
              <div className="mb-6 inline-block border border-[#C9A96E]/40 bg-[#C9A96E]/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-[#C9A96E]">
                Status: Predevelopment & institutional structuring
              </div>
              <p className="mb-8 text-sm leading-7 text-white/70">
                Plaza Los Mangos is currently under structuring as a mixed-use real asset opportunity designed to integrate commercial, hospitality, residential and service-oriented uses within a single institutional development framework.
              </p>

              <div className="mb-8 grid grid-cols-2 gap-5 border-y border-[#C9A96E]/20 py-6">
                {plazaFacts.map((fact) => (
                  <div key={fact.label}>
                    <p className="mb-1 text-xs uppercase tracking-[0.12em] text-[#C9A96E]">
                      {fact.label}
                    </p>
                    <p className="text-sm text-white">{fact.value}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/projects/plaza-los-mangos"
                className="inline-flex items-center gap-2 bg-[#C9A96E] px-6 py-3 text-sm font-semibold text-[#0D1B2A] transition-opacity hover:opacity-90"
              >
                View institutional showcase
                <ArrowRight size={16} />
              </Link>
            </div>
          </article>

          <article className="grid overflow-hidden bg-[#112032] text-white lg:grid-cols-2">
            <div
              className="min-h-[340px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/D%C3%A9cima%20Avenida%20Rdr-fqy4LI79dGShBO9WtIpkK9WaN4dQ2e.jpg)",
                backgroundPosition: "center top",
              }}
              aria-label="Décima Avenida project visual"
            />
            <div className="p-8 md:p-12">
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
                Project in Structuring
              </p>
              <h2 className="font-serif text-3xl leading-tight md:text-4xl">Décima Avenida</h2>
              <div className="my-6 inline-block border border-[#C9A96E]/40 bg-[#C9A96E]/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-[#C9A96E]">
                Status: Institutional pre-feasibility
              </div>
              <p className="mb-8 text-sm leading-7 text-white/70">
                Décima Avenida is a preliminary mixed-use real asset opportunity in El Roble, Alajuela. The project is being reviewed through an institutional preparation framework focused on asset logic, documentation, phasing, governance and private diligence.
              </p>

              <div className="mb-8 grid grid-cols-2 gap-5 border-y border-[#C9A96E]/20 py-6">
                {projectFacts.map((fact) => (
                  <div key={fact.label}>
                    <p className="mb-1 text-xs uppercase tracking-[0.12em] text-[#C9A96E]">
                      {fact.label}
                    </p>
                    <p className="text-sm text-white">{fact.value}</p>
                  </div>
                ))}
              </div>

              <div className="mb-8 grid gap-4 sm:grid-cols-2">
                {[
                  [Building2, "Asset review"],
                  [FileText, "Documentation readiness"],
                  [ShieldCheck, "Risk and governance"],
                  [Layers, "Phasing logic"],
                ].map(([Icon, label]) => {
                  const ProjectIcon = Icon as typeof Building2
                  return (
                    <div key={label as string} className="flex items-center gap-3 text-sm text-white/70">
                      <ProjectIcon size={18} className="text-[#C9A96E]" />
                      <span>{label as string}</span>
                    </div>
                  )
                })}
              </div>

              <Link
                href="/institutional-inquiry"
                className="inline-flex items-center gap-2 bg-[#C9A96E] px-6 py-3 text-sm font-semibold text-[#0D1B2A] transition-opacity hover:opacity-90"
              >
                Request institutional information
                <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="px-6 py-12">
        <p className="mx-auto max-w-5xl text-xs leading-6 text-white/45">{siteConfig.disclaimer}</p>
      </section>
    </main>
  )
}
