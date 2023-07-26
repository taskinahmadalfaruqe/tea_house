/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {

    fontFamily: {
      'manrop': ['Manrope', 'sans-serif'],
    },

    container: {
      center:true,
      padding: {
        DEFAULT: '10px',
        sm: '10px',
        lg: '1rem',
        xl: '2rem',
        '2xl': '3rem',
      },
    },

    extend: {

      backgroundImage: {
        'linier': "linear-gradient(270deg, #F00 0%, #FF8938 100%)",
        'linier2': "linear-gradient(270deg, #FFF 0%, #EEE 100%)",
      },

      colors: {
        'primary-red': '#F00 ',
        'primary-orange': '#FF8938  ',
        'black': '#1C1C1C ',
        'text': '#777',
        'white': '#F4F4F4',
      },
    },
  },
  plugins: [require("daisyui")],
}

