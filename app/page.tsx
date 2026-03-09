'use client'

import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../i18n'

function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex gap-2">
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={`px-3 py-1 text-sm font-semibold rounded transition-all duration-300 ${
          i18n.language === 'en'
            ? 'border-2'
            : 'border border-transparent hover:border'
        }`}
        style={{
          borderColor: '#D4AF37',
          color: i18n.language === 'en' ? '#D4AF37' : '#E0E0E0',
          backgroundColor: i18n.language === 'en' ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
        }}
      >
        EN
      </button>
      <button
        onClick={() => i18n.changeLanguage('es')}
        className={`px-3 py-1 text-sm font-semibold rounded transition-all duration-300 ${
          i18n.language === 'es'
            ? 'border-2'
            : 'border border-transparent hover:border'
        }`}
        style={{
          borderColor: '#D4AF37',
          color: i18n.language === 'es' ? '#D4AF37' : '#E0E0E0',
          backgroundColor: i18n.language === 'es' ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
        }}
      >
        ES
      </button>
    </div>
  )
}

function Header() {
  const { t } = useTranslation()
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Marqués Advisory" className="h-16 w-auto" />
        </div>
        <div className="flex items-center gap-6">
          <LanguageSwitcher />
          <a
            href="https://wa.me/50672679806"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 text-sm md:text-base font-semibold border-2 transition-all duration-300 rounded-sm hover:shadow-lg"
            style={{
              borderColor: '#D4AF37',
              color: '#D4AF37',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.6)'
              e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            {t('header.contact')}
          </a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  const { t } = useTranslation()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden"
      style={{
        backgroundImage: 'url(/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 31, 63, 0.75) 0%, rgba(0, 31, 63, 0.65) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-in fade-in duration-1000">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-white text-balance leading-tight">
          {t('hero.mainTitle')}
        </h1>

        <div className="space-y-6">
          <p
            className="text-lg md:text-xl font-light tracking-wider"
            style={{ color: '#D4AF37' }}
          >
            {t('hero.services')}
          </p>

          <p className="text-base md:text-lg leading-relaxed text-white/90 max-w-3xl mx-auto">
            {t('hero.tagline')}
          </p>

          <p className="text-sm md:text-base tracking-widest text-white/80 uppercase">
            {t('hero.execution')}
          </p>
        </div>

        <div className="pt-8">
          <a
            href="https://wa.me/50672679806"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 text-lg font-semibold border-2 transition-all duration-500 rounded-sm hover:shadow-2xl"
            style={{
              borderColor: '#D4AF37',
              color: '#D4AF37',
              backgroundColor: 'rgba(212, 175, 55, 0.05)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.8)'
              e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.05)'
            }}
          >
            {t('hero.cta')}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{
          animation: 'bounce 2s infinite',
          color: '#D4AF37',
        }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

function Solutions() {
  const { t } = useTranslation()
  const solutions = t('solutions.items', { returnObjects: true }) as Array<{ title: string; description: string }>

  return (
    <section className="py-24 md:py-32 px-6" style={{ backgroundColor: '#001F3F' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white text-balance">
            {t('solutions.heading')}
          </h2>
          <div className="h-1 w-24 mx-auto" style={{ backgroundColor: '#D4AF37' }} />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="p-8 md:p-10 rounded-sm border-2 transition-all duration-500 hover:shadow-2xl group"
              style={{
                borderColor: '#D4AF37',
                backgroundColor: 'rgba(13, 43, 71, 0.5)',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 40px rgba(212, 175, 55, 0.4)'
                e.currentTarget.style.backgroundColor = 'rgba(13, 43, 71, 0.8)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.backgroundColor = 'rgba(13, 43, 71, 0.5)'
              }}
            >
              <div className="flex gap-4 mb-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold text-lg transition-colors duration-500 group-hover:scale-110"
                  style={{
                    backgroundColor: '#D4AF37',
                    color: '#001F3F',
                  }}
                >
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-white">
                {solution.title}
              </h3>
              <p className="text-base leading-relaxed text-white/80 font-light">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Concierge() {
  const { t } = useTranslation()
  return (
    <section className="py-24 md:py-32 px-6" style={{ backgroundColor: '#0D2B47' }}>
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white text-balance mb-4">
            {t('concierge.heading')}
          </h2>
          <div className="h-1 w-24 mx-auto" style={{ backgroundColor: '#D4AF37' }} />
        </div>

        <p className="text-lg md:text-xl leading-relaxed text-white/85 font-light">
          {t('concierge.description')}
        </p>

        <div className="space-y-4 pt-8">
          <p className="text-white/70 text-sm uppercase tracking-widest">
            {t('concierge.values')}
          </p>
          <p className="text-base text-white/80">
            {t('concierge.details')}
          </p>
        </div>
      </div>
    </section>
  )
}

function Audience() {
  const { t } = useTranslation()
  const audiences = t('audience.items', { returnObjects: true }) as Array<{ title: string; description: string }>

  return (
    <section className="py-24 md:py-32 px-6" style={{ backgroundColor: '#001F3F' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white text-balance">
            {t('audience.heading')}
          </h2>
          <div className="h-1 w-24 mx-auto" style={{ backgroundColor: '#D4AF37' }} />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="p-6 md:p-8 rounded-sm border border-opacity-40 transition-all duration-500 text-center hover:scale-105 group"
              style={{
                backgroundColor: 'rgba(13, 43, 71, 0.4)',
                borderColor: '#D4AF37',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(13, 43, 71, 0.8)'
                e.currentTarget.style.borderColor = '#D4AF37'
                e.currentTarget.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(13, 43, 71, 0.4)'
                e.currentTarget.style.borderColor = '#D4AF37'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <h3 className="text-lg md:text-xl font-serif font-bold mb-3 text-white">
                {audience.title}
              </h3>
              <p className="text-sm md:text-base text-white/75 font-light leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const { t } = useTranslation()
  return (
    <section className="py-24 md:py-32 px-6" style={{ backgroundColor: '#0D2B47' }}>
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white text-balance mb-4">
            {t('contact.heading')}
          </h2>
          <div className="h-1 w-24 mx-auto" style={{ backgroundColor: '#D4AF37' }} />
        </div>

        <p className="text-lg md:text-xl leading-relaxed text-white/85 font-light">
          {t('contact.description')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
          <a
            href="https://wa.me/50672679806"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 text-lg font-semibold border-2 transition-all duration-500 rounded-sm hover:shadow-2xl"
            style={{
              borderColor: '#D4AF37',
              color: '#D4AF37',
              backgroundColor: 'rgba(212, 175, 55, 0.05)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.8)'
              e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.05)'
            }}
          >
            {t('contact.cta')}
          </a>
          <span className="text-white/60 text-lg">{t('contact.location')}</span>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="py-12 md:py-16 px-6 border-t" style={{ backgroundColor: '#001F3F', borderColor: '#D4AF37' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <div>
            <h3 className="text-xl md:text-2xl font-serif font-bold mb-2" style={{ color: '#D4AF37' }}>
              {t('footer.title')}
            </h3>
            <p className="text-white/70 text-sm">{t('footer.subtitle')}</p>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4">
            <a
              href="https://wa.me/50672679806"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              title="WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.6 6.3C15.9 4.6 13.6 3.6 11.1 3.6 6.6 3.6 3 7.2 3 11.7c0 1.9.5 3.7 1.5 5.3L3 21l5.6-1.8c1.5.8 3.3 1.3 5.1 1.3 4.5 0 8.1-3.6 8.1-8.1 0-2.2-.8-4.2-2.1-5.8zM11.1 19c-1.6 0-3.1-.4-4.4-1.3l-.3-.2-3.1 1 1-2.9-.2-.3C4.4 14.7 4 13.4 4 11.7c0-3.9 3.2-7.1 7.1-7.1 1.9 0 3.7.7 5 2 1.3 1.3 2 3.1 2 5 0 3.9-3.2 7.1-7.1 7.1zm3.9-5.3c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.7.9-.9 1.1-.2.2-.4.2-.6.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5.1-.1.2-.3.3-.4.1-.1.2-.2.2-.4.1-.2 0-.3-.1-.4-.1-.1-.6-1.4-.8-1.9-.2-.4-.4-.4-.6-.4-.2 0-.4 0-.6 0-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s.2 2.8.3 3c.1.2 1.8 2.7 4.4 3.8 2.5 1.1 2.5.7 3 .7.4 0 1.3-.2 1.5-.5.2-.2.2-1.3.1-1.5z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/josealvarezr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
            </a>
          </div>

          <div className="border-t border-white/20 pt-6 text-white/50 text-xs">
            <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
            <p className="mt-2">{t('footer.location')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-in {
          animation: fadeInDown 1s ease-out;
        }
      `}</style>
      <Header />
      <Hero />
      <Solutions />
      <Concierge />
      <Audience />
      <Contact />
      <Footer />
    </main>
  )
}
