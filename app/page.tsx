'use client'

import { useState, useEffect, useRef } from 'react'
import {
  Landmark,
  BarChart3,
  FileText,
  DollarSign,
  ShieldCheck,
  Layers,
  ArrowRight,
  Menu,
  X,
  Mail,
  Phone,
  MessageCircle,
  Linkedin,
  Scale,
  Globe2,
  Wifi,
  Users,
  Building2,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { siteConfig } from '@/lib/site'

/* ── helpers ────────────────────────────────────────────────── */

const GOLD = '#C9A96E'
const NAVY = '#0D1B2A'
const NAVY2 = '#112032'
const GRAPHITE = '#1C2B3A'
const WHITE70 = 'rgba(255,255,255,0.70)'
const WHITE40 = 'rgba(255,255,255,0.40)'
const GOLD20 = 'rgba(201,169,110,0.20)'
const GOLD10 = 'rgba(201,169,110,0.10)'
const GOLD40 = 'rgba(201,169,110,0.40)'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.12 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      {children}
    </div>
  )
}

function Divider() {
  return <div className="w-10 h-px my-6" style={{ backgroundColor: GOLD }} />
}

/* ── Header ─────────────────────────────────────────────────── */

const NAV_LINKS = [
  { label: 'Platform', href: '/about' },
  { label: 'Who We Serve', href: '/who-we-serve' },
  { label: 'Capabilities', href: '/what-we-do' },
  { label: 'Opportunities', href: '/projects' },
  { label: 'Investment Framework', id: 'tesis' },
  { label: 'Capital Partners', href: '/capital-partners' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(13,27,42,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? `1px solid ${GOLD20}` : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo('hero')} className="flex items-center gap-3 shrink-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20sin%20fondo-76W6yyCO5gUzFF2qWEPYIWgP3amG1g.png"
            alt="Marqués Advisory & Investments"
            className="h-14 w-auto object-contain"
            style={{ filter: 'drop-shadow(0 0 8px rgba(201,169,110,0.18))' }}
          />
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            'href' in l ? (
              <a
                key={l.href}
                href={l.href}
                className="text-xs tracking-widest uppercase transition-colors hover:text-[#C9A96E]"
                style={{ color: WHITE70, fontWeight: 500, letterSpacing: '0.08em' }}
              >
                {l.label}
              </a>
            ) : (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-xs tracking-widest uppercase transition-colors hover:text-[#C9A96E]"
                style={{ color: WHITE70, fontWeight: 500, letterSpacing: '0.08em' }}
              >
                {l.label}
              </button>
            )
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/50672679806"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2 text-xs tracking-widest uppercase border transition-colors hover:bg-[#C9A96E] hover:text-[#0D1B2A]"
          style={{ borderColor: GOLD, color: GOLD, fontWeight: 600, letterSpacing: '0.1em' }}
        >
          Institutional Inquiry
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2"
          style={{ color: GOLD }}
          onClick={() => setOpen(!open)}
            aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ backgroundColor: 'rgba(13,27,42,0.98)', borderTop: `1px solid ${GOLD20}` }}
        >
          {NAV_LINKS.map((l) => (
            'href' in l ? (
              <a
                key={l.href}
                href={l.href}
                className="text-left text-sm py-2 border-b transition-colors hover:text-[#C9A96E]"
                style={{ color: WHITE70, borderColor: GOLD20 }}
              >
                {l.label}
              </a>
            ) : (
              <button
                key={l.id}
                onClick={() => { scrollTo(l.id); setOpen(false) }}
                className="text-left text-sm py-2 border-b transition-colors hover:text-[#C9A96E]"
                style={{ color: WHITE70, borderColor: GOLD20 }}
              >
                {l.label}
              </button>
            )
          ))}
          <a
            href="https://wa.me/50672679806"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-5 py-3 text-xs tracking-widest uppercase text-center border"
            style={{ borderColor: GOLD, color: GOLD, fontWeight: 600 }}
          >
            Institutional Inquiry
          </a>
        </div>
      )}
    </header>
  )
}

/* ── Hero ────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end"
      style={{ backgroundColor: NAVY }}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80)',
          opacity: 0.35,
        }}
      />
      {/* Cinematic gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, rgba(13,27,42,0.45) 0%, rgba(13,27,42,0.5) 40%, rgba(13,27,42,0.88) 75%, ${NAVY} 100%)`,
        }}
      />
      {/* Subtle vignette sides */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(13,27,42,0.6) 0%, transparent 30%, transparent 70%, rgba(13,27,42,0.6) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 pb-20 pt-40 w-full">
        <div className="max-w-3xl">
          <FadeIn>
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: GOLD, letterSpacing: '0.15em' }}>
              Marqués Advisory & Investments
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 text-white text-balance"
              style={{ fontFamily: 'var(--font-playfair), serif', fontWeight: 600 }}
            >
              Relationship-Driven Real Assets Platform
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <Divider />
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-base md:text-lg leading-relaxed mb-10 max-w-xl text-pretty" style={{ color: WHITE70 }}>
              Origination. Structuring. Capital Readiness. Marqués Advisory & Investments is a relationship-driven real assets platform focused on origination, structuring and capital readiness in Costa Rica.
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/50672679806"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold tracking-wide transition-all hover:opacity-90"
                style={{ backgroundColor: GOLD, color: NAVY }}
              >
                Request Institutional Conversation
                <ArrowRight size={16} />
              </a>
              <button
                onClick={() => scrollTo('que-hacemos')}
                className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold tracking-wide border transition-all hover:bg-white/5"
                style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.85)' }}
              >
                Explore Our Approach
              </button>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom trust bar */}
      <div
        className="relative border-t"
        style={{ borderColor: GOLD20, backgroundColor: 'rgba(13,27,42,0.85)', backdropFilter: 'blur(8px)' }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Focus', value: 'Costa Rica' },
            { label: 'Strategy', value: 'Real Assets & Structuring' },
            { label: 'Counterparties', value: 'Investors, Banks, Fiduciaries and Family Offices' },
            { label: 'Objective', value: 'Create long-term institutional value' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="text-xs tracking-widest uppercase" style={{ color: GOLD, letterSpacing: '0.12em' }}>
                {item.label}
              </span>
              <span className="text-sm font-medium text-white">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Platform Layer ───────────────────────────────────────────── */

const PLATFORM_STAGES = ['Origination', 'Structuring', 'Capital Readiness', 'Execution', 'Monetization']

const PLATFORM_WORKS = [
  {
    title: 'Origination',
    desc: 'Identifying opportunities before they become widely marketed.',
  },
  {
    title: 'Structuring',
    desc: 'Transforming opportunities into clear, defensible investment frameworks.',
  },
  {
    title: 'Capital Readiness',
    desc: 'Preparing opportunities for institutional review, financing and execution.',
  },
  {
    title: 'Execution Coordination',
    desc: 'Coordinating legal, financial, technical and commercial stakeholders.',
  },
]

function PlatformLayer() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: GRAPHITE }}>
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD, letterSpacing: '0.15em' }}>
                Institutional Platform
              </p>
              <h2
                className="font-serif text-3xl md:text-4xl leading-tight text-white text-balance"
                style={{ fontFamily: 'var(--font-playfair), serif', fontWeight: 600 }}
              >
                From Origination to Monetization
              </h2>
            </div>
            <p className="text-base leading-relaxed self-end" style={{ color: WHITE70 }}>
              Relationship-driven. Institutionally positioned. Capital ready.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="grid gap-5 mb-16">
            <div className="border p-6 md:p-8" style={{ borderColor: GOLD20, backgroundColor: 'rgba(255,255,255,0.04)' }}>
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: GOLD, letterSpacing: '0.14em' }}>
                Capital Relationships
              </p>
              <p className="text-sm md:text-base text-white">
                Family Offices · Investors · Banks · Funds · Developers · Operators
              </p>
            </div>

            <div className="flex justify-center">
              <span className="text-2xl" style={{ color: GOLD }}>↓</span>
            </div>

            <div className="border p-7 md:p-9 text-center" style={{ borderColor: GOLD40, backgroundColor: NAVY2 }}>
              <p className="font-serif text-2xl md:text-3xl text-white" style={{ fontFamily: 'var(--font-playfair), serif', fontWeight: 600 }}>
                Marqués Advisory & Investments
              </p>
              <p className="text-sm mt-3" style={{ color: WHITE40 }}>
                Institutional real assets platform under evaluation, in structuring and capital readiness.
              </p>
            </div>

            <div className="flex justify-center">
              <span className="text-2xl" style={{ color: GOLD }}>↓</span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {PLATFORM_STAGES.map((stage, index) => (
                <div
                  key={stage}
                  className="border p-5 text-center"
                  style={{ borderColor: GOLD20, backgroundColor: 'rgba(255,255,255,0.035)' }}
                >
                  <p className="text-xs font-mono mb-2" style={{ color: GOLD40 }}>{String(index + 1).padStart(2, '0')}</p>
                  <p className="text-sm font-semibold text-white">{stage}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <span className="text-2xl" style={{ color: GOLD }}>↓</span>
            </div>

            <div className="border p-6 md:p-8 text-center" style={{ borderColor: GOLD20, backgroundColor: 'rgba(255,255,255,0.04)' }}>
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: GOLD, letterSpacing: '0.14em' }}>
                Real Assets
              </p>
              <p className="text-sm leading-relaxed max-w-2xl mx-auto" style={{ color: WHITE70 }}>
                Opportunities remain subject to diligence, documentation, institutional review and appropriate professional coordination.
              </p>
            </div>
          </div>
        </FadeIn>

        <div>
          <FadeIn>
            <div className="mb-10">
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD, letterSpacing: '0.15em' }}>
                How the Platform Works
              </p>
              <h3
                className="font-serif text-2xl md:text-3xl leading-tight text-white"
                style={{ fontFamily: 'var(--font-playfair), serif', fontWeight: 600 }}
              >
                A disciplined pathway for institutional preparation.
              </h3>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PLATFORM_WORKS.map((item, index) => (
              <FadeIn key={item.title} delay={index * 70}>
                <div
                  className="border p-7 h-full"
                  style={{ borderColor: GOLD20, backgroundColor: 'rgba(255,255,255,0.04)' }}
                >
                  <p className="text-xs font-mono mb-5" style={{ color: GOLD }}>{String(index + 1).padStart(2, '0')}</p>
                  <h4 className="text-base font-semibold text-white mb-3">{item.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: WHITE70 }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Tesis de Inversión ─────────────────────────────────────── */

function Tesis() {
  return (
    <section id="tesis" className="overflow-hidden" style={{ backgroundColor: '#F5F1EB' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 min-h-[460px]">
          {/* Editorial image panel */}
          <div
            className="relative min-h-56 lg:min-h-full bg-cover bg-center order-2 lg:order-1"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80)',
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to right, rgba(245,241,235,0.0) 0%, rgba(245,241,235,0.35) 100%)',
              }}
            />
          </div>

          {/* Content */}
          <div className="py-20 px-8 lg:px-14 flex flex-col justify-center order-1 lg:order-2">
            <FadeIn>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD, letterSpacing: '0.15em' }}>
                Investment Framework
              </p>
              <h2
                className="font-serif text-3xl md:text-4xl leading-tight mb-6 text-balance"
                style={{ fontFamily: 'var(--font-playfair), serif', color: '#0D1B2A', fontWeight: 600 }}
              >
                Costa Rica needs more than opportunities. It needs an institutional framework.
              </h2>
              <div className="w-10 h-px my-6" style={{ backgroundColor: GOLD }} />
              <p className="text-base leading-relaxed mb-5" style={{ color: '#334155' }}>
                There is a significant gap between the abundance of real assets with potential in Costa Rica and the ability to move them from origination into structuring, capital readiness, execution coordination and monetization. The assets exist. The capital exists. What is often missing is the institutional framework that connects them.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#334155' }}>
                Marqués Advisory & Investments works in that gap: between the asset opportunity and the bankable, traceable and defensible structure that allows sophisticated capital to evaluate with clarity, governance and a long-term perspective.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Qué Hacemos ─────────────────────────────────────────────── */

const SERVICIOS = [
  {
    icon: Landmark,
    title: 'Institutional Structuring',
    desc: 'Design of financial and fiduciary-ready structures for real assets with institutional potential.',
  },
  {
    icon: Building2,
    title: 'Real Asset Advisory',
    desc: 'Strategic assessment and positioning of real estate and infrastructure-related opportunities.',
  },
  {
    icon: FileText,
    title: 'Investment Preparation',
    desc: 'Investment memos, financial modeling and diligence packages aligned with institutional standards.',
  },
  {
    icon: DollarSign,
    title: 'Project Finance Strategy',
    desc: 'Structuring support for debt, capital and financing pathways for complex institutional opportunities.',
  },
  {
    icon: ShieldCheck,
    title: 'Risk and Governance',
    desc: 'Risk analysis, governance and institutional traceability for assets under structuring.',
  },
  {
    icon: Layers,
    title: 'Mixed-Use and Infrastructure Opportunities',
    desc: 'Development and structuring support for opportunities with long-term economic and social relevance.',
  },
]

function QueHacemos() {
  return (
    <section id="que-hacemos" className="py-24 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <FadeIn>
            <div>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD, letterSpacing: '0.15em' }}>
                Capabilities
              </p>
              <h2
                className="font-serif text-3xl md:text-4xl leading-tight text-balance"
                style={{ fontFamily: 'var(--font-playfair), serif', color: '#0D1B2A', fontWeight: 600 }}
              >
                Platform capabilities for real assets
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-base leading-relaxed self-end" style={{ color: '#334155' }}>
              We help shape origination, structuring, capital readiness and execution coordination so real asset opportunities can be reviewed with institutional discipline.
            </p>
          </FadeIn>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICIOS.map((s, i) => {
            const Icon = s.icon
            return (
              <FadeIn key={i} delay={i * 60}>
                <div
                  className="p-8 border flex flex-col gap-4 h-full transition-all hover:-translate-y-1 hover:shadow-lg"
                  style={{ borderColor: '#E5DDD0', backgroundColor: '#FAFAF8' }}
                >
                  <Icon size={24} style={{ color: GOLD }} />
                  <h3 className="font-semibold text-base" style={{ color: '#0D1B2A' }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{s.desc}</p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ── Cómo Pensamos ───────────────────────────────────────────── */

const PROCESO = [
  { step: '01', label: 'Asset origination' },
  { step: '02', label: 'Thesis' },
  { step: '03', label: 'Validation' },
  { step: '04', label: 'Structure' },
  { step: '05', label: 'Capital' },
  { step: '06', label: 'Execution' },
]

function ComoPensamos() {
  return (
    <section id="como-pensamos" className="py-24 px-6" style={{ backgroundColor: GRAPHITE }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <div>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD, letterSpacing: '0.15em' }}>
                How We Think
              </p>
              <h2
                className="font-serif text-3xl md:text-4xl leading-tight mb-6 text-white text-balance"
                style={{ fontFamily: 'var(--font-playfair), serif', fontWeight: 600 }}
              >
                Before capital, there is structure.
              </h2>
              <Divider />
              <p className="text-base leading-relaxed" style={{ color: WHITE70 }}>
                We do not seek capital for opportunities without structure. We help build the platform logic that allows capital relationships to evaluate with conviction, not speculation. Each asset is reviewed through a disciplined process focused on traceability, governance and capital readiness from origination.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="flex flex-col gap-0">
              {PROCESO.map((p, i) => (
                <div
                  key={i}
                  className="flex items-center gap-6 py-5 border-b"
                  style={{ borderColor: GOLD20 }}
                >
                  <span className="text-xs font-mono" style={{ color: GOLD, minWidth: '2rem' }}>{p.step}</span>
                  <div className="w-px h-6 shrink-0" style={{ backgroundColor: GOLD40 }} />
                  <span className="text-base font-medium text-white">{p.label}</span>
                  {i < PROCESO.length - 1 && (
                    <ArrowRight size={14} className="ml-auto" style={{ color: GOLD40 }} />
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ── Proyectos ───────────────────────────────────────────────── */

function ProyectoModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', fn)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', fn)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(13,27,42,0.92)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full p-10 border"
        style={{ backgroundColor: NAVY2, borderColor: GOLD40 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 transition-opacity hover:opacity-60"
          style={{ color: WHITE70 }}
          aria-label="Cerrar"
        >
          <X size={20} />
        </button>
        <p className="text-xs tracking-widest uppercase mb-3" style={{ color: GOLD, letterSpacing: '0.15em' }}>
          Institutional Opportunities
        </p>
        <h3
          className="font-serif text-2xl md:text-3xl text-white mb-2"
          style={{ fontFamily: 'var(--font-playfair), serif', fontWeight: 600 }}
        >
          Décima Avenida
        </h3>
        <div
          className="inline-block px-3 py-1 text-xs tracking-wide uppercase mb-5"
          style={{ backgroundColor: GOLD10, border: `1px solid ${GOLD40}`, color: GOLD }}
        >
          Status: Institutional pre-feasibility
        </div>
        <p className="text-sm leading-relaxed mb-6" style={{ color: WHITE70 }}>
          Strategic asset located in El Roble, Alajuela, with existing activity and phased development potential within the Coyol-Airport ecosystem. The opportunity is in a preliminary institutional structuring phase and remains subject to diligence and appropriate review.
        </p>
        <div className="grid grid-cols-2 gap-5 mb-8 border-t border-b py-5" style={{ borderColor: GOLD20 }}>
          {[
            { label: 'Location', value: 'El Roble, Alajuela' },
            { label: 'Asset', value: 'Mixed-use' },
            { label: 'Strategy', value: 'Phased development' },
            { label: 'Focus', value: 'Institutional value and scalability' },
          ].map((d, i) => (
            <div key={i}>
              <p className="text-xs uppercase tracking-wide mb-1" style={{ color: GOLD }}>{d.label}</p>
              <p className="text-sm text-white">{d.value}</p>
            </div>
          ))}
        </div>
        <a
          href="mailto:marquesadvisory@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide transition-all hover:opacity-90"
          style={{ backgroundColor: GOLD, color: NAVY }}
        >
          Request Institutional Information
          <ArrowRight size={14} />
        </a>
      </div>
    </div>
  )
}

function Proyectos() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      {modalOpen && <ProyectoModal onClose={() => setModalOpen(false)} />}
      <section id="proyectos" className="py-0" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 min-h-[520px]">
            {/* Image with cinematic overlay */}
            <div
              className="relative min-h-64 lg:min-h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/D%C3%A9cima%20Avenida%20Rdr-fqy4LI79dGShBO9WtIpkK9WaN4dQ2e.jpg)',
              backgroundPosition: 'center top',
              }}
            >
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to right, rgba(17,32,50,0) 60%, rgba(17,32,50,0.4) 100%)',
              }}
            />
            </div>

            {/* Content */}
            <div className="py-16 px-10 lg:px-14 flex flex-col justify-center">
              <FadeIn>
                <p className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD, letterSpacing: '0.15em' }}>
                  Institutional Opportunities
                </p>
                <h2
                  className="font-serif text-3xl md:text-4xl leading-tight mb-4 text-white text-balance"
                  style={{ fontFamily: 'var(--font-playfair), serif', fontWeight: 600 }}
                >
                  Décima Avenida
                </h2>
                <div
                  className="inline-block px-3 py-1 text-xs tracking-wide uppercase mb-6"
                  style={{ backgroundColor: GOLD10, border: `1px solid ${GOLD40}`, color: GOLD }}
                >
                  Status: Institutional pre-feasibility
                </div>
                <p className="text-base leading-relaxed mb-8" style={{ color: WHITE70 }}>
                  Preliminary institutional opportunity in El Roble, Alajuela, with existing activity and phased development potential oriented to the Coyol-Airport ecosystem.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { label: 'Location', value: 'El Roble, Alajuela' },
                    { label: 'Asset', value: 'Mixed-use' },
                    { label: 'Strategy', value: 'Phased development' },
                    { label: 'Focus', value: 'Institutional value and scalability' },
                  ].map((d, i) => (
                    <div key={i}>
                      <p className="text-xs uppercase tracking-wide mb-1" style={{ color: GOLD }}>{d.label}</p>
                      <p className="text-sm text-white">{d.value}</p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold border transition-all hover:bg-white/5 self-start"
                  style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.85)' }}
                >
                  Learn More
                  <ArrowRight size={14} />
                </button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

/* ── Infraestructura Operativa Institucional ─────────────────── */

const IAOS_PROCESSES = [
  'Strategic analysis',
  'Research',
  'Structuring',
  'Documentation',
  'Traceability',
  'Risk management',
  'Institutional file preparation',
]

function Iaos() {
  return (
    <section className="py-0 overflow-hidden" style={{ backgroundColor: '#F5F1EB' }}>
      {/* Top editorial band */}
      <div
        className="relative py-20 px-6"
        style={{
          background: 'linear-gradient(135deg, #0D1B2A 0%, #1C2B3A 60%, #0D1B2A 100%)',
        }}
      >
        {/* Subtle architectural grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(201,169,110,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left: Label + Title */}
            <div className="lg:col-span-5">
              <FadeIn>
                <p className="text-xs tracking-widest uppercase mb-5" style={{ color: GOLD, letterSpacing: '0.18em' }}>
                  Institutional operating infrastructure
                </p>
                <h2
                  className="font-serif text-3xl md:text-4xl leading-tight text-white text-balance"
                  style={{ fontFamily: 'var(--font-playfair), serif', fontWeight: 600 }}
                >
                  Technology applied to structuring, analysis and institutional preparation.
                </h2>
                <div className="w-10 h-px my-8" style={{ backgroundColor: GOLD }} />
                <p className="text-sm leading-relaxed" style={{ color: WHITE70 }}>
                  Marqués Advisory & Investments uses an AI-assisted institutional operating system to strengthen high-complexity processes in real assets and institutional structuring.
                </p>
                <p className="text-sm leading-relaxed mt-4" style={{ color: WHITE40 }}>
                  The objective is to increase analytical capacity, operational consistency and execution speed within complex processes.
                </p>
              </FadeIn>
            </div>

            {/* Right: Process list with editorial line design */}
            <div className="lg:col-span-7 lg:pl-12 lg:border-l" style={{ borderColor: GOLD20 }}>
              <FadeIn delay={120}>
                <p className="text-xs uppercase tracking-widest mb-6 font-semibold" style={{ color: GOLD40, letterSpacing: '0.14em' }}>
                  Strengthened processes
                </p>
                <div className="flex flex-col">
                  {IAOS_PROCESSES.map((process, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-5 py-4 border-b"
                      style={{ borderColor: 'rgba(201,169,110,0.12)' }}
                    >
                      <span
                        className="text-xs font-mono shrink-0 w-6 text-right"
                        style={{ color: GOLD40 }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="w-px h-4 shrink-0" style={{ backgroundColor: GOLD20 }} />
                      <span className="text-sm font-medium text-white">{process}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom light band: capability summary */}
      <div className="py-14 px-6" style={{ backgroundColor: '#F5F1EB' }}>
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div
              className="border-l-2 pl-8 max-w-3xl"
              style={{ borderColor: GOLD }}
            >
              <p className="text-base leading-relaxed italic" style={{ color: '#334155' }}>
                "This is not task automation. It is analytical infrastructure applied to real asset structuring: more precise, more consistent and more defensible."
              </p>
              <p className="text-xs uppercase tracking-widest mt-4 font-semibold" style={{ color: GOLD }}>
                Marqués Advisory & Investments
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ── Por qué Costa Rica ──────────────────────────────────────── */

const CR_CARDS = [
  { icon: Scale, title: 'Legal stability', desc: 'A solid legal framework, established rule of law and contractual security for long-term investment review.' },
  { icon: Globe2, title: 'Free zones and foreign investment', desc: 'A well-established free zone regime with fiscal incentives and openness to international capital.' },
  { icon: Wifi, title: 'Infrastructure and connectivity', desc: 'Strategic logistics connectivity with access to North American, European and global markets.' },
  { icon: Users, title: 'Talent and capabilities', desc: 'Qualified human capital and a professional capabilities ecosystem suited to institutional processes.' },
  { icon: Building2, title: 'Real assets with institutional potential', desc: 'Real estate and infrastructure markets with opportunities that may benefit from disciplined structuring.' },
]

function CostaRica() {
  return (
    <section id="costa-rica" className="py-24 px-6" style={{ backgroundColor: GRAPHITE }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 mb-14">
          <FadeIn>
            <div>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD, letterSpacing: '0.15em' }}>
                Why Costa Rica
              </p>
              <h2
                className="font-serif text-3xl md:text-4xl leading-tight text-white text-balance"
                style={{ fontFamily: 'var(--font-playfair), serif', fontWeight: 600 }}
              >
                A solid environment for long-term investment review.
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-base leading-relaxed self-end" style={{ color: WHITE70 }}>
              Macroeconomic stability, talent, infrastructure, a free zone regime, commercial openness and sustainability commitments make Costa Rica a strategic market for institutional capital evaluation.
            </p>
          </FadeIn>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {CR_CARDS.map((c, i) => {
            const Icon = c.icon
            return (
              <FadeIn key={i} delay={i * 60}>
                <div
                  className="flex flex-col gap-4 p-7 border h-full transition-all hover:-translate-y-1"
                  style={{ borderColor: GOLD20, backgroundColor: 'rgba(255,255,255,0.04)' }}
                >
                  <Icon size={22} style={{ color: GOLD }} />
                  <h3 className="font-semibold text-sm text-white leading-snug">{c.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: WHITE40 }}>{c.desc}</p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ── Contacto ────────────────────────────────────────────────── */

function Contacto() {
  return (
    <section id="contacto" className="py-24 px-6" style={{ backgroundColor: NAVY2 }}>
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD, letterSpacing: '0.15em' }}>
                Institutional Inquiry
              </p>
              <h2
                className="font-serif text-3xl md:text-4xl leading-tight text-white mb-6 text-balance"
                style={{ fontFamily: 'var(--font-playfair), serif', fontWeight: 600 }}
              >
                Let us discuss real assets, capital and structuring.
              </h2>
              <Divider />
              <p className="text-base leading-relaxed" style={{ color: WHITE70 }}>
                Request a private conversation with our team. We support family offices, funds, banks, fiduciaries and developers with an institutional perspective.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:marquesadvisory@gmail.com"
                className="flex items-center gap-4 px-6 py-4 border transition-all hover:bg-white/5"
                style={{ borderColor: GOLD40 }}
              >
                <Mail size={18} style={{ color: GOLD }} />
                <div>
                  <p className="text-xs uppercase tracking-wide mb-0.5" style={{ color: GOLD }}>Email</p>
                  <p className="text-sm text-white">marquesadvisory@gmail.com</p>
                </div>
              </a>
              <a
                href="tel:+50672679806"
                className="flex items-center gap-4 px-6 py-4 border transition-all hover:bg-white/5"
                style={{ borderColor: GOLD20 }}
              >
                <Phone size={18} style={{ color: GOLD }} />
                <div>
                  <p className="text-xs uppercase tracking-wide mb-0.5" style={{ color: GOLD }}>Phone</p>
                  <p className="text-sm text-white">+506 7267-9806</p>
                </div>
              </a>
              <a
                href="https://wa.me/50672679806"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-6 py-4 border transition-all hover:bg-white/5"
                style={{ borderColor: GOLD20 }}
              >
                <MessageCircle size={18} style={{ color: GOLD }} />
                <div>
                  <p className="text-xs uppercase tracking-wide mb-0.5" style={{ color: GOLD }}>WhatsApp</p>
                  <p className="text-sm text-white">+506 7267-9806</p>
                </div>
              </a>
              <a
                href="https://wa.me/50672679806"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold tracking-wide transition-all hover:opacity-90"
                style={{ backgroundColor: GOLD, color: NAVY }}
              >
                Request Conversation
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ── Footer ──────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer style={{ backgroundColor: NAVY, borderTop: `1px solid ${GOLD20}` }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20sin%20fondo-76W6yyCO5gUzFF2qWEPYIWgP3amG1g.png"
              alt="Marqués Advisory & Investments"
              className="h-16 w-auto object-contain mb-5"
              style={{ filter: 'drop-shadow(0 0 6px rgba(201,169,110,0.15))' }}
            />
            <p className="text-xs leading-relaxed mb-5" style={{ color: WHITE40 }}>
              Relationship-driven real assets platform focused on origination, structuring and capital readiness in Costa Rica.
            </p>
            <a
              href="https://www.linkedin.com/company/marquesadvisory"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 border transition-all hover:border-[#C9A96E]"
              style={{ borderColor: GOLD20, color: WHITE40 }}
            >
              <Linkedin size={14} />
            </a>
          </div>

          {/* Navegación */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-5 font-semibold" style={{ color: GOLD, letterSpacing: '0.12em' }}>
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <li key={'href' in l ? l.href : l.id}>
                  {'href' in l ? (
                    <a
                      href={l.href}
                      className="text-xs transition-colors hover:text-[#C9A96E]"
                      style={{ color: WHITE40 }}
                    >
                      {l.label}
                    </a>
                  ) : (
                    <button
                      onClick={() => scrollTo(l.id)}
                      className="text-xs transition-colors hover:text-[#C9A96E]"
                      style={{ color: WHITE40 }}
                    >
                      {l.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Enfoque */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-5 font-semibold" style={{ color: GOLD, letterSpacing: '0.12em' }}>
              Focus
            </p>
            <ul className="flex flex-col divide-y" style={{ borderColor: GOLD20 }}>
              {[
                { label: 'Real Assets', desc: 'Origination and structuring of real asset opportunities with an institutional lens.' },
                { label: 'Infrastructure', desc: 'Platforms oriented to connectivity, logistics and strategic development.' },
                { label: 'Private Capital', desc: 'Preparation and structuring of opportunities for sophisticated capital review.' },
                { label: 'Capital Readiness', desc: 'Development of phased financing logic and capital-facing asset strategies.' },
                { label: 'Fiduciary Architecture', desc: 'Fiduciary-ready architecture for protection, governance and traceability.' },
                { label: 'Institutional Structuring', desc: 'Conversion of complex opportunities into bankable and defensible platforms.' },
              ].map((item) => (
                <li
                  key={item.label}
                  className="group py-3 cursor-default"
                >
                  <p
                    className="text-xs font-semibold mb-1 transition-colors group-hover:text-[#C9A96E]"
                    style={{ color: 'rgba(255,255,255,0.75)', letterSpacing: '0.04em' }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-xs leading-relaxed transition-colors"
                    style={{ color: 'rgba(255,255,255,0.32)' }}
                  >
                    {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-5 font-semibold" style={{ color: GOLD, letterSpacing: '0.12em' }}>
              Institutional Inquiry
            </p>
            <p className="text-xs mb-5 leading-relaxed" style={{ color: WHITE40 }}>
              Request a private conversation with our team.
            </p>
            <a
              href="https://wa.me/50672679806"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-4 py-3 text-xs font-semibold border tracking-wide mb-3 transition-all hover:bg-white/5"
              style={{ borderColor: GOLD40, color: GOLD }}
            >
              Request Institutional Conversation
            </a>
            <p className="text-xs" style={{ color: WHITE40 }}>marquesadvisory@gmail.com</p>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{ borderColor: GOLD20 }}
        >
          <p className="text-xs" style={{ color: WHITE40 }}>
            © 2024 Marqués Advisory & Investments. All rights reserved.
          </p>
          <p className="text-xs max-w-2xl leading-relaxed text-right" style={{ color: WHITE40 }}>
            {siteConfig.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ── Page ────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <PlatformLayer />
      <Tesis />
      <QueHacemos />
      <ComoPensamos />
      <Proyectos />
      <Iaos />
      <CostaRica />
      <Contacto />
      <Footer />
    </main>
  )
}
