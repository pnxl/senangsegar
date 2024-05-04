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
        {
          "http-equiv": "Content-Security-Policy",
          content: "default-src 'self'",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "msapplication-TileColor",
          content: "#d9ffd7",
        },
        {
          name: "theme-color",
          content: "#90c38b",
        },
        {
          name: "keywords",
          content:
            "Senang Segar, Sekolah Dian Harapan, Daan Mogot, Senang Segar, Fresh juices, Healthy smoothies, Es Campur, Refreshing beverages, Fruit blends, Ice-cold treats, Juicy delights, Smoothie bar, Summer coolers, Tropical flavors, Nutritious drinks, Exotic refreshments, Ice-blended creations, Juice cleanse, Vibrant concoctions, Customizable drinks, Hydration station, Wholesome refreshments, Chill-out refreshments, Senang Segar, Jus segar, Smoothie sehat, Es Campur, Minuman segar, Campuran buah, Es dingin segar, Kenikmatan buah-buahan, Bar smoothie, Minuman penyegar musim panas, Rasa tropis, Minuman bergizi, Minuman eksotis, Kreasi es-blended, Pembersihan jus, Kombinasi berwarna-warni, Minuman dapat disesuaikan, Stasiun hidrasi, Minuman segar dan sehat, Minuman penyegar",
        },
        // USING AI GENERATED FOR PLACEHOLDER - REPLACE THIS AFTER RICHARD HAS SUBMITTED PROPER DESCRIPTION
        {
          name: "description",
          content:
            "Temukan kesegaran terbaik di Senang Segar! Nikmati pilihan jus segar, smoothie sehat, dan favorit klasik Indonesia, Es Campur. Minuman kami dibuat dengan teliti menggunakan bahan terbaik untuk memberikan Anda rasa dan vitalitas yang meledak dalam setiap tegukan. Baik Anda menginginkan campuran buah tropis atau pembersihan jus yang menyegarkan, bar smoothie kami memiliki sesuatu untuk semua orang. Kunjungi kami hari ini dan nikmati minuman penyegar sempurna!",
        },
        // Control behaviour of search engine crawling + indexing
        {
          name: "robots",
          content: "index,follow",
        },
        {
          name: "googlebot",
          content: "index,follow",
        },
        // Don't show sitelinks search box
        {
          name: "google",
          content: "nositelinkssearchbox",
        },
        // Don't translate when user switches to Indonesian or lands in Indonesian website
        {
          name: "google",
          content: "notranslate",
        },
        // Website ownership - PLACEHOLDER
        {
          name: "google-site-verification",
          content: "verification_token",
        },
        // Open Graph - PLACEHOLDER
        {
          property: "og:url",
          content: "https://senangsegar.xyz",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:title",
          content: "Senang Segar",
        },
        {
          property: "og:description",
          content:
            "Temukan kesegaran terbaik di Senang Segar! Nikmati pilihan jus segar, smoothie sehat, dan favorit klasik Indonesia, Es Campur. Minuman kami dibuat dengan teliti menggunakan bahan terbaik untuk memberikan Anda rasa dan vitalitas yang meledak dalam setiap tegukan. Baik Anda menginginkan campuran buah tropis atau pembersihan jus yang menyegarkan, bar smoothie kami memiliki sesuatu untuk semua orang. Kunjungi kami hari ini dan nikmati minuman penyegar sempurna!",
        },
        {
          property: "og:locale",
          content: "id_ID",
        },
        {
          property: "og:locale:alternate",
          content: "en_GB",
        },
        // Twitter Card - PLACEHOLDER
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:url",
          content: "https://senangsegar.xyz",
        },
        {
          name: "twitter:title",
          content: "Senang Segar",
        },
        {
          name: "twitter:description",
          content:
            "Temukan kesegaran terbaik di Senang Segar! Nikmati pilihan jus segar, smoothie sehat, dan favorit klasik Indonesia, Es Campur. Minuman kami dibuat dengan teliti menggunakan bahan terbaik untuk memberikan Anda rasa dan vitalitas yang meledak dalam setiap tegukan. Baik Anda menginginkan campuran buah tropis atau pembersihan jus yang menyegarkan, bar smoothie kami memiliki sesuatu untuk semua orang. Kunjungi kami hari ini dan nikmati minuman penyegar sempurna!",
        },
        // Disallow Pinterest users to save from site
        {
          name: "pinterest",
          content: "nopin",
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
        // Link to language
        {
          rel: "alternate",
          href: "/en/",
          hreflang: "en",
        },
        {
          rel: "alternate",
          href: "/id/",
          hreflang: "id",
        },
        // License and copyright information - PLACEHOLDER
        {
          rel: "license",
          href: "/licenses",
        },
        //
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
