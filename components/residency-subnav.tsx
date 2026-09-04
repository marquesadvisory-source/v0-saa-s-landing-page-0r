import Link from "next/link"
import { residencyContent } from "@/lib/residency-content"
import type { Locale } from "@/lib/home-content"

export function ResidencySubnav({ locale, active }: { locale: Locale; active: "about" | "program" | "realEstate" }) {
  const tabs = residencyContent[locale].tabs
  const links = [
    ["about", tabs.about, "/countries/costa-rica"],
    ["program", tabs.program, "/residency"],
    ["realEstate", tabs.realEstate, "/residency/real-estate"],
  ] as const
  return (
    <nav aria-label="Costa Rica" className="border-y border-[#b89a65]/25 bg-[#f8f5ef] px-6 md:px-10">
      <div className="mx-auto flex max-w-[1360px] gap-8 overflow-x-auto py-5 md:gap-12">
        {links.map(([id, label, href]) => (
          <Link key={id} href={href} aria-current={active === id ? "page" : undefined} className={`shrink-0 border-b py-2 text-sm transition-colors ${active === id ? "border-[#0b1b2a] text-[#0b1b2a]" : "border-transparent text-[#59636c] hover:border-[#b89a65] hover:text-[#0b1b2a]"}`}>
            {label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

