import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Analista de Sistemas',
  description: 'Soluciones tecnológicas y consultoría en sistemas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-warm-50 text-warm-900">{children}</body>
    </html>
  )
}
