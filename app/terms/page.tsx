import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { createMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = createMetadata({
  title: "Terms & Conditions",
  description: "Website Terms and Conditions for Marques Advisory & Investments.",
  path: "/terms",
})

const sections = [
  ["1. Website purpose", "This website provides general information about Costa Rica residence coordination and selected investment-related services. It is not an offer, solicitation, legal opinion, tax opinion or personalized financial advice."],
  ["2. No engagement created", "Using this website, downloading a fact sheet or submitting an enquiry does not create an advisory, professional, fiduciary or client relationship. Any engagement requires separate review, acceptance, defined scope and documentation."],
  ["3. Residence information", "Residence categories, eligibility, evidence, government practice and processing requirements may change. Approval and timing remain exclusively within the authority of the Costa Rican government. MA&I does not guarantee approval or a particular outcome."],
  ["4. Investment information", "Any investment opportunity is subject to availability, suitability review, diligence, documentation and applicable professional advice. Nothing on this website guarantees performance, value, liquidity, financing, protection or exit."],
  ["5. Independent professionals", "Legal, tax, immigration, fiduciary, banking and other regulated or specialist work may be coordinated with qualified independent professionals under a separately defined scope. MA&I does not present itself as the governmental authority or as a substitute for independent professional advice."],
  ["6. Accuracy and availability", "We seek to maintain accurate and useful information but do not warrant that every page will always be complete, current or uninterrupted. Users should obtain current confirmation before relying on information for a decision."],
  ["7. Intellectual property", "The Marques Advisory & Investments name, visual identity, editorial materials, fact sheets, website content and original graphics may not be reproduced or used commercially without prior written permission, except for personal sharing of materials expressly made available for that purpose."],
  ["8. Third-party services", "Links, forms and services supplied by third parties are governed by their own terms and privacy practices. MA&I is not responsible for third-party availability or content beyond the extent required by applicable law."],
  ["9. Appropriate use", "You may not misuse the website, attempt unauthorized access, interfere with its operation, submit unlawful or misleading information, or use its content to impersonate MA&I or another person."],
  ["10. Changes and contact", `These terms may be updated as the website and services evolve. Questions may be sent to ${siteConfig.email}.`],
] as const

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f5f0e7] text-[#0b1b2a]">
      <SiteHeader />
      <header className="bg-[#091725] px-6 pb-20 pt-40 text-white md:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d7b779]">Legal</p>
          <h1 className="font-serif text-[clamp(3rem,6vw,5.8rem)] leading-none tracking-[-0.04em]">Terms & Conditions</h1>
          <p className="mt-6 text-sm text-white/55">Effective: 1 September 2026</p>
        </div>
      </header>
      <article className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="max-w-3xl text-lg leading-8 text-[#45525d]">
            These terms govern use of the Marques Advisory & Investments website and its publicly available materials.
          </p>
          <div className="mt-12 divide-y divide-[#b89a65]/30 border-y border-[#b89a65]/30">
            {sections.map(([title, body]) => (
              <section key={title} className="grid gap-5 py-8 md:grid-cols-[.38fr_.62fr] md:py-10">
                <h2 className="font-serif text-2xl">{title}</h2>
                <p className="text-sm leading-7 text-[#53606b]">{body}</p>
              </section>
            ))}
          </div>
          <Link href="/" className="mt-10 inline-flex min-h-11 items-center border-b border-[#96733b] py-2 text-sm font-semibold text-[#765624]">
            Return to Marques Advisory & Investments
          </Link>
        </div>
      </article>
    </main>
  )
}
