export default function Projects() {
  return (
    <section id="proyectos" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1E293B]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-montserrat">
            Proyectos
          </h2>
          <p className="text-gray-400 text-lg">
            Mi portafolio de trabajo
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-navy/50 border border-gray-700 rounded-2xl p-12 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 max-w-lg w-full">
            <div className="flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent mb-6"
              >
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <path d="M12 12h.01" />
                <path d="M17 12h.01" />
                <path d="M7 12h.01" />
              </svg>
              <h3 className="text-2xl font-semibold text-white mb-3 font-montserrat">
                En construcción
              </h3>
              <p className="text-gray-400 text-center">
                Estoy trabajando en nuevos proyectos. Pronto estarán disponibles aquí.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
