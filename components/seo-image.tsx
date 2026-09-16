"use client"
import type { ImgHTMLAttributes } from "react"
import { useLanguage } from "./language-provider"
import { seoImages } from "@/lib/seo-images"

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & { src: string; alt: string }

// Native srcset preserves the existing direct-img CSS and needs no global image-loader change.
export function SeoImage({ src, alt, sizes = "(max-width: 767px) 100vw, 50vw", ...props }: Props) {
  const {t} = useLanguage()
  const image = seoImages[src]
  return <img src={src} alt={t(alt)} width={image?.width} height={image?.height}
    srcSet={image?.srcSet} sizes={image?.srcSet ? sizes : undefined}
    decoding="async" {...props} />
}
