module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            'max-width': '80ch',
            padding: '1rem',
            a: {
              'font-weight': '400',
            },
          },
        },
      },
    },
    fontFamily: {
      sans: ['Helvetica Neue', 'Helvetica'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
