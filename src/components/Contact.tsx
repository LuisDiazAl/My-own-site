export default function Contact() {
  return (
    <section id="contacto" className="py-24 px-6 lg:px-10">
      <div className="divider mb-24" />

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent text-sm font-medium tracking-wider uppercase mb-3">Hablemos</p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4 tracking-tight">
            <em className="font-serif not-italic text-accent">Contacto</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="mailto:484diazluis@gmail.com"
            className="glass-card flex flex-col items-center gap-4 p-6 rounded-xl transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13L2 4" />
              </svg>
            </div>
            <span className="text-text-muted group-hover:text-white transition-colors duration-300 text-sm text-center">
              484diazluis@gmail.com
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/luisdiazal/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card flex flex-col items-center gap-4 p-6 rounded-xl transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            <span className="text-text-muted group-hover:text-white transition-colors duration-300 text-sm">
              LinkedIn
            </span>
          </a>

          <a
            href="https://github.com/LuisDiazAl"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card flex flex-col items-center gap-4 p-6 rounded-xl transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </div>
            <span className="text-text-muted group-hover:text-white transition-colors duration-300 text-sm">
              GitHub
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
