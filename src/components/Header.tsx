'use client'

import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-warm-200">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-warm-700">
          SysAnalyst
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-warm-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className={`${isOpen ? 'block' : 'hidden'} md:block md:flex gap-8 absolute md:relative top-16 md:top-0 left-0 right-0 md:left-auto md:right-auto bg-white md:bg-transparent p-4 md:p-0 border-b md:border-0 border-warm-200`}>
          <a href="#servicios" className="text-warm-700 hover:text-warm-500 transition">Servicios</a>
          <a href="#sobre-mi" className="text-warm-700 hover:text-warm-500 transition">Sobre mí</a>
          <a href="#contacto" className="text-warm-700 hover:text-warm-500 transition">Contacto</a>
        </div>
      </nav>
    </header>
  )
}
