"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { EnquiryButton } from "@/components/enquiry-provider"
import { SeoImage } from "@/components/seo-image"
import { T, useLanguage } from "@/components/language-provider"
import { localizedValue } from "@/lib/i18n/config"
import type { Opportunity } from "@/lib/opportunities"
import s from "@/app/real-estate/[slug]/property-detail.module.css"

export function RealEstatePropertyDetail({ asset }: { asset: Opportunity }) {
  const { locale, t } = useLanguage()
  const name = localizedValue(asset.localized?.name, locale, asset.name)
  const description = localizedValue(asset.localized?.longDescription, locale, asset.longDescription ?? asset.shortDescription)
  const imageSources = [...new Set([asset.primaryImage, ...asset.gallery].filter(Boolean))]
  const facts = [
    asset.propertyType ? { label: "Property type", value: asset.propertyType } : null,
    asset.propertyDetails?.priceOnRequest ? { label: "Price", value: "Price on request" } : null,
    !asset.propertyDetails?.priceOnRequest && asset.propertyDetails?.askingPrice !== undefined && asset.currency ? { label: "Asking price:", value: `${asset.currency} ${asset.propertyDetails.askingPrice.toLocaleString("en-US")}` } : null,
    asset.propertyDetails?.bedrooms !== undefined ? { label: "Bedrooms", value: String(asset.propertyDetails.bedrooms) } : null,
    asset.propertyDetails?.bathrooms !== undefined ? { label: "Bathrooms", value: String(asset.propertyDetails.bathrooms) } : null,
    asset.propertyDetails?.totalArea !== undefined ? { label: "Total area:", value: `${asset.propertyDetails.totalArea.toLocaleString("en-US")}${asset.propertyDetails.areaUnit ? ` ${asset.propertyDetails.areaUnit}` : ""}` } : null,
    asset.propertyDetails?.landArea !== undefined ? { label: "Land area:", value: `${asset.propertyDetails.landArea.toLocaleString("en-US")}${asset.propertyDetails.areaUnit ? ` ${asset.propertyDetails.areaUnit}` : ""}` } : null,
    asset.propertyDetails?.constructionArea !== undefined ? { label: "Construction area:", value: `${asset.propertyDetails.constructionArea.toLocaleString("en-US")}${asset.propertyDetails.areaUnit ? ` ${asset.propertyDetails.areaUnit}` : ""}` } : null,
  ].filter((fact): fact is { label: string; value: string } => fact !== null)
  const residenceContext = asset.residencyRelevance === "potentially-relevant" && (
    asset.residencyVerificationStatus === "potentially-relevant" ||
    asset.residencyVerificationStatus === "under-verification" ||
    asset.residencyVerificationStatus === "verified"
  )

  return <div className={s.page}>
    <main className={s.main}>
      <header className={s.intro}>
        <p className={s.eyebrow}><T>PRIVATE CLIENT REAL ESTATE</T></p>
        <h1>{name}</h1>
        <p className={s.location}>{asset.region ? `${asset.location} · ${asset.region}` : asset.location}</p>
        <p className={s.status}><T>{asset.publicStatus}</T></p>
      </header>

      {imageSources.length > 0 && <section className={s.images} aria-label={`${name} · ${t("Property details")}`}>
        {imageSources.map((src, index) => <figure key={src} className={index === 0 ? s.primaryImage : s.galleryImage}>
          <SeoImage src={src} alt={`${name} · ${t("Property image")}${index > 0 ? ` ${index + 1}` : ""}`} loading={index === 0 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : undefined} sizes={index === 0 ? "(max-width: 760px) 100vw, 80vw" : "(max-width: 760px) 48vw, 28vw"} />
        </figure>)}
      </section>}

      <section className={s.details} aria-labelledby="property-details-title">
        <div className={s.description}>
          <p className={s.eyebrow}><T>PRIVATE PROPERTY OPPORTUNITIES</T></p>
          <h2 id="property-details-title"><T>Property details</T></h2>
          <p>{localizedValue(asset.localized?.longDescription, locale, asset.longDescription ?? description)}</p>
        </div>
        {facts.length > 0 && <dl className={s.facts}>
          {facts.map(({ label, value }) => <div key={label + value}><dt><T>{label}</T></dt><dd><T>{value}</T></dd></div>)}
        </dl>}
      </section>

      {residenceContext && <section className={s.residenceContext}>
        <p><T>Potential residence relevance is assessed separately and remains subject to applicable requirements and verification.</T></p>
        <Link href="/residency/real-estate"><T>Explore the Residence by Investment real-estate relationship</T><ArrowUpRight size={16} aria-hidden="true" /></Link>
      </section>}

      <section className={s.enquiry}>
        <div><p className={s.eyebrow}><T>PRIVATE CLIENT ENQUIRY</T></p><h2><T>Discuss this property</T></h2></div>
        <EnquiryButton kind="real-estate" subject={name} className={s.button}><T>Discuss this property</T><ArrowUpRight size={16} aria-hidden="true" /></EnquiryButton>
      </section>

      <p className={s.disclaimer}><T>Property ownership alone does not establish residence eligibility. Residence outcomes remain subject to applicable law, documentation, professional review and determination by the competent authorities.</T></p>
    </main>
  </div>
}
