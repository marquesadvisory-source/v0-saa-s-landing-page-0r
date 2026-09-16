export type FormPurpose = "callback" | "generalEnquiry" | "realEstateEnquiry"
export type EnquiryKind = "callback" | "general" | "real-estate"
export interface FormConfiguration { purpose: FormPurpose; name: string; modalLabel: string; publicUrl: string }

// Public embed URLs are not credentials. The renamed Real Estate form retains its approved internal slug.
export const forms = {
  callback: { purpose: "callback", name: "Callback Request", modalLabel: "Request a Callback", publicUrl: "https://forms.zohopublic.com/presidenciamarq1/form/CallbackRequest/formperma/6XDt5Ynkv1LDfRqtebKiISldzdn2WFP-WrNCLDXhTC4" },
  generalEnquiry: { purpose: "generalEnquiry", name: "General Enquiry", modalLabel: "General Enquiry", publicUrl: "https://forms.zohopublic.com/presidenciamarq1/form/MAIGeneralEnquiry/formperma/HUvYgLAQSebUY9SSHA_SWGbt9kduvWa3Sz3IC24kGIk" },
  realEstateEnquiry: { purpose: "realEstateEnquiry", name: "Real Estate Enquiry", modalLabel: "Real Estate Enquiry", publicUrl: "https://forms.zohopublic.com/presidenciamarq1/form/MAIPrivateConsultation/formperma/x3pWiMMwgobxNizehHNwd9NMxspae_xsjP_U_3QIQS0" },
} as const satisfies Record<FormPurpose, FormConfiguration>

export const enquiryPurpose: Record<EnquiryKind, FormPurpose> = {
  callback: "callback", general: "generalEnquiry", "real-estate": "realEstateEnquiry",
}
export function getEnquiryForm(kind: EnquiryKind): FormConfiguration { return forms[enquiryPurpose[kind]] }
export const formIntent = {
  callback: "callback", generalEnquiry: "general", privateClientEnquiry: "general",
  residencyEnquiry: "general", privateConsultation: "general", privateAdvisor: "general",
  investmentEnquiry: "general", realEstateEnquiry: "real-estate",
} as const satisfies Record<string, EnquiryKind>
