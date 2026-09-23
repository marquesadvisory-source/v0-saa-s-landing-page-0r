"use client"

import Link from "next/link"
import { SeoImage } from "@/components/seo-image"
import { useLanguage } from "@/components/language-provider"
import { investmentsCopy } from "./investments-copy"
import styles from "./investments.module.css"
import pageStyles from "@/app/residency/residency.module.css"

export function InvestmentsExperience() {
  const { locale } = useLanguage()
  const copy = investmentsCopy[locale]

  return (
    <main>
      <section className={styles.hero} aria-labelledby="investments-title">
        <SeoImage src="/costa-rica-coast.jpg" alt="Pacific coastline in Costa Rica" fetchPriority="high" loading="eager" sizes="100vw" />
        <div className={pageStyles.container}>
          <p className={pageStyles.eyebrow}>{copy.eyebrow}</p>
          <h1 id="investments-title">{copy.title}</h1>
          <p className={styles.heroIntro}>{copy.intro}</p>
        </div>
      </section>

      <section className={styles.universe} id="investment-context" aria-labelledby="investment-universe-title">
        <div className={pageStyles.container}>
          <header className={styles.sectionHeading}>
            <p className={pageStyles.eyebrow}>{copy.universeEyebrow}</p>
            <h2 id="investment-universe-title">{copy.universeTitle}</h2>
            <p>{copy.universeIntro}</p>
          </header>
          <div className={styles.themes}>
            {copy.themes.map((theme, index) => (
              <article key={theme.title} className={styles.theme}>
                <span className={styles.themeNumber} aria-hidden="true">0{index + 1}</span>
                <h3>{theme.title}</h3>
                <p>{theme.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.economic} aria-labelledby="economic-context-title">
        <div className={pageStyles.container}>
          <div className={styles.economicIntro}>
            <p className={pageStyles.eyebrow}>{copy.lensEyebrow}</p>
            <h2 id="economic-context-title">{copy.lensTitle}</h2>
            <p>{copy.lensIntro}</p>
          </div>
          <ul className={styles.considerations}>
            {copy.considerations.map(item => <li key={item}>{item}</li>)}
          </ul>
          <Link href="/investment-framework" className={styles.frameworkLink}>{copy.frameworkLink}</Link>
        </div>
      </section>

      <section className={styles.pathways} id="selected-opportunities" aria-labelledby="investments-pathways-title">
        <div className={pageStyles.container}>
          <header className={styles.pathwaysHeading}>
            <p className={pageStyles.eyebrow}>{copy.pathwaysEyebrow}</p>
            <h2 id="investments-pathways-title">{copy.pathwaysTitle}</h2>
          </header>
          <div className={styles.pathwayList}>
            {copy.pathways.map(pathway => (
              <article key={pathway.href} className={styles.pathway}>
                <div>
                  <h3>{pathway.title}</h3>
                  <p>{pathway.body}</p>
                </div>
                <Link href={pathway.href}>{pathway.link}</Link>
              </article>
            ))}
          </div>
          <p className={styles.inquiry}>{copy.inquiry} <Link href="/institutional-inquiry">{copy.inquiryLink}</Link></p>
        </div>
      </section>
    </main>
  )
}
