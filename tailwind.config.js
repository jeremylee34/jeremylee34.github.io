/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {},
      animation: {}
    },
  },
  plugins: [
    require('autoprefixer'),
    require('tailwindcss-animated')
  ],
}

