import type { ReactNode } from "react"
import { SiteHeader } from "@/components/site-header"
import { ResidencyNav } from "@/components/residency-nav"
import { ResidencyFooter } from "@/components/residency-editorial"
import s from "./residency.module.css"

export default function ResidencyLayout({ children }: { children: ReactNode }) {
  return <div className={s.page}><SiteHeader /><ResidencyNav /><main id="residency-content">{children}</main><ResidencyFooter /></div>
}
