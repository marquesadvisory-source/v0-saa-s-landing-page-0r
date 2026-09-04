import mammoth from "mammoth"
import { SiteFrame } from "@/components/editorial-shell"

export default async function PrivacyPage() {
  const { value } = await mammoth.convertToHtml({ path: "data/Privacy-Policy-887cdc.docx" })
  return <SiteFrame><main className="mx-auto max-w-4xl px-5 pb-24 pt-40 md:px-8"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Legal</p><h1 className="mt-5 font-serif text-5xl text-primary">Privacy Policy</h1><div className="prose prose-sm mt-10 max-w-none leading-7 text-muted-foreground prose-headings:font-serif prose-headings:font-normal prose-headings:text-primary prose-strong:text-primary" dangerouslySetInnerHTML={{ __html: value }} /><p className="mt-10 border-t border-border pt-6 text-xs leading-6 text-muted-foreground">Privacy & Legal Contact: legal@marquescr.com</p></main></SiteFrame>
}
