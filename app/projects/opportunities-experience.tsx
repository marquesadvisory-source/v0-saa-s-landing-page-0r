"use client"

import { useEffect, useRef, type CSSProperties } from "react"
import Link from "next/link"
import { T, useLanguage } from "@/components/language-provider"
import { SeoImage } from "@/components/seo-image"
import { opportunities } from "./opportunities-data"
import { opportunitiesCopy } from "./opportunities-copy"
import s from "./opportunities.module.css"

export function OpportunitiesExperience({ disclaimer }: { disclaimer: string }) {
  const { locale, t } = useLanguage()
  const text = (key: string) => locale === "en" ? key : opportunitiesCopy[key]?.[locale === "es" ? 0 : locale === "fr" ? 1 : 2] ?? t(key)
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elements = Array.from(root.current!.querySelectorAll<HTMLElement>("[data-reveal]"))
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
    let observer: IntersectionObserver | undefined
    const clear = () => {
      observer?.disconnect()
      elements.forEach(element => element.removeAttribute("data-pending"))
    }
    const setup = () => {
      clear()
      if (reduced.matches || !("IntersectionObserver" in window)) return
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          entry.target.removeAttribute("data-pending")
          observer?.unobserve(entry.target)
        })
      }, { threshold: 0.08 })
      // Never hide initial viewport content or depend on JavaScript to reveal it.
      elements.forEach(element => {
        if (element.getBoundingClientRect().top >= window.innerHeight) {
          element.setAttribute("data-pending", "")
          observer!.observe(element)
        }
      })
    }
    setup()
    reduced.addEventListener("change", setup)
    return () => { clear(); reduced.removeEventListener("change", setup) }
  }, [])

  return (
    <div ref={root}>
      <section className={s.hero} aria-labelledby="opportunities-title">
        <div className={s.container}>
          <p className={s.eyebrow}>{text("INSTITUTIONAL PIPELINE")}</p>
          <h1 id="opportunities-title">{text("Institutional Opportunities")}</h1>
          <p className={s.intro}>{text("Selected real asset opportunities in Costa Rica under origination, structuring or capital-readiness review.")}</p>
        </div>
      </section>

      <section aria-label={text("Selected Opportunities")}>
        {opportunities.map((opportunity, index) => (
          <article className={s.opportunity} key={opportunity.name} aria-labelledby={`opportunity-${index}`}>
            <div className={s.container}>
              <header className={s.projectHeading} data-reveal>
                <span className={s.number} aria-hidden="true">0{index + 1}</span>
                <div>
                  <h2 id={`opportunity-${index}`}>{opportunity.name}</h2>
                  <p className={s.location}>{text(opportunity.location)}</p>
                </div>
              </header>
              <div className={`${s.projectGrid} ${index === 1 ? s.reversed : ""}`}>
                <div className={s.visual} data-reveal>
                  <SeoImage src={opportunity.image} alt={text(opportunity.imageAlt)}
                    sizes="(max-width: 900px) 100vw, 55vw" loading={index === 0 ? "eager" : "lazy"}
                    style={{ objectPosition: opportunity.imagePosition }} />
                </div>
                <div className={s.details}>
                  <p className={s.classification} data-reveal>{text(opportunity.classification)}</p>
                  <p className={s.thesis} data-reveal>{text(opportunity.thesis)}</p>
                  <dl className={s.facts}>
                    {[
                      ["Asset Class", opportunity.assetClass],
                      ["Pipeline Stage", opportunity.stage],
                      ["MA&I Role", opportunity.role],
                      ["Review Basis", "Subject to diligence and institutional review"],
                    ].map(([label, value], i) => (
                      <div key={label} data-reveal style={{ "--reveal-delay": `${i * 60}ms` } as CSSProperties}>
                        <dt>{text(label)}</dt>
                        <dd>{text(value)}</dd>
                      </div>
                    ))}
                  </dl>
                  <Link href={opportunity.href} className={s.overviewLink}>{text("View Institutional Overview")}</Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className={s.access} aria-labelledby="confidential-materials">
        <div className={`${s.container} ${s.accessInner}`}>
          <h2 id="confidential-materials" data-reveal>{text("Confidential Investment Materials")}</h2>
          <div data-reveal>
            <p>{text("Detailed investment information is available to qualified private and institutional counterparties following appropriate review and execution of a confidentiality agreement.")}</p>
            <Link href="/institutional-inquiry" className={s.accessLink}>{text("Request Institutional Access")}</Link>
          </div>
        </div>
      </section>
      <section className={s.disclaimer}>
        <div className={s.container}>
          <p className={s.disclaimerLabel}><T>Institutional Disclaimer</T></p>
          <p><T>{disclaimer}</T></p>
        </div>
      </section>
    </div>
  )
}
