// Hosting preview protection is separate from public production indexing.
export function isHostingPreview(): boolean {
  return process.env.VERCEL_ENV === "preview"
}
export const nonPublicPaths = ["/api/", "/admin/", "/private/", "/preview/"]
