export default function About() {
  return (
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 bg-warm-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-warm-900 mb-8 text-center">
          Sobre mí
        </h2>

        <div className="space-y-6 text-warm-800">
          <p className="text-lg leading-relaxed">
            Soy un analista de sistemas con experiencia especializado en la evaluación, diseño e implementación de soluciones tecnológicas.
          </p>

          <p className="text-lg leading-relaxed">
            Mi enfoque se centra en entender los desafíos específicos de tu organización para proporcionar soluciones prácticas, escalables y seguras que generen valor real.
          </p>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-warm-900 mb-4">
              Áreas de especialización
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Infraestructura y Networking',
                'Seguridad Informática',
                'Bases de Datos',
                'Computación en la Nube',
                'Administración de Sistemas',
                'Consultoría Tecnológica'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-warm-700">
                  <span className="text-warm-700 mr-3 text-xl">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
