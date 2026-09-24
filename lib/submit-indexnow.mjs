#!/usr/bin/env node

const endpoint = "https://api.indexnow.org/indexnow"
const host = "marquescr.com"
const origin = `https://${host}`
const key = "b043c632c05c4782af7e77211a9b6d12"
const keyLocation = `${origin}/${key}.txt`

function normalizeUrls(values) {
  if (values.length === 0) {
    throw new Error("Pass one or more explicit https://marquescr.com URLs.")
  }

  const urls = new Set()
  for (const value of values) {
    let url
    try {
      url = new URL(value)
    } catch {
      throw new Error(`Invalid URL: ${value}`)
    }

    if (url.origin !== origin || url.protocol !== "https:" || url.username || url.password) {
      throw new Error(`Only HTTPS URLs on ${host} are allowed: ${value}`)
    }
    if (url.hash) throw new Error(`URL fragments cannot be submitted: ${value}`)
    urls.add(url.href)
  }
  if (urls.size > 10_000) throw new Error("IndexNow accepts at most 10,000 unique URLs per batch.")
  return [...urls]
}

try {
  const urlList = normalizeUrls(process.argv.slice(2))
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host, key, keyLocation, urlList }),
  })
  const responseText = await response.text()
  console.log(`IndexNow HTTP ${response.status}${response.statusText ? ` ${response.statusText}` : ""}`)
  if (responseText) console.log(responseText)

  if (response.status === 200) {
    console.log(`Batch of ${urlList.length} URL(s) submitted successfully. This does not guarantee indexing.`)
  } else if (response.status === 202) {
    console.log("Submission received; key validation is still pending.")
  } else {
    const details = [400, 403, 422, 429].includes(response.status)
      ? `IndexNow rejected the batch with HTTP ${response.status}. Verify the key file, host, payload, and rate limits.`
      : `Unexpected IndexNow response: HTTP ${response.status}.`
    throw new Error(details)
  }
} catch (error) {
  console.error(`IndexNow submission failed: ${error instanceof Error ? error.message : String(error)}`)
  process.exitCode = 1
}
