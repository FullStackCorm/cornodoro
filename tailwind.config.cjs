/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      fontFamily: {
        fontFamily: ["Montserrat", "sans-serif"],
      },
  
      extend: {
        colors: {
          "pmd-blue-50": "#D8F7C3",
          "pmd-blue-100": "#dee2fc",
          "pmd-blue-300": "#8BB09A",
          "pmd-blue-600": "#0b3323",
          "pmd-blue-800": "#002408",
          "pmd-blue-900": "#070f00",

          "pmd-green-50": "#d8f7c3",
          "pmd-green-100": "8bb09a",
          "pmd-green-300": "#D8F7C3",
          "pmd-green-600": "",
          "pmd-green-800": "",
          "pmd-green-900": "#070f00",
          
          "pmd-gold-300": "#d8f7c3",
          "pmd-gold-600": "#ff8a60",
          "pmd-gold-700": "#f79d45"
        },
      },
    },
    plugins: [],
  };

