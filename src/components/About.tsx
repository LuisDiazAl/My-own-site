import Image from 'next/image'

export default function About() {
  return (
    <section id="sobre-mi" className="relative py-24 px-6 lg:px-10">
      <div className="divider mb-24" />

      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-medium tracking-wider uppercase mb-3">Conóceme</p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">
            Sobre <em className="font-serif not-italic text-accent">mí</em>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-14">
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl blur-sm" />
              <Image
                src="/profile.jpeg"
                alt="Luis Diaz"
                width={280}
                height={280}
                className="relative rounded-2xl object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-text-muted leading-relaxed">
              Soy una persona analítica y orientada al detalle, con un enfoque minucioso en la resolución de tareas y problemas. Me caracterizo por la observación, el pensamiento crítico y el compromiso con la aplicación de buenas prácticas en cada desarrollo.
            </p>

            <p className="text-lg text-text-muted leading-relaxed">
              Tengo un fuerte interés por la inteligencia artificial y las tecnologías emergentes, con una mentalidad de aprendizaje continuo y adaptación constante a nuevos desafíos del entorno tecnológico.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
