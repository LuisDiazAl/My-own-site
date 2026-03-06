export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-navy mb-8 font-montserrat">
          Luis Diaz
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed">
          Analista de Sistemas & Desarrollador Full Stack JR
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="px-8 py-3 bg-accent text-white rounded-lg hover:bg-orange-600 hover:scale-105 transition-all duration-300 font-medium"
          >
            Contactame
          </a>
          <a
            href="#proyectos"
            className="px-8 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white hover:scale-105 transition-all duration-300 font-medium"
          >
            Ver Proyectos
          </a>
        </div>
      </div>
    </section>
  )
}
