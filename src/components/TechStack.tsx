const categories = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
          <circle cx="12" cy="12" r="2.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </svg>
      )},
      { name: 'Next.js', icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
          <circle cx="12" cy="12" r="10" />
          <path d="M7 7l8.5 10.5" />
          <path d="M16 7v10" />
        </svg>
      )},
      { name: 'Tailwind CSS', icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
          <path d="M6 8c1-3 3.5-4 6-4 4 0 5 3 7 3.5 1.5.5 3-.5 4-2" />
          <path d="M3 16.5c1-3 3.5-4 6-4 4 0 5 3 7 3.5 1.5.5 3-.5 4-2" />
        </svg>
      )},
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
          <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" />
          <path d="M12 7v10" />
          <path d="M7 9.5l5 3 5-3" />
        </svg>
      )},
      { name: 'Express', icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
          <path d="M3 12h18" />
          <path d="M3 6h18" />
          <path d="M3 18h18" />
          <circle cx="17" cy="12" r="3" />
        </svg>
      )},
      { name: 'SQL', icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
          <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
        </svg>
      )},
    ],
  },
  {
    title: 'Herramientas',
    items: [
      { name: 'Git / GitHub', icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="6" cy="18" r="2" />
          <path d="M6 8v10" />
          <path d="M18 8v2c0 2-2 4-4 4H8" />
        </svg>
      )},
      { name: 'Redes', icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
          <circle cx="12" cy="5" r="2" />
          <circle cx="5" cy="19" r="2" />
          <circle cx="19" cy="19" r="2" />
          <path d="M12 7v4" />
          <path d="M12 11l-5.5 6" />
          <path d="M12 11l5.5 6" />
        </svg>
      )},
      { name: 'Soporte Técnico', icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v4" />
          <path d="M12 19v4" />
          <path d="M1 12h4" />
          <path d="M19 12h4" />
          <path d="M4.22 4.22l2.83 2.83" />
          <path d="M16.95 16.95l2.83 2.83" />
          <path d="M4.22 19.78l2.83-2.83" />
          <path d="M16.95 7.05l2.83-2.83" />
        </svg>
      )},
    ],
  },
]

export default function TechStack() {
  return (
    <section id="stack" className="py-24 px-6 lg:px-10">
      <div className="divider mb-24" />

      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-medium tracking-wider uppercase mb-3">Tecnologías</p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">
            Stack <em className="font-serif not-italic text-accent">Tecnológico</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider text-center mb-6">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="glass-card flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group"
                  >
                    <div className="text-accent group-hover:text-white transition-colors duration-300 flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-text-primary text-sm font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
