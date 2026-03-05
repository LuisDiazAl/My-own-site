'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Form submitted:', formData)
    setFormData({ nombre: '', email: '', mensaje: '' })
    alert('Mensaje enviado. Me pondré en contacto pronto.')
  }

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-warm-900 mb-4">
            Contacto
          </h2>
          <p className="text-warm-700 text-lg">
            Déjame un mensaje y me pondré en contacto contigo
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nombre" className="block text-warm-900 font-medium mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:outline-none focus:border-warm-600 bg-warm-50"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-warm-900 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:outline-none focus:border-warm-600 bg-warm-50"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-warm-900 font-medium mb-2">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:outline-none focus:border-warm-600 bg-warm-50 resize-none"
              placeholder="Cuéntame sobre tu proyecto o consulta"
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-warm-700 text-white rounded-lg hover:bg-warm-800 transition font-medium text-lg"
          >
            Enviar Mensaje
          </button>
        </form>

        <div className="mt-12 pt-8 border-t border-warm-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-warm-900 font-semibold mb-2">Email</h3>
              <a href="mailto:contacto@example.com" className="text-warm-700 hover:text-warm-500 transition">
                contacto@example.com
              </a>
            </div>
            <div>
              <h3 className="text-warm-900 font-semibold mb-2">Redes Sociales</h3>
              <div className="flex gap-4">
                <a href="#" className="text-warm-700 hover:text-warm-500 transition">
                  LinkedIn
                </a>
                <a href="#" className="text-warm-700 hover:text-warm-500 transition">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
