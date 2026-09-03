import Link from "next/link"
import { ArrowUpRight, Menu } from "lucide-react"
import { siteConfig } from "@/lib/site"

export function EditorialHeader() {
  return <header className="border-b border-border bg-background">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
      <Link href="/" className="flex items-center gap-3" aria-label="Márquez Advisory home"><span className="flex h-9 w-9 items-center justify-center border border-accent font-serif text-xl text-accent">M</span><span className="text-[10px] font-semibold uppercase leading-tight tracking-[0.18em] text-primary">Márquez<br />Advisory & Investments</span></Link>
      <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">{siteConfig.nav.map((item) => <Link key={item.href} href={item.href} className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary">{item.label}</Link>)}</nav>
      <div className="flex items-center gap-3"><Link href="/contact" className="hidden items-center gap-2 border border-primary px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:flex">Start a conversation <ArrowUpRight size={13} /></Link><button className="rounded border border-border p-2 text-primary md:hidden" aria-label="Open menu"><Menu size={18} /></button></div>
    </div>
  </header>
}

export function Footer() {
  return <footer className="border-t border-border bg-primary px-5 py-12 text-primary-foreground md:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-9 md:flex-row md:items-end md:justify-between"><div><Link href="/" className="font-serif text-2xl text-accent">Márquez Advisory</Link><p className="mt-3 max-w-xs text-xs leading-6 text-primary-foreground/60">Independent advisory for global mobility and real assets in Costa Rica.</p></div><div className="flex flex-col gap-3 text-xs text-primary-foreground/70 md:items-end"><Link href="/privacy" className="hover:text-accent">Privacy policy</Link><a href={`mailto:${siteConfig.email}`} className="hover:text-accent">{siteConfig.email}</a><p className="text-primary-foreground/45">© 2026 Márquez Advisory & Investments</p></div></div></footer>
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) { return <section className="border-b border-border bg-primary px-5 py-20 text-primary-foreground md:px-8 md:py-28"><div className="mx-auto max-w-7xl"><p className="mb-6 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">{eyebrow}</p><h1 className="max-w-4xl font-serif text-5xl leading-[1.05] md:text-7xl">{title}</h1>{children && <div className="mt-7 max-w-2xl text-base leading-7 text-primary-foreground/70">{children}</div>}</div></section> }

export function LegalNote({ children }: { children: React.ReactNode }) { return <p className="border-l-2 border-accent pl-4 text-xs leading-6 text-muted-foreground">{children}</p> }

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) { return <div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">{eyebrow}</p><h2 className="mt-3 font-serif text-4xl leading-tight text-primary md:text-5xl">{title}</h2></div> }

export function CtaBand({ title, href = "/contact", label = "Start a conversation" }: { title: string; href?: string; label?: string }) { return <section className="bg-secondary px-5 py-16 md:px-8"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 md:flex-row md:items-center"><h2 className="max-w-xl font-serif text-3xl text-primary md:text-4xl">{title}</h2><Link href={href} className="flex items-center gap-2 bg-primary px-6 py-4 text-[10px] font-bold uppercase tracking-[0.14em] text-primary-foreground hover:bg-accent hover:text-accent-foreground">{label} <ArrowUpRight size={15} /></Link></div></section> }

export function SiteFrame({ children }: { children: React.ReactNode }) { return <><EditorialHeader />{children}<Footer /></> }

