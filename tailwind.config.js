/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      palewhite: "#FAFAFA",
      gray: "#E6E6E6",
      "dark-gray": "#7A7A7A",
      black: "#212121",
      red: "#D86161",
      blue: "#1597E4",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
