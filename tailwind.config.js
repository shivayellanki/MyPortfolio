/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        surface: {
          DEFAULT: '#121215',
          hover: '#18181c',
          border: '#27272a',
        },
        accent: {
          DEFAULT: '#10b981', // Emerald
          glow: 'rgba(16, 185, 129, 0.15)',
          light: '#34d399',
          dark: '#059669',
        },
        primary: {
          50: '#f4f4f5',
          100: '#e4e4e7',
          200: '#d4d4d8',
          300: '#a1a1aa',
          400: '#71717a',
          500: '#52525b',
          600: '#3f3f46',
          700: '#27272a',
          800: '#18181b',
          900: '#09090b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
        'radial-gradient': "radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.08) 0%, transparent 60%)",
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(16, 185, 129, 0.25)',
        'glow-lg': '0 0 40px -10px rgba(16, 185, 129, 0.35)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
