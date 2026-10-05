const assert = require("node:assert/strict")
const fs = require("node:fs")
const path = require("node:path")
const vm = require("node:vm")
const ts = require("typescript")
const root = path.resolve(__dirname, "..")
const file = path.join(root, "lib/partner-enquiry.ts")
const compiledModule = { exports: {} }
const output = ts.transpileModule(fs.readFileSync(file, "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText
vm.runInThisContext("(function(require,module,exports){" + output + "\n})", { filename: file })(
  name => name === "server-only" ? {} : require(name), compiledModule, compiledModule.exports,
)

const { createPartnerEnquiryEmail, getPartnerEnquiryDeliveryConfig, sendPartnerEnquiryEmail, validatePartnerEnquiry } = compiledModule.exports
const base = {
  locale: "en",
  enquiryType: "I have a client interested in Costa Rica residence",
  salutation: "Ms",
  firstName: "Ana",
  lastName: "Müller",
  phone: "+41 79 555 1234",
  email: "ana@example.com",
  companyLocation: "Switzerland",
  companyName: "",
  companyPosition: "",
  question: "",
  privacyConsent: true,
}

const valid = validatePartnerEnquiry(base)
assert.equal(valid.ok, true, "valid client enquiry is accepted")
const fallback = getPartnerEnquiryDeliveryConfig({ RESEND_API_KEY: "test-key-not-real" })
assert.equal(fallback.to, "info@marquescr.com", "current recipient fallback remains the general inbox")
assert.equal(fallback.from, "Marqués Partner Network <notifications@marquescr.com>", "technical sender fallback remains unchanged")
assert.equal(getPartnerEnquiryDeliveryConfig({ RESEND_API_KEY: "test-key-not-real", PARTNER_ENQUIRY_TO: "partners@marquescr.com" }).to, "partners@marquescr.com", "future partner inbox can be configured without code changes")
assert.equal(getPartnerEnquiryDeliveryConfig({ RESEND_API_KEY: "test-key-not-real", PARTNER_ENQUIRY_TO: "bad recipient" }), null, "invalid recipient configuration is rejected")
assert.equal(getPartnerEnquiryDeliveryConfig({ RESEND_API_KEY: "test-key-not-real", PARTNER_ENQUIRY_FROM: "bad\r\nFrom: injected@example.com" }), null, "header injection in sender configuration is rejected")
assert.equal(getPartnerEnquiryDeliveryConfig({}), null, "missing provider credentials are handled at request time")
assert.equal(validatePartnerEnquiry({ ...base, email: "bad" }).ok, false, "invalid email is rejected")
assert.equal(validatePartnerEnquiry({ ...base, firstName: "" }).ok, false, "missing required field is rejected")
assert.equal(validatePartnerEnquiry({ ...base, privacyConsent: false }).ok, false, "missing privacy consent is rejected")
assert.equal(validatePartnerEnquiry({ ...base, phone: "x".repeat(61) }).ok, false, "field length is bounded")
assert.equal(validatePartnerEnquiry({ ...base, website: "filled by a bot" }).issue, "honeypot", "honeypot is silently identified")
assert.equal(validatePartnerEnquiry(null).issue, "malformed", "malformed JSON shapes are rejected")

const question = validatePartnerEnquiry({ ...base, enquiryType: "I have a specific question", question: "What documents are needed?" })
assert.equal(question.ok, true, "specific-question submission is valid")
assert.equal(validatePartnerEnquiry({ ...base, enquiryType: "I have a specific question", question: "" }).ok, false, "specific question is required for its option")
for (const locale of ["en", "es", "fr", "zh-cn"]) assert.equal(validatePartnerEnquiry({ ...base, locale }).ok, true)

const email = createPartnerEnquiryEmail(valid.value, new Date("2026-09-30T12:00:00.000Z"))
assert.equal(email.from, "Marqués Partner Network <notifications@marquescr.com>")
assert.deepEqual(email.to, ["info@marquescr.com"])
assert.equal(email.reply_to, base.email)
assert.equal(email.subject, "Partner conversation request — Marqués Partner Network")
assert.match(email.text, /Last Name:\nMüller/)
assert.match(email.text, /Telephone \/ WhatsApp:\n\+41 79 555 1234/)
assert.match(email.text, /Submission language:\nEN/)
assert.match(email.text, /Timestamp \(Costa Rica\):\nSeptember 30, 2026 at 6:00:00 AM/)
assert.match(email.text, /UTC reference:\n2026-09-30T12:00:00\.000Z/)
const spanishEmail = createPartnerEnquiryEmail({ ...valid.value, locale: "es" }, new Date("2026-09-30T12:00:00.000Z"))
assert.match(spanishEmail.text, /Timestamp \(Costa Rica\):\n30 de septiembre de 2026 a las 6:00:00 a\. m\./)
assert.doesNotMatch(email.text, /Company Name|Company Position|undefined|null/)
assert.doesNotMatch(email.html, /Company Name|Company Position/)
const escaped = createPartnerEnquiryEmail({ ...valid.value, firstName: "<Ana & Co>" })
assert.match(escaped.html, /&lt;Ana &amp; Co&gt;/)
const futureInboxEmail = createPartnerEnquiryEmail(valid.value, new Date("2026-09-30T12:00:00.000Z"), { to: "partners@marquescr.com", from: fallback.from })
assert.deepEqual(futureInboxEmail.to, ["partners@marquescr.com"], "configured partner inbox is used by the email payload")

;(async () => {
  let request
  const accepted = await sendPartnerEnquiryEmail(email, "test-key-not-real", async (url, options) => {
    request = { url, options }
    return new Response(null, { status: 202 })
  })
  assert.equal(accepted, true, "provider acceptance is treated as successful delivery")
  assert.equal(request.url, "https://api.resend.com/emails")
  assert.equal(request.options.headers.Authorization, "Bearer test-key-not-real")
  assert.deepEqual(JSON.parse(request.options.body), email)
  assert.equal(await sendPartnerEnquiryEmail(email, "test-key-not-real", async () => new Response(null, { status: 500 })), false)

  const client = fs.readFileSync(path.join(root, "app/(english)/partners/partners-experience.tsx"), "utf8")
  assert(client.includes('fetch("/api/partner-enquiry"'), "the intake posts to the same-origin route")
  assert(!client.includes("mailto:info@marquescr.com"), "Partner Enquiry no longer opens an email application")
  assert(client.includes("submitting.current"), "client-side duplicate submission guard remains in place")
  assert(client.includes('mailto:presidencia@marquescr.com'), "the separate Strategic Partnerships route is preserved")
  const route = fs.readFileSync(path.join(root, "app/api/partner-enquiry/route.ts"), "utf8")
  assert(route.includes("getPartnerEnquiryDeliveryConfig()") && route.includes('code: "DELIVERY_UNAVAILABLE"'), "missing delivery configuration returns a controlled request-time error")
  const envExample = fs.readFileSync(path.join(root, ".env.example"), "utf8")
  for (const setting of ["RESEND_API_KEY=", "PARTNER_ENQUIRY_TO=info@marquescr.com", "PARTNER_ENQUIRY_FROM=Marqués Partner Network <notifications@marquescr.com>"]) assert(envExample.includes(setting), `example environment documents ${setting}`)
  console.log("Partner Enquiry validation, payload safety, mock Resend transport, honeypot, and client delivery contracts passed; no message was sent.")
})().catch(error => { console.error(error); process.exitCode = 1 })
