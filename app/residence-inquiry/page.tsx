import type { Metadata } from "next"
import { EnquiryPage } from "@/components/enquiry-page"
import { enquiryForms } from "@/lib/forms"
import { createMetadata } from "@/lib/seo"

export const metadata: Metadata = createMetadata({ title: "Costa Rica Residence Enquiry", description: "Begin a private enquiry about Costa Rica residence pathways.", path: "/residence-inquiry" })

export default function ResidenceEnquiryPage() {
  return <EnquiryPage eyebrow="Residence Advisory" title="Begin your Costa Rica residence enquiry." description="Tell us which pathway you are considering and how you would prefer to be contacted. A Private Client Advisor will review your enquiry." formTitle="MA&I Costa Rica Residence Enquiry" formUrl={enquiryForms.residence} emailSubject="Costa Rica Residence Enquiry" />
}
