import type { Locale } from "@/lib/translations"

export const investmentsCopy: Record<Locale, {
  eyebrow: string
  title: string
  intro: string
  universeEyebrow: string
  universeTitle: string
  universeIntro: string
  themes: { title: string; body: string }[]
  pathwaysEyebrow: string
  pathwaysTitle: string
  pathways: { title: string; body: string; link: string; href: string }[]
  inquiry: string
  inquiryLink: string
}> = {
  en: {
    eyebrow: "INVESTMENT PLATFORM",
    title: "Strategic Real Assets in Costa Rica",
    intro: "Marqués works across Costa Rica’s real-asset landscape in dialogue with private investors, family offices and institutional counterparties. Capital structures, including co-investment where appropriate, depend on the asset and are considered individually.",
    universeEyebrow: "INVESTMENT UNIVERSE",
    universeTitle: "A considered range of real-asset themes.",
    universeIntro: "Areas of focus include real estate, hospitality, development and income-producing real assets.",
    themes: [
      { title: "Real Estate", body: "Residential, mixed-use and commercial property." },
      { title: "Hospitality", body: "Hospitality assets and development concepts." },
      { title: "Development", body: "Real-asset projects at different stages of development." },
      { title: "Income-Producing Real Assets", body: "Operating assets and income-producing businesses." },
    ],
    pathwaysEyebrow: "FURTHER CONTEXT",
    pathwaysTitle: "Choose the next perspective.",
    pathways: [
      { title: "Investment Framework", body: "Explore the approach Marqués uses to evaluate and structure investment opportunities.", link: "Explore the framework", href: "/investment-framework" },
      { title: "Selected Opportunities", body: "Explore selected real-asset opportunities and their project context.", link: "Explore selected opportunities", href: "/projects" },
      { title: "Capital Partners", body: "Learn how capital relationships and organizations may engage with the platform.", link: "Explore capital partnerships", href: "/capital-partners" },
    ],
    inquiry: "For a private discussion about an investment objective or potential institutional alignment, begin an inquiry.",
    inquiryLink: "Institutional Inquiry",
  },
  es: {
    eyebrow: "PLATAFORMA DE INVERSIÓN",
    title: "Activos reales estratégicos en Costa Rica",
    intro: "Marqués trabaja en el ámbito de los activos reales de Costa Rica en diálogo con inversionistas privados, family offices y contrapartes institucionales. Las estructuras de capital, incluida la coinversión cuando corresponda, dependen de cada activo y se consideran individualmente.",
    universeEyebrow: "UNIVERSO DE INVERSIÓN",
    universeTitle: "Una selección considerada de temas de activos reales.",
    universeIntro: "Las áreas de enfoque incluyen bienes raíces, hotelería, desarrollo y activos reales generadores de ingresos.",
    themes: [
      { title: "Bienes raíces", body: "Propiedades residenciales, de uso mixto y comerciales." },
      { title: "Hotelería", body: "Activos hoteleros y conceptos de desarrollo." },
      { title: "Desarrollo", body: "Proyectos de activos reales en distintas etapas de desarrollo." },
      { title: "Activos reales generadores de ingresos", body: "Activos operativos y empresas generadoras de ingresos." },
    ],
    pathwaysEyebrow: "MÁS CONTEXTO",
    pathwaysTitle: "Elija la siguiente perspectiva.",
    pathways: [
      { title: "Marco de Inversión", body: "Explore el enfoque que Marqués utiliza para evaluar y estructurar oportunidades de inversión.", link: "Explore el marco", href: "/investment-framework" },
      { title: "Oportunidades seleccionadas", body: "Explore oportunidades seleccionadas en activos reales y el contexto de cada proyecto.", link: "Explore las oportunidades", href: "/projects" },
      { title: "Socios de capital", body: "Conozca cómo las relaciones de capital y las organizaciones pueden vincularse con la plataforma.", link: "Explore las alianzas de capital", href: "/capital-partners" },
    ],
    inquiry: "Para conversar de forma privada sobre un objetivo de inversión o una posible afinidad institucional, inicie una consulta.",
    inquiryLink: "Consulta institucional",
  },
  fr: {
    eyebrow: "PLATEFORME D’INVESTISSEMENT",
    title: "Actifs réels stratégiques au Costa Rica",
    intro: "Marqués intervient dans l’univers des actifs réels au Costa Rica, en dialogue avec des investisseurs privés, des family offices et des contreparties institutionnelles. Les structures de capital, y compris le co-investissement le cas échéant, dépendent de l’actif et sont examinées individuellement.",
    universeEyebrow: "UNIVERS D’INVESTISSEMENT",
    universeTitle: "Un éventail réfléchi de thèmes liés aux actifs réels.",
    universeIntro: "Les domaines d’intérêt comprennent l’immobilier, l’hôtellerie, le développement et les actifs réels générateurs de revenus.",
    themes: [
      { title: "Immobilier", body: "Biens résidentiels, mixtes et commerciaux." },
      { title: "Hôtellerie", body: "Actifs hôteliers et concepts de développement." },
      { title: "Développement", body: "Projets d’actifs réels à différents stades de développement." },
      { title: "Actifs réels générateurs de revenus", body: "Actifs opérationnels et entreprises génératrices de revenus." },
    ],
    pathwaysEyebrow: "POUR ALLER PLUS LOIN",
    pathwaysTitle: "Choisissez la perspective suivante.",
    pathways: [
      { title: "Cadre d’investissement", body: "Découvrir l’approche de Marqués pour évaluer et structurer les opportunités d’investissement.", link: "Découvrir le cadre", href: "/investment-framework" },
      { title: "Opportunités sélectionnées", body: "Découvrir des opportunités sélectionnées en actifs réels et le contexte des projets.", link: "Découvrir les opportunités", href: "/projects" },
      { title: "Partenaires en capital", body: "Découvrir comment les relations de capital et les organisations peuvent s’engager avec la plateforme.", link: "Découvrir les partenariats", href: "/capital-partners" },
    ],
    inquiry: "Pour un échange privé sur un objectif d’investissement ou un possible alignement institutionnel, commencez une demande.",
    inquiryLink: "Demande institutionnelle",
  },
  "zh-cn": {
    eyebrow: "投资平台",
    title: "哥斯达黎加战略性实物资产",
    intro: "Marqués 与私人投资者、家族办公室及机构合作方保持交流，关注哥斯达黎加的实物资产投资领域。资本结构（包括适用情况下的共同投资）取决于具体资产，并逐项考虑。",
    universeEyebrow: "投资领域",
    universeTitle: "审慎关注多类实物资产主题。",
    universeIntro: "关注领域包括房地产、酒店与接待业、开发项目及收益型实物资产。",
    themes: [
      { title: "房地产", body: "住宅、综合用途及商业物业。" },
      { title: "酒店与接待业", body: "酒店资产及开发概念。" },
      { title: "开发", body: "处于不同开发阶段的实物资产项目。" },
      { title: "收益型实物资产", body: "运营资产及收益型企业。" },
    ],
    pathwaysEyebrow: "延伸了解",
    pathwaysTitle: "选择下一项内容。",
    pathways: [
      { title: "投资框架", body: "了解 Marqués 评估和构建投资机会所采用的方法。", link: "探索投资框架", href: "/investment-framework" },
      { title: "精选机会", body: "查看精选实物资产机会及其项目背景。", link: "查看精选机会", href: "/projects" },
      { title: "资本合作伙伴", body: "了解资本关系与机构如何与平台开展合作。", link: "了解资本合作", href: "/capital-partners" },
    ],
    inquiry: "如需私下讨论投资目标或潜在机构合作契合度，请提交咨询。",
    inquiryLink: "机构咨询",
  },
}
