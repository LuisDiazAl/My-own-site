export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-10 pt-20 overflow-hidden">
      <div className="hero-glow" />
      <div className="grid-pattern absolute inset-0 opacity-50" />

      <div className="relative z-10 max-w-[936px] mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-glass border border-border-subtle text-text-muted text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Analista de Sistemas & Desarrollador Full Stack JR
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
          Creando{' '}
          <em className="font-serif not-italic text-accent">soluciones</em>
          <br />
          tecnológicas
        </h1>

        <p className="text-lg sm:text-xl text-text-muted max-w-xl mx-auto mb-10 leading-relaxed">
          Analista de Sistemas & Desarrollador Full Stack JR con enfoque en buenas prácticas e inteligencia artificial.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-accent text-primary font-medium rounded-full btn-glow hover:bg-white transition-all duration-300"
          >
            Contactame
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
          <a
            href="#proyectos"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 border border-border-subtle text-text-primary rounded-full hover:bg-glass hover:border-accent/30 transition-all duration-300"
          >
            Ver Proyectos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
