import type { Metadata } from "next"
import { localeDefinitions, localePath, type Locale } from "@/lib/i18n/config"
import { absoluteUrl } from "@/lib/seo"
import { siteConfig } from "@/lib/site"
import type { Opportunity } from "@/lib/opportunities/types"
import { propertyDescriptionForLocale } from "@/lib/opportunities/translation"

type LocalizedSeoEntry = {
  title: Record<Locale, string>
  description: Record<Locale, string>
  image?: string
}

export const localizedRoutes = [
  "/", "/about", "/who-we-serve", "/what-we-do", "/services", "/contact",
  "/partners", "/residency", "/residency/about-costa-rica", "/residency/real-estate",
  "/real-estate", "/investments", "/investment-framework", "/projects",
  "/projects/plaza-los-mangos", "/projects/decima-avenida", "/capital-partners",
  "/institutional-inquiry",
] as const

export const internationalSeo: Record<string, LocalizedSeoEntry> = {
  "/": {
    title: {
      en: "Marqués Advisory & Investments | Costa Rica",
      es: "Marqués Advisory & Investments | Costa Rica",
      fr: "Marqués Advisory & Investments | Costa Rica",
      "zh-cn": "Marqués Advisory & Investments｜哥斯达黎加",
    },
    description: {
      en: "A Costa Rican partner in Residence by Investment and strategic real assets, with private client real estate and capital relationships.",
      es: "Un socio costarricense en residencia por inversión y activos reales estratégicos, con experiencia en bienes raíces para clientes privados y relaciones de capital.",
      fr: "Un partenaire costaricien en résidence par investissement et actifs réels stratégiques, avec une expertise immobilière privée et des relations de capital.",
      "zh-cn": "立足哥斯达黎加，专注投资居留、战略性实物资产、私人客户房地产及资本合作关系。",
    },
    image: "/costa-rica-coast.jpg",
  },
  "/about": {
    title: {
      en: "About Marqués | Costa Rica Real Assets Platform",
      es: "Acerca de Marqués | Plataforma de activos reales en Costa Rica",
      fr: "À propos de Marqués | Plateforme d’actifs réels au Costa Rica",
      "zh-cn": "关于 Marqués｜哥斯达黎加实物资产平台",
    },
    description: {
      en: "Marqués Advisory & Investments is a relationship-driven Costa Rica real assets platform focused on origination, structuring and capital readiness.",
      es: "Marqués Advisory & Investments es una plataforma costarricense de activos reales, basada en relaciones y enfocada en originación, estructuración y preparación para el capital.",
      fr: "Marqués Advisory & Investments est une plateforme costaricienne d’actifs réels, fondée sur les relations et axée sur l’origination, la structuration et la préparation au capital.",
      "zh-cn": "Marqués Advisory & Investments 是一家以关系为基础的哥斯达黎加实物资产平台，专注于项目发掘、架构设计和资本准备。",
    },
  },
  "/who-we-serve": {
    title: {
      en: "Who We Serve | Marqués Advisory & Investments",
      es: "A quiénes acompañamos | Marqués Advisory & Investments",
      fr: "Nos interlocuteurs | Marqués Advisory & Investments",
      "zh-cn": "服务对象｜Marqués Advisory & Investments",
    },
    description: {
      en: "Marqués supports private stakeholders evaluating real asset opportunities that require institutional preparation in Costa Rica.",
      es: "Marqués acompaña a actores privados que evalúan oportunidades en activos reales que requieren preparación institucional en Costa Rica.",
      fr: "Marqués accompagne les parties prenantes privées qui évaluent des opportunités d’actifs réels nécessitant une préparation institutionnelle au Costa Rica.",
      "zh-cn": "Marqués 为评估需要机构化准备的哥斯达黎加实物资产机会的私人相关方提供支持。",
    },
  },
  "/what-we-do": {
    title: {
      en: "Capabilities | Marqués Advisory & Investments",
      es: "Capacidades | Marqués Advisory & Investments",
      fr: "Expertises | Marqués Advisory & Investments",
      "zh-cn": "专业能力｜Marqués Advisory & Investments",
    },
    description: {
      en: "Platform capabilities for real assets, origination, structuring, capital readiness and execution coordination in Costa Rica.",
      es: "Capacidades para activos reales, originación, estructuración, preparación para el capital y coordinación de la ejecución en Costa Rica.",
      fr: "Expertises en actifs réels, origination, structuration, préparation au capital et coordination de l’exécution au Costa Rica.",
      "zh-cn": "涵盖哥斯达黎加实物资产、项目发掘、架构设计、资本准备和执行协调的平台能力。",
    },
  },
  "/services": {
    title: {
      en: "Private Client Services in Costa Rica | Marqués",
      es: "Servicios para clientes privados en Costa Rica | Marqués",
      fr: "Services aux clients privés au Costa Rica | Marqués",
      "zh-cn": "哥斯达黎加私人客户服务｜Marqués",
    },
    description: {
      en: "Investment-led private client services in Costa Rica, including residence planning, real estate review and local coordination.",
      es: "Servicios para clientes privados en Costa Rica, con enfoque en inversión, planificación de residencia, análisis inmobiliario y coordinación local.",
      fr: "Services aux clients privés au Costa Rica axés sur l’investissement, la planification de résidence, l’analyse immobilière et la coordination locale.",
      "zh-cn": "以投资为导向的哥斯达黎加私人客户服务，包括居留规划、房地产审阅及本地协调。",
    },
  },
  "/contact": {
    title: {
      en: "Contact Marqués | Costa Rica Private Advisory",
      es: "Contacto Marqués | Asesoría privada en Costa Rica",
      fr: "Contacter Marqués | Conseil privé au Costa Rica",
      "zh-cn": "联系 Marqués｜哥斯达黎加私人顾问服务",
    },
    description: {
      en: "Contact Marqués to discuss Costa Rica residency, real estate or investment objectives through a private enquiry or callback.",
      es: "Contacte a Marqués para conversar sobre residencia, bienes raíces u objetivos de inversión en Costa Rica mediante una consulta privada o una llamada.",
      fr: "Contactez Marqués pour discuter de résidence, d’immobilier ou d’objectifs d’investissement au Costa Rica lors d’un échange privé ou d’un rappel.",
      "zh-cn": "通过私人咨询或预约回电，与 Marqués 讨论哥斯达黎加居留、房地产或投资目标。",
    },
    image: "/costa-rica-coast.jpg",
  },
  "/partners": {
    title: {
      en: "Become a Partner | Marqués Advisory & Investments",
      es: "Conviértase en socio | Marqués Advisory & Investments",
      fr: "Devenir partenaire | Marqués Advisory & Investments",
      "zh-cn": "成为合作伙伴｜Marqués Advisory & Investments",
    },
    description: {
      en: "Explore strategic partnerships and introducer relationships with Marqués for Costa Rica residence and private-client services.",
      es: "Explore alianzas estratégicas y relaciones de presentación con Marqués para servicios de residencia en Costa Rica y atención a clientes privados.",
      fr: "Découvrez les partenariats stratégiques et les relations d’apport avec Marqués pour la résidence au Costa Rica et les services aux clients privés.",
      "zh-cn": "了解与 Marqués 建立战略合作或客户引荐关系，涵盖哥斯达黎加居留及私人客户服务。",
    },
    image: "/images/private-client/service-support.webp",
  },
  "/residency": {
    title: {
      en: "Costa Rica Residency by Investment | Marqués",
      es: "Residencia por inversión en Costa Rica | Marqués",
      fr: "Résidence par investissement au Costa Rica | Marqués",
      "zh-cn": "哥斯达黎加投资居留｜Marqués",
    },
    description: {
      en: "Explore Costa Rica Investor Residency and other residence pathways with Marqués. Qualification remains subject to documentation and professional review.",
      es: "Explore la residencia para inversionistas y otras vías de residencia en Costa Rica con Marqués. La calificación está sujeta a documentación y revisión profesional.",
      fr: "Découvrez la résidence pour investisseurs et les autres voies de résidence au Costa Rica avec Marqués. La qualification reste soumise aux justificatifs et à un examen professionnel.",
      "zh-cn": "了解哥斯达黎加投资者居留及其他居留途径。资格仍须经过文件核验和专业审查。",
    },
    image: "/costa-rica-coast.jpg",
  },
  "/residency/about-costa-rica": {
    title: {
      en: "About Costa Rica | Residence & Real Assets",
      es: "Acerca de Costa Rica | Residencia y activos reales",
      fr: "À propos du Costa Rica | Résidence et actifs réels",
      "zh-cn": "了解哥斯达黎加｜居留与实物资产",
    },
    description: {
      en: "Explore Costa Rica’s setting, connectivity and real asset context for long-term residence planning and investment decisions with Marqués.",
      es: "Conozca el entorno, la conectividad y el contexto de activos reales de Costa Rica para planificar su residencia a largo plazo y decisiones de inversión.",
      fr: "Découvrez le cadre, la connectivité et le contexte des actifs réels du Costa Rica pour planifier une résidence à long terme et éclairer vos décisions d’investissement.",
      "zh-cn": "了解哥斯达黎加的环境、交通连接及实物资产背景，为长期居留规划和投资决策提供参考。",
    },
    image: "/costa-rica-forest.jpg",
  },
  "/residency/real-estate": {
    title: {
      en: "Costa Rica Investor Residency & Real Estate Investment",
      es: "Residencia para inversionistas y bienes raíces en Costa Rica",
      fr: "Résidence pour investisseurs et immobilier au Costa Rica",
      "zh-cn": "哥斯达黎加投资者居留与房地产投资",
    },
    description: {
      en: "Understand how qualifying real estate may relate to Costa Rica Investor Residency. Property ownership alone does not establish eligibility; requirements and documentation remain subject to review.",
      es: "Comprenda cómo los bienes raíces que califican pueden relacionarse con la residencia para inversionistas en Costa Rica. La propiedad por sí sola no determina la elegibilidad; los requisitos y documentos deben revisarse.",
      fr: "Comprenez le lien possible entre un investissement immobilier admissible et la résidence pour investisseurs au Costa Rica. La propriété seule ne confère pas l’admissibilité; les exigences et justificatifs restent à examiner.",
      "zh-cn": "了解符合条件的房地产投资可能如何与哥斯达黎加投资者居留相关。仅拥有房产并不代表符合资格；具体要求和文件仍须审查。",
    },
    image: "/architecture-interior.jpg",
  },
  "/real-estate": {
    title: {
      en: "Costa Rica Luxury Real Estate | Private Property Advisory",
      es: "Bienes raíces de lujo en Costa Rica | Asesoría inmobiliaria privada",
      fr: "Immobilier de luxe au Costa Rica | Conseil immobilier privé",
      "zh-cn": "哥斯达黎加豪华房地产｜私人房地产顾问服务",
    },
    description: {
      en: "Private real estate advisory for international buyers considering luxury homes, coastal properties and other high-value real estate opportunities across Costa Rica.",
      es: "Asesoría inmobiliaria privada para compradores internacionales que consideran residencias de lujo, propiedades costeras y otras oportunidades inmobiliarias de alto valor en Costa Rica.",
      fr: "Conseil immobilier privé destiné aux acheteurs internationaux qui envisagent des résidences de luxe, des propriétés côtières et d’autres opportunités immobilières de grande valeur au Costa Rica.",
      "zh-cn": "为考虑哥斯达黎加豪宅、海岸房产及其他高价值房地产机会的国际买家提供私人房地产顾问服务。",
    },
    image: "/images/private-client/service-real-estate.webp",
  },
  "/investments": {
    title: {
      en: "Costa Rica Real Assets Investment Platform",
      es: "Plataforma de inversión en activos reales en Costa Rica",
      fr: "Plateforme d’investissement en actifs réels au Costa Rica",
      "zh-cn": "哥斯达黎加实物资产投资平台",
    },
    description: {
      en: "Explore Marqués’ investment universe across Costa Rica real estate, hospitality, development and income-producing real assets, with a focus on asset fundamentals and investment context.",
      es: "Explore las oportunidades de inversión de Marqués en bienes raíces, hotelería, desarrollo y activos reales generadores de ingresos en Costa Rica, atendiendo a sus fundamentos y contexto de inversión.",
      fr: "Découvrez l’univers d’investissement de Marqués dans l’immobilier, l’hôtellerie, le développement et les actifs réels générateurs de revenus au Costa Rica, selon leurs fondamentaux et leur contexte d’investissement.",
      "zh-cn": "了解 Marqués 在哥斯达黎加房地产、酒店、开发及收益型实物资产领域的投资范围，重点关注资产基本面和投资背景。",
    },
    image: "/costa-rica-coast.jpg",
  },
  "/investment-framework": {
    title: {
      en: "Investment Framework | Marqués Advisory & Investments",
      es: "Marco de inversión | Marqués Advisory & Investments",
      fr: "Cadre d’investissement | Marqués Advisory & Investments",
      "zh-cn": "投资框架｜Marqués Advisory & Investments",
    },
    description: {
      en: "Investment framework for Costa Rica real assets, capital readiness, investment structuring and institutional review.",
      es: "Marco de inversión para activos reales en Costa Rica, preparación para el capital, estructuración de inversiones y revisión institucional.",
      fr: "Cadre d’investissement pour les actifs réels au Costa Rica, la préparation au capital, la structuration des investissements et l’examen institutionnel.",
      "zh-cn": "涵盖哥斯达黎加实物资产、资本准备、投资架构设计和机构审查的投资框架。",
    },
  },
  "/projects": {
    title: {
      en: "Institutional Opportunities | Marqués Advisory & Investments",
      es: "Oportunidades institucionales | Marqués Advisory & Investments",
      fr: "Opportunités institutionnelles | Marqués Advisory & Investments",
      "zh-cn": "机构投资机会｜Marqués Advisory & Investments",
    },
    description: {
      en: "Selected institutional real asset opportunity showcases in Costa Rica, presented for review subject to diligence and appropriate institutional procedures.",
      es: "Selección de oportunidades institucionales en activos reales en Costa Rica, sujetas a debida diligencia y a los procedimientos institucionales correspondientes.",
      fr: "Sélection d’opportunités institutionnelles en actifs réels au Costa Rica, soumises à la diligence et aux procédures institutionnelles appropriées.",
      "zh-cn": "精选哥斯达黎加机构实物资产机会，供相关方在完成尽职调查并遵循适当机构程序后审阅。",
    },
  },
  "/projects/plaza-los-mangos": {
    title: {
      en: "Plaza Los Mangos | Institutional Real Asset Opportunity",
      es: "Plaza Los Mangos | Oportunidad institucional en activos reales",
      fr: "Plaza Los Mangos | Opportunité institutionnelle en actifs réels",
      "zh-cn": "Plaza Los Mangos｜机构实物资产机会",
    },
    description: {
      en: "Plaza Los Mangos is a mixed-use real asset opportunity in Santa Cruz, Guanacaste, currently in predevelopment and institutional structuring.",
      es: "Plaza Los Mangos es una oportunidad de activo real de uso mixto en Santa Cruz, Guanacaste, actualmente en etapa de predesarrollo y estructuración institucional.",
      fr: "Plaza Los Mangos est une opportunité d’actif réel à usage mixte située à Santa Cruz, Guanacaste, actuellement en phase de pré-développement et de structuration institutionnelle.",
      "zh-cn": "Plaza Los Mangos 是位于瓜纳卡斯特省 Santa Cruz 的混合用途实物资产机会，目前处于前期开发和机构架构设计阶段。",
    },
  },
  "/projects/decima-avenida": {
    title: {
      en: "Décima Avenida | Institutional Real Asset Opportunity",
      es: "Décima Avenida | Oportunidad institucional en activos reales",
      fr: "Décima Avenida | Opportunité institutionnelle en actifs réels",
      "zh-cn": "Décima Avenida｜机构实物资产机会",
    },
    description: {
      en: "Décima Avenida is a preliminary mixed-use real asset opportunity in El Roble, Alajuela, under evaluation and institutional review.",
      es: "Décima Avenida es una oportunidad preliminar de activo real de uso mixto en El Roble, Alajuela, actualmente en evaluación y revisión institucional.",
      fr: "Décima Avenida est une opportunité préliminaire d’actif réel à usage mixte située à El Roble, Alajuela, en cours d’évaluation et d’examen institutionnel.",
      "zh-cn": "Décima Avenida 是位于 Alajuela 省 El Roble 的初步混合用途实物资产机会，目前正在评估和机构审查中。",
    },
  },
  "/capital-partners": {
    title: {
      en: "Capital Partners | Marqués Advisory & Investments",
      es: "Socios de capital | Marqués Advisory & Investments",
      fr: "Partenaires en capital | Marqués Advisory & Investments",
      "zh-cn": "资本合作伙伴｜Marqués Advisory & Investments",
    },
    description: {
      en: "Capital partner relationships, family offices and institutional investment context for Costa Rica real assets, origination, structuring and capital readiness.",
      es: "Relaciones con socios de capital, family offices y actores institucionales para originación, estructuración y preparación de activos reales en Costa Rica.",
      fr: "Relations avec des partenaires en capital, family offices et acteurs institutionnels pour l’origination, la structuration et la préparation d’actifs réels au Costa Rica.",
      "zh-cn": "面向资本合作伙伴、家族办公室及机构投资者，提供哥斯达黎加实物资产的项目发掘、架构设计和资本准备背景。",
    },
  },
  "/institutional-inquiry": {
    title: {
      en: "Institutional Inquiry | Marqués Advisory & Investments",
      es: "Consulta institucional | Marqués Advisory & Investments",
      fr: "Demande institutionnelle | Marqués Advisory & Investments",
      "zh-cn": "机构咨询｜Marqués Advisory & Investments",
    },
    description: {
      en: "Start a private institutional inquiry regarding real asset preparation and structuring in Costa Rica.",
      es: "Inicie una consulta institucional privada sobre la preparación y estructuración de activos reales en Costa Rica.",
      fr: "Entamez une demande institutionnelle privée concernant la préparation et la structuration d’actifs réels au Costa Rica.",
      "zh-cn": "就哥斯达黎加实物资产准备和架构设计发起私人机构咨询。",
    },
  },
}

export function localizedUrl(path: string, locale: Locale): string {
  return absoluteUrl(localePath(path, locale))
}

export function hasCompletePropertyTranslation(asset: Opportunity): boolean {
  return (["es", "fr", "zh-cn"] as const).every(locale => Boolean(
    asset.localized?.name?.[locale] &&
    asset.localized?.shortDescription?.[locale] &&
    (asset.localized?.longDescription?.[locale] || !asset.longDescription),
  ))
}

const propertyTitleSuffix: Record<Locale, string> = {
  en: "Real Estate in Costa Rica",
  es: "Bienes raíces en Costa Rica",
  fr: "Immobilier au Costa Rica",
  "zh-cn": "哥斯达黎加房地产",
}

export function localizedPropertyTitle(name: string, locale: Locale): string {
  return `${name} | ${propertyTitleSuffix[locale]}`
}

export function localizedPropertyMetadata(asset: Opportunity, locale: Locale, path: string): Metadata {
  const name = asset.localized?.name?.[locale] ?? asset.name
  const description = propertyDescriptionForLocale(asset, locale)
  const title = localizedPropertyTitle(name, locale)
  const url = localizedUrl(path, locale)
  const languages = {
    en: localizedUrl(path, "en"),
    es: localizedUrl(path, "es"),
    fr: localizedUrl(path, "fr"),
    "zh-Hans": localizedUrl(path, "zh-cn"),
    "x-default": localizedUrl(path, "en"),
  }

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url, languages },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: localeDefinitions[locale].openGraph,
      type: "website",
      images: [asset.primaryImage],
    },
    twitter: { card: "summary_large_image", title, description, images: [asset.primaryImage] },
  }
}

export function localizedMetadata(path: string, locale: Locale): Metadata {
  const entry = internationalSeo[path]
  if (!entry) return { robots: { index: false, follow: false } }

  const url = localizedUrl(path, locale)
  const languages = Object.fromEntries(
    (["en", "es", "fr", "zh-cn"] as const).map(code => [
      code === "zh-cn" ? "zh-Hans" : code,
      localizedUrl(path, code),
    ]),
  )
  languages["x-default"] = absoluteUrl(path)
  const image = entry.image ?? siteConfig.ogImage
  const localeTag = localeDefinitions[locale].openGraph

  return {
    title: { absolute: entry.title[locale] },
    description: entry.description[locale],
    alternates: { canonical: url, languages },
    openGraph: {
      title: entry.title[locale],
      description: entry.description[locale],
      url,
      siteName: siteConfig.name,
      locale: localeTag,
      type: "website",
      images: [{ url: absoluteUrl(image), alt: entry.title[locale] }],
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title[locale],
      description: entry.description[locale],
      images: [absoluteUrl(image)],
    },
  }
}
