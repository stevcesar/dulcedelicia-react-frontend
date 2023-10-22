/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        header: '560px',
      },
      colors: {
        main: '#DF73C1',
        subMain: '#E488CA',
        deepGray: '#FEF8FC',
        dryGray: '#F9EBF9',
        flash: '#F600C7',
        star: '#FF01C9',
        deepest: '#FBDFF9',
        text: '#C0C0C0',
        overlay: '#FF61E1',
      },
      fontSize: {
        h1: '2.6rem',
      },
      screens: {
        xs: '475px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
