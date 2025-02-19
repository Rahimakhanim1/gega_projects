/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        gemunu: ["Sour Gummy", 'sans-serif'],
        open: ['Open Sans', 'sans-serif']
      },

      colors: {
        'gega-red': '#BC1A45',
        'gega-melon': '#FFD369',
        'gega-grey': '#DDDDDD',
        'gega-white': '#F7F7F7'
      },
      spacing: {
        128: '32rem'
      }
    },
  },
  plugins: [],
}

