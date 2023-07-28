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
        'product': "linear-gradient(180deg, #F4F4F4 0%, rgba(244, 244, 244, 0.0) 100%)",
        'tea1': "linear-gradient(270deg, #F00 0%, #FF8938 100%)",
        'tea4': "linear-gradient(90deg, #D9D9D9 0%, rgba(255, 255, 255, 0.00) 100%)",
        'footer': "linear-gradient(270deg, rgba(255, 0, 0, 0.10) 0%, rgba(255, 137, 56, 0.10) 100%);",
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

