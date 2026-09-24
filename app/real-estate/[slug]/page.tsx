import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { RealEstatePropertyDetail } from "@/components/real-estate-property-detail"
import { JsonLd } from "@/components/json-ld"
import { SiteHeader } from "@/components/site-header"
import { ResidencyFooter } from "@/components/residency-editorial"
import { getPublicRealEstateOpportunities, getPublicRealEstateOpportunityBySlug } from "@/lib/opportunities/repository"
import { realEstateDetailPath } from "@/lib/opportunities/publication"
import { breadcrumbSchema, createMetadata, webPageSchema } from "@/lib/seo"

type RouteProps = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export async function generateStaticParams() {
  const records = await getPublicRealEstateOpportunities()
  return records.map(record => ({ slug: record.slug }))
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params
  const asset = await getPublicRealEstateOpportunityBySlug(slug)
  if (!asset) return {}
  return createMetadata({
    title: `${asset.name} | Costa Rica Real Estate`,
    description: asset.longDescription ?? asset.shortDescription,
    path: realEstateDetailPath(asset.slug),
    image: asset.primaryImage,
  })
}

export default async function RealEstatePropertyPage({ params }: RouteProps) {
  const { slug } = await params
  const asset = await getPublicRealEstateOpportunityBySlug(slug)
  if (!asset) notFound()
  const path = realEstateDetailPath(asset.slug)
  const seo = { title: `${asset.name} | Costa Rica Real Estate`, description: asset.longDescription ?? asset.shortDescription, path, image: asset.primaryImage }

  return <>
    <SiteHeader />
    <JsonLd data={[
      webPageSchema(seo, "WebPage"),
      breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Luxury Real Estate", path: "/real-estate" }, { name: asset.name, path }]),
    ]} />
    <RealEstatePropertyDetail asset={asset} />
    <ResidencyFooter />
  </>
}
