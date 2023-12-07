/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bDark': '#080808',
        'bLight': '#111111',
        'gDark': '#232323',
        'wDark': '#7a7a7e',
        'wLight': '#ebecf3',
        'brand': '#f46049'
      },
    },
  },
  plugins: [],
}

