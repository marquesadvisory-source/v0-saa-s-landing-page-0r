// Readiness is not activation. No private providers or credentials are loaded.
export const integrations = {
  opportunities: "local",
  forms: "approved-zoho-public-embeds",
  documents: "approved-local-files",
  analytics: "existing-vercel-page-analytics",
  customAnalyticsEvents: false,
  supabase: false,
  payments: false,
  crm: false,
  email: false,
  webhooks: false,
} as const
