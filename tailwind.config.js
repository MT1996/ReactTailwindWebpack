module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    screens: {
      'xs': '576px',
      // => @media (min-width: 640px) { ... }

      'sm': '768px',
      // => @media (min-width: 768px) { ... }

      'md': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }
      'xl': '1680px',
      'xxl': '1920px',
      '3xl': '2160px'
    }
  },
  variants: {

  },
  plugins: [],
}
