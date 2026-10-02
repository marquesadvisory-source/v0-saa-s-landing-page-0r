"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export function ProjectHeroImage({ src, alt, objectPosition }: { src: string; alt: string; objectPosition: string }) {
  const { t } = useLanguage()
  return <Image src={src} alt={t(alt)} fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition }} />
}
