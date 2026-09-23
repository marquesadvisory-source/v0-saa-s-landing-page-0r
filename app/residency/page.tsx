import { Localized } from "@/components/language-provider"
import { ResidencyText as T } from "./residency-text"
import { SeoImage } from "@/components/seo-image"
import { pageSeo } from "@/lib/page-seo"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Download, Plus } from "lucide-react"
import { createMetadata } from "@/lib/seo"
import { countries } from "@/lib/residency"
import { residencyContent as content } from "@/lib/residency-content"
import { EnquiryButton } from "@/components/enquiry-provider"
import { ResidencySchema } from "@/components/residency-editorial"
import s from "./residency.module.css"
import c from "./content.module.css"

export const metadata = createMetadata(pageSeo["/residency"])

function ProcessFlow({ stages, label }: { stages: readonly string[]; label: string }) {
  return <Localized as="ol" className={c.filingFlow} aria-label={label}>{stages.map((stage,index) => <li key={index}>
    {index > 0 && <ArrowRight size={14} aria-hidden="true" />}<span><T>{stage}</T></span>
  </li>)}</Localized>
}

export default function ResidencyPage() {
  return <>
    <ResidencySchema name="Residence by Investment" path="/residency" />
    <section id="residency-hero" className={s.hero} >
      <SeoImage src="/costa-rica-coast.jpg" alt="Pacific coastline and forest in Costa Rica" fetchPriority="high" loading="eager" sizes="100vw" />
      <div className={s.container + " " + s.heroCopy}>
        <p className={s.eyebrow + " " + c.editorialLabel}><T>Residency</T></p><h1><T>Become a Resident in Costa Rica</T></h1>
        {content.hero.map(text => <p key={text}><T>{text}</T></p>)}
        <div className={s.actions + " " + c.heroActions}>
          <Link className={s.button} href="#key-residency-facts"><T>Explore Your Residence Options</T><ArrowUpRight size={16} /></Link>
          <EnquiryButton kind="general" className={s.textLink}><T>Private Client Enquiry</T><ArrowUpRight size={16} /></EnquiryButton>
        </div>
      </div><span className={s.heroCaption}><T>Costa Rica · A long-term perspective</T></span>
    </section>

    <section id="key-residency-facts" className={s.section + " " + s.ivory} >
      <div className={s.container}>
        <div className={s.countryIdentity}>
          <Localized as="img" className={s.coat} src={countries[0].coatOfArms} alt="Official coat of arms of Costa Rica" width={96} height={105} />
          <div><p className={s.eyebrow + " " + c.editorialLabel}><T>Key residency facts</T></p><h2><T>Costa Rica</T></h2></div>
        </div>
        <Localized as="div" className={s.quickFacts + " " + c.facts} aria-label="Key residency facts">
          {content.facts.map(([label,value,detail]) => <div key={label}><span><T>{label}</T></span><strong><T>{value}</T></strong><p><T>{detail}</T></p></div>)}
        </Localized>
      </div>
    </section>

    <section id="overview" className={s.section} >
      <div className={s.container + " " + s.intro}>
        <div><p className={s.eyebrow + " " + c.editorialLabel}><T>Costa Rica</T></p><h2><T>Residence by Investment Overview</T></h2></div>
        <div className={c.paragraphs}>
          {content.overview.map(text => <p key={text}><T>{text}</T></p>)}
          <div id="overview-enquiry" className={s.actions}>
            <EnquiryButton kind="general" className={s.button}><T>Private Client Enquiry</T><ArrowUpRight size={16} /></EnquiryButton>
            <EnquiryButton kind="fact-sheet" className={s.textLink}><T>Download Fact Sheet</T><Download size={16} /></EnquiryButton>
          </div>
        </div>
      </div>
    </section>

    <section id="frequently-asked-questions" className={s.section + " " + s.ivory} >
      <div className={s.container}>
        <h2><T>Frequently Asked Questions</T></h2>
        <div className={s.faq}>{content.faqs.map(([question,answer]) => <details key={question}>
          <summary><T>{question}</T><Plus size={18} aria-hidden="true" /></summary>
          {answer.map(text => text.includes("\n→ ") ? <ProcessFlow key={text} stages={text.split("\n→ ")} label="Application stages" /> : <p key={text}><T>{text}</T></p>)}
          {question === "Do I have to pay Costa Rican tax on money I transfer into the country?" && <p className={s.note}><T>{content.taxNote}</T></p>}
          {question === "Can Marqués help identify and coordinate the qualifying investment?" && <div className={s.actions}>
            <Link className={s.textLink} href="/residency/real-estate"><T>Explore Real Estate</T><ArrowUpRight size={16} /></Link>
            <Link className={s.textLink} href="/investments"><T>View Investment Opportunities</T><ArrowUpRight size={16} /></Link>
          </div>}
        </details>)}</div>
      </div>
    </section>

    <section id="residence-program" className={s.section + " " + s.ivory} >
      <div className={s.container + " " + s.split}>
        <SeoImage src="/images/private-client/residence-program.webp" alt="Illustrative family breakfast overlooking a tropical mountain garden" loading="lazy" />
        <div className={s.copy}>
          <h2><T>The Costa Rica Residence Program</T></h2>
          {content.program.map(text => <p key={text}><T>{text}</T></p>)}
        </div>
      </div>
    </section>

    <section id="residency-benefits" className={s.section} >
      <div className={s.container}>
        <h2><T>Benefits of Costa Rican Residence</T></h2>
        <ol className={s.reasons + " " + c.benefits}>{content.benefits.map(([title,description],index) => <li key={title}>
          <span className={s.number}><T>0</T>{index+1}</span><div><h3><T>{title}</T></h3><p><T>{description}</T></p></div>
        </li>)}</ol>
        <p className={s.note}><T>{content.benefitNote}</T></p>
      </div>
    </section>

    <section id="residence-journey" className={s.section + " " + c.journey} >
      <div className={s.container}>
        <h2><T>Your Residence Journey</T></h2>
        <ol className={s.steps + " " + c.journeyStages}>
          {content.journey.map((stage,index) => <li key={stage.title}>
            <span><T>0</T>{index+1}</span><h3><T>{stage.title}</T></h3>
            <ul className={c.journeyItems}>{stage.steps.map(step => <li key={step}><T>{step}</T></li>)}</ul>
          </li>)}
        </ol>
        <p className={c.journeyStatement}><T>{content.journeyStatement}</T></p>
        <p className={s.note + " " + c.supportingNote}><T>{content.journeyNote}</T></p>
      </div>
    </section>

    <section id="citizenship-planning" className={s.section} >
      <div className={s.container + " " + s.intro}>
        <h2><T>Citizenship and Long-Term Planning</T></h2>
        <div className={c.paragraphs}>{content.citizenship.map(text => <p key={text}><T>{text}</T></p>)}</div>
      </div>
    </section>

    <section id="final-enquiry" className={s.section + " " + s.navy} >
      <div className={s.container + " " + s.split}>
        <h2><T>{content.finalTitle}</T></h2>
        <div><p><T>{content.finalCopy}</T></p><div className={s.actions}>
          <EnquiryButton kind="general" className={s.button}><T>{content.finalCta}</T><ArrowUpRight size={16} /></EnquiryButton>
        </div></div>
      </div>
    </section>
  </>
}
