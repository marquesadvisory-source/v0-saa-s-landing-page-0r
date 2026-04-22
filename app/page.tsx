'use client'

import { useState, useEffect, useRef } from 'react'
import {
  Building2,
  Leaf,
  BarChart3,
  Briefcase,
  Landmark,
  Shield,
  Building,
  Globe,
  ChevronDown,
  Linkedin,
  Mail,
  MapPin,
} from 'lucide-react'

function FadeInUp({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  )
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-[#0F1E35]/95 backdrop-blur-md border-b border-[#C4A76A]/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="Marqués Advisory & Investments"
            className="w-auto"
            style={{ maxHeight: '70px', padding: '16px' }}
          />
          <span className="hidden md:block text-sm font-medium" style={{ color: '#C4A76A' }}>
            Boutique Investment & Real Estate Concierge
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/josealvarezr/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg transition-all hover:scale-110"
            style={{ color: '#C4A76A' }}
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://wa.me/50672679806"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 text-sm md:text-base font-semibold rounded-lg transition-all hover:scale-105"
            style={{ backgroundColor: '#C4A76A', color: '#1B2A4A' }}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  )
}

function TrustBar() {
  return (
    <section
      className="py-12 border-y"
      style={{ backgroundColor: '#0C1628', borderColor: 'rgba(196,167,106,0.15)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <FadeInUp>
            <div className="flex flex-col items-center gap-2 md:border-r" style={{ borderColor: 'rgba(196,167,106,0.2)' }}>
              <span className="text-3xl">🏛️</span>
              <p className="font-bold tracking-wide text-white">BCCR Listed</p>
              <p className="text-sm" style={{ color: 'rgba(196,167,106,0.7)' }}>
                National Stock Exchange
              </p>
            </div>
          </FadeInUp>
          <FadeInUp>
            <div className="flex flex-col items-center gap-2 md:border-r" style={{ borderColor: 'rgba(196,167,106,0.2)' }}>
              <span className="text-3xl">🌿</span>
              <p className="font-bold tracking-wide text-white">ESG + Green Bonds</p>
              <p className="text-sm" style={{ color: 'rgba(196,167,106,0.7)' }}>
                Sustainable Capital
              </p>
            </div>
          </FadeInUp>
          <FadeInUp>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">🤝</span>
              <p className="font-bold tracking-wide text-white">Boutique Grade</p>
              <p className="text-sm" style={{ color: 'rgba(196,167,106,0.7)' }}>
                Family Office Service
              </p>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <Features />
      <Concierge />
      <Audience />
      <Contact />
      <Footer />
    </main>
  )
}

function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 py-20 pt-32"
      style={{
        background: 'radial-gradient(ellipse at 60% 50%, rgba(196,167,106,0.08) 0%, transparent 70%), #0F1E35',
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <FadeInUp>
          <span
            className="border text-xs tracking-widest px-4 py-1 rounded-full mb-6 inline-block"
            style={{ borderColor: 'rgba(196,167,106,0.5)', color: '#C4A76A' }}
          >
            BOUTIQUE INVESTMENT FIRM · COSTA RICA
          </span>
        </FadeInUp>
        <FadeInUp>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white text-balance">
            Connecting Global Capital with Strategic Opportunities
          </h1>
        </FadeInUp>
        <FadeInUp>
          <p className="text-xl md:text-2xl mb-10 text-white/70 leading-relaxed max-w-4xl mx-auto text-pretty">
            A boutique investment firm specializing in real estate co-investment, financial structuring, and green & blue
            capital raising through the Costa Rican National Stock Exchange.
          </p>
        </FadeInUp>
        <FadeInUp>
          <a
            href="https://wa.me/50672679806"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:scale-105"
            style={{ backgroundColor: '#C4A76A', color: '#1B2A4A' }}
          >
            💬 Contact Us on WhatsApp
          </a>
        </FadeInUp>
        <FadeInUp>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <span
              className="border text-sm px-4 py-1 rounded-full"
              style={{
                backgroundColor: 'rgba(196,167,106,0.1)',
                borderColor: 'rgba(196,167,106,0.3)',
                color: '#C4A76A',
              }}
            >
              Project Structuring
            </span>
            <span
              className="border text-sm px-4 py-1 rounded-full"
              style={{
                backgroundColor: 'rgba(196,167,106,0.1)',
                borderColor: 'rgba(196,167,106,0.3)',
                color: '#C4A76A',
              }}
            >
              Co-Investment
            </span>
            <span
              className="border text-sm px-4 py-1 rounded-full"
              style={{
                backgroundColor: 'rgba(196,167,106,0.1)',
                borderColor: 'rgba(196,167,106,0.3)',
                color: '#C4A76A',
              }}
            >
              Real Assets
            </span>
          </div>
        </FadeInUp>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" style={{ color: '#C4A76A' }}>
        <ChevronDown size={32} />
      </div>
    </section>
  )
}

function Features() {
  const features = [
    {
      icon: Building2,
      title: 'Project Structuring',
      description:
        'End-to-end financial architecture for complex real estate and infrastructure projects',
    },
    {
      icon: Briefcase,
      title: 'Co-Investment',
      description:
        'Institutional frameworks connecting global capital with Costa Rican opportunities',
    },
    {
      icon: Leaf,
      title: 'Sustainable Finance',
      description:
        'Green and blue bond issuance and ESG-aligned capital structures via the BCCR',
    },
    {
      icon: BarChart3,
      title: 'Real Assets',
      description: 'Portfolio management and value creation across real estate and infrastructure',
    },
  ]

  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#1B2A4A' }}>
      <div className="max-w-6xl mx-auto">
        <FadeInUp>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance text-white">
            Integrated Solutions for Smart Capital
          </h2>
        </FadeInUp>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <FadeInUp key={index}>
                <div
                  className="p-8 rounded-xl border transition-all hover:border-[#C4A76A]/60 hover:shadow-2xl hover:-translate-y-1"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderColor: 'rgba(196,167,106,0.2)',
                  }}
                >
                  <Icon size={32} className="mb-4" style={{ color: '#C4A76A' }} />
                  <h3 className="font-bold text-white text-xl mb-2">{feature.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {feature.description}
                  </p>
                </div>
              </FadeInUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Concierge() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#0F1E35' }}>
      <div className="max-w-4xl mx-auto">
        <FadeInUp>
          <div className="pl-8 border-l-4" style={{ borderColor: '#C4A76A' }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance text-white">Real Estate Concierge</h2>
            <p className="text-xl leading-relaxed text-pretty" style={{ color: 'rgba(255,255,255,0.7)' }}>
              An exclusive service tailored for high-net-worth families and international advisory firms. We provide
              access to premium real estate opportunities, structured co-investments, and bespoke solutions across Costa
              Rica.
            </p>
            <p className="italic text-lg mt-6" style={{ color: '#C4A76A' }}>
              Discretion. Excellence. Execution.
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}

function Audience() {
  const audiences = [
    {
      icon: Landmark,
      label: 'Institutional Investors',
    },
    {
      icon: Shield,
      label: 'Family Offices & Private Funds',
    },
    {
      icon: Building,
      label: 'Real Estate Developers',
    },
    {
      icon: Globe,
      label: 'Sustainable Capital Seekers',
    },
  ]

  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#1B2A4A' }}>
      <div className="max-w-6xl mx-auto">
        <FadeInUp>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance text-white">
            For Those Who Turn Capital into Impact
          </h2>
        </FadeInUp>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <FadeInUp key={index}>
                <div
                  className="p-6 rounded-xl border transition-all hover:scale-105"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderColor: 'rgba(196,167,106,0.2)',
                  }}
                >
                  <Icon size={28} className="mx-auto mb-4" style={{ color: '#C4A76A' }} />
                  <p className="text-lg font-semibold text-white">{audience.label}</p>
                </div>
              </FadeInUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#0F1E35' }}>
      <div className="max-w-4xl mx-auto text-center">
        <FadeInUp>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-balance">
            Let's Talk About Co-Investment Opportunities
          </h2>
        </FadeInUp>
        <FadeInUp>
          <p className="text-xl mb-10 text-white/70 leading-relaxed text-pretty">
            Connect with us to explore tailored co-investment and sustainable capital structuring opportunities in Costa
            Rica.
          </p>
        </FadeInUp>
        <FadeInUp>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <a
              href="https://wa.me/50672679806"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:scale-105"
              style={{ backgroundColor: '#C4A76A', color: '#1B2A4A' }}
            >
              💬 WhatsApp
            </a>
            <p className="text-white/60 text-sm mt-6">
              Abraham Álvarez · Managing Partner · marquesadvisory@gmail.com
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer
      className="py-12 px-6 border-t"
      style={{ backgroundColor: '#0C1628', borderColor: 'rgba(196,167,106,0.2)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div>
            <p className="text-lg font-bold mb-2" style={{ color: '#C4A76A' }}>
              Marqués Advisory & Investments
            </p>
            <p className="text-sm" style={{ color: '#C4A76A' }}>
              Abraham Álvarez · Managing Partner
            </p>
          </div>
          <div className="flex items-center gap-6 mt-6 md:mt-0">
            <a
              href="https://wa.me/50672679806"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-all hover:scale-110"
              style={{ color: '#C4A76A' }}
            >
              <span className="text-2xl">💬</span>
            </a>
            <a
              href="https://www.linkedin.com/in/josealvarezr/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-all hover:scale-110"
              style={{ color: '#C4A76A' }}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:marquesadvisory@gmail.com"
              className="p-2 rounded-lg transition-all hover:scale-110"
              style={{ color: '#C4A76A' }}
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="border-t text-center pt-8" style={{ borderColor: 'rgba(196,167,106,0.15)' }}>
          <p className="text-white/60 text-sm">
            © 2025 Marqués Advisory & Investments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
