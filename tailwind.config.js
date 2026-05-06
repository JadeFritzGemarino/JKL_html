/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'jkl-dark': '#111111',  
        'jkl-green': '#04AA6D', 
        'jkl-gray': '#818181',   
        'jkl-bg': '#f4f7f6',   
      },
    },
  },
  plugins: [],
}