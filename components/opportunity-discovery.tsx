"use client"
import { SeoImage } from "@/components/seo-image"
import { T, useLanguage } from "@/components/language-provider"
import { useRef, useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ArrowUpRight, RotateCcw } from "lucide-react"
import { EnquiryButton } from "@/components/enquiry-provider"
import { filterOpportunities, investmentCategories, realEstatePropertyTypes, type Opportunity } from "@/lib/opportunities"
import s from "@/app/residency/residency.module.css"
import d from "@/app/residency/real-estate/discovery.module.css"

export function OpportunityDiscovery({assets, scope = "real-estate"}:{assets:Opportunity[]; scope?: "real-estate" | "investments"}) {
  const {t} = useLanguage()
  const tabbed = scope === "investments"
  const [inventory, setInventory] = useState<Opportunity["inventory"]>("real-estate")
  const broad = inventory === "other-investments"
  const sales = tabbed && !broad
  const tabRefs = useRef<(HTMLButtonElement|null)[]>([])
  const categories = broad ? investmentCategories : realEstatePropertyTypes
  const inventoryAssets = assets.filter(asset=>asset.inventory===inventory&&!asset.confidential&&asset.status!=="closed")
  const [location,setLocation]=useState("")
  const [category,setCategory]=useState("")
  const [relevance,setRelevance]=useState("")
  const [sort,setSort]=useState("featured")
  const [bedrooms,setBedrooms]=useState("")
  const [price,setPrice]=useState("")
  const bedroomOptions = [...new Set(inventoryAssets.flatMap(a=>a.propertyDetails?.bedrooms!==undefined?[a.propertyDetails.bedrooms]:[]))].sort((a,b)=>a-b)
  const priceOptions = inventoryAssets.flatMap(a=>a.currency&&a.propertyDetails?.askingPrice!==undefined?[{key:a.currency+":"+a.propertyDetails.askingPrice,currency:a.currency,amount:a.propertyDetails.askingPrice}]:[]).filter((option,index,all)=>all.findIndex(item=>item.key===option.key)===index).sort((a,b)=>a.currency.localeCompare(b.currency)||a.amount-b.amount)
  const selectedPrice = priceOptions.find(option=>option.key===price)
  const reset=()=>{setLocation("");setCategory("");setRelevance("");setSort("featured");setBedrooms("");setPrice("")}
  const switchTab=(next:Opportunity["inventory"])=>{setInventory(next);reset()}
  const filtered=!!(location||category||relevance||bedrooms||price)
  const results=filterOpportunities(inventoryAssets, {inventory, location, category, relevance, sort, bedrooms:bedrooms===""?undefined:Number(bedrooms),maxPrice:selectedPrice?.amount,priceCurrency:selectedPrice?.currency})
  const rangeFilter = <label><T>INVESTMENT RANGE</T><select aria-label={t("Investment range")} disabled aria-describedby="investment-amount-note"><option value="Any Range"><T>Any Range</T></option></select></label>
  return <>
    <div className={d.tabs} role="tablist" aria-label={t(broad ? "Investment opportunity views" : "Real estate opportunity views")}>
      {tabbed ? (["real-estate","other-investments"] as const).map((tab,index)=><button key={tab} ref={element=>{tabRefs.current[index]=element}} id={tab+"-view"} type="button" role="tab" aria-selected={inventory===tab} tabIndex={inventory===tab?0:-1} aria-controls="opportunity-panel" onClick={()=>switchTab(tab)} onKeyDown={event=>{
        if(!["ArrowLeft","ArrowRight","Home","End"].includes(event.key)) return
        event.preventDefault()
        const next=event.key==="Home"?0:event.key==="End"?1:1-index
        switchTab(next===0?"real-estate":"other-investments");tabRefs.current[next]?.focus()
      }}>{tab==="real-estate"?<span><T>SALES</T></span>:<T>INVESTMENT OPPORTUNITIES</T>}</button>) : <button id="real-estate-view" type="button" role="tab" aria-selected="true" aria-controls="opportunity-panel"><T>REAL ESTATE</T></button>}
    </div>
    <div role="tabpanel" id="opportunity-panel" aria-labelledby={inventory+"-view"}>
      <div className={d.filterBand}>
        <div className={d.filters}>
          <label><T>LOCATION</T><select aria-label={t("Location")} value={location} onChange={e=>setLocation(e.target.value)}><option value=""><T>Any Location</T></option>{[...new Set(inventoryAssets.map(a=>a.location))].sort().map(l=><option key={l} value={l}><T>{l}</T></option>)}</select></label>
          <label>{broad ? <T>ASSET TYPE</T> : <span><T>PROPERTY TYPE</T></span>}<select aria-label={t(broad?"Asset type":"Property type")} value={category} onChange={e=>setCategory(e.target.value)}><option value="">{t(broad ? "All Assets" : "All Properties")}</option>{categories.map(c=><option key={c} value={c}><T>{c}</T></option>)}</select></label>
          {sales ? <>
            <label><T>BEDROOMS</T><select aria-label={t("Bedrooms")} value={bedrooms} disabled={!bedroomOptions.length} aria-describedby="investment-amount-note" onChange={event=>setBedrooms(event.target.value)}><option value=""><T>Any Bedrooms</T></option>{bedroomOptions.map(count=><option key={count} value={count}>{count}</option>)}</select></label>
            <label><T>PRICE</T><select aria-label={t("Price")} value={price} disabled={!priceOptions.length} aria-describedby="investment-amount-note" onChange={event=>setPrice(event.target.value)}><option value=""><T>Any Price</T></option>{priceOptions.map(option=><option key={option.key} value={option.key}><T>Up to </T>{option.currency} {option.amount.toLocaleString("en-US")}</option>)}</select></label>
          </> : <>{rangeFilter}
            <label><T>RESIDENCY RELEVANCE</T><select aria-label={t("Residency relevance")} value={relevance} onChange={e=>setRelevance(e.target.value)}><option value="">{t(broad?"All Opportunities":"All Properties")}</option><option value="potentially-relevant"><T>Potentially Relevant to Investor Residency</T></option><option value="under-verification"><T>Under Verification</T></option><option value="investment-only"><T>Investment Only</T></option></select></label>
          </>}
        </div>
        <p id="investment-amount-note" className={d.note}>{sales?<span><T>{!bedroomOptions.length||!priceOptions.length?"Bedrooms and price filters are enabled only when approved property data is available.":"Price and bedroom options reflect approved public property data."}</T></span>:<T>Investment range is unavailable while approved public amounts are not provided.</T>}</p>
      </div>
      <div className={d.controls}>
        <label><T>SORT BY</T><select aria-label={t("Sort by")} value={sort} onChange={e=>setSort(e.target.value)}><option value="featured"><T>Featured</T></option><option value="location"><T>Location</T></option><option value="name"><T>Name</T></option></select></label>
        <div className={d.currency}><span><T>CURRENCY</T></span><strong><T>USD</T></strong></div>
        {filtered&&<button type="button" className={d.reset} onClick={reset}><RotateCcw size={13}/><T>Reset filters</T></button>}
        <p className={d.total} role="status">{results.length?<><T>Total Opportunities </T><strong>{results.length}</strong></>:<T>{filtered?"No matching public opportunities":"Private opportunities"}</T>}</p>
      </div>
      {results.length?<>
        <p className={d.resultsNote}>{sales?<span><T>Selected properties for acquisition, subject to availability and diligence. Residency relevance requires separate verification.</T></span>:<T>{broad ? "Public opportunity information for review, not an invitation to invest. Residency relevance is assessed separately for each opportunity." : "Institutional showcases under review, not property listings or invitations to invest. No residency eligibility is represented."}</T>}</p>
        {results.map(a=><article key={a.id} className={d.result}>
          <AssetImage asset={a}/>
          <div className={d.assetCopy}>
            <p className={s.eyebrow}><T>{broad?a.category:a.propertyType??a.category}</T></p><h3><T>{a.name}</T></h3><p className={d.location}><T>{a.location}</T></p>
            <p className={d.status}><T>{a.publicStatus}</T></p><p><T>{a.shortDescription}</T></p>
            {broad&&a.investmentAmount!==undefined&&<p><T>{a.currency}</T> <T>{a.investmentAmount.toLocaleString("en-US")}</T></p>}
            {!broad&&a.propertyDetails&&<div>
              {a.propertyDetails.askingPrice!==undefined&&a.currency&&<p><T>Asking price:</T> {a.currency} {a.propertyDetails.askingPrice.toLocaleString("en-US")}</p>}
              {a.propertyDetails.bedrooms!==undefined&&<p><T>Bedrooms:</T> {a.propertyDetails.bedrooms}</p>}
              {a.propertyDetails.bathrooms!==undefined&&<p><T>Bathrooms:</T> {a.propertyDetails.bathrooms}</p>}
              {a.propertyDetails.totalArea!==undefined&&a.propertyDetails.areaUnit&&<p><T>Total area:</T> {a.propertyDetails.totalArea.toLocaleString("en-US")} {a.propertyDetails.areaUnit}</p>}
            </div>}
            <p className={d.review}>{(!broad || a.residencyVerificationStatus !== "not-reviewed") && <><T>{a.residencyVerificationStatus==="verified"?"Residency relevance verified, subject to applicable requirements.":"Residency eligibility is not established."}</T> </>}<T>{a.ndaRequired?"Additional materials subject to NDA.":"Public overview; further materials subject to appropriate review."}</T></p>
            <Link className={s.textLink} href={"/projects/"+a.slug}><T>View Opportunity</T><ArrowUpRight size={16}/></Link>
          </div>
          <EnquiryPanel subject={a.name} broad={broad} explicitCta={tabbed}/>
        </article>)}
      </>:<div className={d.emptyLayout}>
        <div className={d.empty}><p className={s.eyebrow}>{broad ? <T>PRIVATE INVESTMENT OPPORTUNITIES</T> : <span><T>PRIVATE REAL ESTATE OPPORTUNITIES</T></span>}</p>
          {tabbed ? <h3><T>Private opportunities require context.</T></h3> : <h3><T>An individual conversation,</T><br/><T>before an opportunity.</T></h3>}
          {tabbed ? <><p><T>Selected opportunities are introduced based on investor profile, investment objectives, transaction readiness and availability.</T></p><p><T>Some opportunities may not be publicly marketed and are shared only following an initial private conversation.</T></p>{filtered && <p><T>No public opportunities match this selection. Our team can discuss your requirements privately.</T></p>}</> : filtered ? <p><T>No public opportunities match this selection. Our team can discuss your requirements privately.</T></p> : broad ? <p><T>Private opportunities are made available based on investor profile, availability and qualification.</T></p> : <p><T>Selected luxury and qualifying real estate opportunities are presented based on availability, client profile and applicable requirements.</T></p>}
          <EnquiryButton kind={broad ? "general" : "real-estate"} className={s.textLink}><T>{tabbed?(broad?"INVESTMENT ENQUIRY":"REAL ESTATE ENQUIRY"):(broad ? "Request Investment Information" : "Request Real Estate Information")}</T><ArrowUpRight size={16}/></EnquiryButton>
        </div><EnquiryPanel broad={broad} explicitCta={tabbed}/>
      </div>}
    </div>
  </>
}
function EnquiryPanel({subject, broad = false, explicitCta = false}:{subject?:string; broad?:boolean; explicitCta?:boolean}) {
  const {t} = useLanguage()
  return <aside className={d.enquiry} aria-label={subject?subject+" · "+t("Enquiry"):t(broad?"Investment Enquiry":"Real Estate Enquiry")}>
    <h3><T>{broad ? "Investment Enquiry" : "Real Estate Enquiry"}</T></h3>
    <p><T>{broad ? "Speak with Marqués about your investment objectives and selected opportunities in Costa Rica." : "Speak with Marqués about selected real estate and investment opportunities in Costa Rica."}</T></p>
    <EnquiryButton kind={broad ? "general" : "real-estate"} subject={subject} className={d.enquire}><T>{explicitCta?(broad?"INVESTMENT ENQUIRY":"REAL ESTATE ENQUIRY"):"ENQUIRE"}</T><ArrowUpRight size={16}/></EnquiryButton>
  </aside>
}
function AssetImage({asset}:{asset:Opportunity}) {
  const {t} = useLanguage()
  const images=[...new Set([asset.primaryImage,...asset.gallery])]
  const [index,setIndex]=useState(0)
  return <figure className={d.media}>
    <SeoImage src={images[index]} alt={asset.name+" · "+t("Architectural rendering")+(images.length>1?" "+(index+1):"")} style={{objectPosition:asset.imagePosition}} loading="lazy" sizes="(max-width: 767px) 100vw, 40vw"/>
    <figcaption><T>Architectural rendering</T></figcaption>
    {images.length>1&&<div className={d.gallery}>
      <button type="button" aria-label={t("Previous image")+" · "+asset.name} onClick={()=>setIndex((index+images.length-1)%images.length)}><ArrowLeft size={18}/></button>
      <span aria-live="polite">{index+1} / {images.length}</span>
      <button type="button" aria-label={t("Next image")+" · "+asset.name} onClick={()=>setIndex((index+1)%images.length)}><ArrowRight size={18}/></button>
    </div>}
  </figure>
}
