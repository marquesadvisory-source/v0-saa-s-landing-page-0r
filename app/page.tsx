'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'

type Language = 'en' | 'es'

const translations = {
  en: {
    nav: {
      contact: 'Contact Confidentially',
    },
    hero: {
      title: 'CONNECTING GLOBAL CAPITAL WITH STRATEGIC OPPORTUNITIES',
      subtitle: 'PROJECT STRUCTURING | CO-INVESTMENT | REAL ASSETS',
      tagline: 'Boutique Investment & Real Estate Concierge',
    },
    models: {
      title: 'Investment Partnership Models',
      structures: [
        {
          name: 'SALE & LEASEBACK',
          description: 'Purchase existing assets to lease them back to the seller',
          sectors: 'Industrial, Logistics, Hospitality',
        },
        {
          name: 'BUILD-TO-SUIT (BTS)',
          description: 'Develop facilities tailored to tenant needs with pre-lease agreements',
          sectors: 'Medical Devices, Logistics, Hospitality',
        },
        {
          name: 'JOINT VENTURE (JV)',
          description: 'Co-invest partnership with investors to develop or reposition assets',
          sectors: 'Industrial, Renewable Energy, Resorts',
        },
        {
          name: 'INFRASTRUCTURE / RENEWABLE ENERGY',
          description: 'Develop or co-invest in sustainable energy or infrastructure solutions',
          sectors: 'Industrial, Logistics, Tourism',
        },
        {
          name: 'ASSET DEVELOPMENT & MANAGEMENT',
          description: 'From concept to operation: full-cycle asset development and management',
          sectors: 'Industrial, Logistics, Mixed-Use Projects',
        },
        {
          name: 'PRIVATE CAPITAL PARTNERSHIPS',
          description: 'Club deals and syndications to co-invest in strategic projects',
          sectors: 'Hospitality, Residential, Industrial',
        },
      ],
    },
    concierge: {
      title: 'Exclusive Real Estate Concierge',
      description: 'Curated real estate opportunities for family offices and UHNWIs. Strategic property acquisition, divestiture advisory, and bespoke real estate solutions designed for discerning investors.',
    },
    cta: {
      heading: 'Ready to Explore Exclusive Investment Opportunities?',
      button: 'Contact Our Investment Team',
    },
    footer: {
      location: 'San José, Costa Rica',
      tagline: 'Where Global Capital Meets Strategic Opportunity',
      copyright: '© 2025 Marqués Advisory & Investments. All rights reserved.',
    },
  },
  es: {
    nav: {
      contact: 'Contactar Confidencialmente',
    },
    hero: {
      title: 'CONECTANDO CAPITAL GLOBAL CON OPORTUNIDADES ESTRATÉGICAS',
      subtitle: 'ESTRUCTURACIÓN DE PROYECTOS | CO-INVERSIÓN | ACTIVOS REALES',
      tagline: 'Concierge de Inversión y Bienes Raíces de Boutique',
    },
    models: {
      title: 'Modelos de Asociación de Inversión',
      structures: [
        {
          name: 'VENTA Y ARRENDAMIENTO',
          description: 'Compra de activos existentes para cederlos en arrendamiento al vendedor',
          sectors: 'Industrial, Logística, Hospitalidad',
        },
        {
          name: 'CONSTRUCCIÓN A MEDIDA (BTS)',
          description: 'Desarrollo de instalaciones adaptadas a las necesidades del inquilino con acuerdos de pre-arrendamiento',
          sectors: 'Dispositivos Médicos, Logística, Hospitalidad',
        },
        {
          name: 'JOINT VENTURE (JV)',
          description: 'Asociación de co-inversión con inversionistas para desarrollar o reposicionar activos',
          sectors: 'Industrial, Energía Renovable, Resorts',
        },
        {
          name: 'INFRAESTRUCTURA / ENERGÍA RENOVABLE',
          description: 'Desarrollo o co-inversión en soluciones de energía sostenible e infraestructura',
          sectors: 'Industrial, Logística, Turismo',
        },
        {
          name: 'DESARROLLO Y GESTIÓN DE ACTIVOS',
          description: 'De concepto a operación: desarrollo y gestión de activos de ciclo completo',
          sectors: 'Industrial, Logística, Proyectos de Uso Mixto',
        },
        {
          name: 'ASOCIACIONES DE CAPITAL PRIVADO',
          description: 'Acuerdos de club y sindicaciones para co-invertir en proyectos estratégicos',
          sectors: 'Hospitalidad, Residencial, Industrial',
        },
      ],
    },
    concierge: {
      title: 'Concierge Exclusivo de Bienes Raíces',
      description: 'Oportunidades inmobiliarias seleccionadas para oficinas familiares e inversionistas de alto patrimonio neto. Adquisición de propiedades estratégicas, asesoramiento en desinversión y soluciones inmobiliarias diseñadas específicamente para inversionistas distinguidos.',
    },
    cta: {
      heading: '¿Listo para Explorar Oportunidades de Inversión Exclusivas?',
      button: 'Contactar Nuestro Equipo de Inversiones',
    },
    footer: {
      location: 'San José, Costa Rica',
      tagline: 'Donde el Capital Global se Encuentra con Oportunidades Estratégicas',
      copyright: '© 2025 Marqués Advisory & Investments. Todos los derechos reservados.',
    },
  },
}

export default function Home() {
  const [language, setLanguage] = useState<Language>('en')
  const t = translations[language]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Marqués Advisory"
              width={120}
              height={50}
              className="h-12 w-auto"
            />
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm font-semibold rounded transition-all duration-300 ${
                  language === 'en'
                    ? 'border-2 border-accent bg-accent/10 text-accent'
                    : 'border border-accent/30 text-gray-400 hover:border-accent/60'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 text-sm font-semibold rounded transition-all duration-300 ${
                  language === 'es'
                    ? 'border-2 border-accent bg-accent/10 text-accent'
                    : 'border border-accent/30 text-gray-400 hover:border-accent/60'
                }`}
              >
                ES
              </button>
            </div>

            <div className="flex gap-4">
              <a
                href="https://wa.me/50672679806"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors"
                title="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371 0-.57 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.773 1.149l-.334.196-3.46-.86.876 3.387.23.364a9.758 9.758 0 00-1.469 4.972c0 5.475 4.457 9.986 9.926 9.986 2.649 0 5.129-.823 7.153-2.413l.371-.252 3.596.853-.847-3.48.266-.43a9.75 9.75 0 001.378-4.466c0-5.474-4.457-9.986-9.926-9.986z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/josealvarezr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors"
                title="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-screen mt-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/hero-bg-new.jpg)',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <Image
              src="/logo.png"
              alt="Marqués Advisory"
              width={180}
              height={120}
              className="h-24 w-auto mx-auto"
            />
          </div>

          {/* Hero Text */}
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight">
              {t.hero.title}
            </h1>

            <div className="flex items-center justify-center gap-4 text-accent text-xl md:text-2xl font-semibold">
              <div className="h-0.5 w-16 bg-gradient-to-r from-accent to-transparent" />
              <span>{t.hero.subtitle}</span>
              <div className="h-0.5 w-16 bg-gradient-to-l from-accent to-transparent" />
            </div>

            <p className="text-gray-200 text-lg md:text-xl italic">
              {t.hero.tagline}
            </p>

            <div className="pt-8">
              <a
                href="https://wa.me/50672679806"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-accent text-background font-bold text-lg rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
              >
                {t.nav.contact}
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Investment Partnership Models */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-accent mb-2">
              {t.models.title}
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto" />
          </div>

          {/* Responsive Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-6 py-4 text-left font-bold text-sm">STRUCTURE</th>
                  <th className="px-6 py-4 text-left font-bold text-sm">DESCRIPTION</th>
                  <th className="px-6 py-4 text-left font-bold text-sm">TARGET SECTORS</th>
                </tr>
              </thead>
              <tbody>
                {t.models.structures.map((structure, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-accent/20 ${
                      idx % 2 === 0 ? 'bg-primary/50' : 'bg-primary/30'
                    } hover:bg-primary/60 transition-colors`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="font-semibold text-white text-sm">
                          {structure.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-200 text-sm">
                      {structure.description}
                    </td>
                    <td className="px-6 py-4 text-gray-200 text-sm">
                      {structure.sectors}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Real Estate Concierge */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-accent mb-6">
            {t.concierge.title}
          </h2>
          <p className="text-gray-200 text-lg leading-relaxed">
            {t.concierge.description}
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8">
            {t.cta.heading}
          </h2>
          <a
            href="https://wa.me/50672679806"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-accent text-background font-bold text-lg rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
          >
            {t.cta.button}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/50 border-t border-accent/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/logo.png"
                alt="Marqués Advisory"
                width={100}
                height={60}
                className="h-10 w-auto"
              />
            </div>

            <div className="text-center">
              <p className="text-accent font-semibold mb-1">
                {t.footer.location}
              </p>
              <p className="text-gray-400 text-sm italic">
                {t.footer.tagline}
              </p>
            </div>

            <div className="flex justify-center md:justify-end gap-6">
              <a
                href="https://wa.me/50672679806"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371 0-.57 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.773 1.149l-.334.196-3.46-.86.876 3.387.23.364a9.758 9.758 0 00-1.469 4.972c0 5.475 4.457 9.986 9.926 9.986 2.649 0 5.129-.823 7.153-2.413l.371-.252 3.596.853-.847-3.48.266-.43a9.75 9.75 0 001.378-4.466c0-5.474-4.457-9.986-9.926-9.986z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/josealvarezr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="border-t border-accent/20 pt-8 text-center text-gray-400 text-sm">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>

      {/* Add custom animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
