/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: "#4169E1",
        gold: "#FFBC00",
        mainBG: "#F3F6F9",
        darkBG: "#0B0B0C",
        royalGrad1: "#4169E1",
        royalGrad2: "#2C37AB",
        royalGrad3: "#19097A",
        goldenGrad1: "#EDD819",
        goldenGrad2: "#F4C40F",
        goldenGrad3: "#FFA800",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar-hide")],
};
