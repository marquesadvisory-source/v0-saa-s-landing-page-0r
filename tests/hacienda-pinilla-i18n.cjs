const assert = require("node:assert/strict")
const fs = require("node:fs")
const path = require("node:path")

const root = path.resolve(__dirname, "..")
const read = name => fs.readFileSync(path.join(root, name), "utf8")
const pinilla = "app/(english)/real-estate/hacienda-pinilla"
const page = read(pinilla + "/page.tsx")
const cards = read(pinilla + "/featured-properties.tsx")
const gallery = read(pinilla + "/property-gallery.tsx")
const raw = read(pinilla + "/pinilla-translations.ts")
const seo = read("lib/international-seo.ts")
const localeRouter = read("app/[locale]/[[...path]]/page.tsx")
const sitemap = read("app/sitemap.ts")

const dictionary = JSON.parse(raw.split("= {")[1].split("\n\nconst index")[0].replace(/^/, "{"))
assert.ok(Object.keys(dictionary).length >= 120, "Complete editorial translation dictionary required")
for (const [key, values] of Object.entries(dictionary)) {
  assert.ok(values.length === 3 && values.every(value => typeof value === "string" && value.trim().length), "Incomplete es/fr/zh-Hans translation: " + key)
}
const keys = [...(page + "\n" + cards + "\n" + gallery).matchAll(/\bt\("((?:[^"\\]|\\.)*)"\)/g)].map(match => match[1])
for (const key of keys) assert.ok(dictionary[key], "Missing localized string: " + key)

assert.equal([...page.matchAll(/51-\d+\.jpg/g)].length, 28, "Casa Ensueño requires all 28 gallery photos")
assert.equal([...page.matchAll(/64-\d+\.jpg/g)].length, 23, "Villa Senderos requires all 23 gallery photos")
for (const name of ["Casa Ensueño", "Villa Senderos", "El Jaguar", "Las Lapas"]) {
  assert.ok(page.includes(`name: "${name}"`), name + " missing")
}
assert.ok(page.includes('price: "$3,125,000"'))
assert.ok(page.includes('price: "$999,000"'))
assert.ok(page.includes("FeaturedPropertyCards opportunities={localizedOpportunities} locale={locale}"))
assert.ok(cards.includes("<dialog"), "Property details must remain in modals")
assert.ok(cards.includes('pinillaText'), "Dialog controls must be translated")
assert.ok(page.includes('pinillaImageAlt'), "Gallery photo alts must be localized")
assert.ok(page.includes("JsonLd"), "Page needs structured data")
assert.ok(page.includes('webPageSchema'), "Page needs CollectionPage structured data")
assert.ok(page.includes('"ItemList"'), "The inventory must be represented in JSON-LD")

assert.ok(seo.includes('"/real-estate/hacienda-pinilla"'), "Localized metadata missing")
assert.ok(localeRouter.includes('HaciendaPinillaPage locale={locale}'), "Translated pages must be server-rendered in their locale")
assert.ok(sitemap.includes("localizedRoutes"), "Sitemap must include the localized route allowlist")
for (const key of ["en:", "es:", "fr:", '"zh-cn":']) assert.ok(seo.includes(key))
assert.ok(!/href=\{?["'`]https:\/\/www\.haciendapinilla\.com\/real-estate/.test(page + cards), "Buyer links must not redirect to the developer")
assert.ok(read("app/(english)/layout.tsx").includes("isNonProductionDeployment"), "Previews must be noindex")
console.log("Hacienda Pinilla: four-language, gallery, SEO and referral route checks passed.")
