"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

type Props = {
  src: string
  alt: string
  sizes: string
  priority?: boolean
}

export function HomepageImage({ src, alt, sizes, priority = false }: Props) {
  const { t } = useLanguage()

  return <Image src={src} alt={t(alt)} fill sizes={sizes} priority={priority} />
}
