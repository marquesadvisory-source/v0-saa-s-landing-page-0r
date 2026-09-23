"use client"

import type { ReactNode } from "react"
import { useLanguage } from "@/components/language-provider"

// Page-scoped wording leaves shared navigation and other Residence pages unchanged.
const messages: Record<string, readonly [string, string, string]> = {
  "Documentation": ["Documentación", "Documentation", "文件手续"],
  "Residency": [
    "Residencia",
    "Résidence",
    "居留"
  ],
  "Key residency facts": [
    "Datos clave de residencia",
    "Repères sur la résidence",
    "居留关键信息"
  ],
  "Costa Rica": [
    "Costa Rica",
    "Costa Rica",
    "哥斯达黎加"
  ],
  "Investor": [
    "Inversionista",
    "Investisseur",
    "投资者"
  ],
  "Independent income": [
    "Ingresos independientes",
    "Revenus indépendants",
    "独立收入"
  ],
  "Retiree": [
    "Pensionado",
    "Retraité",
    "退休人士"
  ],
  "Residence status": [
    "Estatus de residencia",
    "Statut de résidence",
    "居留身份"
  ],
  "Formal residence status": [
    "Estatus formal de residencia",
    "Statut de résidence formel",
    "正式居留身份"
  ],
  "Long-term continuity": [
    "Continuidad a largo plazo",
    "Continuité à long terme",
    "长期连续性"
  ],
  "DIMEX identification": [
    "Identificación DIMEX",
    "Document d’identité DIMEX",
    "DIMEX 身份证件"
  ],
  "Investment coordination": [
    "Coordinación de la inversión",
    "Coordination de l’investissement",
    "投资统筹"
  ],
  "Family planning": [
    "Planificación familiar",
    "Planification familiale",
    "家庭规划"
  ],
  "Mobility planning": [
    "Planificación de movilidad",
    "Planification de la mobilité",
    "跨境生活规划"
  ],
  "From abroad": [
    "Desde el extranjero",
    "Depuis l’étranger",
    "境外准备"
  ],
  "Application preparation": [
    "Preparación de la solicitud",
    "Préparation de la demande",
    "申请准备"
  ],
  "Approval & documentation": [
    "Aprobación y documentación",
    "Approbation et documentation",
    "获批及文件手续"
  ],
  "Immigration review": [
    "Revisión migratoria",
    "Examen par les autorités migratoires",
    "移民审查"
  ],
  "Additional requirements if applicable": [
    "Requisitos adicionales, si corresponde",
    "Exigences complémentaires, le cas échéant",
    "补充要求（如适用）"
  ],
  "Frequently Asked Questions": [
    "Preguntas frecuentes",
    "Questions fréquentes",
    "常见问题"
  ],
  "Private Client Enquiry": [
    "Consulta de cliente privado",
    "Demande de client privé",
    "私人客户咨询"
  ],
  "Download Fact Sheet": [
    "Descargar ficha informativa",
    "Télécharger la fiche d’information",
    "下载资料指南"
  ],
  "Speak with a Marqués Private Advisor": [
    "Hable con un asesor privado de Marqués",
    "Échangez avec un conseiller privé Marqués",
    "与 Marqués 私人顾问沟通"
  ],
  "Yes. Once legal residence is granted, temporary residents are required to enroll in Costa Rica’s Social Security system (CCSS) and remain compliant with the applicable social-security requirements.": [
    "Sí. Una vez otorgada la residencia legal, los residentes temporales deben afiliarse a la Caja Costarricense de Seguro Social (CCSS) y mantenerse al día con los requisitos de seguridad social aplicables.",
    "Oui. Une fois la résidence légale accordée, les résidents temporaires doivent s’affilier au système de sécurité sociale costaricien (CCSS) et rester en conformité avec les obligations de sécurité sociale applicables.",
    "是的。合法居留获批后，临时居民必须加入哥斯达黎加社会保障体系（CCSS），并持续遵守适用的社会保障要求。"
  ],
  "Marqués coordinates this stage as part of the post-approval documentation process.": [
    "Marqués coordina esta etapa como parte del proceso de documentación posterior a la aprobación.",
    "Marqués coordonne cette étape dans le cadre des formalités documentaires qui suivent l’approbation.",
    "Marqués 将此阶段纳入获批后的文件办理流程，并提供统筹协调。"
  ],
  "Temporary residents must enroll in CCSS and comply with the applicable social-security requirements. Depending on the case, the documentation stage may also include government payments, completion of fingerprint requirements if still pending and issuance of the DIMEX residence identification document.": [
    "Los residentes temporales deben afiliarse a la CCSS y cumplir los requisitos de seguridad social aplicables. Según el caso, la etapa documental también puede incluir pagos gubernamentales, la toma de huellas si aún está pendiente y la emisión del documento de identificación de residencia DIMEX.",
    "Les résidents temporaires doivent s’affilier à la CCSS et respecter les obligations de sécurité sociale applicables. Selon le dossier, les formalités documentaires peuvent également comprendre des paiements administratifs, l’enregistrement des empreintes digitales s’il reste à effectuer et la délivrance du document d’identité de résident DIMEX.",
    "临时居民必须加入 CCSS 并遵守适用的社会保障要求。视个案而定，文件办理阶段还可能包括缴纳政府费用、完成尚未办理的指纹手续，以及取得 DIMEX 居留身份证件。"
  ],
  "After approval, temporary residents must enroll in CCSS and comply with the applicable social-security requirements. The documentation stage may also include government payments, fingerprint formalities if still pending and issuance of the DIMEX residence identification document.": [
    "Tras la aprobación, los residentes temporales deben afiliarse a la CCSS y cumplir los requisitos de seguridad social aplicables. La etapa documental también puede incluir pagos gubernamentales, la toma de huellas si aún está pendiente y la emisión del documento de identificación de residencia DIMEX.",
    "Après approbation, les résidents temporaires doivent s’affilier à la CCSS et respecter les obligations de sécurité sociale applicables. Les formalités documentaires peuvent également comprendre des paiements administratifs, l’enregistrement des empreintes digitales s’il reste à effectuer et la délivrance du document d’identité de résident DIMEX.",
    "获批后，临时居民必须加入 CCSS 并遵守适用的社会保障要求。文件办理阶段还可能包括缴纳政府费用、完成尚未办理的指纹手续，以及取得 DIMEX 居留身份证件。"
  ],
  "Documents are pre-reviewed before filing to reduce the risk of incomplete or non-compliant documentation.": [
    "Los documentos se revisan antes de la presentación para reducir el riesgo de documentación incompleta o que no cumpla los requisitos.",
    "Les documents font l’objet d’un examen préalable au dépôt afin de réduire le risque de pièces incomplètes ou non conformes.",
    "文件将在提交前接受预审，以降低文件不完整或不符合要求的风险。"
  ]
}

export function ResidencyText({ children }: { children: ReactNode }) {
  const { locale, t } = useLanguage()
  const render = (value: ReactNode): ReactNode => {
    if (typeof value === "string") {
      const message = messages[value]
      return locale === "en" ? value : message ? message[locale === "es" ? 0 : locale === "fr" ? 1 : 2] : t(value)
    }
    return Array.isArray(value) ? value.map(render) : value
  }
  return <>{render(children)}</>
}
