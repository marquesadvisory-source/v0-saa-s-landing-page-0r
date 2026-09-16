export type PaymentMethod = "bac-payment-link" | "international-wire"
export type PaymentStatus = "pending" | "requires-action" | "processing" | "succeeded" | "failed" | "cancelled"
export interface PaymentIntent {
  id: string
  method: PaymentMethod
  status: PaymentStatus
  amountMinor: number
  currency: string
}
export interface PaymentRequest {
  engagementId: string
  idempotencyKey: string
}
// Implementations belong on the server. Amounts must come from an authorized engagement, never client input.
export interface PaymentProvider {
  createIntent(request: PaymentRequest): Promise<PaymentIntent>
  getIntent(id: string): Promise<PaymentIntent | null>
}
