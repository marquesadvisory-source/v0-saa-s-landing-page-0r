import { NextResponse } from "next/server"
import { createPartnerEnquiryEmail, getPartnerEnquiryDeliveryConfig, sendPartnerEnquiryEmail, validatePartnerEnquiry } from "../../../lib/partner-enquiry"

export const runtime = "nodejs"

const maxBodyBytes = 16_384
const response = (body: Record<string, unknown>, status = 200) => NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } })

async function readBody(request: Request): Promise<string | null> {
  const declaredLength = Number(request.headers.get("content-length"))
  if (Number.isFinite(declaredLength) && declaredLength > maxBodyBytes) return null
  if (!request.body) return ""
  const reader = request.body.getReader()
  const chunks: Uint8Array[] = []
  let total = 0
  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    total += value.byteLength
    if (total > maxBodyBytes) {
      await reader.cancel()
      return null
    }
    chunks.push(value)
  }
  const bytes = new Uint8Array(total)
  let offset = 0
  for (const chunk of chunks) {
    bytes.set(chunk, offset)
    offset += chunk.byteLength
  }
  try { return new TextDecoder("utf-8", { fatal: true }).decode(bytes) } catch { return null }
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin")
  if (origin) {
    try {
      const originUrl = new URL(origin)
      const requestHost = request.headers.get("host")
      const forwardedProtocol = request.headers.get("x-forwarded-proto")?.split(",")[0].trim()
      const requestProtocol = forwardedProtocol ? `${forwardedProtocol}:` : new URL(request.url).protocol
      if (!requestHost || originUrl.host !== requestHost || originUrl.protocol !== requestProtocol) {
        return response({ ok: false, code: "INVALID_ORIGIN" }, 403)
      }
    } catch {
      return response({ ok: false, code: "INVALID_ORIGIN" }, 403)
    }
  }
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return response({ ok: false, code: "INVALID_CONTENT_TYPE" }, 415)
  }

  let raw: string | null
  try { raw = await readBody(request) } catch { return response({ ok: false, code: "INVALID_BODY" }, 400) }
  if (raw === null) return response({ ok: false, code: "BODY_TOO_LARGE" }, 413)
  let input: unknown
  try { input = JSON.parse(raw) } catch { return response({ ok: false, code: "INVALID_JSON" }, 400) }

  const validation = validatePartnerEnquiry(input)
  if (!validation.ok && validation.issue === "honeypot") return response({ ok: true, ignored: true })
  if (!validation.ok) return response({ ok: false, code: "INVALID_SUBMISSION" }, 400)

  const deliveryConfig = getPartnerEnquiryDeliveryConfig()
  if (!deliveryConfig) return response({ ok: false, code: "DELIVERY_UNAVAILABLE" }, 503)
  try {
    const email = createPartnerEnquiryEmail(validation.value, new Date(), deliveryConfig)
    if (!await sendPartnerEnquiryEmail(email, deliveryConfig.apiKey)) return response({ ok: false, code: "DELIVERY_FAILED" }, 502)
    return response({ ok: true })
  } catch {
    return response({ ok: false, code: "DELIVERY_FAILED" }, 502)
  }
}
