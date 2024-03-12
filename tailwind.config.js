/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    screens: {
      'mobile': {'min':'200px','max':'900px'},
      'laptop': {'min':'900px'}
    },
    fontFamily: {
      kumb: ['Kumbh Sans','sans-serif']
    },
    colors: {
      'palesky':'#69707D',
      'catskwhite': '#E4E9F2',
      'pumpkin': '#FF7E1B',
      'shark': '#1d2026'
    },
    extend: {},
  },
  plugins: [
    plugin(function({addVariant}){
      addVariant('children','&>*')
    })
  ],
}

