/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './routes/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        radialed: 'radial-gradient(72.27% 72.27% at 50% 26.17%, #1673B9 0%, #1673B9 0%, #164977 18.32%, #05325B 28.22%, #161525 100%)'
      }
    },
    fontFamily: {
      poppins: ['Poppins'],
      Montserrat: ['Montserrat']
    }
  },
  plugins: [require('daisyui')]
};
