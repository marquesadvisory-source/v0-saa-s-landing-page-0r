import type { ComponentType } from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import HomePage from "@/app/(english)/page"
import AboutPage from "@/app/(english)/about/page"
import WhoWeServePage from "@/app/(english)/who-we-serve/page"
import WhatWeDoPage from "@/app/(english)/what-we-do/page"
import ServicesPage from "@/app/(english)/services/page"
import ContactPage from "@/app/(english)/contact/page"
import PartnersPage from "@/app/(english)/partners/page"
import ResidencyPage from "@/app/(english)/residency/page"
import AboutCostaRicaPage from "@/app/(english)/residency/about-costa-rica/page"
import ResidencyRealEstatePage from "@/app/(english)/residency/real-estate/page"
import RealEstatePage from "@/app/(english)/real-estate/page"
import InvestmentsPage from "@/app/(english)/investments/page"
import InvestmentFrameworkPage from "@/app/(english)/investment-framework/page"
import ProjectsPage from "@/app/(english)/projects/page"
import PlazaLosMangosPage from "@/app/(english)/projects/plaza-los-mangos/page"
import DecimaAvenidaPage from "@/app/(english)/projects/decima-avenida/page"
import CapitalPartnersPage from "@/app/(english)/capital-partners/page"
import InstitutionalInquiryPage from "@/app/(english)/institutional-inquiry/page"
import RealEstatePropertyPage from "@/app/(english)/real-estate/[slug]/page"
import ResidencyLayout from "@/app/(english)/residency/layout"
import { localeFromSegment } from "@/lib/i18n/config"
import { hasCompletePropertyTranslation, localizedMetadata, localizedPropertyMetadata, localizedRoutes } from "@/lib/international-seo"
import { getPublicRealEstateOpportunities } from "@/lib/opportunities/repository"

const pages: Record<string, ComponentType> = {
  "/": HomePage,
  "/about": AboutPage,
  "/who-we-serve": WhoWeServePage,
  "/what-we-do": WhatWeDoPage,
  "/services": ServicesPage,
  "/contact": ContactPage,
  "/partners": PartnersPage,
  "/residency": ResidencyPage,
  "/residency/about-costa-rica": AboutCostaRicaPage,
  "/residency/real-estate": ResidencyRealEstatePage,
  "/real-estate": RealEstatePage,
  "/investments": InvestmentsPage,
  "/investment-framework": InvestmentFrameworkPage,
  "/projects": ProjectsPage,
  "/projects/plaza-los-mangos": PlazaLosMangosPage,
  "/projects/decima-avenida": DecimaAvenidaPage,
  "/capital-partners": CapitalPartnersPage,
  "/institutional-inquiry": InstitutionalInquiryPage,
}

type RouteParams = { locale: string; path?: string[] }
type RouteProps = { params: Promise<RouteParams> }

export const dynamicParams = false

function pagePath(path?: string[]) {
  return path?.length ? `/${path.join("/")}` : "/"
}

export async function generateStaticParams() {
  const propertyPaths = (await getPublicRealEstateOpportunities())
    .filter(hasCompletePropertyTranslation)
    .map(asset => ["real-estate", asset.slug])
  return [...localizedRoutes, ...propertyPaths.map(parts => `/${parts.join("/")}`)]
    .map(route => ({ path: route === "/" ? [] : route.slice(1).split("/") }))
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { locale: segment, path } = await params
  const locale = localeFromSegment(segment)
  if (!locale || locale === "en") return { robots: { index: false, follow: false } }
  const pathname = pagePath(path)
  if (pages[pathname]) return localizedMetadata(pathname, locale)

  if (path?.length === 2 && path[0] === "real-estate") {
    const asset = (await getPublicRealEstateOpportunities()).find(item => item.slug === path[1])
    if (asset && hasCompletePropertyTranslation(asset)) {
      return localizedPropertyMetadata(asset, locale, pathname)
    }
  }
  return { robots: { index: false, follow: false } }
}

export default async function LocalizedPage({ params }: RouteProps) {
  const { locale: segment, path } = await params
  const locale = localeFromSegment(segment)
  if (!locale || locale === "en") notFound()
  const pathname = pagePath(path)
  const Page = pages[pathname]
  if (Page) return pathname.startsWith("/residency") ? <ResidencyLayout><Page /></ResidencyLayout> : <Page />

  if (path?.length === 2 && path[0] === "real-estate") {
    const asset = (await getPublicRealEstateOpportunities()).find(item => item.slug === path[1])
    if (asset && hasCompletePropertyTranslation(asset)) {
      const params = Promise.resolve({ slug: asset.slug })
      return <RealEstatePropertyPage params={params} />
    }
  }
  notFound()
}
