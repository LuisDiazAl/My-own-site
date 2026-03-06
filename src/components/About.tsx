import Image from 'next/image'

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 px-4 sm:px-6 lg:px-8 bg-navy">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center font-montserrat">
          Sobre mí
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-14">
          <div className="flex-shrink-0">
            <Image
              src="/profile.jpeg"
              alt="Luis Diaz"
              width={280}
              height={280}
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>

          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              Soy una persona analítica y orientada al detalle, con un enfoque minucioso en la resolución de tareas y problemas. Me caracterizo por la observación, el pensamiento crítico y el compromiso con la aplicación de buenas prácticas en cada desarrollo.
            </p>

            <p className="text-lg leading-relaxed">
              Tengo un fuerte interés por la inteligencia artificial y las tecnologías emergentes, con una mentalidad de aprendizaje continuo y adaptación constante a nuevos desafíos del entorno tecnológico.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
