"use client"

import { useMemo, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { siteConfig } from "@/lib/site"
import { jaguarHomesites, lapasPublishedRange } from "./homesite-inventory"
import { pinillaText } from "./pinilla-translations"
import styles from "./hacienda-pinilla.module.css"

const formatUsd = (value: number) => "$" + new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value)
const formatArea = (value: number, locale: Locale) => new Intl.NumberFormat(locale === "zh-cn" ? "zh-CN" : locale, {maximumFractionDigits: 0}).format(value)

export function HomesiteOptions({ name, locale }: { name: string; locale: Locale }) {
  const t = (message: string) => pinillaText(message, locale)
  const [phase, setPhase] = useState("all")
  const [price, setPrice] = useState("all")
  const [order, setOrder] = useState("priceAsc")
  const options = useMemo(() => {
    return jaguarHomesites.filter(lot =>
      (phase === "all" || lot.phase === phase) &&
      (price === "all" || (price === "under550" ? lot.askingUsd < 550000 : price === "550to650" ? lot.askingUsd >= 550000 && lot.askingUsd <= 650000 : lot.askingUsd > 650000))
    ).sort((a,b) => order === "area" ? b.areaSqm-a.areaSqm : order === "number" ? a.number-b.number : a.askingUsd-b.askingUsd)
  },[phase,price,order])
  if (name === "Las Lapas") return <section className={styles.lotPanel} aria-labelledby="lapas-options">
    <div className={styles.lotHeading}>
      <div>
        <p className={styles.kickerDark}>{t("HOMESITE INVESTMENT OPTIONS")}</p>
        <h3 id="lapas-options">{t("Select your future homesite")}</h3>
        <p>{t("Las Lapas is a planned golf-front enclave with 49 residential homesites. Explore the indicative price range and ask Marqués about current lot options.")}</p>
      </div>
    </div>
    <div className={styles.lapasRange}>
      <div><span>{t("INDICATIVE STARTING PRICE")}</span><strong>{formatUsd(lapasPublishedRange.minUsd)}</strong><small>USD</small></div>
      <div><span>{t("INDICATIVE UPPER PRICE RANGE")}</span><strong>{formatUsd(lapasPublishedRange.maxUsd)}</strong><small>USD</small></div>
      <div><span>{t("PLANNED HOMESITES")}</span><strong>{lapasPublishedRange.plannedHomesites}</strong><small>{t("Approximately")} {formatArea(lapasPublishedRange.approximateAverageAreaSqm,locale)} m² {t("average lot area")}</small></div>
    </div>
    <p className={styles.lotDisclaimer}>{t("The price range is indicative, and individual lot pricing and availability have not yet been confirmed. Marqués will assist you with current options and purchase conditions.")}</p>
    <a className={styles.lotAction} href={siteConfig.whatsapp+"?text="+encodeURIComponent(t("Hello Marqués, please send me the current Las Lapas lot-by-lot inventory with prices, areas, plans and reservation details."))} target="_blank" rel="noopener noreferrer">{t("Request current Las Lapas lot selection")} <ArrowUpRight size={16}/></a>
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
