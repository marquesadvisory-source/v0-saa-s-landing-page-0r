const assert = require("node:assert/strict")
const fs = require("node:fs")
const path = require("node:path")
const vm = require("node:vm")
const ts = require("typescript")
const root = path.resolve(__dirname, "..")
const cache = new Map()
function load(relative) {
  const file = path.resolve(root, relative.endsWith(".ts") ? relative : relative + ".ts")
  if (cache.has(file)) return cache.get(file).exports
  const module = { exports: {} }
  cache.set(file, module)
  const code = ts.transpileModule(fs.readFileSync(file, "utf8"), {compilerOptions: {module: ts.ModuleKind.CommonJS}}).outputText
  vm.runInThisContext("(function(require,module,exports){" + code + "\n})", {filename: file})(
    name => name.startsWith(".") ? load(path.resolve(path.dirname(file), name)) : require(name), module, module.exports,
  )
  return module.exports
}
const { headerNavigation } = load("lib/header-navigation")
const { footerNavigation } = load("lib/footer-navigation")
const { translate } = load("lib/translations")
const residenceNav = fs.readFileSync(path.join(root, "components/residency-nav.tsx"), "utf8")
assert.deepEqual(headerNavigation.map(item => item.label), ["The Firm", "Private Clients", "Investments", "Capital Partners", "Contact"])
assert.deepEqual(headerNavigation.map(item => item.href ?? null), ["/about", null, null, "/capital-partners", "/contact"])
assert.deepEqual(headerNavigation.find(item => item.id === "private-clients").groups.map(group => group.links.map(link => link.href)), [
  ["/residency", "/real-estate", "/services"],
])
assert.deepEqual(headerNavigation.find(item => item.id === "investments").groups.map(group => group.links.map(link => link.href)), [
  ["/investments", "/investment-framework", "/projects"],
])
let links = 0
// Some labels are the same in French as in English.
const identical = new Set(["Contact", "Services"])
function check(item) {
  if (item.label && !identical.has(item.label)) for (const locale of ["es", "fr", "zh-cn"]) assert.notEqual(translate(item.label, locale), item.label, `${locale}: ${item.label}`)
  if (item.href) {
    const [route, anchor] = item.href.split("#")
    const directory = path.join(root, "app", route)
    const file = path.join(directory, "page.tsx")
    assert(fs.existsSync(file), `Missing route: ${item.href}`)
    if (anchor) {
      const routeSource = fs.readdirSync(directory).filter(name => name.endsWith(".tsx")).map(name => fs.readFileSync(path.join(directory, name), "utf8")).join("\n")
      assert(routeSource.includes(`id="${anchor}"`), `Missing anchor: ${item.href}`)
    }
    links++
  }
  for (const group of item.groups ?? []) check(group)
  for (const link of item.links ?? []) check(link)
}
for (const item of headerNavigation) check(item)
for (const group of footerNavigation) check(group)
const homeSource = fs.readFileSync(path.join(root, "app/page.tsx"), "utf8")
for (const href of ["/residency", "/real-estate", "/services", "/investments", "/projects", "/capital-partners", "/contact", "/institutional-inquiry"]) {
  assert(homeSource.includes(`href="${href}"`), `Homepage is missing the ${href} pathway`)
}
assert(!homeSource.includes("Plaza Los Mangos ") && !homeSource.includes("Décima Avenida </T>"), "Homepage should not reproduce named opportunity cards")
assert(footerNavigation.some(group => group.links.some(link => link.href === "/privacy")), "Privacy access must remain in the footer")
console.log(`Header navigation: ${links} existing destinations; EN/ES/FR/ZH-CN label coverage passed.`)
assert(residenceNav.includes('["Real Estate & Residency", "/residency/real-estate"]'), "Residence contextual label must keep its distinct route")
assert.equal(translate("Real Estate & Residency", "es"), "Bienes raíces y residencia")
assert.equal(translate("Real Estate & Residency", "fr"), "Immobilier et résidence")
assert.equal(translate("Real Estate & Residency", "zh-cn"), "房地产与居留")
for (const key of [
  "YOUR COSTA RICAN PARTNER FOR", "RESIDENCE BY INVESTMENT", "AND STRATEGIC REAL ASSETS",
  "Private advisory, co-investment and project structuring through one trusted local relationship.",
  "Explore Residence by Investment", "Explore Investments",
]) for (const locale of ["es", "fr", "zh-cn"]) assert.notEqual(translate(key, locale), key, `Hero translation missing: ${locale}: ${key}`)
console.log("Approved hero translation coverage passed.")
for (const key of [
  "Private Clients", "Residence by Investment", "Luxury Real Estate", "Private Client Services",
  "Investments & Capital", "Strategic Real Assets", "Selected Opportunities", "Local context.", "Investment Perspective",
  "Considered capital.", "Begin Institutional Inquiry", "Contact / Legal", "Private Clients and Investments",
  "Contemporary Costa Rican residence with natural materials and an open interior",
  "Mixed-use urban district concept in Costa Rica", "Costa Rican mixed-use real asset concept rendering",
]) for (const locale of ["es", "fr", "zh-cn"]) assert.notEqual(translate(key, locale), key, `Architecture translation missing: ${locale}: ${key}`)
console.log("Homepage/footer architecture translation coverage passed.")
