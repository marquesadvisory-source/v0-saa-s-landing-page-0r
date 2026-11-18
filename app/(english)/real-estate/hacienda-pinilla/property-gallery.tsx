"use client"

import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import styles from "./hacienda-pinilla.module.css"
import type { Locale } from "@/lib/i18n/config"
import { pinillaText } from "./pinilla-translations"

export type PropertyImage = {
  file: string
  alt: string
  caption?: string
}

type PropertyGalleryProps = {
  name: string
  kind: "residence" | "homesite"
  images: readonly [PropertyImage, PropertyImage, ...PropertyImage[]]
  locale: Locale
}

export function PropertyGallery({ name, kind, images, locale }: PropertyGalleryProps) {
  const t = (message: string) => pinillaText(message, locale)
  const [index, setIndex] = useState(0)
  const touchStart = useRef<{ x: number; y: number } | null>(null)
  const image = images[index]

  function step(direction: -1 | 1) {
    setIndex((current) => (current + direction + images.length) % images.length)
  }

  return (
    <div
      className={styles.propertyGallery}
      role="group"
      aria-roledescription="carousel"
      aria-label={name}
      onKeyDown={(event) => {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return
        event.preventDefault()
        step(event.key === "ArrowLeft" ? -1 : 1)
      }}
    >
      <figure className={styles.propertyMedia} data-kind={kind}>
        <img
          src={image.file.startsWith("https://www.haciendapinilla.com/assets/real-estate/") ? image.file : `/images/real-estate/hacienda-pinilla/${image.file}`}
          alt={image.alt}
          loading={index === 0 ? "lazy" : "eager"}
          decoding="async"
          onPointerDown={(event) => {
            if (event.pointerType !== "touch" || !event.isPrimary) return
            touchStart.current = { x: event.clientX, y: event.clientY }
            event.currentTarget.setPointerCapture(event.pointerId)
          }}
          onPointerUp={(event) => {
            const start = touchStart.current
            if (event.pointerType !== "touch" || !event.isPrimary || !start) return
            touchStart.current = null
            const horizontal = event.clientX - start.x
            const vertical = event.clientY - start.y
            if (Math.abs(horizontal) > 45 && Math.abs(horizontal) > Math.abs(vertical)) {
              step(horizontal > 0 ? -1 : 1)
            }
          }}
          onPointerCancel={() => { touchStart.current = null }}
        />
        <button type="button" className={`${styles.galleryButton} ${styles.galleryPrevious}`} aria-label={`${t("Previous image of")} ${name}`} onClick={() => step(-1)}>
          <ChevronLeft size={19} aria-hidden="true" />
        </button>
        <button type="button" className={`${styles.galleryButton} ${styles.galleryNext}`} aria-label={`${t("Next image of")} ${name}`} onClick={() => step(1)}>
          <ChevronRight size={19} aria-hidden="true" />
        </button>
        <figcaption className={styles.galleryStatus} aria-live="polite" aria-atomic="true">
          {image.caption && <span className={styles.galleryCaption}>{image.caption}</span>}
          <span className={styles.galleryCount}>{index + 1} / {images.length}</span>
        </figcaption>
      </figure>
    </div>
  )
}
