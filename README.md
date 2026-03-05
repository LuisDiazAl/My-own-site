# Landing Page - Analista de Sistemas

Una landing page minimalista con colores cálidos para un analista de sistemas, construida con **Next.js**, **Tailwind CSS** y optimizada para **Vercel**.

## 🚀 Características

- ✨ Diseño minimalista y profesional
- 🎨 Paleta de colores cálidos personalizada
- 📱 Responsive y mobile-friendly
- ⚡ Rendimiento optimizado (Next.js)
- 🎯 SEO-friendly
- 📧 Formulario de contacto integrado

## 🛠️ Tecnologías

- **Next.js 14** - Framework React moderno
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Utilidades CSS
- **Vercel** - Hosting y deployment

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar el servidor de producción
npm start
```

## 📂 Estructura del Proyecto

```
src/
├── app/
│   ├── page.tsx          # Página principal
│   ├── layout.tsx        # Layout global
│   └── globals.css       # Estilos globales
└── components/
    ├── Header.tsx        # Navegación
    ├── Hero.tsx          # Sección principal
    ├── Services.tsx      # Servicios ofrecidos
    ├── About.tsx         # Sobre mí
    ├── Contact.tsx       # Formulario de contacto
    └── Footer.tsx        # Pie de página
```

## 🎨 Personalización

### Colores Cálidos
La paleta de colores está definida en `tailwind.config.ts`. Los colores van desde tonos claros (warm-50) hasta tonos oscuros (warm-900).

### Contenido
Edita los siguientes componentes para actualizar el contenido:
- **Hero.tsx** - Texto principal y CTA
- **Services.tsx** - Lista de servicios
- **About.tsx** - Información personal
- **Contact.tsx** - Datos de contacto

## 🚀 Deploy en Vercel

```bash
# Conectar repositorio
vercel

# Deploy automático en cada push a main
```

O simplemente conecta tu repositorio en [Vercel Dashboard](https://vercel.com/dashboard)

## 📝 Próximas Mejoras

- [ ] Integrar backend para procesar formularios
- [ ] Agregar blog o sección de casos de estudio
- [ ] Implementar analytics
- [ ] Agregar más secciones según necesites
