const colors = require('tailwindcss/colors')
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...fontFamily.sans],
      },
      colors: {
        red: colors.rose,
        blue: colors.sky,
        gray: colors.coolGray,
        teal: colors.teal,
        orange: colors.orange,
        violet: colors.violet,
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,
      },
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
