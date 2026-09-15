import "server-only"
import type { ApiErrorCode, ApiResult } from "./types"

const messages: Record<ApiErrorCode, string> = {
  INVALID_REQUEST: "Please check your request.",
  UNAUTHORIZED: "Authentication is required.",
  FORBIDDEN: "This request is not permitted.",
  NOT_FOUND: "The requested resource is unavailable.",
  UNAVAILABLE: "This service is temporarily unavailable.",
  INTERNAL_ERROR: "The request could not be completed.",
}
// Never serialize exceptions, provider responses, credentials, or stack traces.
export function apiFailure(code: ApiErrorCode = "INTERNAL_ERROR"): ApiResult<never> {
  return { success: false, error: { code, message: messages[code] } }
}
export async function apiOperation<T>(operation: () => Promise<T>): Promise<ApiResult<T>> {
  try { return { success: true, data: await operation() } }
  catch { return apiFailure() }
}
