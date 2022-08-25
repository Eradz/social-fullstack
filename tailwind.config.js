/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        primary: 'rgba(9,19,126,1) 18%',
        blue: 'rgba(16,106,214)',
      },
      boxShadow: {
        '3xl': '0 0 20px 0 rgba(0, 0, 0, 0.3)',
      }

    },
  }, 
  plugins: [],
}
