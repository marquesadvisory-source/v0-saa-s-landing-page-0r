export type ApiErrorCode = "INVALID_REQUEST" | "UNAUTHORIZED" | "FORBIDDEN" | "NOT_FOUND" | "UNAVAILABLE" | "INTERNAL_ERROR"
export interface ApiError { code: ApiErrorCode; message: string }
export type ApiResult<T> = { success: true; data: T } | { success: false; error: ApiError }
export type ResourceState<T> =
  | { status: "loading" }
  | { status: "empty" }
  | { status: "success"; data: T }
  | { status: "error"; error: ApiError }
