// Import necessary modules or components here

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 bg-transparent">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="Marqués Advisory & Investments"
            className="w-auto"
            style={{ maxHeight: "70px", padding: "16px" }}
          />
          <span className="hidden md:block text-sm font-medium" style={{ color: "#C4A76A" }}>
            Boutique Investment & Real Estate Concierge
          </span>
        </div>
        <a
          href="https://wa.me/50672679806"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 text-sm md:text-base font-semibold rounded-lg transition-all hover:scale-105"
          style={{ backgroundColor: "#C4A76A", color: "#0C2F27" }}
        >
          Contacto
        </a>
      </div>
    </header>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
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
      style={{ backgroundColor: "#0C2F27" }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white text-balance">
          Strategy · Capital · Sustainable Execution
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed max-w-4xl mx-auto text-pretty">
          A boutique investment firm specializing in real estate co-investment, financial structuring, and green & blue
          capital raising through the Costa Rican National Stock Exchange.
        </p>
        <a
          href="https://wa.me/50672679806"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:scale-105"
          style={{ backgroundColor: "#C4A76A", color: "#0C2F27" }}
        >
          💬 Contact Us on WhatsApp
        </a>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    "Capital structuring and institutional co-investment",
    "Sustainable financing: green and blue bonds",
    "ESG-focused financial models with social and environmental impact",
    "Project development and asset management",
  ]

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance" style={{ color: "#0C2F27" }}>
          Integrated Solutions for Smart Capital
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border-2 transition-all hover:scale-105"
              style={{ borderColor: "#C4A76A" }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold"
                  style={{ backgroundColor: "#C4A76A", color: "#0C2F27" }}
                >
                  {index + 1}
                </div>
                <p className="text-lg leading-relaxed" style={{ color: "#0C2F27" }}>
                  {feature}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Concierge() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#F8F8F8" }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance" style={{ color: "#0C2F27" }}>
          Real Estate Concierge
        </h2>
        <p className="text-xl leading-relaxed text-pretty" style={{ color: "#0C2F27" }}>
          An exclusive service tailored for high-net-worth families and international advisory firms. We provide access
          to premium real estate opportunities, structured co-investments, and bespoke solutions across Costa Rica.
          Discretion, excellence, and execution define our approach.
        </p>
      </div>
    </section>
  )
}

function Audience() {
  const audiences = [
    "Institutional investors",
    "Family offices and private funds",
    "Real estate developers",
    "Investors seeking sustainable capital opportunities",
  ]

  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#F8F8F8" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance" style={{ color: "#0C2F27" }}>
          For Those Who Turn Capital into Impact
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="p-6 rounded-lg text-center transition-all hover:scale-105"
              style={{ backgroundColor: "white", border: "2px solid #C4A76A" }}
            >
              <p className="text-lg font-semibold" style={{ color: "#0C2F27" }}>
                {audience}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#0C2F27" }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-balance">
          Let's Talk About Co-Investment Opportunities
        </h2>
        <p className="text-xl mb-10 text-white/90 leading-relaxed text-pretty">
          Connect with us to explore tailored co-investment and sustainable capital structuring opportunities in Costa
          Rica.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <a
            href="https://wa.me/50672679806"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:scale-105"
            style={{ backgroundColor: "#C4A76A", color: "#0C2F27" }}
          >
            💬 WhatsApp
          </a>
          <p className="text-white/80">📍 Costa Rica</p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t" style={{ backgroundColor: "#0C2F27", borderColor: "#C4A76A" }}>
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-lg font-bold mb-2" style={{ color: "#C4A76A" }}>
          Marqués Advisory & Investments
        </p>
        <p className="text-white/70">Firma boutique de inversión y coinversión inmobiliaria</p>
        <p className="text-white/70 mt-4">
          © {new Date().getFullYear()} Marqués Advisory & Investments. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
