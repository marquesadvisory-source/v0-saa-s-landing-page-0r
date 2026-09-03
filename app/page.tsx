import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Globe2, Landmark, ShieldCheck } from "lucide-react"
import { CtaBand, LegalNote, SectionHeading, SiteFrame } from "@/components/editorial-shell"

const pillars = [
  { icon: ShieldCheck, title: "Clarity before commitment", body: "We help you understand the route, the evidence and the professionals involved before you make a consequential decision." },
  { icon: Globe2, title: "A stronger home base", body: "Costa Rica offers a connected, nature-rich base for families, founders and globally mobile professionals." },
  { icon: Landmark, title: "Ownership with purpose", body: "We connect mobility planning with carefully considered real assets and private opportunities." },
]

export default function Home() {
  return <SiteFrame>
    <main>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-28">
          <div className="flex flex-col justify-center">
            <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-accent"><span className="h-px w-8 bg-accent" /> Costa Rica · Private advisory</p>
            <h1 className="max-w-3xl font-serif text-5xl leading-[1.03] text-primary md:text-7xl">A considered path to <em className="font-normal text-accent">belonging</em> and ownership.</h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">Márquez Advisory & Investments connects global mobility with carefully structured real assets—helping you make Costa Rica part of your next chapter.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/residency" className="flex items-center justify-center gap-3 bg-primary px-6 py-4 text-[10px] font-bold uppercase tracking-[0.14em] text-primary-foreground hover:bg-accent hover:text-accent-foreground">Explore residency <ArrowRight size={15} /></Link><Link href="/investments" className="flex items-center justify-center gap-3 border border-primary px-6 py-4 text-[10px] font-bold uppercase tracking-[0.14em] text-primary hover:bg-primary hover:text-primary-foreground">View investments <ArrowRight size={15} /></Link></div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden bg-primary md:min-h-[500px]"><Image src="/projects/plaza-los-mangos.png" alt="Costa Rican real estate opportunity" fill className="object-cover opacity-80" priority sizes="(max-width: 768px) 100vw, 45vw" /><div className="absolute inset-0 bg-primary/20" /><div className="absolute bottom-0 left-0 right-0 bg-primary/90 p-6 text-primary-foreground"><p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-accent">The Márquez approach</p><p className="max-w-sm text-sm leading-6 text-primary-foreground/75">Personal context, disciplined diligence and a long view of what comes next.</p></div></div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"><SectionHeading eyebrow="Two ways forward" title="A more intentional relationship with Costa Rica." /><div className="mt-10 grid gap-5 md:grid-cols-2"><Link href="/residency" className="group border border-border bg-card p-7 transition-colors hover:border-accent md:p-9"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">Global mobility</p><h2 className="mt-5 font-serif text-4xl text-primary">Make Costa Rica your home base.</h2><p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">Understand residency pathways, qualifying investment and the practical steps that turn interest into a plan.</p><span className="mt-8 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-primary">Explore residency <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></span></Link><Link href="/investments" className="group border border-border bg-secondary p-7 transition-colors hover:border-accent md:p-9"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">Private opportunities</p><h2 className="mt-5 font-serif text-4xl text-primary">Own a position in what comes next.</h2><p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">Access a focused pipeline of real assets, prepared for serious conversations with qualified capital partners.</p><span className="mt-8 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-primary">View opportunities <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></span></Link></div></section>
      <section className="border-y border-border bg-secondary"><div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Why Márquez</p><div className="mt-8 grid gap-8 md:grid-cols-3">{pillars.map(({ icon: Icon, title, body }) => <div key={title} className="border-t border-border pt-5"><Icon size={21} className="text-accent" /><h3 className="mt-5 font-serif text-2xl text-primary">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p></div>)}</div></div></section>
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8"><LegalNote>Residency information is general in nature and does not constitute legal, tax or investment advice. All investment opportunities are private and subject to qualification, diligence and documentation.</LegalNote></section>
    </main><CtaBand title="The right next step starts with a conversation." href="/contact" />
  </SiteFrame>
} 
