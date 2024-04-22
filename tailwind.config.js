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
    extend: {
      colors: {
        brand: {
          darkest: "#324930",
          darker: "#577B53",
          dark: "#90C38B",
          light: "#BAF1B5",
          lighter: "#CCFFC9",
          lightest: "#D9FFD7",
        },
      },
    },
  },
  plugins: [],
};
