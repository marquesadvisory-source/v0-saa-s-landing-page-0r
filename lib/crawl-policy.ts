// Only an explicitly identified Vercel production deployment is indexable.
export function isNonProductionDeployment(): boolean {
  return process.env.VERCEL_ENV !== "production"
}
export const nonPublicPaths = ["/api/", "/admin/", "/private/", "/preview/"]
