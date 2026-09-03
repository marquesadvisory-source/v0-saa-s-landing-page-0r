import type { Metadata } from "next"
import { EnquiryPage } from "@/components/enquiry-page"
import { enquiryForms } from "@/lib/forms"
import { createMetadata } from "@/lib/seo"

export const metadata: Metadata = createMetadata({ title: "Investment Opportunity Enquiry", description: "Request information about selected real estate and real-asset opportunities in Costa Rica.", path: "/investment-inquiry" })

export default function InvestmentEnquiryPage() {
  return <EnquiryPage eyebrow="Marques Investments" title="Discuss an investment opportunity." description="Tell us what type of real estate or real-asset opportunity you are seeking. The relevant opportunity can later be preselected from the portfolio." formTitle="MA&I Investment Opportunity Enquiry" formUrl={enquiryForms.investment} emailSubject="Costa Rica Investment Opportunity Enquiry" />
}
