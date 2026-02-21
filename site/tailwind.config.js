/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        charcoal: {
          950: '#030406',
          900: '#0A0C10',
          800: '#111418',
        },
        navy: {
          950: '#01050A',
          900: '#050B14',
          800: '#0A1325',
        },
        saudi: {
          DEFAULT: '#1E4631',
          dark: '#122E20',
          light: '#2E6948',
          accent: '#449767',
        },
        border: 'var(--border)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
