export default function Projects() {
  return (
    <section id="proyectos" className="py-24 px-6 lg:px-10">
      <div className="divider mb-24" />

      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-medium tracking-wider uppercase mb-3">Portafolio</p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4 tracking-tight">
            Mis <em className="font-serif not-italic text-accent">Proyectos</em>
          </h2>
          <p className="text-text-muted text-lg">
            Mi portafolio de trabajo
          </p>
        </div>

        <div className="flex justify-center">
          <div className="glass-card rounded-2xl p-12 max-w-lg w-full transition-all duration-300 group">
            <div className="flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent"
                >
                  <rect x="2" y="6" width="20" height="12" rx="2" />
                  <path d="M12 12h.01" />
                  <path d="M17 12h.01" />
                  <path d="M7 12h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                En construcción
              </h3>
              <p className="text-text-muted text-center">
                Estoy trabajando en nuevos proyectos. Pronto estarán disponibles aquí.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
