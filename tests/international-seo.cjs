const assert = require("node:assert/strict")
const fs = require("node:fs")
const path = require("node:path")
const vm = require("node:vm")
const ts = require("typescript")

const root = path.resolve(__dirname, "..")
const read = relative => fs.readFileSync(path.join(root, relative), "utf8")
const cache = new Map()

function load(relative) {
  const filename = path.resolve(root, relative.endsWith(".ts") ? relative : `${relative}.ts`)
  if (cache.has(filename)) return cache.get(filename).exports
  const module = { exports: {} }
  cache.set(filename, module)
  const output = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText
  const localRequire = name => {
    if (name.startsWith("@/")) return load(name.slice(2))
    if (name.startsWith(".")) return load(path.resolve(path.dirname(filename), name))
    return require(name)
  }
  vm.runInThisContext(`(function(require,module,exports){${output}\n})`, { filename })(localRequire, module, module.exports)
  return module.exports
}

function translationEntries() {
  const entries = new Map()
  for (const file of fs.readdirSync(path.join(root, "lib")).filter(name => name.endsWith("-translations.ts") || name === "translations.ts")) {
    const source = ts.createSourceFile(file, read(path.join("lib", file)), ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
    const visit = node => {
      if (ts.isVariableDeclaration(node) && node.initializer && ts.isObjectLiteralExpression(node.initializer)) {
        for (const property of node.initializer.properties) {
          if (!ts.isPropertyAssignment(property) || !(ts.isStringLiteral(property.name) || ts.isNoSubstitutionTemplateLiteral(property.name)) || !ts.isArrayLiteralExpression(property.initializer)) continue
          const values = property.initializer.elements.map(item => ts.isStringLiteral(item) || ts.isNoSubstitutionTemplateLiteral(item) ? item.text : null)
          if (values.length === 3 && values.every(Boolean)) entries.set(property.name.text, values)
        }
      }
      ts.forEachChild(node, visit)
    }
    visit(source)
  }
  const residencyText = ts.createSourceFile("residency-text.tsx", read("app/(english)/residency/residency-text.tsx"), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)
  const collectPageMessages = node => {
    if (ts.isVariableDeclaration(node) && node.name.getText(residencyText) === "messages" && node.initializer && ts.isObjectLiteralExpression(node.initializer)) {
      for (const property of node.initializer.properties) {
        if (ts.isPropertyAssignment(property) && (ts.isStringLiteral(property.name) || ts.isNoSubstitutionTemplateLiteral(property.name)) && ts.isArrayLiteralExpression(property.initializer)) {
          const values = property.initializer.elements.map(item => ts.isStringLiteral(item) || ts.isNoSubstitutionTemplateLiteral(item) ? item.text : null)
          if (values.length === 3 && values.every(Boolean)) entries.set(property.name.text, values)
        }
      }
    }
    ts.forEachChild(node, collectPageMessages)
  }
  collectPageMessages(residencyText)
  return entries
}

function residenceContentKeys() {
  const source = ts.createSourceFile("residency-content.ts", read("lib/residency-content.ts"), ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
  const strings = new Set()
  const unwrap = node => {
    while (ts.isAsExpression(node) || ts.isSatisfiesExpression(node) || ts.isParenthesizedExpression(node)) node = node.expression
    return node
  }
  const values = node => {
    node = unwrap(node)
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) strings.add(node.text)
    else if (ts.isObjectLiteralExpression(node)) for (const property of node.properties) if (ts.isPropertyAssignment(property)) values(property.initializer)
    else if (ts.isArrayLiteralExpression(node)) for (const item of node.elements) values(item)
  }
  const find = node => {
    if (ts.isVariableDeclaration(node) && node.name.getText(source) === "residencyContent" && node.initializer) values(node.initializer)
    ts.forEachChild(node, find)
  }
  find(source)
  return strings
}

function jsxTranslationKeys(directory, entries, missing) {
  for (const item of fs.readdirSync(directory, { withFileTypes: true })) {
    if (item.name === "node_modules" || item.name === ".next") continue
    const file = path.join(directory, item.name)
    if (item.isDirectory()) jsxTranslationKeys(file, entries, missing)
    else if (file.endsWith(".tsx")) {
      const source = ts.createSourceFile(file, fs.readFileSync(file, "utf8"), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)
      const visit = node => {
        if (ts.isJsxElement(node) && ts.isIdentifier(node.openingElement.tagName) && node.openingElement.tagName.text === "T") {
          for (const child of node.children) {
            let value
            if (ts.isJsxText(child)) value = child.getText(source).replace(/&amp;/g, "&").replace(/&apos;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").trim()
            else if (ts.isJsxExpression(child) && child.expression && ts.isStringLiteral(child.expression)) value = child.expression.text
            if (value && value.length > 1 && !entries.has(value)) missing.add(`${path.relative(root, file)}: ${value}`)
          }
        }
        ts.forEachChild(node, visit)
      }
      visit(source)
    }
  }
}

const entries = translationEntries()
const missing = new Set()
jsxTranslationKeys(path.join(root, "app", "(english)"), entries, missing)
jsxTranslationKeys(path.join(root, "components"), entries, missing)
assert.equal(missing.size, 0, `Missing localized T() keys:\n${[...missing].join("\n")}`)
const dynamicMissing = new Set()
for (const value of residenceContentKeys()) {
  const stages = value.includes("\n→ ") ? value.split("\n→ ") : [value]
  for (const stage of stages) if (stage.trim().length > 1 && !entries.has(stage)) dynamicMissing.add(stage)
}
assert.equal(dynamicMissing.size, 0, `Missing localized Residence content:\n${[...dynamicMissing].join("\n")}`)

const routeSource = read("lib/international-seo.ts")
for (const route of ["/", "/residency", "/residency/about-costa-rica", "/residency/real-estate", "/projects/plaza-los-mangos", "/projects/decima-avenida"]) {
  assert.ok(routeSource.includes(`"${route}"`), `Missing localized route ${route}`)
}
assert.ok(!routeSource.includes('"/privacy"'), "The approved Privacy Policy must remain English-only")
assert.match(read("lib/seo.ts"), /x-default/)
assert.match(read("lib/international-seo.ts"), /zh-Hans/)
assert.match(read("app/[locale]/layout.tsx"), /html lang=\{localeDefinitions\[locale\]\.htmlLang\}/)
assert.match(read("components/locale-link.tsx"), /localePath\(href, locale\)/)
assert.match(read("app/sitemap.ts"), /hasCompletePropertyTranslation/)
assert.match(read("lib/crawl-policy.ts"), /isNonProductionDeployment/)

const { hasCompletePropertyTranslation, localizedPropertyMetadata } = load("lib/international-seo")
const { propertyDescriptionForLocale } = load("lib/opportunities/translation")
const shortOnlyProperty = {
  inventory: "real-estate",
  id: "seo-short-description-fixture",
  slug: "seo-short-description-fixture",
  name: "Sample Property",
  location: "Test location",
  category: "Residential",
  primaryImage: "/test-property.jpg",
  gallery: [],
  shortDescription: "English short description must not leak",
  residencyRelevance: "not-established",
  residencyVerificationStatus: "not-reviewed",
  confidential: false,
  ndaRequired: false,
  featured: false,
  status: "available",
  publicStatus: "Available",
  localized: {
    name: { es: "Propiedad de prueba", fr: "Bien de test", "zh-cn": "测试房产" },
    shortDescription: {
      es: "Descripción breve traducida",
      fr: "Brève description traduite",
      "zh-cn": "已翻译的简短说明",
    },
  },
}
assert.equal("longDescription" in shortOnlyProperty, false)
assert.equal(hasCompletePropertyTranslation(shortOnlyProperty), true, "A localized short-only record has sufficient coverage when no English long description exists")
const localizedPropertyRoutes = read("app/[locale]/[[...path]]/page.tsx")
assert.match(localizedPropertyRoutes, /\.filter\(hasCompletePropertyTranslation\)/, "Only complete translations may generate localized property routes")
assert.match(localizedPropertyRoutes, /asset && hasCompletePropertyTranslation\(asset\)/, "Incomplete property translations must not receive localized metadata or page output")
assert.match(read("components/real-estate-property-detail.tsx"), /propertyDescriptionForLocale\(asset, locale\)/, "Property details must use the locale-aware description resolver")

const expectedProperties = {
  es: { name: "Propiedad de prueba", description: "Descripción breve traducida", suffix: "Bienes raíces en Costa Rica", prefix: "/es" },
  fr: { name: "Bien de test", description: "Brève description traduite", suffix: "Immobilier au Costa Rica", prefix: "/fr" },
  "zh-cn": { name: "测试房产", description: "已翻译的简短说明", suffix: "哥斯达黎加房地产", prefix: "/zh-hans" },
}
for (const [locale, expected] of Object.entries(expectedProperties)) {
  assert.equal(propertyDescriptionForLocale(shortOnlyProperty, locale), expected.description)
  assert.notEqual(propertyDescriptionForLocale(shortOnlyProperty, locale), shortOnlyProperty.shortDescription)
  const metadata = localizedPropertyMetadata(shortOnlyProperty, locale, "/real-estate/seo-short-description-fixture")
  assert.equal(metadata.description, expected.description, `${locale} metadata description must use the translated short description`)
  assert.equal(metadata.title.absolute, `${expected.name} | ${expected.suffix}`)
  assert.equal(metadata.alternates.canonical, `https://marquescr.com${expected.prefix}/real-estate/seo-short-description-fixture`)
  assert.deepEqual(metadata.alternates.languages, {
    en: "https://marquescr.com/real-estate/seo-short-description-fixture",
    es: "https://marquescr.com/es/real-estate/seo-short-description-fixture",
    fr: "https://marquescr.com/fr/real-estate/seo-short-description-fixture",
    "zh-Hans": "https://marquescr.com/zh-hans/real-estate/seo-short-description-fixture",
    "x-default": "https://marquescr.com/real-estate/seo-short-description-fixture",
  })
}

const incompleteProperty = {
  ...shortOnlyProperty,
  localized: {
    ...shortOnlyProperty.localized,
    shortDescription: { es: "Solo español", fr: "Seulement français" },
  },
}
assert.equal(hasCompletePropertyTranslation(incompleteProperty), false, "A record missing one locale must not be generated as a localized indexable property route")
console.log(`International SEO source checks passed; ${entries.size} translation keys, no missing literal UI strings.`)

async function verifyRenderedRoutes() {
  if (!process.env.INTERNATIONAL_SEO_BASE_URL) return
  const base = process.env.INTERNATIONAL_SEO_BASE_URL.replace(/\/$/, "")
  const checks = [
    { url: "/residency", lang: "en", canonical: "/residency", heading: "Become a Resident in Costa Rica", factLabel: "Key residency facts" },
    { url: "/es/residency", lang: "es", canonical: "/es/residency", heading: "Establezca su residencia en Costa Rica", factLabel: "Datos clave de residencia" },
    { url: "/fr/residency", lang: "fr", canonical: "/fr/residency", heading: "Établir sa résidence au Costa Rica", factLabel: "Repères sur la résidence" },
    { url: "/zh-hans/residency", lang: "zh-Hans", canonical: "/zh-hans/residency", heading: "在哥斯达黎加取得居留身份", factLabel: "居留关键信息" },
  ]
  for (const check of checks) {
    const response = await fetch(`${base}${check.url}`)
    assert.equal(response.status, 200, `${check.url} returned ${response.status}`)
    const html = await response.text()
    assert.match(html, new RegExp(`<html[^>]+lang="${check.lang}"`), `${check.url} has incorrect initial HTML lang`)
    assert.ok(html.includes(`rel="canonical" href="https://marquescr.com${check.canonical}"`), `${check.url} canonical mismatch`)
    assert.ok(html.includes(check.heading), `${check.url} translated heading missing from initial HTML`)
    assert.ok(html.includes(check.factLabel), `${check.url} translated fact label missing from initial HTML`)
    assert.match(html, /hrefLang="x-default"/i)
    assert.match(html, /hrefLang="zh-Hans"/i)
    assert.match(html, /name="robots" content="noindex, nofollow"/, `${check.url} Preview should remain noindex`)
    const locale = check.lang === "zh-Hans" ? "zh-cn" : check.lang
    const expectedNavHref = locale === "en" ? "/residency/real-estate" : `/${locale === "zh-cn" ? "zh-hans" : locale}/residency/real-estate`
    assert.ok(html.includes(`href="${expectedNavHref}"`), `${check.url} internal links must preserve locale`)
    const jsonLd = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
      .flatMap(match => {
        try { return JSON.parse(match[1]) } catch { return [] }
      })
    const pageSchema = jsonLd.flat().find(schema => schema && schema["@type"] === "WebPage")
    assert.ok(pageSchema, `${check.url} server-rendered WebPage schema missing`)
    assert.equal(pageSchema.url, `https://marquescr.com${check.canonical}`, `${check.url} JSON-LD URL must match its locale`)
    assert.equal(pageSchema.inLanguage, check.lang, `${check.url} JSON-LD language mismatch`)
  }
  console.log("Server-rendered EN/ES/FR/ZH-Hans routes, canonical, hreflang and Preview noindex checks passed.")
}

verifyRenderedRoutes().catch(error => {
  console.error(error)
  process.exitCode = 1
})
