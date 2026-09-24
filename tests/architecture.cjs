const assert = require("node:assert/strict")
const fs = require("node:fs")
const path = require("node:path")
const vm = require("node:vm")
const ts = require("typescript")
const root = path.resolve(__dirname, "..")
const cache = new Map()

// Exercise pure TypeScript and server repositories outside React's module loader.
function load(relative) {
  const filename = path.resolve(root, relative.endsWith(".ts") ? relative : relative + ".ts")
  if (cache.has(filename)) return cache.get(filename).exports
  const module = { exports: {} }
  cache.set(filename, module)
  const output = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText
  const localRequire = name => {
    if (name === "server-only") return {}
    if (name.startsWith("@/")) return load(name.slice(2))
    if (name.startsWith(".")) return load(path.resolve(path.dirname(filename), name))
    return require(name)
  }
  vm.runInThisContext("(function(require,module,exports){" + output + "\n})", {filename})(localRequire, module, module.exports)
  return module.exports
}

;(async () => {
  const repository = load("lib/opportunities/repository")
  const publication = load("lib/opportunities/publication")
  const {filterOpportunities} = load("lib/opportunities/filters")
  const assets = await repository.getOpportunities()
  assert.equal(assets.length, 2)
  assert.equal((await repository.getOpportunities("real-estate")).length, 0)
  assert.equal((await repository.getPublicRealEstateOpportunities()).length, 0)
  assert.equal((await repository.getFeaturedOpportunities()).length, 2)
  assert.equal((await repository.getOpportunityBySlug("plaza-los-mangos")).name, "Plaza Los Mangos")
  assert.equal(await repository.getOpportunityBySlug("missing"), null)
  assets[0].name = "test-only mutation"
  assert.equal((await repository.getOpportunities())[0].name, "Plaza Los Mangos")
  const filters = {inventory:"other-investments",location:"",category:"",relevance:"",sort:"featured"}
  assert.equal(filterOpportunities(await repository.getOpportunities(), filters).length, 2)
  assert.equal(filterOpportunities(assets, {...filters,relevance:"under-verification"}).length, 0)
  assert.equal(filterOpportunities(assets, {...filters,relevance:"potentially-relevant"}).length, 0)
  const approvedProperty = {inventory:"real-estate",publiclyListed:true,confidential:false,status:"available",slug:"test-approved-property",id:"test-property",propertyType:"Luxury Homes",name:"Test property",location:"Test location",category:"Residential",primaryImage:"/test.jpg",gallery:[],shortDescription:"Test-only fixture",residencyRelevance:"not-established",residencyVerificationStatus:"not-reviewed",ndaRequired:false,featured:false,publicStatus:"Available"}
  assert.deepEqual(load("lib/opportunities/real-estate").realEstateOpportunities, [], "No sample inventory belongs in the production data source")
  assert.equal(publication.opportunityDetailPath(approvedProperty), "/real-estate/test-approved-property")
  assert.equal(publication.opportunityDetailPath(assets[0]), "/projects/plaza-los-mangos")
  assert.equal(publication.opportunityDetailPath(assets[1]), "/projects/decima-avenida")
  assert.equal(publication.publicRealEstateOpportunities([approvedProperty]).length, 1)
  for (const ineligible of [{publiclyListed:false},{confidential:true},{status:"private"},{status:"closed"},{inventory:"other-investments"}]) {
    assert.equal(publication.publicRealEstateOpportunities([{...approvedProperty,...ineligible}]).length, 0)
  }
  const discoverySource = fs.readFileSync(path.join(root, "components/opportunity-discovery.tsx"), "utf8")
  const realEstatePageSource = fs.readFileSync(path.join(root, "app/real-estate/page.tsx"), "utf8")
  const detailRouteSource = fs.readFileSync(path.join(root, "app/real-estate/[slug]/page.tsx"), "utf8")
  assert(discoverySource.includes("opportunityDetailPath(a)"), "Opportunity cards must use asset-class-specific detail routes")
  assert(discoverySource.includes("Property opportunities are introduced according to availability and client requirements."), "Empty real-estate state must describe availability and client requirements")
  assert(realEstatePageSource.includes("getPublicRealEstateOpportunities()") && !realEstatePageSource.includes("approvedProperties.length > 0"), "Property discovery remains visible with zero approved records")
  assert(detailRouteSource.includes("generateStaticParams") && detailRouteSource.includes("generateMetadata") && detailRouteSource.includes('webPageSchema(seo, "WebPage")'), "Property detail pages need record-based static params, metadata, and WebPage schema")
  assert(!/Offer|Product|FinancialProduct|InvestmentFund/.test(detailRouteSource), "Property detail schema must not invent offer or product structures")
  const {translate} = load("lib/translations")
  for (const [locale, expected] of [["es","Las oportunidades inmobiliarias se presentan según su disponibilidad y las necesidades del cliente."],["fr","Les opportunités immobilières sont présentées selon leur disponibilité et les besoins du client."],["zh-cn","房地产机会将根据可获得情况及客户需求予以介绍。"]]) {
    assert.equal(translate("Property opportunities are introduced according to availability and client requirements.", locale), expected)
  }
  const local = load("lib/opportunities/local").localOpportunityRepository
  const original = local.list
  try {
    local.list = async () => [...assets, {...approvedProperty, publiclyListed:false}, approvedProperty]
    assert.equal((await repository.getOpportunities()).length, 3, "Unapproved residential data must not leak into general opportunity feeds")
    assert.equal((await repository.getOpportunities("real-estate")).length, 1)
    assert.equal((await repository.getPublicRealEstateOpportunities()).length, 1)
  } finally { local.list = original }
  try {
    local.list = async () => assets.map(asset => ({...asset,status:"private"}))
    assert.equal((await repository.getOpportunities()).length, 0)
    assert.equal(await repository.getOpportunityBySlug("plaza-los-mangos"), null)
    local.list = async () => assets.map(asset => ({...asset,confidential:true}))
    assert.equal((await repository.getFeaturedOpportunities()).length, 0)
  } finally { local.list = original }
  const {getResidenceFactSheet} = load("lib/documents/index")
  for (const locale of ["en","es","fr","zh-cn"]) {
    const sheet = getResidenceFactSheet(locale.toUpperCase())
    assert.equal(sheet.language, locale)
    assert(fs.existsSync(path.join(root,"public",sheet.href)))
  }
  assert.equal(getResidenceFactSheet("unknown").language, "en")
  const {forms,getEnquiryForm,formIntent} = load("lib/forms/config")
  assert.equal(Object.keys(forms).length, 3)
  assert.equal(getEnquiryForm(formIntent.privateConsultation).name, "General Enquiry")
  assert.equal(getEnquiryForm(formIntent.realEstateEnquiry).name, "Real Estate Enquiry")
  assert(getEnquiryForm("real-estate").publicUrl.includes("MAIPrivateConsultation"))
  const {localizedValue} = load("lib/i18n/config")
  assert.equal(localizedValue({en:"approved"}, "fr", "fallback"), "approved")
  const {apiOperation} = load("lib/api/server")
  const failure = await apiOperation(async () => {throw Error("private-provider-detail")})
  assert.equal(failure.success, false)
  assert(!JSON.stringify(failure).includes("private-provider-detail"))
  assert.deepEqual(await apiOperation(async () => []), {success:true,data:[]})
  const {pageSeo} = load("lib/page-seo")
  const {absoluteUrl,createMetadata,organizationSchema,websiteSchema,imageSchema,webPageSchema} = load("lib/seo")
  const metadata = Object.values(pageSeo).map(options => createMetadata(options))
  assert.equal(new Set(metadata.map(item => item.title.absolute)).size, Object.keys(pageSeo).length)
  assert.equal(new Set(metadata.map(item => item.description)).size, Object.keys(pageSeo).length)
  for (const item of metadata) {
    assert(/^https:\/\/marquescr\.com(?:\/|$)/.test(item.alternates.canonical))
    assert.equal(item.alternates.languages, undefined)
    assert.equal(item.openGraph.title, item.title.absolute)
    assert.equal(item.twitter.description, item.description)
  }
  const investmentPage = fs.readFileSync(path.join(root, "app/investments/page.tsx"), "utf8")
  const projectsPage = fs.readFileSync(path.join(root, "app/projects/page.tsx"), "utf8")
  const investmentExperience = fs.readFileSync(path.join(root, "app/investments/investments-experience.tsx"), "utf8")
  assert(!investmentPage.includes("opportunityListSchema"), "/investments must not own the named opportunities ItemList")
  assert(!investmentPage.includes("OpportunityDiscovery"), "/investments must not duplicate the project catalogue")
  assert(!investmentExperience.includes("Plaza Los Mangos") && !investmentExperience.includes("Décima Avenida"), "/investments copy must not name the selected opportunities")
  assert(projectsPage.includes("opportunityListSchema") && projectsPage.includes("opportunities.map"), "/projects remains the primary selected-opportunities list")
  assert(pageSeo["/investments"].title !== "Institutional Opportunities")
  assert.equal(websiteSchema().publisher["@id"], organizationSchema()["@id"])
  assert.equal(imageSchema("/costa-rica-coast.jpg").width, 1800)
  assert.equal(absoluteUrl("/"), "https://marquescr.com")
  const pageSchema = webPageSchema({title:"Test",description:"Test page",path:"/test"})
  assert.equal(pageSchema.publisher["@id"], organizationSchema()["@id"])
  assert.equal(pageSchema.about["@id"], organizationSchema()["@id"])
  const frameworkCopy = load("app/investment-framework/framework-copy")
  assert(frameworkCopy.frameworkCopy["How Marqués Evaluates Real Asset Opportunities"])
  for (const translation of frameworkCopy.frameworkCopy["How Marqués Evaluates Real Asset Opportunities"]) assert(translation.length > 0)
  const languageProvider = fs.readFileSync(path.join(root, "components/language-provider.tsx"), "utf8")
  assert(languageProvider.match(/translatedPages\s*=\s*\[[^\]]*"\/services"/s), "/services must update the selected document language")
  assert(!languageProvider.match(/translatedPages\s*=\s*\[[^\]]*"\/privacy"/s), "/privacy remains intentionally English-only")
  assert(/document\.documentElement\.lang\s*=\s*translatedPages\.includes\(pathname\)/.test(languageProvider), "translated routes must set the document language")
  assert(/locale\s*===\s*"zh-cn"\s*\?\s*"zh-Hans"\s*:\s*locale/.test(languageProvider), "Simplified Chinese must use the zh-Hans document language")
  const {resolveBrowserLocale} = load("lib/i18n/browser-locale")
  assert.equal(resolveBrowserLocale(null, ["es-CR", "en-US"]), "es")
  assert.equal(resolveBrowserLocale(null, ["fr-FR", "en-US"]), "fr")
  assert.equal(resolveBrowserLocale(null, ["zh-CN", "en-US"]), "zh-cn")
  assert.equal(resolveBrowserLocale(null, ["zh-TW", "en-US"]), "en")
  assert.equal(resolveBrowserLocale("fr", ["es-CR"]), "fr", "stored language must take precedence over browser locale")
  const robots = load("app/robots").default
  const sitemap = load("app/sitemap").default
  const previousEnvironment = process.env.VERCEL_ENV
  try {
    process.env.VERCEL_ENV = "production"
    const productionRobots = robots()
    assert(productionRobots.rules.some(rule => rule.userAgent === "*" && rule.allow === "/"))
    assert(productionRobots.rules.some(rule => rule.userAgent === "OAI-SearchBot" && rule.allow === "/"))
    assert(!productionRobots.rules.some(rule => rule.disallow === "/"))
    assert.equal(productionRobots.host, "https://marquescr.com")
    assert.equal(productionRobots.sitemap, "https://marquescr.com/sitemap.xml")
    const originalList = local.list
    const productionSitemap = await sitemap()
    assert(productionSitemap.length > 0)
    assert(productionSitemap.every(item => /^https:\/\/marquescr\.com(?:\/|$)/.test(item.url)))
    assert(productionSitemap.every(item => !item.lastModified && !item.url.includes("/api/")))
    assert(!productionSitemap.some(item => item.url.includes("/real-estate/")), "Empty approved property data must not create invented detail URLs")
    try {
      local.list = async () => [approvedProperty]
      const approvedSitemap = await sitemap()
      assert(approvedSitemap.some(item => item.url === "https://marquescr.com/real-estate/test-approved-property"), "Approved public properties must add their detail URLs")
      local.list = async () => [{...approvedProperty, publiclyListed:false}]
      const unapprovedSitemap = await sitemap()
      assert(!unapprovedSitemap.some(item => item.url.includes("/real-estate/")), "Unapproved records must not enter the sitemap")
    } finally { local.list = originalList }
    process.env.VERCEL_ENV = "preview"
    const previewRules = robots().rules
    assert(Array.isArray(previewRules))
    assert(previewRules.some(rule => rule.userAgent === "*" && rule.allow === "/"))
    assert(previewRules.some(rule => rule.userAgent === "OAI-SearchBot" && rule.allow === "/"))
    assert.equal(robots().sitemap, undefined)
    assert.equal((await sitemap()).length, 0)
    delete process.env.VERCEL_ENV
    assert(robots().rules.some(rule => rule.userAgent === "*" && rule.allow === "/"), "local crawlers must be able to read the noindex response")
    assert.equal((await sitemap()).length, 0)
    const layout = fs.readFileSync(path.join(root, "app/layout.tsx"), "utf8")
    assert(layout.includes("index: !isNonProductionDeployment()") && layout.includes("follow: !isNonProductionDeployment()"))
  } finally {
    if (previousEnvironment === undefined) delete process.env.VERCEL_ENV
    else process.env.VERCEL_ENV = previousEnvironment
  }
  console.log("Architecture and SEO contracts, visibility, filters, forms, documents, locales, errors and preview crawl policies passed.")
})().catch(error => { console.error(error); process.exitCode = 1 })
