// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/styles/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-icon", "@nuxtjs/sitemap"],
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
          content: "#90c38b",
        },
        {
          name: "keywords",
          content:
            "Senang Segar, Sekolah Dian Harapan, Daan Mogot, Senang Segar, Fresh juices, Healthy smoothies, Es Campur, Refreshing beverages, Fruit blends, Ice-cold treats, Juicy delights, Smoothie bar, Summer coolers, Tropical flavors, Nutritious drinks, Exotic refreshments, Ice-blended creations, Juice cleanse, Vibrant concoctions, Customizable drinks, Hydration station, Wholesome refreshments, Chill-out refreshments, Senang Segar, Jus segar, Smoothie sehat, Es Campur, Minuman segar, Campuran buah, Es dingin segar, Kenikmatan buah-buahan, Bar smoothie, Minuman penyegar musim panas, Rasa tropis, Minuman bergizi, Minuman eksotis, Kreasi es-blended, Pembersihan jus, Kombinasi berwarna-warni, Minuman dapat disesuaikan, Stasiun hidrasi, Minuman segar dan sehat, Minuman penyegar",
        },
        {
          name: "description",
          content:
            "Senang Segar terinspirasi dari produk yang ditawarkan, yaitu minuman dingin, yang dirancang untuk memberikan kesegaran dan kebahagiaan kepada konsumen. Kami ingin menyenangkan dan menyegarkan pelanggan, dengan berbagai minuman dingin seperti es campur, soda buah, dan smoothie. Strategi penjualan melibatkan penempatan stand di lokasi strategis, untuk menyegarkan para siswa saat mereka lelah setelah kegiatan fisik, sehingga mereka kembali semangat untuk belajar.",
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
            "Senang Segar terinspirasi dari produk yang ditawarkan, yaitu minuman dingin, yang dirancang untuk memberikan kesegaran dan kebahagiaan kepada konsumen. Kami ingin menyenangkan dan menyegarkan pelanggan, dengan berbagai minuman dingin seperti es campur, soda buah, dan smoothie. Strategi penjualan melibatkan penempatan stand di lokasi strategis, untuk menyegarkan para siswa saat mereka lelah setelah kegiatan fisik, sehingga mereka kembali semangat untuk belajar.",
        },
        {
          property: "og:locale",
          content: "id_ID",
        },
        {
          property: "og:locale:alternate",
          content: "en_GB",
        },
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
            "Senang Segar terinspirasi dari produk yang ditawarkan, yaitu minuman dingin, yang dirancang untuk memberikan kesegaran dan kebahagiaan kepada konsumen. Kami ingin menyenangkan dan menyegarkan pelanggan, dengan berbagai minuman dingin seperti es campur, soda buah, dan smoothie. Strategi penjualan melibatkan penempatan stand di lokasi strategis, untuk menyegarkan para siswa saat mereka lelah setelah kegiatan fisik, sehingga mereka kembali semangat untuk belajar.",
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
    serviceRoleKey: "",
    jwtSecret: "",
    public: {
      databaseUrl: "",
      anonymousApikey: "",
    },
  },
  sitemap: {
    // exclude all URLs that start with /survey
    exclude: ["/en/survey/**", "/en/redirect", "/id/survey/**", "/id/redirect"],
  },
});
