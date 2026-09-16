import { Phone } from "lucide-react"
import { EnquiryButton } from "./enquiry-provider"
import { T } from "./language-provider"
import s from "./fixed-callback.module.css"

export function FixedCallback() {
  return <EnquiryButton kind="callback" className={s.control} ariaLabel="Request a callback from Marqués Advisory & Investments">
    <Phone size={18} strokeWidth={1.5} aria-hidden="true" /><span><T>REQUEST A CALLBACK</T></span>
  </EnquiryButton>
}
