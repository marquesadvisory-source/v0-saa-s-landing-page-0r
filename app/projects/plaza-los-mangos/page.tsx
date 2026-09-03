import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Building2, FileText, Layers, MapPin, ShieldCheck } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, createMetadata } from "@/lib/seo"

const projectDisclaimer =
  "Information regarding this project is provided for institutional context only. Nothing on this page constitutes a public offering of securities, investment solicitation, real estate brokerage listing, guarantee of investment performance or invitation to invest. Additional materials may be shared only with qualified parties following appropriate review, confidentiality procedures and legal documentation."

export const metadata: Metadata = createMetadata({
  title: "Plaza Los Mangos",
  description:
    "Plaza Los Mangos is currently under structuring as a mixed-use real asset development in Santa Cruz, Guanacaste, Costa Rica.",
  path: "/projects/plaza-los-mangos",
})

const assetProfile = [
  { label: "Project name", value: "Plaza Los Mangos" },
  { label: "Location", value: "Santa Cruz, Guanacaste, Costa Rica" },
  { label: "Asset type", value: "Mixed-use real asset development" },
  { label: "Status", value: "Predevelopment & institutional structuring" },
]

const components = [
  "Commercial",
  "Hospitality",
  "Residential",
  "Service-oriented retail",
  "Parking",
]

const approach = [
  {
    title: "Asset framing",
    body: "Clarifying the project thesis, land-use logic, component mix and institutional development framework.",
  },
  {
    title: "Capital readiness",
    body: "Preparing materials and documentation for review by qualified institutional counterparties, subject to diligence.",
  },
  {
    title: "Professional coordination",
    body: "Supporting coordination with appropriate legal, technical, financial and specialist advisors as the project advances.",
  },
  {
    title: "Monetization strategy",
    body: "Evaluating private pathways for institutional positioning once documentation and review standards are appropriate.",
  },
]

export default function PlazaLosMangosPage() {
  return (
    <main className="min-h-screen bg-[#0D1B2A] text-white">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Institutional Opportunities", path: "/projects" },
          { name: "Plaza Los Mangos", path: "/projects/plaza-los-mangos" },
        ])}
      />

      <SiteHeader />

      <section className="px-6 pb-20 pt-40">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
              Institutional Showcase
            </p>
            <h1 className="font-serif text-4xl leading-tight md:text-6xl">Plaza Los Mangos</h1>
            <p className="mt-6 text-sm uppercase tracking-[0.14em] text-white/50">
              Santa Cruz, Guanacaste, Costa Rica
            </p>
          </div>
          <div className="space-y-6 text-base leading-8 text-white/70">
            <p>
              Plaza Los Mangos is being structured as a mixed-use real asset opportunity in Santa Cruz, Guanacaste, designed to integrate commercial, hospitality, residential and service-oriented uses within a single institutional development framework.
            </p>
            <p>
              The project is currently under structuring and remains subject to diligence, documentation, regulatory review and appropriate professional coordination.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F1EB] px-6 py-20 text-[#0D1B2A]">
        <div className="mx-auto max-w-7xl space-y-16">
          <section className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
                Project Overview
              </p>
              <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                A mixed-use real asset framework for a growing Guanacaste market.
              </h2>
            </div>
            <p className="text-sm leading-7 text-slate-700">
              Plaza Los Mangos is positioned as a predevelopment project where land-use strategy, component integration, documentation and institutional preparation are being evaluated before any private capital-facing process.
            </p>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <article className="border border-[#E5DDD0] bg-white p-8">
              <Building2 className="mb-5 text-[#C9A96E]" size={24} />
              <h2 className="mb-5 text-xl font-semibold">Asset Profile</h2>
              <div className="grid gap-5">
                {assetProfile.map((item) => (
                  <div key={item.label} className="border-b border-[#E5DDD0] pb-4">
                    <p className="mb-1 text-xs uppercase tracking-[0.14em] text-[#C9A96E]">{item.label}</p>
                    <p className="text-sm text-slate-700">{item.value}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="border border-[#E5DDD0] bg-white p-8">
              <Layers className="mb-5 text-[#C9A96E]" size={24} />
              <h2 className="mb-5 text-xl font-semibold">Development Components</h2>
              <div className="grid gap-3">
                {components.map((component) => (
                  <div key={component} className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="h-px w-6 bg-[#C9A96E]" />
                    {component}
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <MapPin className="mb-5 text-[#C9A96E]" size={24} />
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
                Strategic Location
              </p>
              <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                Santa Cruz, Guanacaste.
              </h2>
            </div>
            <p className="text-sm leading-7 text-slate-700">
              The location thesis is centered on Santa Cruz as a Guanacaste market with commercial, residential, hospitality and service-oriented demand drivers. Additional location materials may be available upon appropriate review with qualified institutional counterparties.
            </p>
          </section>

          <section>
            <div className="mb-8">
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
                Institutional Structuring Approach
              </p>
              <h2 className="max-w-3xl font-serif text-3xl leading-tight md:text-4xl">
                From origination to monetization, subject to diligence and professional review.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {approach.map((item, index) => (
                <article key={item.title} className="border border-[#E5DDD0] bg-white p-6">
                  <p className="mb-4 text-xs font-mono text-[#C9A96E]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mb-3 text-base font-semibold">{item.title}</h3>
                  <p className="text-sm leading-7 text-slate-600">{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-3">
            <article className="border border-[#E5DDD0] bg-white p-8 md:col-span-2">
              <FileText className="mb-5 text-[#C9A96E]" size={24} />
              <h2 className="mb-4 text-xl font-semibold">MA&I Role</h2>
              <p className="text-sm leading-7 text-slate-700">
                Marqués Advisory & Investments supports origination, investment structuring, capital readiness, professional coordination and monetization strategy for Plaza Los Mangos.
              </p>
            </article>
            <article className="border border-[#E5DDD0] bg-white p-8">
              <ShieldCheck className="mb-5 text-[#C9A96E]" size={24} />
              <h2 className="mb-4 text-xl font-semibold">Current Status</h2>
              <p className="text-sm leading-7 text-slate-700">
                Predevelopment & institutional structuring. Materials remain subject to diligence and appropriate review.
              </p>
            </article>
          </section>

          <section className="bg-[#112032] p-8 text-white md:p-12">
            <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">
              Institutional Inquiry
            </p>
            <h2 className="max-w-3xl font-serif text-3xl leading-tight md:text-4xl">
              Additional materials may be shared only with qualified parties following appropriate review.
            </h2>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-white/70">
              This page provides institutional context only. Any further project information remains subject to confidentiality procedures, legal documentation and professional review.
            </p>
            <Link
              href="/institutional-inquiry"
              className="mt-8 inline-flex items-center gap-2 bg-[#C9A96E] px-6 py-3 text-sm font-semibold text-[#0D1B2A] transition-opacity hover:opacity-90"
            >
              Begin institutional inquiry
              <ArrowRight size={16} />
            </Link>
          </section>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">Disclaimer</p>
          <p className="text-xs leading-6 text-white/45">{projectDisclaimer}</p>
        </div>
      </section>
    </main>
  )
}
