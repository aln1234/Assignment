const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'steel': ['Steelflight',...defaultTheme.fontFamily.sans],
        "mont": ["Montserrat"],
        
      },
      backgroundImage: {

        'top': "url('/images/top.png')",
      }
    },
  },
  plugins: [],
}
