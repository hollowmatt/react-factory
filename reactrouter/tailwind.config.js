const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        gray: colors.slate,
        red: colors.rose
      }
    },
  },
  plugins: [],
}