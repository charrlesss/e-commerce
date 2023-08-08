/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "400px",
      ...defaultTheme.screens,
    },
    extend: {
      animation: {
        wiggle: "wiggle 500ms  ease-in-out forwards",
        fadein: "fadein 500ms ease-in-out forwards",
        fadeout: "fadeout 800ms ease-in-out forwards",
        fadeinleft: "fadeinleft 500ms ease-in-out forwards",
        fadeoutleft: "fadeoutleft 800ms ease-in-out forwards",
      },
      keyframes: {
        fadeinleft: {
          "0%": {
            left: "-100%",
          },
          "100%": {
            left: "0px",
          },
        },
        fadeoutleft: {
          "0%": {
            left: "0px",
          },

          "100%": {
            left: "3000px",
          },
        },
        fadein: {
          "0%": {
            left: "100%",
          },

          "100%": {
            left: "0px",
          },
        },
        fadeout: {
          "0%": {
            left: "300px",
          },

          "100%": {
            left: "-3000px",
          },
        },
        wiggle: {
          "0%": {
            left: "-4300px",
            position: "absolute",
          },
          "100%": {
            left: "0px",
            position: "relative",
          },
        },
      },
    },
  },
  plugins: [],
};
