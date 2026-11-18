"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react"
import { PropertyGallery, type PropertyImage } from "./property-gallery"
import { siteConfig } from "@/lib/site"
import type { Locale } from "@/lib/i18n/config"
import { pinillaText } from "./pinilla-translations"
import styles from "./hacienda-pinilla.module.css"

export type FeaturedProperty = {
  name: string
  kind: "residence" | "homesite"
  description: string
  price?: string
  highlights?: string
  narrative: string[]
  facts: { value: string; label: string }[]
  images: readonly [PropertyImage, PropertyImage, ...PropertyImage[]]
}

const imageBase = "/images/real-estate/hacienda-pinilla/"
const imageSrc = (file: string) => file.startsWith("https://www.haciendapinilla.com/assets/real-estate/") ? file : imageBase + file

export function FeaturedPropertyCards({ opportunities, locale }: { opportunities: readonly FeaturedProperty[]; locale: Locale }) {
  const t = (message: string) => pinillaText(message, locale)
  const [selected, setSelected] = useState<FeaturedProperty | null>(null)
  const [imageIndex, setImageIndex] = useState(0)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  const open = (item: FeaturedProperty, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger
    setImageIndex(0)
    setSelected(item)
  }
  const close = () => setSelected(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (selected) {
      if (!dialog.open) dialog.showModal()
      const previousOverflow = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        if (dialog.open) dialog.close()
        document.body.style.overflow = previousOverflow
        triggerRef.current?.focus({ preventScroll: true })
      }
    }
  }, [selected])

  const step = (direction: -1 | 1) => {
    if (!selected) return
    setImageIndex(index => (index + direction + selected.images.length) % selected.images.length)
  }

  return <>
    <div className={styles.propertyGrid}>
      {opportunities.map(item => {
        const isHomesite = item.kind === "homesite"
        return <article className={styles.property} key={item.name}>
          <div className={styles.propertyOpenArea}>
            <PropertyGallery name={item.name} kind={item.kind} images={item.images} locale={locale} />
            <button type="button" className={styles.cardOpenButton} aria-label={`${t("View gallery & details")} · ${item.name}`} onClick={event => open(item, event.currentTarget)}>
              <span className={styles.cardOpenHint}>{t("View full details")} <ArrowUpRight size={17} aria-hidden="true" /></span>
            </button>
          </div>
          <div className={styles.propertyBody}>
            <p className={styles.propertyType}>{t(isHomesite ? "Homesites · Land investment" : "Private residence")}</p>
            <h3>{item.name}</h3>
            <p className={styles.propertyPrice}>
              <span>{t(item.price ? "ASKING PRICE" : "PRICING")}</span>{item.price || t("On request")}
            </p>
            <p className={styles.propertyDescription}>{item.description}</p>
            {item.highlights && <p className={styles.propertyHighlights}>{item.highlights}</p>}
            <button type="button" className={styles.exploreResidence} onClick={event => open(item, event.currentTarget)}>
              {t("View gallery & details")} <ArrowUpRight size={17} aria-hidden="true" />
            </button>
          </div>
        </article>
      })}
    </div>
    <dialog
      ref={dialogRef}
      className={styles.propertyDialog}
      aria-label={selected ? `${selected.name} · ${t("Property details")}` : t("Property details")}
      onCancel={event => { event.preventDefault(); close() }}
      onClose={close}
      onClick={event => { if (event.target === dialogRef.current) close() }}
    >
      {selected && <div className={styles.dialogInner}>
        <div className={styles.dialogTop}>
          <p>MARQUÉS LUXURY REAL ESTATE <span>·</span> HACIENDA PINILLA</p>
          <button type="button" className={styles.dialogClose} onClick={close} aria-label={t("Close property details")}><X size={23}/></button>
        </div>
        <div className={styles.dialogIntro}>
          <div>
            <p className={styles.propertyType}>{t(selected.kind === "homesite" ? "Residential homesites · Build your own residence" : "Private residence")}</p>
            <h2>{selected.name}</h2>
          </div>
          <div className={styles.dialogPrice}>
            <span>{t(selected.price ? "ASKING PRICE" : "PRICING")}</span>
            <strong>{selected.price || t("On request")}</strong>
            {selected.price && <small>USD</small>}
          </div>
        </div>
        <div className={styles.dialogGallery}>
          <div className={styles.dialogPhotoFrame}>
            <img src={imageSrc(selected.images[imageIndex].file)} alt={selected.images[imageIndex].alt} />
            {selected.images.length > 1 && <>
              <button type="button" className={`${styles.dialogArrow} ${styles.dialogArrowPrev}`} aria-label={t("Previous photo")} onClick={() => step(-1)}><ChevronLeft size={23}/></button>
              <button type="button" className={`${styles.dialogArrow} ${styles.dialogArrowNext}`} aria-label={t("Next photo")} onClick={() => step(1)}><ChevronRight size={23}/></button>
            </>}
            <span className={styles.dialogCounter} aria-live="polite">{imageIndex + 1} / {selected.images.length}</span>
          </div>
          <div className={styles.dialogThumbnails} aria-label={t("Photo thumbnails")}>
            {selected.images.map((image,index) => <button type="button" key={image.file} className={index === imageIndex ? styles.dialogThumbActive : styles.dialogThumb} onClick={() => setImageIndex(index)} aria-label={`${t("View photo")} ${index + 1}: ${image.alt}`} aria-pressed={index === imageIndex}>
              <img src={imageSrc(image.file)} alt="" loading="lazy"/>
            </button>)}
          </div>
          {selected.images[imageIndex].caption && <p className={styles.dialogImageCaption}>{selected.images[imageIndex].caption}</p>}
        </div>
        {selected.facts.length > 0 && <div className={styles.dialogFacts}>
          {selected.facts.map(fact => <div key={fact.label}><strong>{fact.value}</strong><span>{fact.label}</span></div>)}
        </div>}
        <div className={styles.dialogDescription}>
          <h3>{t(selected.kind === "homesite" ? "A place to build your vision." : "Designed for a remarkable way of life.")}</h3>
          {selected.narrative.map((paragraph,index) => <p key={index}>{paragraph}</p>)}
        </div>
        <div className={styles.dialogActions}>
          <a href={siteConfig.whatsapp + "?text=" + encodeURIComponent(`Hello Marqués, I would like more information and a private consultation about ${selected.name} at Hacienda Pinilla.`)} target="_blank" rel="noopener noreferrer" className={styles.spotlightInquiry}>
            {t(selected.kind === "homesite" ? "Request homesite information" : "Request a private viewing")} <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <p>{t("All property enquiries are handled directly by Marqués Advisory & Investments. Details and availability are subject to confirmation.")}</p>
        </div>
      </div>}
    </dialog>
  </>
}
