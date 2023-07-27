/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px', // @media (min-width: 768px)
      lg: '1028px', // @media (min-width: 1028px)
      xl: '1440px',
    },
    extend: {
      colors: {
        brightred: "hsl(12, 88%, 59%)",
        darkblue: "hsl(228, 39%, 23%)",
        grayishblue: "hsl(227, 12%, 61%)",
        palered: "hsl(13, 100%, 96%)",
        lightgray: "hsl(0, 0%, 98%)",
        verydarkblue: "hsl(233, 12%, 13%)",
      },
      fontFamily: {
        sans: ['Be Vietnam Pro', 'sans-serif'],
      },
      backgroundImage: {
        'tabletpattern': "url(./images/bg-tablet-pattern.svg)",
      },
    },
  },
  plugins: [],
}

