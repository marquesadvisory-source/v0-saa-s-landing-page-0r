// Published asking prices and areas transcribed from Hacienda Pinilla's official El Jaguar homesites page on 2026-11-18.
// These are promotional price indications, NOT a live inventory or confirmed availability. Revalidate before presenting offers.
// The current official Las Lapas page does not disclose prices by lot; its project-level price range is sourced
// from a separate active brokerage listing and explicitly distinguished in the UI.
export type JaguarHomesite = { number: number; areaSqm: number; askingUsd: number; phase: "Sunset Estates" | "La Sabana" | "Golf Estates" }

export const jaguarHomesites: readonly JaguarHomesite[] = [
  { number: 1, areaSqm: 1825, askingUsd: 399000, phase: "Sunset Estates" },
  { number: 2, areaSqm: 1803, askingUsd: 440000, phase: "Sunset Estates" },
  { number: 3, areaSqm: 1807, askingUsd: 440000, phase: "Sunset Estates" },
  { number: 4, areaSqm: 1809, askingUsd: 430000, phase: "Sunset Estates" },
  { number: 5, areaSqm: 2106, askingUsd: 475000, phase: "Sunset Estates" },
  { number: 6, areaSqm: 1810, askingUsd: 620000, phase: "Sunset Estates" },
  { number: 7, areaSqm: 1972, askingUsd: 645000, phase: "Sunset Estates" },
  { number: 8, areaSqm: 1952, askingUsd: 635000, phase: "Sunset Estates" },
  { number: 9, areaSqm: 2182, askingUsd: 680000, phase: "Sunset Estates" },
  { number: 10, areaSqm: 2252, askingUsd: 695000, phase: "Sunset Estates" },
  { number: 12, areaSqm: 2187, askingUsd: 615000, phase: "Sunset Estates" },
  { number: 13, areaSqm: 2257, askingUsd: 615000, phase: "Sunset Estates" },
  { number: 14, areaSqm: 2154, askingUsd: 610000, phase: "Sunset Estates" },
  { number: 15, areaSqm: 1983, askingUsd: 585000, phase: "Sunset Estates" },
  { number: 16, areaSqm: 1872, askingUsd: 555000, phase: "Sunset Estates" },
  { number: 17, areaSqm: 1843, askingUsd: 585000, phase: "Sunset Estates" },
  { number: 18, areaSqm: 1829, askingUsd: 555000, phase: "Sunset Estates" },
  { number: 19, areaSqm: 1801, askingUsd: 525000, phase: "Sunset Estates" },
  { number: 21, areaSqm: 2045, askingUsd: 635000, phase: "La Sabana" },
  { number: 26, areaSqm: 2000, askingUsd: 610000, phase: "La Sabana" },
  { number: 27, areaSqm: 2054, askingUsd: 615000, phase: "La Sabana" },
  { number: 29, areaSqm: 1842, askingUsd: 600000, phase: "La Sabana" },
  { number: 30, areaSqm: 1854, askingUsd: 595000, phase: "La Sabana" },
  { number: 33, areaSqm: 1971, askingUsd: 610000, phase: "La Sabana" },
  { number: 34, areaSqm: 1941, askingUsd: 615000, phase: "La Sabana" },
  { number: 35, areaSqm: 2128, askingUsd: 640000, phase: "La Sabana" },
  { number: 36, areaSqm: 2083, askingUsd: 620000, phase: "La Sabana" },
  { number: 37, areaSqm: 1866, askingUsd: 590000, phase: "La Sabana" },
  { number: 38, areaSqm: 1927, askingUsd: 590000, phase: "La Sabana" },
  { number: 39, areaSqm: 1852, askingUsd: 560000, phase: "La Sabana" },
  { number: 40, areaSqm: 2114, askingUsd: 590000, phase: "La Sabana" },
  { number: 41, areaSqm: 2183, askingUsd: 570000, phase: "La Sabana" },
  { number: 42, areaSqm: 2183, askingUsd: 570000, phase: "La Sabana" },
  { number: 43, areaSqm: 2573, askingUsd: 640000, phase: "La Sabana" },
  { number: 44, areaSqm: 1862, askingUsd: 580000, phase: "La Sabana" },
  { number: 45, areaSqm: 1869, askingUsd: 595000, phase: "La Sabana" },
  { number: 46, areaSqm: 2966, askingUsd: 810000, phase: "Golf Estates" },
  { number: 47, areaSqm: 1888, askingUsd: 695000, phase: "Golf Estates" },
  { number: 48, areaSqm: 1804, askingUsd: 670000, phase: "Golf Estates" },
  { number: 52, areaSqm: 2138, askingUsd: 510000, phase: "Golf Estates" },
  { number: 53, areaSqm: 2200, askingUsd: 490000, phase: "Golf Estates" },
  { number: 54, areaSqm: 1974, askingUsd: 490000, phase: "Golf Estates" },
] as const

export const lapasPublishedRange = {
  minUsd: 325600,
  maxUsd: 440000,
  plannedHomesites: 49,
  approximateAverageAreaSqm: 1600,
  pricingSource: "Published third-party listing; confirm individual lots directly before any reservation.",
} as const
