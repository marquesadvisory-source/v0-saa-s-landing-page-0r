"use client"

import { useEffect, useRef, useState } from "react"
import { Pause, Play } from "lucide-react"
import { LocaleLink as Link } from "@/components/locale-link"
import { useLanguage } from "@/components/language-provider"
import { SeoImage } from "@/components/seo-image"
import { siteConfig } from "@/lib/site"
import { frameworkCopy } from "./framework-copy"
import s from "./framework.module.css"

const stages = ["Asset context", "Commercial rationale", "Sponsor context", "Capital structure", "Execution context", "Risk and alignment"]
const narrative = [
  { title: "Asset and commercial context.", words: ["Location", "Use", "Context"], body: "The discussion considers the asset, its setting and the commercial rationale presented for its intended use." },
  { title: "Sponsor and stakeholder alignment.", words: ["Sponsor", "Objectives", "Alignment"], body: "Sponsor context, participant objectives and areas of alignment help frame the opportunity." },
  { title: "Capital structure and execution.", words: ["Structure", "Execution", "Risk"], body: "Capital structure, execution context and relevant risks are considered at a high level." },
]
const clamp = (value: number) => Math.max(0, Math.min(1, value))

export function FrameworkExperience() {
  const { locale, t } = useLanguage()
  const text = (key: string) => locale === "en" ? key : frameworkCopy[key]?.[locale === "es" ? 0 : locale === "fr" ? 1 : 2] ?? t(key)
  const rootRef = useRef<HTMLElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const root = rootRef.current!, hero = heroRef.current!, image = imageRef.current!
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
    const desktop = window.matchMedia("(min-width: 768px)")
    let frame = 0, disposed = false
    let geometry = { heroTop: 0, heroHeight: 1 }
    const draw = () => {
      frame = 0
      if (reduced.matches) {
        image.style.removeProperty("transform")
        return
      }
      const y = window.scrollY
      const imageProgress = clamp((y - geometry.heroTop) / geometry.heroHeight)
      image.style.transform = desktop.matches ? `translate3d(0,${imageProgress * 24}px,0) scale(${1.035 + imageProgress * .02})` : "none"
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(draw) }
    // Cache geometry on layout changes, not on every scroll frame.
    const measure = () => {
      const heroBox = hero.getBoundingClientRect()
      geometry = { heroTop: heroBox.top + window.scrollY, heroHeight: heroBox.height }
      schedule()
    }
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        entry.target.removeAttribute("data-pending")
        entry.target.setAttribute("data-revealed", "true")
        observer.unobserve(entry.target)
      }
    }, { threshold: .12 })
    if (!reduced.matches) root.querySelectorAll<HTMLElement>("[data-reveal]").forEach(element => {
      if (element.getBoundingClientRect().top > window.innerHeight) element.setAttribute("data-pending", "true")
      observer.observe(element)
    })
    const resize = new ResizeObserver(measure)
    resize.observe(root)
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", measure)
    reduced.addEventListener("change", measure)
    desktop.addEventListener("change", measure)
    document.fonts.ready.then(() => { if (!disposed) measure() })
    measure()
    return () => {
      disposed = true
      cancelAnimationFrame(frame)
      observer.disconnect()
      resize.disconnect()
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", measure)
      reduced.removeEventListener("change", measure)
      desktop.removeEventListener("change", measure)
      root.querySelectorAll("[data-pending]").forEach(element => element.removeAttribute("data-pending"))
    }
  }, [locale])

  return <main ref={rootRef} className={s.page} id="framework-content">
    <section ref={heroRef} className={s.hero} aria-labelledby="framework-title">
      <div ref={imageRef} className={s.heroImage}>
        <SeoImage src="/architecture-interior.jpg" alt={text("Contemporary architecture with natural light, timber and stone")} sizes="100vw" loading="eager" fetchPriority="high" />
      </div>
      <div className={s.heroShade} />
      <div className={s.heroContent}>
        <p className={s.eyebrow}>{text("Investment Framework")}</p>
        <h1 id="framework-title">{text("How Marqués Evaluates Real Asset Opportunities")}</h1>
        <p className={s.heroSub}>{text("A considered perspective on context, rationale and alignment.")}</p>
        <p className={s.heroBody}>{text("A high-level review may consider asset context, sponsor, commercial rationale, capital structure, execution, risk and alignment.")}</p>
      </div>
    </section>

    <section className={s.rail} aria-labelledby="review-framework">
      <div className={s.pin}>
        <p className={s.railLabel}>{text("The Marqués Review Framework")}</p>
        <div className={s.railWindow}>
          <h2 id="review-framework" className={s.track + (paused ? " " + s.paused : "")}>
            <span className={s.cycle}>{stages.map(stage => <span key={stage}>{text(stage)}.</span>)}</span>
            <span className={s.cycle} aria-hidden="true">{stages.map(stage => <span key={stage}>{text(stage)}.</span>)}</span>
          </h2>
        </div>
        <div className={s.railFooter}>
          <p>{text("Considerations are shaped by the context of each opportunity.")}</p>
          <button type="button" className={s.motionToggle} onClick={() => setPaused(value => !value)} aria-label={text(paused ? "Resume framework motion" : "Pause framework motion")} title={text(paused ? "Resume framework motion" : "Pause framework motion")}>
            {paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </section>

    <div className={s.narrative}>
      {narrative.map((item, index) => <section key={item.title} className={s.statement} aria-labelledby={`narrative-${index}`}>
        <div data-reveal className={s.statementInner}>
          <span className={s.number} aria-hidden="true">0{index + 1}</span>
          <div className={s.statementContent}>
            <h2 id={`narrative-${index}`}>{text(item.title)}</h2>
            <div className={s.statementSide}>
              <p className={s.statementWords}>{item.words.map(word => <span key={word}>{text(word)}.</span>)}</p>
              <p className={s.statementCopy}>{text(item.body)}</p>
            </div>
          </div>
        </div>
      </section>)}
    </div>

    <section className={s.cta} aria-labelledby="framework-inquiry">
      <div data-reveal>
        <p className={s.eyebrow}>{text("PRIVATE CONVERSATION")}</p>
        <h2 id="framework-inquiry">{text("A private conversation about a real asset opportunity.")}</h2>
        <p className={s.ctaCopy}>{text("Discuss a real asset opportunity in Costa Rica with Marqués.")}</p>
        <Link href="/institutional-inquiry" className={s.ctaLink}>{text("Begin an Institutional Inquiry")}<span aria-hidden="true">&rarr;</span></Link>
      </div>
    </section>
    <footer className={s.disclaimer}><p>{t(siteConfig.disclaimer)}</p></footer>
  </main>
}
