import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,astro}'],
    theme: {
      colors: {
        dasdadad: '#006A07',
        green_light: '#C1FE74'
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
      },
      extend: {
      }
    },
    plugins: [typography]
  }