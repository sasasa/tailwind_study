const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './public/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        noto: [
          'Noto Sans JP',
        ],
      },
      colors:{
        'light-blue': colors.lightBlue,
        reigning: {
          50: '#7293B0',
          100: '#FAD5AD',
          200: '#DB7B70',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
