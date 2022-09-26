/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  textColor: theme => theme('colors'),
    textColor: {
      white: 'hsl(0, 0%, 100%)',
      veryPaleBlue: 'hsl(225, 100%, 98%)',
      lightGrayishBlue: 'hsl(227, 47%, 96%)',
      darkGrayishBlue: 'hsl(228, 12%, 44%)',
      // Dark Themes
      veryDarkBlue: 'hsl(230, 17%, 14%)',
      darkDesaturatedBlue: 'hsl(228, 28%, 20%)',
      Desaturated: 'hsl(228, 34%, 66%)',
    },
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        veryPaleBlue: 'hsl(225, 100%, 98%)',
        lightGrayishBlue: 'hsl(227, 47%, 96%)',
        darkGrayishBlue: 'hsl(228, 12%, 44%)',
        // Dark Themes
        veryDarkBlue: 'hsl(230, 17%, 14%)',
        darkDesaturatedBlue: 'hsl(228, 28%, 20%)',
        Desaturated: 'hsl(228, 34%, 66%)',
        darkToggle: 'linear gradient hsl(210, 78%, 56%) to hsl(146, 68%, 55%)',
        whiteToggle: 'hsl(230, 22%, 74%)'
      },
      font: {
        white: 'hsl(0, 0%, 100%)',
        veryPaleBlue: 'hsl(225, 100%, 98%)',
        lightGrayishBlue: 'hsl(227, 47%, 96%)',
        darkGrayishBlue: 'hsl(228, 12%, 44%)',
        // Dark Themes
        veryDarkBlue: 'hsl(230, 17%, 14%)',
        darkDesaturatedBlue: 'hsl(228, 28%, 20%)',
        Desaturated: 'hsl(228, 34%, 66%)',
      }
    },
  },
  plugins: [],
}
