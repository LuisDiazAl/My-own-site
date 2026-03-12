import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#04070d',
        surface: '#10131c',
        'surface-light': '#181c28',
        accent: '#a6daff',
        'accent-dim': '#6bb8f0',
        'text-primary': '#d5dbe6',
        'text-muted': '#8a94a6',
        'border-subtle': 'rgba(255, 255, 255, 0.08)',
        'glass': 'rgba(255, 255, 255, 0.05)',
        'glass-hover': 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-instrument-serif)', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
export default config
