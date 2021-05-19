module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'quicksand': ['Quicksand', 'sans-serif']
    }
  },
  variants: {
    extend: {
      translate: ['group-hover'],
      scale: ['group-hover'],
      display: ['group-hover'],
      visibility: ['hover', 'group-hover'],
    },
  },
  plugins: [],
}
