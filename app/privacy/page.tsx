import { SiteHeader } from "@/components/site-header"
import { LanguageNotice } from "@/components/language-provider"
import { ResidencyFooter } from "@/components/residency-editorial"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, createMetadata, webPageSchema } from "@/lib/seo"
import approvedPolicy from "@/lib/privacy-policy.json"
import s from "@/app/residency/residency.module.css"

export const metadata = createMetadata({title: "Privacy Policy", description: "The approved Privacy Policy of Marqués Advisory & Investments, operated by Besta & Violeta SRL.", path: "/privacy"})

export default function PrivacyPage() {
  // Public controller address currently displayed as Santa Cruz, Guanacaste, Costa Rica. Confirm legal sufficiency before production.
  return <div className={s.page}><SiteHeader />
    <JsonLd data={[webPageSchema({title:"Privacy Policy",description:"The approved Privacy Policy of Marqués Advisory & Investments, operated by Besta & Violeta SRL.",path:"/privacy"}),breadcrumbSchema([{name:"Home",path:"/"},{name:"Privacy Policy",path:"/privacy"}])]} />
    <main className={s.legal} lang="en">
      <LanguageNotice legal />
      {approvedPolicy.map((paragraph,index) => {
        if (index === 0) return <h1 key={index}>{paragraph.text}</h1>
        if (/^\d+\. /.test(paragraph.text)) return <h2 key={index}>{paragraph.text}</h2>
        if (paragraph.list) {
          if (approvedPolicy[index - 1]?.list) return null
          const items = []
          for(let i=index; i<approvedPolicy.length && approvedPolicy[i].list; i++) items.push(approvedPolicy[i])
          return <ul key={index}>{items.map((item,i)=><li key={i}>{item.text}</li>)}</ul>
        }
        return <p key={index}>{paragraph.text}</p>
      })}
    </main><ResidencyFooter />
  </div>
}
