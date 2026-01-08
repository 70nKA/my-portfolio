/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        schematic: {
          bg: '#f8f9fb',
          surface: '#ffffff',
          grid: '#dde1ea',
          accent: '#0064d2',
          text: '#1a1f2b',
          muted: '#6b7280',
        },
        pcb: {
          bg: '#05060a',
          surface: '#10121a',
          dot: '#262939',
          traceRed: '#ff4b5c',
          traceBlue: '#00b0ff',
          text: '#e5e7eb',
          muted: '#9ca3af',
        },
      },
    },
  },
  plugins: [],
};