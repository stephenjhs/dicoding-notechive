const { fontFamily } = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", fontFamily.sans],
        desc: ["system-ui", fontFamily.sans]
      },
      colors: {
        primary: {
          50: "#F2FCFF",
          100: "#E6F8FF",
          200: "#BFEBFF",
          300: "#99DBFF",
          400: "#4DB2FF",
          600: "#006FE6",
          700: "#0053BF",
          800: "#003D99",
          900: "#002A73",
          950: "#00174A",
          DEFAULT: "#007FFF",
        },
        muted: {...colors.gray, DEFAULT: colors.gray["400"]},
        error: {...colors.red, DEFAULT: colors.red["500"]},
        archived: {...colors.yellow, DEFAULT: colors.yellow["600"]},
      }
    },
  },
  plugins: [],
}
