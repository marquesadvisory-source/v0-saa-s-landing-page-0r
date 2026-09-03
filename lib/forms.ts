const defaultZohoForms = {
  residence:
    "https://forms.zohopublic.com/presidenciamarq1/form/MAIGeneralEnquiry/formperma/HUvYgLAQSebUY9SSHA_SWGbt9kduvWa3Sz3IC24kGIk",
  investment:
    "https://forms.zohopublic.com/presidenciamarq1/form/MAIPrivateConsultation/formperma/x3pWiMMwgobxNizehHNwd9NMxspae_xsjP_U_3QIQS0",
} as const

function addReferral(url: string, referral: string) {
  const separator = url.includes("?") ? "&" : "?"
  return `${url}${separator}referrername=${encodeURIComponent(referral)}`
}

export const enquiryForms = {
  residence: addReferral(
    process.env.NEXT_PUBLIC_ZOHO_RESIDENCE_FORM_URL || defaultZohoForms.residence,
    "mai-website-residence",
  ),
  investment: addReferral(
    process.env.NEXT_PUBLIC_ZOHO_INVESTMENT_FORM_URL || defaultZohoForms.investment,
    "mai-website-investments",
  ),
} as const

