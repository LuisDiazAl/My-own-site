export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-warm-50 via-warm-100 to-warm-50">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-warm-900 mb-6">
          Soluciones en Sistemas
        </h1>
        <p className="text-xl sm:text-2xl text-warm-700 mb-8 leading-relaxed">
          Consultoría y análisis de sistemas para optimizar tu infraestructura tecnológica
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="px-8 py-3 bg-warm-700 text-white rounded-lg hover:bg-warm-800 transition font-medium"
          >
            Contactame
          </a>
          <a
            href="#servicios"
            className="px-8 py-3 border-2 border-warm-700 text-warm-700 rounded-lg hover:bg-warm-700 hover:text-white transition font-medium"
          >
            Ver Servicios
          </a>
        </div>
      </div>
    </section>
  )
}
