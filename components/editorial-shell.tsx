import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { siteConfig } from "@/lib/site"
import { SiteHeader } from "@/components/site-header"

export function EditorialHeader() {
  return <SiteHeader />
}

export function Footer() {
  return <footer className="border-t border-border bg-primary px-5 py-12 text-primary-foreground md:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-9 md:flex-row md:items-end md:justify-between"><div><Link href="/" className="font-serif text-2xl text-accent">Marqués Advisory</Link><p className="mt-3 max-w-xs text-xs leading-6 text-primary-foreground/60">Independent advisory for global mobility and real assets in Costa Rica.</p></div><div className="flex flex-col gap-3 text-xs text-primary-foreground/70 md:items-end"><Link href="/privacy" className="hover:text-accent">Privacy policy</Link><a href={`mailto:${siteConfig.email}`} className="hover:text-accent">{siteConfig.email}</a><p className="text-primary-foreground/45">© 2026 Marqués Advisory & Investments</p></div></div></footer>
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) { return <section className="border-b border-border bg-primary px-5 py-20 text-primary-foreground md:px-8 md:py-28"><div className="mx-auto max-w-7xl"><p className="mb-6 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">{eyebrow}</p><h1 className="max-w-4xl font-serif text-5xl leading-[1.05] md:text-7xl">{title}</h1>{children && <div className="mt-7 max-w-2xl text-base leading-7 text-primary-foreground/70">{children}</div>}</div></section> }

export function LegalNote({ children }: { children: React.ReactNode }) { return <p className="border-l-2 border-accent pl-4 text-xs leading-6 text-muted-foreground">{children}</p> }

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) { return <div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">{eyebrow}</p><h2 className="mt-3 font-serif text-4xl leading-tight text-primary md:text-5xl">{title}</h2></div> }

export function CtaBand({ title, href = "/contact", label = "Start a conversation" }: { title: string; href?: string; label?: string }) { return <section className="bg-secondary px-5 py-16 md:px-8"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 md:flex-row md:items-center"><h2 className="max-w-xl font-serif text-3xl text-primary md:text-4xl">{title}</h2><Link href={href} className="flex items-center gap-2 bg-primary px-6 py-4 text-[10px] font-bold uppercase tracking-[0.14em] text-primary-foreground hover:bg-accent hover:text-accent-foreground">{label} <ArrowUpRight size={15} /></Link></div></section> }

export function SiteFrame({ children }: { children: React.ReactNode }) { return <><EditorialHeader />{children}<Footer /></> }

