"use client"

import { useMemo, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { siteConfig } from "@/lib/site"
import { jaguarHomesites, lapasHomesites, lapasPublishedRange } from "./homesite-inventory"
import { pinillaText } from "./pinilla-translations"
import styles from "./hacienda-pinilla.module.css"

const formatUsd = (value: number) => "$" + new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value)
const formatArea = (value: number, locale: Locale) => new Intl.NumberFormat(locale === "zh-cn" ? "zh-CN" : locale, {maximumFractionDigits: 0}).format(value)

export function HomesiteOptions({ name, locale }: { name: string; locale: Locale }) {
  const t = (message: string) => pinillaText(message, locale)
  const [phase, setPhase] = useState("all")
  const [price, setPrice] = useState("all")
  const [order, setOrder] = useState("priceAsc")
  const [lapasSize, setLapasSize] = useState("all")
  const [lapasPrice, setLapasPrice] = useState("all")
  const [lapasOrder, setLapasOrder] = useState("number")
  const options = useMemo(() => {
    return jaguarHomesites.filter(lot =>
      (phase === "all" || lot.phase === phase) &&
      (price === "all" || (price === "under550" ? lot.askingUsd < 550000 : price === "550to650" ? lot.askingUsd >= 550000 && lot.askingUsd <= 650000 : lot.askingUsd > 650000))
    ).sort((a,b) => order === "area" ? b.areaSqm-a.areaSqm : order === "number" ? a.number-b.number : a.askingUsd-b.askingUsd)
  },[phase,price,order])
  const lapasOptions = useMemo(() => lapasHomesites
    .filter(lot =>
      (lapasSize === "all" || (
        lapasSize === "small" ? lot.areaSqm < 1400
          : lapasSize === "standard" ? lot.areaSqm >= 1400 && lot.areaSqm <= 1600
          : lot.areaSqm > 1600
      )) &&
      (lapasPrice === "all" || (
        lapasPrice === "under400" ? lot.askingUsd !== undefined && lot.askingUsd < 400000
          : lapasPrice === "400to440" ? lot.askingUsd !== undefined && lot.askingUsd >= 400000
          : lot.askingUsd === undefined
      ))
    )
    .sort((a, b) => lapasOrder === "area" ? b.areaSqm - a.areaSqm
      : lapasOrder === "price" ? (a.askingUsd ?? Number.MAX_SAFE_INTEGER) - (b.askingUsd ?? Number.MAX_SAFE_INTEGER)
      : a.number - b.number),
  [lapasSize, lapasPrice, lapasOrder])

  if (name === "Las Lapas") return <section className={styles.lotPanel} aria-labelledby="lapas-options">
    <div className={styles.lotHeading}>
      <div>
        <p className={styles.kickerDark}>{t("HOMESITE INVESTMENT OPTIONS")}</p>
        <h3 id="lapas-options">{t("Find the lot for your vision")}</h3>
        <p>{t("Browse all 49 numbered Las Lapas homesites with their individual land areas. Select a lot to request its current price and availability through Marqués.")}</p>
      </div>
      <div className={styles.lotRange}><span>{t("INDICATIVE PRICE RANGE")}</span><strong>{formatUsd(lapasPublishedRange.minUsd)} – {formatUsd(lapasPublishedRange.maxUsd)}</strong><small>USD</small></div>
    </div>
    <figure className={styles.lapasPlan}>
      <img src="/images/real-estate/hacienda-pinilla/las-lapas.webp" alt={t("Las Lapas numbered 49-lot masterplan")} loading="lazy"/>
      <figcaption>{t("Locate each numbered lot on the community plan, then choose it in the options below.")}</figcaption>
    </figure>
    <div className={styles.lotFilters}>
      <label>{t("LOT AREA")}
        <select value={lapasSize} onChange={e => setLapasSize(e.target.value)}>
          <option value="all">{t("All lot sizes")}</option>
          <option value="small">{t("Under 1,400 m²")}</option>
          <option value="standard">{t("1,400–1,600 m²")}</option>
          <option value="large">{t("Over 1,600 m²")}</option>
        </select>
      </label>
      <label>{t("PRICE BAND")}
        <select value={lapasPrice} onChange={e => setLapasPrice(e.target.value)}>
          <option value="all">{t("All prices")}</option>
          <option value="under400">{t("Below $400,000")}</option>
          <option value="400to440">{t("$400,000–$440,000")}</option>
          <option value="request">{t("Price on request")}</option>
        </select>
      </label>
      <label>{t("SORT")}
        <select value={lapasOrder} onChange={e => setLapasOrder(e.target.value)}>
          <option value="number">{t("Lot number")}</option>
          <option value="area">{t("Area: largest first")}</option>
          <option value="price">{t("Price: lowest first")}</option>
        </select>
      </label>
    </div>
    <p className={styles.lotCount}>{lapasOptions.length} {t("lot options shown")}</p>
    <div className={styles.lotList}>
      {lapasOptions.map(lot => <article key={lot.number} className={styles.lotItem}>
        <div className={styles.lotName}><strong>{t("Lot")} {lot.number}</strong><span>Las Lapas</span></div>
        <div className={styles.lotArea}><strong>{formatArea(lot.areaSqm,locale)} m²</strong><span>{t("LOT AREA")}</span></div>
        <div className={styles.lotPrice}>
          <strong>{lot.askingUsd === undefined ? t("Price on request") : formatUsd(lot.askingUsd)}</strong>
          <span>{lot.askingUsd === undefined ? t("CONFIRM WITH MARQUÉS") : "USD · " + t("INDICATIVE ASKING PRICE")}</span>
        </div>
        <a href={siteConfig.whatsapp+"?text="+encodeURIComponent(`${t("Hello Marqués, I am interested in")} Las Lapas ${t("Lot")} ${lot.number} (${formatArea(lot.areaSqm,locale)} m²${lot.askingUsd === undefined ? "" : ", " + formatUsd(lot.askingUsd) + " USD"}). ${t("Please confirm current price and availability.")}`)} target="_blank" rel="noopener noreferrer" aria-label={`${t("Enquire about")} Las Lapas ${t("Lot")} ${lot.number}`}>
          {t("Enquire")} <ArrowUpRight size={16} aria-hidden="true"/>
        </a>
      </article>)}
    </div>
    <p className={styles.lotDisclaimer}>{t("Lot areas are based on the community plan. Displayed prices are indicative; individual pricing and availability may change. Marqués will confirm the current selection and purchase conditions.")}</p>
  </section>

  if (name !== "El Jaguar") return null
  return <section className={styles.lotPanel} aria-labelledby="jaguar-options">
    <div className={styles.lotHeading}>
      <div>
        <p className={styles.kickerDark}>{t("HOMESITE INVESTMENT OPTIONS")}</p>
        <h3 id="jaguar-options">{t("Find the lot for your vision")}</h3>
        <p>{t("Explore 42 residential lot options with individual prices and areas. Choose your preferred homesite and contact Marqués for a private consultation.")}</p>
      </div>
      <div className={styles.lotRange}><span>{t("INDICATIVE PRICE RANGE")}</span><strong>$399,000 – $810,000</strong><small>USD</small></div>
    </div>
    <div className={styles.lotFilters}>
      <label>{t("COMMUNITY PHASE")}
        <select value={phase} onChange={e => setPhase(e.target.value)}>
          <option value="all">{t("All phases")}</option>
          <option value="Sunset Estates">Sunset Estates</option>
          <option value="La Sabana">La Sabana</option>
          <option value="Golf Estates">Golf Estates</option>
        </select>
      </label>
      <label>{t("PRICE BAND")}
        <select value={price} onChange={e => setPrice(e.target.value)}>
          <option value="all">{t("All prices")}</option>
          <option value="under550">{t("Under $550,000")}</option>
          <option value="550to650">$550,000 – $650,000</option>
          <option value="over650">{t("Above $650,000")}</option>
        </select>
      </label>
      <label>{t("SORT")}
        <select value={order} onChange={e => setOrder(e.target.value)}>
          <option value="priceAsc">{t("Price: lowest first")}</option>
          <option value="area">{t("Area: largest first")}</option>
          <option value="number">{t("Lot number")}</option>
        </select>
      </label>
    </div>
    <p className={styles.lotCount}>{options.length} {t("lot options shown")}</p>
    <div className={styles.lotList}>
      {options.map(lot => <article key={lot.number} className={styles.lotItem}>
        <div className={styles.lotName}><strong>{t("Lot")} {lot.number}</strong><span>{lot.phase}</span></div>
        <div className={styles.lotArea}><strong>{formatArea(lot.areaSqm,locale)} m²</strong><span>{t("LOT AREA")}</span></div>
        <div className={styles.lotPrice}><strong>{formatUsd(lot.askingUsd)}</strong><span>USD · {t("INDICATIVE ASKING PRICE")}</span></div>
        <a href={siteConfig.whatsapp+"?text="+encodeURIComponent(`${t("Hello Marqués, I am interested in")} El Jaguar ${t("Lot")} ${lot.number} (${formatArea(lot.areaSqm,locale)} m², ${formatUsd(lot.askingUsd)} USD). ${t("Please confirm current price and availability.")}`)} target="_blank" rel="noopener noreferrer" aria-label={`${t("Enquire about")} El Jaguar ${t("Lot")} ${lot.number}`}>{t("Enquire")} <ArrowUpRight size={16} aria-hidden="true"/></a>
      </article>)}
    </div>
    <p className={styles.lotDisclaimer}>{t("Prices and lot details are indicative and may change. Contact Marqués to confirm availability, current pricing and purchase conditions.")}</p>
  </section>
}
