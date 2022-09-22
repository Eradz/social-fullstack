/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors:{
        primary: 'rgba(9,19,126,1) 18%',
        blue: 'rgba(16,106,214)',
        bg:'rgba(249,249,249)',
        ft: 'rgb(41,45,50)',
        icon: 'rgb(62,66,69)',
        text: 'rgb(148,150,152)',
        subtext: 'rgb(75,85,99)'
      },
      boxShadow: {
        '3xl': '0 0 0px 0 rgba(255, 255, 255, 0.3)',
      },

    },
  }, 
  plugins: [],
}
