const services = [
  {
    icon: '🏗️',
    title: 'Análisis de Infraestructura',
    description: 'Evaluación completa de tu infraestructura tecnológica para identificar mejoras y optimizaciones'
  },
  {
    icon: '🔒',
    title: 'Seguridad de Sistemas',
    description: 'Implementación de medidas de seguridad robustas para proteger tus datos y sistemas'
  },
  {
    icon: '📊',
    title: 'Auditoría de Bases de Datos',
    description: 'Revisión exhaustiva de tus bases de datos para garantizar rendimiento y integridad'
  },
  {
    icon: '⚙️',
    title: 'Optimización de Procesos',
    description: 'Mejora de eficiencia mediante automatización y optimización de procesos empresariales'
  },
  {
    icon: '☁️',
    title: 'Migración a la Nube',
    description: 'Planificación e implementación de migraciones a infraestructura en la nube'
  },
  {
    icon: '📈',
    title: 'Consultoría Tecnológica',
    description: 'Asesoramiento estratégico para la adopción de nuevas tecnologías y mejores prácticas'
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-warm-900 mb-4">
            Servicios
          </h2>
          <p className="text-warm-700 text-lg">
            Soluciones especializadas para tu infraestructura tecnológica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-warm-200 hover:border-warm-400 hover:shadow-lg transition bg-warm-50"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-warm-900 mb-2">
                {service.title}
              </h3>
              <p className="text-warm-700">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
