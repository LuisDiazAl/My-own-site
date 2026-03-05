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
        warm: {
          50: '#faf5f0',
          100: '#f5ebe1',
          200: '#ead7c3',
          300: '#dfc3a5',
          400: '#d4af87',
          500: '#c99a6a',
          600: '#b68553',
          700: '#93673c',
          800: '#6f4f2e',
          900: '#4a3621',
        }
      }
    },
  },
  plugins: [],
}
export default config
