module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        topsky: '#78A7E5',
        bottomsky: '#93C3FD',
      },
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
