export interface SeoImageDefinition {
  width: number
  height: number
  alt: string
  srcSet?: string
}
export const seoImages: Record<string, SeoImageDefinition> = {
  "/images/private-client/country-life.webp": { width: 1122, height: 1402, alt: "Illustrative scene of a couple enjoying a tropical residential terrace", srcSet: "/images/private-client/country-life-640.webp 640w, /images/private-client/country-life.webp 1122w" },
  "/images/private-client/residence-program.webp": { width: 1536, height: 1024, alt: "Illustrative family breakfast overlooking a tropical mountain garden", srcSet: "/images/private-client/residence-program-640.webp 640w, /images/private-client/residence-program.webp 1536w" },
  "/images/private-client/service-residence.webp": { width: 1536, height: 1024, alt: "Illustrative couple arriving at a contemporary tropical residence", srcSet: "/images/private-client/service-residence-640.webp 640w, /images/private-client/service-residence.webp 1536w" },
  "/images/private-client/service-real-estate.webp": { width: 1536, height: 1024, alt: "Illustrative penthouse interior with a green highland city outlook", srcSet: "/images/private-client/service-real-estate-640.webp 640w, /images/private-client/service-real-estate.webp 1536w" },
  "/images/private-client/service-concierge.webp": { width: 1536, height: 1024, alt: "Illustrative private-client assistance in a quiet hospitality lounge", srcSet: "/images/private-client/service-concierge-640.webp 640w, /images/private-client/service-concierge.webp 1536w" },
  "/images/private-client/service-support.webp": { width: 1536, height: 1024, alt: "Illustrative private-client coordination near Costa Rica's National Theatre", srcSet: "/images/private-client/service-support-640.webp 640w, /images/private-client/service-support.webp 1536w" },
  "/images/private-client/service-development.webp": { width: 1536, height: 1024, alt: "Illustrative architectural model and development coordination discussion", srcSet: "/images/private-client/service-development-640.webp 640w, /images/private-client/service-development.webp 1536w" },
  "/costa-rica-coast.jpg": { width: 1800, height: 1200, alt: "Forested Pacific coastline in Costa Rica", srcSet: "/images/optimized/costa-rica-coast-640.webp 640w, /images/optimized/costa-rica-coast-1200.webp 1200w, /images/optimized/costa-rica-coast-1800.webp 1800w" },
  "/costa-rica-forest.jpg": { width: 1200, height: 800, alt: "Suspension bridge through Costa Rica's cloud forest", srcSet: "/images/optimized/costa-rica-forest-640.webp 640w, /images/optimized/costa-rica-forest-1200.webp 1200w" },
  "/architecture-interior.jpg": { width: 1400, height: 933, alt: "Contemporary residential interior with natural materials and garden views", srcSet: "/images/optimized/architecture-interior-640.webp 640w, /images/optimized/architecture-interior-1400.webp 1400w" },
  "/projects/plaza-los-mangos.png": { width: 1024, height: 1024, alt: "Plaza Los Mangos mixed-use development rendering in Santa Cruz, Guanacaste", srcSet: "/images/optimized/plaza-los-mangos-640.webp 640w, /images/optimized/plaza-los-mangos-1024.webp 1024w" },
  "/images/marques-official.png": { width: 1672, height: 941, alt: "Marqués Advisory & Investments" },
}
