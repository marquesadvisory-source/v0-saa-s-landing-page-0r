import type { Metadata } from "next"
import type { Locale } from "@/lib/i18n/config"

type ClusterSeoEntry = {
  title: string
  description: string
}

type ClusterSeoByLocale = Partial<Record<Locale, ClusterSeoEntry>>

const clusterSeo: Record<string, ClusterSeoByLocale> = {
  "/residency": {
    es: {
      title: "Residencia en Costa Rica y residencia por inversión | Marqués",
      description: "Conozca las principales vías de residencia en Costa Rica, incluida la residencia para inversionistas, sus requisitos clave y el proceso de revisión profesional con Marqués.",
    },
    fr: {
      title: "Résidence au Costa Rica et résidence par investissement | Marqués",
      description: "Découvrez les principales voies de résidence au Costa Rica, dont la résidence pour investisseurs, leurs exigences essentielles et l’accompagnement de Marqués.",
    },
    "zh-cn": {
      title: "哥斯达黎加居留与投资居留｜Marqués",
      description: "了解哥斯达黎加主要居留途径，包括投资者居留、关键要求以及 Marqués 提供的专业评估与协调支持。",
    },
  },
  "/residency/about-costa-rica": {
    es: {
      title: "Vivir en Costa Rica | Residencia, estilo de vida y activos reales | Marqués",
      description: "Conozca Costa Rica desde la perspectiva de residencia a largo plazo, conectividad, estilo de vida, bienes raíces y decisiones de inversión.",
    },
    fr: {
      title: "Vivre au Costa Rica | Résidence, cadre de vie et actifs réels | Marqués",
      description: "Découvrez le Costa Rica sous l’angle de la résidence à long terme, de la connectivité, du cadre de vie, de l’immobilier et de l’investissement.",
    },
    "zh-cn": {
      title: "在哥斯达黎加生活｜居留、生活方式与实物资产｜Marqués",
      description: "从长期居留、交通连接、生活方式、房地产和投资决策的角度了解哥斯达黎加。",
    },
  },
  "/residency/real-estate": {
    es: {
      title: "Residencia por inversión y bienes raíces en Costa Rica | Marqués",
      description: "Comprenda cómo una inversión inmobiliaria que califique puede relacionarse con la residencia para inversionistas en Costa Rica y qué debe revisarse antes de avanzar.",
    },
    fr: {
      title: "Résidence par investissement et immobilier au Costa Rica | Marqués",
      description: "Comprenez comment un investissement immobilier admissible peut s’inscrire dans une stratégie de résidence pour investisseurs au Costa Rica.",
    },
    "zh-cn": {
      title: "哥斯达黎加投资居留与房地产｜Marqués",
      description: "了解符合条件的房地产投资如何可能与哥斯达黎加投资者居留相关，以及推进前需要审查的关键要求。",
    },
  },
  "/real-estate": {
    es: {
      title: "Bienes raíces en Costa Rica para compradores internacionales | Marqués",
      description: "Asesoría inmobiliaria privada para compradores internacionales que consideran viviendas, propiedades costeras, inversión inmobiliaria y activos de alto valor en Costa Rica.",
    },
    fr: {
      title: "Immobilier au Costa Rica pour acheteurs internationaux | Marqués",
      description: "Conseil immobilier privé pour les acheteurs internationaux qui envisagent résidences, propriétés côtières, investissement immobilier et actifs de valeur au Costa Rica.",
    },
    "zh-cn": {
      title: "面向国际买家的哥斯达黎加房地产｜Marqués",
      description: "为考虑哥斯达黎加住宅、海岸房产、房地产投资及高价值物业的国际买家提供私人房地产顾问服务。",
    },
  },
  "/investments": {
    es: {
      title: "Inversiones y activos reales en Costa Rica | Marqués",
      description: "Explore oportunidades y contexto de inversión en bienes raíces, hotelería, desarrollo y activos reales generadores de ingresos en Costa Rica con Marqués.",
    },
    fr: {
      title: "Investissements et actifs réels au Costa Rica | Marqués",
      description: "Explorez les opportunités et le contexte d’investissement en immobilier, hôtellerie, développement et actifs réels générateurs de revenus au Costa Rica.",
    },
    "zh-cn": {
      title: "哥斯达黎加投资与实物资产｜Marqués",
      description: "了解 Marqués 在哥斯达黎加房地产、酒店、开发及收益型实物资产领域的投资机会与投资背景。",
    },
  },
}

export function applyClusterSeo(base: Metadata, pathname: string, locale: Locale): Metadata {
  const override = clusterSeo[pathname]?.[locale]
  if (!override) return base

  return {
    ...base,
    title: override.title,
    description: override.description,
    openGraph: base.openGraph ? {
      ...base.openGraph,
      title: override.title,
      description: override.description,
    } : undefined,
    twitter: base.twitter ? {
      ...base.twitter,
      title: override.title,
      description: override.description,
    } : undefined,
  }
}
