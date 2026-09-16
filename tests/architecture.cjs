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
  const {filterOpportunities} = load("lib/opportunities/filters")
  const assets = await repository.getOpportunities()
  assert.equal(assets.length, 2)
  assert.equal((await repository.getOpportunities("real-estate")).length, 0)
  assert.equal((await repository.getFeaturedOpportunities()).length, 2)
  assert.equal((await repository.getOpportunityBySlug("plaza-los-mangos")).name, "Plaza Los Mangos")
  assert.equal(await repository.getOpportunityBySlug("missing"), null)
  assets[0].name = "test-only mutation"
  assert.equal((await repository.getOpportunities())[0].name, "Plaza Los Mangos")
  const filters = {inventory:"other-investments",location:"",category:"",relevance:"",sort:"featured"}
  assert.equal(filterOpportunities(await repository.getOpportunities(), filters).length, 2)
  assert.equal(filterOpportunities(assets, {...filters,relevance:"under-verification"}).length, 0)
  assert.equal(filterOpportunities(assets, {...filters,relevance:"potentially-relevant"}).length, 0)
  const local = load("lib/opportunities/local").localOpportunityRepository
  const original = local.list
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
  const {createMetadata,organizationSchema,websiteSchema,imageSchema} = load("lib/seo")
  const metadata = Object.values(pageSeo).map(options => createMetadata(options))
  assert.equal(new Set(metadata.map(item => item.title.absolute)).size, 7)
  assert.equal(new Set(metadata.map(item => item.description)).size, 7)
  for (const item of metadata) {
    assert(item.alternates.canonical.startsWith("https://marquescr.com/"))
    assert.equal(item.alternates.languages, undefined)
    assert.equal(item.openGraph.title, item.title.absolute)
    assert.equal(item.twitter.description, item.description)
  }
  assert.equal(websiteSchema().publisher["@id"], organizationSchema()["@id"])
  assert.equal(imageSchema("/costa-rica-coast.jpg").width, 1800)
  const robots = load("app/robots").default
  const sitemap = load("app/sitemap").default
  const previousEnvironment = process.env.VERCEL_ENV
  try {
    process.env.VERCEL_ENV = "production"
    assert(robots().rules.some(rule => rule.userAgent === "OAI-SearchBot" && rule.allow === "/"))
    assert(sitemap().every(item => !item.lastModified && !item.url.includes("/api/")))
    process.env.VERCEL_ENV = "preview"
    assert.equal(robots().rules.disallow, "/")
    assert.equal(sitemap().length, 0)
  } finally {
    if (previousEnvironment === undefined) delete process.env.VERCEL_ENV
    else process.env.VERCEL_ENV = previousEnvironment
  }
  console.log("Architecture and SEO contracts, visibility, filters, forms, documents, locales, errors and preview crawl policies passed.")
})().catch(error => { console.error(error); process.exitCode = 1 })
