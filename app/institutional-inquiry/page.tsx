import type { Metadata } from "next"
import Link from "next/link"
import { Mail, MessageCircle, Phone } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { createMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = createMetadata({
  title: "Private Consultation",
  description:
    "Begin a confidential conversation with Marqués Advisory & Investments about your Costa Rica residence pathway or investment needs.",
  path: "/institutional-inquiry",
})

const formUrl = process.env.NEXT_PUBLIC_ZOHO_FORM_URL

export default function PrivateConsultationPage() {
  return (
    <main className="min-h-screen bg-[#f5f0e7] text-[#0b1b2a]">
      <SiteHeader />

      <section className="bg-[#091725] px-6 pb-20 pt-40 text-white md:px-10 md:pb-24">
        <div className="mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-[.88fr_1.12fr] lg:items-end">
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d7b779]">
              Private Client Advisory
            </p>
            <h1 className="font-serif text-[clamp(3rem,6vw,6rem)] font-normal leading-[.98] tracking-[-0.04em]">
              Begin a private consultation.
            </h1>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/68 lg:justify-self-end">
            Tell us where you are today and how you would prefer to be contacted. A Private Client Advisor will review your enquiry and coordinate the appropriate next step.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1120px]">
          {formUrl ? (
            <div className="overflow-hidden border border-[#b89a65]/30 bg-white shadow-[0_24px_80px_rgba(11,27,42,.08)]">
              <iframe
                src={formUrl}
                title="MA&I Private Consultation"
                className="min-h-[980px] w-full"
                loading="eager"
              />
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-[1.08fr_.92fr]">
              <div className="border border-[#b89a65]/30 bg-white p-8 md:p-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#96733b]">
                  Secure enquiry form
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight">
                  The consultation form is being connected.
                </h2>
                <p className="mt-6 max-w-xl text-sm leading-7 text-[#53606b]">
                  In the meantime, you may contact MA&I directly by e-mail or WhatsApp. Your enquiry will be handled privately.
                </p>
                <a
                  href={`mailto:${siteConfig.email}?subject=Private%20Consultation%20%E2%80%94%20Costa%20Rica%20Residence`}
                  className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 bg-[#0b1b2a] px-6 text-sm font-semibold text-white"
                >
                  <Mail aria-hidden="true" size={17} />
                  Email MA&I
                </a>
              </div>

              <div className="grid gap-px bg-[#b89a65]/30">
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-5 bg-[#eee5d7] p-7 transition-colors hover:bg-[#e6dac8]">
                  <Mail aria-hidden="true" className="text-[#96733b]" size={21} />
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.16em] text-[#96733b]">Email</span>
                    <span className="mt-1 block text-sm font-semibold">{siteConfig.email}</span>
                  </span>
                </a>
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 bg-[#eee5d7] p-7 transition-colors hover:bg-[#e6dac8]">
                  <MessageCircle aria-hidden="true" className="text-[#96733b]" size={21} />
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.16em] text-[#96733b]">WhatsApp</span>
                    <span className="mt-1 block text-sm font-semibold">{siteConfig.phone}</span>
                  </span>
                </a>
                <a href="tel:+50672679806" className="flex items-center gap-5 bg-[#eee5d7] p-7 transition-colors hover:bg-[#e6dac8]">
                  <Phone aria-hidden="true" className="text-[#96733b]" size={21} />
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.16em] text-[#96733b]">Phone</span>
                    <span className="mt-1 block text-sm font-semibold">{siteConfig.phone}</span>
                  </span>
                </a>
              </div>
            </div>
          )}

          <p className="mt-8 text-xs leading-6 text-[#65707a]">
            By submitting an enquiry, you acknowledge our{" "}
            <Link href="/privacy" className="underline underline-offset-4">Privacy Policy</Link>. Submission does not create an advisory engagement or guarantee immigration approval.
          </p>
        </div>
      </section>
    </main>
  )
}
