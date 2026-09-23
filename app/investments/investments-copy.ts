import type { Locale } from "@/lib/translations"

export const investmentsCopy: Record<Locale, {
  eyebrow: string
  title: string
  intro: string
  universeEyebrow: string
  universeTitle: string
  universeIntro: string
  themes: { title: string; body: string }[]
  lensEyebrow: string
  lensTitle: string
  lensIntro: string
  considerations: string[]
  frameworkLink: string
  pathwaysEyebrow: string
  pathwaysTitle: string
  pathways: { title: string; body: string; link: string; href: string }[]
  inquiry: string
  inquiryLink: string
}> = {
  en: {
    eyebrow: "INVESTMENT PLATFORM",
    title: "Strategic Real Assets in Costa Rica",
    intro: "Marqués engages with locally sourced investment opportunities across Costa Rica’s real-asset landscape, in dialogue with private investors, family offices and institutional counterparties. Potential capital structures, including co-investment where appropriate, depend on the asset and are considered individually.",
    universeEyebrow: "INVESTMENT UNIVERSE",
    universeTitle: "A considered range of real-asset themes.",
    universeIntro: "The focus is on the characteristics and context of each asset—not a catalogue of available investments.",
    themes: [
      { title: "Real Estate", body: "Residential, mixed-use and commercial real estate considered through location, demand, asset fundamentals and execution requirements." },
      { title: "Hospitality", body: "Hospitality assets and development concepts viewed in relation to operating context, demand drivers and capital requirements." },
      { title: "Development", body: "Development potential considered alongside site context, market logic, capital structure and practical execution." },
      { title: "Income-Producing Real Assets", body: "Operating and cash-flow characteristics considered on their own merits, together with ownership and downside considerations." },
    ],
    lensEyebrow: "ECONOMIC CONTEXT",
    lensTitle: "The considerations behind an opportunity.",
    lensIntro: "Each asset has its own economic context. Relevant considerations may include:",
    considerations: ["Asset fundamentals", "Location and demand", "Cash-flow characteristics", "Development potential", "Capital structure", "Execution requirements", "Downside considerations", "Monetization pathways"],
    frameworkLink: "Explore the Investment Framework",
    pathwaysEyebrow: "FURTHER CONTEXT",
    pathwaysTitle: "Choose the next perspective.",
    pathways: [
      { title: "Investment Framework", body: "Understand how Marqués considers the substance, structure and execution context of an opportunity.", link: "Explore the framework", href: "/investment-framework" },
      { title: "Selected Opportunities", body: "View the separate destination for concrete institutional opportunity showcases presented for review.", link: "Explore selected opportunities", href: "/projects" },
      { title: "Capital Partners", body: "Learn how capital relationships and organizations may engage with the platform.", link: "Explore capital partnerships", href: "/capital-partners" },
    ],
    inquiry: "For a private discussion about an investment objective or potential institutional alignment, begin an inquiry.",
    inquiryLink: "Institutional Inquiry",
  },
  es: {
    eyebrow: "PLATAFORMA DE INVERSIÓN",
    title: "Activos reales estratégicos en Costa Rica",
    intro: "Marqués participa en oportunidades de inversión de origen local dentro del panorama de activos reales de Costa Rica, en diálogo con inversionistas privados, family offices y contrapartes institucionales. Las posibles estructuras de capital, incluida la coinversión cuando corresponda, dependen de cada activo y se consideran individualmente.",
    universeEyebrow: "UNIVERSO DE INVERSIÓN",
    universeTitle: "Una selección considerada de temas de activos reales.",
    universeIntro: "El enfoque está en las características y el contexto de cada activo, no en un catálogo de inversiones disponibles.",
    themes: [
      { title: "Bienes raíces", body: "Activos residenciales, de uso mixto y comerciales considerados según ubicación, demanda, fundamentos del activo y requisitos de ejecución." },
      { title: "Hotelería", body: "Activos y conceptos de desarrollo hotelero considerados en relación con su contexto operativo, factores de demanda y necesidades de capital." },
      { title: "Desarrollo", body: "El potencial de desarrollo se considera junto con el contexto del sitio, la lógica de mercado, la estructura de capital y la ejecución práctica." },
      { title: "Activos reales generadores de ingresos", body: "Las características operativas y de flujo de caja se consideran individualmente, junto con la titularidad y los factores de riesgo a la baja." },
    ],
    lensEyebrow: "CONTEXTO ECONÓMICO",
    lensTitle: "Los factores que enmarcan una oportunidad.",
    lensIntro: "Cada activo tiene su propio contexto económico. Entre los factores relevantes pueden estar:",
    considerations: ["Fundamentos del activo", "Ubicación y demanda", "Características del flujo de caja", "Potencial de desarrollo", "Estructura de capital", "Requisitos de ejecución", "Consideraciones de riesgo a la baja", "Vías de monetización"],
    frameworkLink: "Conozca el Marco de Inversión",
    pathwaysEyebrow: "MÁS CONTEXTO",
    pathwaysTitle: "Elija la siguiente perspectiva.",
    pathways: [
      { title: "Marco de Inversión", body: "Conozca cómo Marqués considera la sustancia, estructura y contexto de ejecución de una oportunidad.", link: "Explore el marco", href: "/investment-framework" },
      { title: "Oportunidades seleccionadas", body: "Visite el espacio independiente de oportunidades institucionales concretas presentadas para revisión.", link: "Explore las oportunidades", href: "/projects" },
      { title: "Socios de capital", body: "Conozca cómo las relaciones de capital y las organizaciones pueden vincularse con la plataforma.", link: "Explore las alianzas de capital", href: "/capital-partners" },
    ],
    inquiry: "Para conversar de forma privada sobre un objetivo de inversión o una posible afinidad institucional, inicie una consulta.",
    inquiryLink: "Consulta institucional",
  },
  fr: {
    eyebrow: "PLATEFORME D’INVESTISSEMENT",
    title: "Actifs réels stratégiques au Costa Rica",
    intro: "Marqués s’intéresse à des opportunités d’investissement issues de relations locales dans le paysage des actifs réels du Costa Rica, en dialogue avec des investisseurs privés, des family offices et des contreparties institutionnelles. Les structures de capital potentielles, y compris le co-investissement le cas échéant, dépendent de l’actif et sont examinées individuellement.",
    universeEyebrow: "UNIVERS D’INVESTISSEMENT",
    universeTitle: "Un éventail réfléchi de thèmes liés aux actifs réels.",
    universeIntro: "L’accent est mis sur les caractéristiques et le contexte de chaque actif, et non sur un catalogue d’investissements disponibles.",
    themes: [
      { title: "Immobilier", body: "Les actifs résidentiels, mixtes et commerciaux sont considérés selon leur emplacement, la demande, leurs fondamentaux et les exigences d’exécution." },
      { title: "Hôtellerie", body: "Les actifs hôteliers et les concepts de développement sont examinés au regard du contexte opérationnel, des moteurs de demande et des besoins en capital." },
      { title: "Développement", body: "Le potentiel de développement est considéré avec le contexte du site, la logique de marché, la structure du capital et l’exécution pratique." },
      { title: "Actifs réels générateurs de revenus", body: "Les caractéristiques opérationnelles et de flux de trésorerie sont examinées en elles-mêmes, ainsi que la détention et les risques de baisse." },
    ],
    lensEyebrow: "CONTEXTE ÉCONOMIQUE",
    lensTitle: "Les facteurs qui éclairent une opportunité.",
    lensIntro: "Chaque actif a son propre contexte économique. Les facteurs pertinents peuvent inclure :",
    considerations: ["Fondamentaux de l’actif", "Emplacement et demande", "Caractéristiques des flux de trésorerie", "Potentiel de développement", "Structure du capital", "Exigences d’exécution", "Considérations de risque à la baisse", "Voies de monétisation"],
    frameworkLink: "Découvrir le Cadre d’investissement",
    pathwaysEyebrow: "POUR ALLER PLUS LOIN",
    pathwaysTitle: "Choisissez la perspective suivante.",
    pathways: [
      { title: "Cadre d’investissement", body: "Comprendre comment Marqués considère la substance, la structure et le contexte d’exécution d’une opportunité.", link: "Découvrir le cadre", href: "/investment-framework" },
      { title: "Opportunités sélectionnées", body: "Accéder à l’espace distinct consacré aux opportunités institutionnelles concrètes présentées pour examen.", link: "Découvrir les opportunités", href: "/projects" },
      { title: "Partenaires en capital", body: "Découvrir comment les relations de capital et les organisations peuvent s’engager avec la plateforme.", link: "Découvrir les partenariats", href: "/capital-partners" },
    ],
    inquiry: "Pour un échange privé sur un objectif d’investissement ou un possible alignement institutionnel, commencez une demande.",
    inquiryLink: "Demande institutionnelle",
  },
  "zh-cn": {
    eyebrow: "投资平台",
    title: "哥斯达黎加战略性实物资产",
    intro: "Marqués 与私人投资者、家族办公室及机构交易对手保持交流，关注源自本地关系的哥斯达黎加实物资产投资机会。潜在资本结构（包括适用情况下的共同投资）取决于具体资产，并逐项审视。",
    universeEyebrow: "投资领域",
    universeTitle: "审慎关注多类实物资产主题。",
    universeIntro: "重点在于每项资产的特征与背景，而非展示可供投资的项目目录。",
    themes: [
      { title: "房地产", body: "结合区位、需求、资产基本面与执行要求，评估住宅、综合用途及商业房地产。" },
      { title: "酒店与接待业", body: "结合运营背景、需求驱动因素及资本需求，审视酒店资产与开发概念。" },
      { title: "开发", body: "综合考虑地块背景、市场逻辑、资本结构及实际执行，审视开发潜力。" },
      { title: "收益型实物资产", body: "独立评估运营与现金流特征，同时考虑持有方式与下行风险因素。" },
    ],
    lensEyebrow: "经济背景",
    lensTitle: "理解机会所需考虑的因素。",
    lensIntro: "每项资产都有其自身的经济背景。相关因素可能包括：",
    considerations: ["资产基本面", "区位与需求", "现金流特征", "开发潜力", "资本结构", "执行要求", "下行风险考量", "价值实现路径"],
    frameworkLink: "了解投资框架",
    pathwaysEyebrow: "延伸了解",
    pathwaysTitle: "选择下一项内容。",
    pathways: [
      { title: "投资框架", body: "了解 Marqués 如何考量机会的实质、结构及执行背景。", link: "探索投资框架", href: "/investment-framework" },
      { title: "精选机会", body: "前往独立页面，查看供审阅的具体机构级机会展示。", link: "查看精选机会", href: "/projects" },
      { title: "资本合作伙伴", body: "了解资本关系与机构如何与平台开展合作。", link: "了解资本合作", href: "/capital-partners" },
    ],
    inquiry: "如需私下讨论投资目标或潜在机构合作契合度，请提交咨询。",
    inquiryLink: "机构咨询",
  },
}
