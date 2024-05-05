<template>
  <div class="min-h-screen min-w-full flex flex-col gap-y-32 mb-16">
    <div class="flex flex-col gap-y-8 h-screen">
      <h1
        class="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium lg:w-2/3 dark:text-brand-light"
      >
        Minuman yang menyejukan dan menyenangkan.
      </h1>
      <p class="text-lg md:w-1/2 dark:text-brand-dark">
        Kami menyajikan smoothie, soda buah, dan es campur yang segar - cocok
        untuk musim panas yang terik!
      </p>
      <nuxt-link
        to="/menu"
        class="dark:bg-brand-darkest bg-brand-light dark:text-brand-light dark:hover:bg-brand-darker dark:hover:text-brand-lighter hover:bg-brand-light/50 hover:text-brand-darkest py-4 px-12 w-fit rounded-full font-medium"
      >
        <p>Lihat Menu</p>
      </nuxt-link>
    </div>
    <div class="flex flex-col gap-y-8 -mt-80 pt-48" id="about-us">
      <h1
        class="font-display text-3xl md:text-4xl lg:text-5xl font-medium dark:text-brand-light"
      >
        Tentang Kami
      </h1>
      <div class="flex flex-col gap-y-4">
        <p class="md:w-2/3">
          Senang Segar terinspirasi dari produk yang ditawarkan, yaitu minuman
          dingin, yang dirancang untuk memberikan kesegaran dan kebahagiaan
          kepada konsumen.
        </p>
        <p class="md:w-2/3">
          Kami ingin menyenangkan dan menyegarkan pelanggan, dengan berbagai
          minuman dingin seperti es campur, soda buah, dan smoothie.
        </p>
        <p class="md:w-2/3">
          Strategi penjualan melibatkan penempatan stand di lokasi strategis,
          untuk menyegarkan para siswa saat mereka lelah setelah kegiatan fisik,
          sehingga mereka kembali semangat untuk belajar.
        </p>
      </div>
    </div>
  </div>
</template>
