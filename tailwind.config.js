import typography from '@tailwindcss/typography'

/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        parchment: '#F3E5AB',
        cream: '#F5F1E8', 
        stone: '#818589',
        rust: '#B7410E',
        crimson: '#8B0000',
        iron: '#43464B',
        charcoal: '#36393F'
      },
      fontFamily: {
        serif: ['Cinzel', 'serif']
      }
    },
  },
  plugins: [
    typography
  ],
}