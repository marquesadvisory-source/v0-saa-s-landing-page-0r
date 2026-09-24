import "server-only"
import type { Opportunity, OpportunityRepository } from "./types"
import { realEstateOpportunities } from "./real-estate"

// Only facts already approved on the existing public /projects pages.
const publicOpportunities: Opportunity[] = [
  {
    id: "plaza-los-mangos", slug: "plaza-los-mangos", name: "Plaza Los Mangos",
    inventory: "other-investments",
    location: "Santa Cruz, Guanacaste, Costa Rica", category: "Mixed-Use",
    primaryImage: "/projects/plaza-los-mangos.png", gallery: [],
    shortDescription: "A mixed-use real asset opportunity currently in structuring, designed to integrate commercial, hospitality, residential, service-oriented retail and parking uses within a single institutional development framework.",
    residencyRelevance: "not-established", residencyVerificationStatus: "not-reviewed",
    confidential: false, ndaRequired: false, featured: true, status: "under-review",
    publicStatus: "Predevelopment & Institutional Structuring", imagePosition: "center",
  },
  {
    id: "decima-avenida", slug: "decima-avenida", name: "Décima Avenida",
    inventory: "other-investments",
    location: "El Roble, Alajuela, Costa Rica", category: "Mixed-Use",
    primaryImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/D%C3%A9cima%20Avenida%20Rdr-fqy4LI79dGShBO9WtIpkK9WaN4dQ2e.jpg", gallery: [],
    shortDescription: "A preliminary real asset opportunity under evaluation in the Coyol-Airport ecosystem, with potential for phased positioning subject to diligence, documentation and institutional review.",
    residencyRelevance: "not-established", residencyVerificationStatus: "not-reviewed",
    confidential: false, ndaRequired: false, featured: true, status: "under-review",
    publicStatus: "Early-Stage Institutional Review", imagePosition: "58% 18%",
  },
]

export const localOpportunityRepository: OpportunityRepository = {
  async list() { return structuredClone([...publicOpportunities, ...realEstateOpportunities]) },
}
