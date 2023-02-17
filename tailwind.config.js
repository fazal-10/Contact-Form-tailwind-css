const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['./public/**/*.html'],
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
         cyan:colors.cyan,
         teal:colors.teal
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
