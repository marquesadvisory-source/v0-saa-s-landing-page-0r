"use client"

import { useEffect, useRef, useState } from "react"
import { Pause, Play } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { SeoImage } from "@/components/seo-image"
import { siteConfig } from "@/lib/site"
import { frameworkCopy } from "./framework-copy"
import s from "./framework.module.css"

const stages = ["Asset", "Thesis", "Structure", "Capital", "Execution", "Monetization"]
const narrative = [
  { title: "We begin with the asset.", words: ["Location", "Logic", "Potential"] },
  { title: "Then we define the structure.", words: ["Thesis", "Capital", "Execution"] },
  { title: "Only then do we position the opportunity.", words: ["Readiness", "Alignment", "Monetization"] },
]
const capabilities = ["Real Asset Review", "Project Structuring", "Capital Structuring", "Execution Coordination", "Strategic Opportunities"]
const categories = ["Mixed-Use", "Hospitality", "Industrial & Logistics", "Strategic Land", "Build-to-Suit", "Sale-Leaseback"]
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
        <p className={s.heroSub}>{text("Structured for capital. Built for execution.")}</p>
        <p className={s.heroBody}>{text("We evaluate, structure and prepare real asset opportunities for disciplined investment and execution.")}</p>
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
          <p>{text("From asset clarity to institutional readiness.")}</p>
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
          <h2 id={`narrative-${index}`}>{text(item.title)}</h2>
          <p className={s.statementWords}>{item.words.map(word => <span key={word}>{text(word)}.</span>)}</p>
        </div>
      </section>)}
    </div>

    <section className={s.capabilities} aria-labelledby="framework-capabilities">
      <div className={s.sectionHeading} data-reveal><p className={s.eyebrow}>Marqués Advisory &amp; Investments</p><h2 id="framework-capabilities">{text("What We Do")}</h2></div>
      <ul className={s.capabilityList}>{capabilities.map((item, i) => <li key={item} data-reveal><span className={s.number} aria-hidden="true">0{i + 1}</span><span>{text(item)}</span></li>)}</ul>
    </section>

    <section className={s.categories} aria-labelledby="framework-categories">
      <h2 id="framework-categories" data-reveal>{text("Asset Categories")}</h2>
      <ul>{categories.map(item => <li key={item} data-reveal>{text(item)}</li>)}</ul>
    </section>

    <section className={s.cta} aria-labelledby="framework-inquiry">
      <div data-reveal>
        <p className={s.eyebrow}>{text("Private Review")}</p>
        <h2 id="framework-inquiry">{text("From opportunity to institutional readiness.")}</h2>
        <p className={s.ctaCopy}>{text("A private conversation about real assets, structuring and execution in Costa Rica.")}</p>
        <Link href="/institutional-inquiry" className={s.ctaLink}>{text("Discuss an Opportunity")}<span aria-hidden="true">&rarr;</span></Link>
      </div>
    </section>
    <footer className={s.disclaimer}><p>{t(siteConfig.disclaimer)}</p></footer>
  </main>
}
