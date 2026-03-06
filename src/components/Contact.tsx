export default function Contact() {
  return (
    <section id="contacto" className="py-24 px-4 sm:px-6 lg:px-8 bg-navy">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-montserrat">
            Contacto
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <a
            href="mailto:484diazluis@gmail.com"
            className="flex flex-col items-center gap-3 p-6 bg-[#1E293B] rounded-xl border border-gray-700 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
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
            <span className="text-gray-300 group-hover:text-accent transition-all duration-300 text-sm text-center">
              484diazluis@gmail.com
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/luisdiazal/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 bg-[#1E293B] rounded-xl border border-gray-700 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
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
            <span className="text-gray-300 group-hover:text-accent transition-all duration-300 text-sm">
              LinkedIn
            </span>
          </a>

          <a
            href="https://github.com/LuisDiazAl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 bg-[#1E293B] rounded-xl border border-gray-700 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
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
            <span className="text-gray-300 group-hover:text-accent transition-all duration-300 text-sm">
              GitHub
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
