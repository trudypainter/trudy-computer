module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        topsky: '#78A7E5',
        bottomsky: '#93C3FD',
        funyellow: '#FEFF1F',
        fungreen: '#6FE224',
        funred: '#FC5D42',
        funpink: '#FF3FB3',
        funblue: '#28ABE2',
        funpurple: '7E51F5',
        dinamogreen: '#4DF437', // taken from dinamo type
        lightergreen: '#01FF7E', // taken from the og website
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
            p: {
              'line-height': '1.1rem',
            },
            div: {
              'line-height': '0.3rem',
            },
          },
        },
      },
      screens: {
        '-2xl': { max: '1535px' },
        // => @media (max-width: 1535px) { ... }

        '-xl': { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        '-lg': { max: '1023px' },
        // => @media (max-width: 1023px) { ... }

        '-md': { max: '767px' },
        // => @media (max-width: 767px) { ... }

        phone: { max: '767px' },
        // => @media (max-width: 767px) { ... }

        '-sm': { max: '639px' },
        // => @media (max-width: 639px) { ... }
      },
    },
    fontFamily: {
      sans: ['Helvetica Neue', 'Helvetica'],
      serif: ['Times New Roman', 'Times', 'serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
