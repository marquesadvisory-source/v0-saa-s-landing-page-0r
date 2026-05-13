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
  { label: 'Tesis de inversión', id: 'tesis' },
  { label: 'Qué hacemos', id: 'que-hacemos' },
  { label: 'Cómo pensamos', id: 'como-pensamos' },
  { label: 'Proyectos', id: 'proyectos' },
  { label: 'Costa Rica', id: 'costa-rica' },
  { label: 'Contacto', id: 'contacto' },
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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-UNstj7JT5pOoqTVG3p84huM4s6Hf5o.jpg"
            alt="Marqués Advisory & Investments"
            className="h-10 w-auto object-contain"
          />
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-xs tracking-widest uppercase transition-colors hover:text-[#C9A96E]"
              style={{ color: WHITE70, fontWeight: 500, letterSpacing: '0.08em' }}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="mailto:marquesadvisory@gmail.com"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2 text-xs tracking-widest uppercase border transition-colors hover:bg-[#C9A96E] hover:text-[#0D1B2A]"
          style={{ borderColor: GOLD, color: GOLD, fontWeight: 600, letterSpacing: '0.1em' }}
        >
          Contacto Institucional
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2"
          style={{ color: GOLD }}
          onClick={() => setOpen(!open)}
          aria-label="Menú"
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
            <button
              key={l.id}
              onClick={() => { scrollTo(l.id); setOpen(false) }}
              className="text-left text-sm py-2 border-b transition-colors hover:text-[#C9A96E]"
              style={{ color: WHITE70, borderColor: GOLD20 }}
            >
              {l.label}
            </button>
          ))}
          <a
            href="mailto:marquesadvisory@gmail.com"
            className="mt-2 px-5 py-3 text-xs tracking-widest uppercase text-center border"
            style={{ borderColor: GOLD, color: GOLD, fontWeight: 600 }}
          >
            Contacto Institucional
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
              Estructuración institucional para activos reales en Costa Rica
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <Divider />
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-base md:text-lg leading-relaxed mb-10 max-w-xl text-pretty" style={{ color: WHITE70 }}>
              Convertimos oportunidades inmobiliarias y de infraestructura en plataformas de inversión trazables, bancables y defendibles.
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:marquesadvisory@gmail.com"
                className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold tracking-wide transition-all hover:opacity-90"
                style={{ backgroundColor: GOLD, color: NAVY }}
              >
                Solicitar conversación institucional
                <ArrowRight size={16} />
              </a>
              <button
                onClick={() => scrollTo('que-hacemos')}
                className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold tracking-wide border transition-all hover:bg-white/5"
                style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.85)' }}
              >
                Explorar enfoque
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
            { label: 'Enfoque', value: 'Costa Rica' },
            { label: 'Estrategia', value: 'Real Assets & Structuring' },
            { label: 'Aliados', value: 'Inversionistas, Bancos, Fiduciarios y Family Offices' },
            { label: 'Objetivo', value: 'Crear valor institucional de largo plazo' },
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
                Tesis de inversión
              </p>
              <h2
                className="font-serif text-3xl md:text-4xl leading-tight mb-6 text-balance"
                style={{ fontFamily: 'var(--font-playfair), serif', color: '#0D1B2A', fontWeight: 600 }}
              >
                Costa Rica necesita más que oportunidades. Necesita estructuras financiables.
              </h2>
              <div className="w-10 h-px my-6" style={{ backgroundColor: GOLD }} />
              <p className="text-base leading-relaxed mb-5" style={{ color: '#334155' }}>
                Existe una brecha significativa entre la abundancia de activos con potencial en Costa Rica y la capacidad de transformarlos en oportunidades listas para capital institucional. Los activos existen. El capital existe. Lo que falta es la arquitectura financiera, legal y estratégica que los conecte.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#334155' }}>
                Marqués trabaja exactamente en esa brecha: entre la oportunidad del activo y la estructura bancable, trazable y defendible que permite atraer capital sofisticado con claridad, gobernanza y visión de largo plazo.
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
    title: 'Estructuración institucional',
    desc: 'Diseño de estructuras financieras y fiduciarias a la medida para activos reales con vocación institucional.',
  },
  {
    icon: Building2,
    title: 'Asesoría en Activos Reales',
    desc: 'Evaluación estratégica y posicionamiento de oportunidades inmobiliarias e infraestructura.',
  },
  {
    icon: FileText,
    title: 'Preparación para Inversión',
    desc: 'Investment memos, modelación financiera y paquetes para due diligence con estándares institucionales.',
  },
  {
    icon: DollarSign,
    title: 'Estrategia de Project Finance',
    desc: 'Estructuración de deuda, capital y soluciones de financiamiento para proyectos complejos.',
  },
  {
    icon: ShieldCheck,
    title: 'Riesgo y Gobernanza',
    desc: 'Análisis de riesgos, gobernanza y trazabilidad institucional para activos en estructuración.',
  },
  {
    icon: Layers,
    title: 'Proyectos de Uso Mixto e Infraestructura',
    desc: 'Desarrollo y estructuración de proyectos con impacto económico y social de largo plazo.',
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
                Qué hacemos
              </p>
              <h2
                className="font-serif text-3xl md:text-4xl leading-tight text-balance"
                style={{ fontFamily: 'var(--font-playfair), serif', color: '#0D1B2A', fontWeight: 600 }}
              >
                Estructuración institucional para activos reales
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-base leading-relaxed self-end" style={{ color: '#334155' }}>
              Diseñamos la arquitectura financiera, legal y estratégica que permite transformar activos complejos en oportunidades listas para capital sofisticado.
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
  { step: '01', label: 'Origen del activo' },
  { step: '02', label: 'Tesis' },
  { step: '03', label: 'Validación' },
  { step: '04', label: 'Estructura' },
  { step: '05', label: 'Capital' },
  { step: '06', label: 'Ejecución' },
]

function ComoPensamos() {
  return (
    <section id="como-pensamos" className="py-24 px-6" style={{ backgroundColor: GRAPHITE }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <div>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD, letterSpacing: '0.15em' }}>
                Cómo pensamos
              </p>
              <h2
                className="font-serif text-3xl md:text-4xl leading-tight mb-6 text-white text-balance"
                style={{ fontFamily: 'var(--font-playfair), serif', fontWeight: 600 }}
              >
                Antes del capital, viene la estructura.
              </h2>
              <Divider />
              <p className="text-base leading-relaxed" style={{ color: WHITE70 }}>
                No buscamos capital para proyectos sin estructura. Construimos la estructura que hace que el capital llegue por convicción, no por especulación. Cada activo pasa por un proceso riguroso que asegura trazabilidad, gobernanza y bancabilidad desde el origen.
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
          Proyectos en estructuración
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
          Estado: Prefactibilidad institucional
        </div>
        <p className="text-sm leading-relaxed mb-6" style={{ color: WHITE70 }}>
          Activo estratégico ubicado en El Roble de Alajuela, con flujo existente y potencial de desarrollo escalonado en el ecosistema Coyol–Aeropuerto. El proyecto se encuentra en fase preliminar de estructuración institucional, orientado a capital privado sofisticado con visión de largo plazo.
        </p>
        <div className="grid grid-cols-2 gap-5 mb-8 border-t border-b py-5" style={{ borderColor: GOLD20 }}>
          {[
            { label: 'Ubicación', value: 'El Roble, Alajuela' },
            { label: 'Activo', value: 'Uso mixto' },
            { label: 'Estrategia', value: 'Desarrollo por fases' },
            { label: 'Enfoque', value: 'Valor institucional y escalabilidad' },
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
          Solicitar información institucional
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
                  'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80)',
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(13,27,42,0.5) 0%, rgba(13,27,42,0.1) 50%, rgba(17,32,50,0.7) 100%)',
                }}
              />
            </div>

            {/* Content */}
            <div className="py-16 px-10 lg:px-14 flex flex-col justify-center">
              <FadeIn>
                <p className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD, letterSpacing: '0.15em' }}>
                  Proyectos en estructuración
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
                  Estado: Prefactibilidad institucional
                </div>
                <p className="text-base leading-relaxed mb-8" style={{ color: WHITE70 }}>
                  Proyecto en fase preliminar de estructuración institucional en El Roble de Alajuela, con flujo existente y potencial de desarrollo escalonado orientado al ecosistema Coyol–Aeropuerto.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { label: 'Ubicación', value: 'El Roble, Alajuela' },
                    { label: 'Activo', value: 'Uso mixto' },
                    { label: 'Estrategia', value: 'Desarrollo por fases' },
                    { label: 'Enfoque', value: 'Valor institucional y escalabilidad' },
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
                  Conocer más
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
  'Análisis estratégico',
  'Investigación',
  'Estructuración',
  'Documentación',
  'Trazabilidad',
  'Gestión de riesgos',
  'Preparación de expedientes institucionales',
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
                  Infraestructura operativa institucional
                </p>
                <h2
                  className="font-serif text-3xl md:text-4xl leading-tight text-white text-balance"
                  style={{ fontFamily: 'var(--font-playfair), serif', fontWeight: 600 }}
                >
                  Tecnología aplicada a estructuración, análisis y preparación institucional.
                </h2>
                <div className="w-10 h-px my-8" style={{ backgroundColor: GOLD }} />
                <p className="text-sm leading-relaxed" style={{ color: WHITE70 }}>
                  Marqués Advisory & Investments utiliza un sistema operativo institucional asistido por inteligencia artificial para fortalecer procesos de alta complejidad en activos reales y estructuración institucional.
                </p>
                <p className="text-sm leading-relaxed mt-4" style={{ color: WHITE40 }}>
                  El objetivo es aumentar capacidad analítica, consistencia operativa y velocidad de ejecución dentro de procesos complejos.
                </p>
              </FadeIn>
            </div>

            {/* Right: Process list with editorial line design */}
            <div className="lg:col-span-7 lg:pl-12 lg:border-l" style={{ borderColor: GOLD20 }}>
              <FadeIn delay={120}>
                <p className="text-xs uppercase tracking-widest mb-6 font-semibold" style={{ color: GOLD40, letterSpacing: '0.14em' }}>
                  Procesos fortalecidos
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
                "No es automatización de tareas. Es infraestructura analítica aplicada a la estructuración de activos reales: más precisa, más consistente, más defendible."
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
  { icon: Scale, title: 'Estabilidad jurídica', desc: 'Marco legal sólido, estado de derecho consolidado y seguridad contractual para inversiones de largo plazo.' },
  { icon: Globe2, title: 'Zona franca e inversión extranjera', desc: 'Régimen de zona franca líder en América Latina con incentivos fiscales y apertura a capital internacional.' },
  { icon: Wifi, title: 'Infraestructura y conectividad', desc: 'Conectividad logística estratégica con acceso a mercados de América del Norte, Europa y Asia.' },
  { icon: Users, title: 'Talento y servicios', desc: 'Capital humano calificado y ecosistema de servicios profesionales de alto nivel.' },
  { icon: Building2, title: 'Activos reales con potencial institucional', desc: 'Mercado inmobiliario y de infraestructura con oportunidades subvaloradas y potencial de estructuración.' },
]

function CostaRica() {
  return (
    <section id="costa-rica" className="py-24 px-6" style={{ backgroundColor: GRAPHITE }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 mb-14">
          <FadeIn>
            <div>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD, letterSpacing: '0.15em' }}>
                Por qué Costa Rica
              </p>
              <h2
                className="font-serif text-3xl md:text-4xl leading-tight text-white text-balance"
                style={{ fontFamily: 'var(--font-playfair), serif', fontWeight: 600 }}
              >
                Un entorno sólido para invertir con visión de largo plazo.
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-base leading-relaxed self-end" style={{ color: WHITE70 }}>
              Estabilidad macroeconómica, talento, infraestructura, régimen de zona franca, apertura comercial y compromiso con la sostenibilidad convierten a Costa Rica en el destino estratégico para capital institucional.
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
                Contacto institucional
              </p>
              <h2
                className="font-serif text-3xl md:text-4xl leading-tight text-white mb-6 text-balance"
                style={{ fontFamily: 'var(--font-playfair), serif', fontWeight: 600 }}
              >
                Conversemos sobre activos reales, capital y estructuración.
              </h2>
              <Divider />
              <p className="text-base leading-relaxed" style={{ color: WHITE70 }}>
                Solicite una conversación privada con nuestro equipo. Trabajamos con family offices, fondos, bancos, fiduciarias y desarrolladores con visión institucional.
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
                href="tel:+50672123915"
                className="flex items-center gap-4 px-6 py-4 border transition-all hover:bg-white/5"
                style={{ borderColor: GOLD20 }}
              >
                <Phone size={18} style={{ color: GOLD }} />
                <div>
                  <p className="text-xs uppercase tracking-wide mb-0.5" style={{ color: GOLD }}>Teléfono</p>
                  <p className="text-sm text-white">+506 7212-3915</p>
                </div>
              </a>
              <a
                href="https://wa.me/50672123915"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-6 py-4 border transition-all hover:bg-white/5"
                style={{ borderColor: GOLD20 }}
              >
                <MessageCircle size={18} style={{ color: GOLD }} />
                <div>
                  <p className="text-xs uppercase tracking-wide mb-0.5" style={{ color: GOLD }}>WhatsApp</p>
                  <p className="text-sm text-white">+506 7212-3915</p>
                </div>
              </a>
              <a
                href="mailto:marquesadvisory@gmail.com"
                className="mt-2 flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold tracking-wide transition-all hover:opacity-90"
                style={{ backgroundColor: GOLD, color: NAVY }}
              >
                Solicitar conversación
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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-UNstj7JT5pOoqTVG3p84huM4s6Hf5o.jpg"
              alt="Marqués Advisory & Investments"
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="text-xs leading-relaxed mb-5" style={{ color: WHITE40 }}>
              Plataforma boutique de estructuración institucional para activos reales en Costa Rica.
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
              Navegación
            </p>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="text-xs transition-colors hover:text-[#C9A96E]"
                    style={{ color: WHITE40 }}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Enfoque */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-5 font-semibold" style={{ color: GOLD, letterSpacing: '0.12em' }}>
              Enfoque
            </p>
            <ul className="flex flex-col gap-3">
              {['Real Estate', 'Infraestructura', 'Capital Privado', 'Project Finance', 'Fideicomisos', 'Estructuración Institucional'].map((item) => (
                <li key={item}>
                  <span className="text-xs" style={{ color: WHITE40 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-5 font-semibold" style={{ color: GOLD, letterSpacing: '0.12em' }}>
              Contacto Institucional
            </p>
            <p className="text-xs mb-5 leading-relaxed" style={{ color: WHITE40 }}>
              Solicite una conversación privada con nuestro equipo.
            </p>
            <a
              href="mailto:marquesadvisory@gmail.com"
              className="inline-flex items-center justify-center w-full px-4 py-3 text-xs font-semibold border tracking-wide mb-3 transition-all hover:bg-white/5"
              style={{ borderColor: GOLD40, color: GOLD }}
            >
              Solicitar conversación
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
            © 2024 Marqués Advisory & Investments. Todos los derechos reservados.
          </p>
          <p className="text-xs max-w-2xl leading-relaxed text-right" style={{ color: WHITE40 }}>
            La información contenida en este sitio tiene fines informativos e institucionales. No constituye oferta pública de valores, recomendación de inversión, promesa de rentabilidad ni solicitud formal de capital.
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
      <Header />
      <Hero />
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
