import "server-only"

export const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow"
export const INDEXNOW_HOST = "marquescr.com"
export const INDEXNOW_KEY = "b043c632c05c4782af7e77211a9b6d12"
export const INDEXNOW_KEY_LOCATION =
  `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`

const SITE_ORIGIN = `https://${INDEXNOW_HOST}`
const MAX_URLS_PER_BATCH = 10_000

export function normalizeIndexNowUrls(input: string | readonly string[]): string[] {
  const values = typeof input === "string" ? [input] : input
  if (values.length === 0) throw new Error("Provide at least one URL.")

  const urls = new Set<string>()
  for (const value of values) {
    let url: URL
    try {
      url = new URL(value)
    } catch {
      throw new Error(`Invalid URL: ${value}`)
    }

    if (url.origin !== SITE_ORIGIN || url.protocol !== "https:" || url.username || url.password) {
      throw new Error(`Only HTTPS URLs on ${INDEXNOW_HOST} are allowed: ${value}`)
    }
    if (url.hash) throw new Error(`URL fragments cannot be submitted: ${value}`)
    urls.add(url.href)
  }

  const normalized = [...urls]
  if (normalized.length > MAX_URLS_PER_BATCH) {
    throw new Error(`A batch may contain at most ${MAX_URLS_PER_BATCH} unique URLs.`)
  }
  return normalized
}

/** Explicitly call from a server-side publishing action; never from rendering or build code. */
export async function submitIndexNow(
  input: string | readonly string[],
  fetcher: typeof fetch = fetch,
): Promise<Response> {
  const urlList = normalizeIndexNowUrls(input)

  if (urlList.length === 1) {
    const requestUrl = new URL(INDEXNOW_ENDPOINT)
    requestUrl.searchParams.set("url", urlList[0])
    requestUrl.searchParams.set("key", INDEXNOW_KEY)
    requestUrl.searchParams.set("keyLocation", INDEXNOW_KEY_LOCATION)
    return fetcher(requestUrl, { method: "GET" })
  }

  return fetcher(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: INDEXNOW_HOST,
      key: INDEXNOW_KEY,
      keyLocation: INDEXNOW_KEY_LOCATION,
      urlList,
    }),
  })
}
