import { T } from "@/components/language-provider"
import type { Metadata } from "next"
import { Mail, MessageCircle, Phone } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { EnquiryButton } from "@/components/enquiry-provider"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, createMetadata, webPageSchema } from "@/lib/seo"
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
          webPageSchema({
            title: "Institutional Inquiry",
            description:
              "Start a private institutional inquiry with Marqués Advisory & Investments regarding real asset preparation and structuring in Costa Rica.",
            path: "/institutional-inquiry",
          }, "ContactPage"),
        ]}
      />
      <SiteHeader />

      <section className="px-6 pb-24 pt-40">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.18em] text-[#C9A96E]"><T>Institutional Inquiry</T></p>
            <h1 className="font-serif text-4xl leading-tight md:text-6xl">
              <T>Begin a private conversation about real asset preparation and structuring.
            </T></h1>
          </div>
          <div className="space-y-6 text-base leading-8 text-white/70">
            <p>
              <T>Marqués Advisory & Investments reviews inquiries privately and selectively. The first conversation is intended to understand the asset, stakeholder context, documentation status and the intended path from origination to monetization.
            </T></p>
            <p>
              <T>Appropriate next steps may include institutional preparation, opportunity framing, documentation review or referral to legal, regulatory and specialist advisors where required.
            </T></p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F1EB] px-6 py-20 text-[#0D1B2A]">
        <div className="mx-auto grid max-w-5xl gap-4">
          <EnquiryButton className="flex items-center justify-between gap-4 border border-[#C9A96E] bg-[#0D1B2A] p-6 text-left text-white">
            <T>General Enquiry </T><Mail size={20} />
          </EnquiryButton>
          <a href="mailto:presidencia@marquescr.com" className="flex items-center gap-4 border border-[#E5DDD0] bg-white p-6">
            <Mail className="text-[#C9A96E]" size={20} />
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-[#826631]"><T>Email</T></p>
              <p className="text-sm font-medium [overflow-wrap:anywhere]"><T>presidencia@marquescr.com</T></p>
            </div>
          </a>
          <a href={siteConfig.whatsapp} className="flex items-center gap-4 border border-[#E5DDD0] bg-white p-6">
            <Phone className="text-[#C9A96E]" size={20} />
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-[#826631]"><T>Phone</T></p>
              <p className="text-sm font-medium"><T>{siteConfig.phone}</T></p>
            </div>
          </a>
          <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 border border-[#E5DDD0] bg-white p-6">
            <MessageCircle className="text-[#C9A96E]" size={20} />
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-[#826631]"><T>WhatsApp</T></p>
              <p className="text-sm font-medium"><T>{siteConfig.phone}</T></p>
            </div>
          </a>
        </div>
      </section>

      <section className="px-6 py-12">
        <p className="mx-auto max-w-5xl text-xs leading-6 text-white/45"><T>{siteConfig.disclaimer}</T></p>
      </section>
    </main>
  )
}
