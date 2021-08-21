module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter, sans-serif;']
    },
    extend: {
      lineHeight: {
        12: '3rem'
      }
    }
  },
  variants: {
    extend: {
      visibility: ['hover']
    }
  },
  plugins: []
}
