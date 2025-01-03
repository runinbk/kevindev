/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',    // azul oscuro
        secondary: '#3B82F6',  // azul
        accent: '#22D3EE',     // cyan
        dark: '#1F2937',       // gris oscuro
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
        code: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}