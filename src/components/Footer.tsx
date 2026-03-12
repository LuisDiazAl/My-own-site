export default function Footer() {
  return (
    <footer className="border-t border-border-subtle py-8 px-6 lg:px-10">
      <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-text-muted text-sm">
          &copy; 2026 Luis Diaz. Todos los derechos reservados.
        </p>
        <p className="text-text-muted text-sm">
          Hecho con Next.js &bull; Tailwind CSS &bull; Vercel
        </p>
      </div>
    </footer>
  )
}
