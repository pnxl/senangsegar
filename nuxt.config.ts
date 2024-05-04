// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/styles/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-icon"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      title: "Senang Segar",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "msapplication-TileColor",
          content: "#d9ffd7",
        },
        {
          name: "theme-color",
          content: "#ffffff",
        },
      ],
      link: [
        // massive shoutout https://realfavicongenerator.net/ - we love you 💖
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
        {
          rel: "mask-icon",
          href: "/safari-pinned-tab.svg",
          color: "#90c38b",
        },
      ],
      noscript: [{ children: "JavaScript is required" }],
    },
  },
  runtimeConfig: {
    databasePassword: "",
    databaseUrl: "",
    anonymousApikey: "",
    serviceRoleKey: "",
    jwtSecret: "",
  },
});
