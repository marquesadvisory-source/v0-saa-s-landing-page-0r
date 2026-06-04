import type { Metadata } from "next"
import { Mail, MessageCircle, Phone } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, createMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = createMetadata({
  title: "Institutional Inquiry",
  description:
    "Start a private institutional inquiry with Marqués Advisory & Investments regarding real asset preparation and structuring in Costa Rica.",
  path: "/institutional-inquiry",
})

export default function InstitutionalInquiryPage() {
  return (
    <main className="min-h-screen bg-[#0D1B2A] text-white">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Institutional Inquiry", path: "/institutional-inquiry" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Institutional Inquiry",
            url: `${siteConfig.domain}/institutional-inquiry`,
            about: siteConfig.name,
          },
        ]}
      />
      <SiteHeader />

      <section className="px-6 pb-24 pt-40">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.18em] text-[#C9A96E]">Institutional Inquiry</p>
            <h1 className="font-serif text-4xl leading-tight md:text-6xl">
              Begin a private conversation about real asset preparation and structuring.
            </h1>
          </div>
          <div className="space-y-6 text-base leading-8 text-white/70">
            <p>
              Marqués Advisory & Investments reviews inquiries privately and selectively. The first conversation is intended to understand the asset, stakeholder context, documentation status and the intended path from origination to monetization.
            </p>
            <p>
              Appropriate next steps may include institutional preparation, opportunity framing, documentation review or referral to legal, regulatory and specialist advisors where required.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F1EB] px-6 py-20 text-[#0D1B2A]">
        <div className="mx-auto grid max-w-5xl gap-4">
          <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 border border-[#E5DDD0] bg-white p-6">
            <Mail className="text-[#C9A96E]" size={20} />
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-[#C9A96E]">Email</p>
              <p className="text-sm font-medium">{siteConfig.email}</p>
            </div>
          </a>
          <a href="tel:+50672679806" className="flex items-center gap-4 border border-[#E5DDD0] bg-white p-6">
            <Phone className="text-[#C9A96E]" size={20} />
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-[#C9A96E]">Phone</p>
              <p className="text-sm font-medium">{siteConfig.phone}</p>
            </div>
          </a>
          <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 border border-[#E5DDD0] bg-white p-6">
            <MessageCircle className="text-[#C9A96E]" size={20} />
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-[#C9A96E]">WhatsApp</p>
              <p className="text-sm font-medium">{siteConfig.phone}</p>
            </div>
          </a>
        </div>
      </section>

      <section className="px-6 py-12">
        <p className="mx-auto max-w-5xl text-xs leading-6 text-white/45">{siteConfig.disclaimer}</p>
      </section>
    </main>
  )
}
