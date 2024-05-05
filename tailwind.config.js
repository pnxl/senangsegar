/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      sans: [
        "Montserrat Variable",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    extend: {
      fontFamily: {
        display: ["Grandstander", "Grandstander Variable"],
      },
      colors: {
        brand: {
          darkest: "#324930",
          darker: "#577B53",
          dark: "#90C38B",
          light: "#BAF1B5",
          lighter: "#D9FFD7",
          lightest: "#EBFFEA",
        },
      },
    },
  },
  plugins: [],
};
