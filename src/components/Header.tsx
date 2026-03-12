'use client'

import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/60 backdrop-blur-xl border-b border-border-subtle">
      <nav className="max-w-[1100px] mx-auto px-6 lg:px-10 py-5 flex justify-between items-center">
        <a href="#" className="text-2xl font-semibold text-white tracking-tight">
          Luis Diaz
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-text-muted hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-2 md:gap-8 absolute md:relative top-[65px] md:top-0 left-0 right-0 md:left-auto md:right-auto bg-primary/95 md:bg-transparent p-6 md:p-0 border-b md:border-0 border-border-subtle backdrop-blur-xl md:backdrop-blur-none`}>
          <a href="#sobre-mi" onClick={() => setIsOpen(false)} className="text-sm text-text-muted hover:text-white transition-colors duration-200 py-2 md:py-0">Sobre mí</a>
          <a href="#stack" onClick={() => setIsOpen(false)} className="text-sm text-text-muted hover:text-white transition-colors duration-200 py-2 md:py-0">Stack</a>
          <a href="#proyectos" onClick={() => setIsOpen(false)} className="text-sm text-text-muted hover:text-white transition-colors duration-200 py-2 md:py-0">Proyectos</a>
          <a href="#contacto" onClick={() => setIsOpen(false)} className="text-sm text-text-muted hover:text-white transition-colors duration-200 py-2 md:py-0">Contacto</a>
        </div>
      </nav>
    </header>
  )
}
