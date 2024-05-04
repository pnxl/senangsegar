<template>
  <div class="min-w-full flex flex-row gap-x-8 justify-between">
    <div class="flex flex-col gap-y-8">
      <h1
        class="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium md:w-3/4 dark:text-brand-light"
      >
        Kamu sudah selesai!
      </h1>
      <p class="text-lg md:w-3/4 dark:text-brand-dark">
        Terima kasih telah meluangkan waktu untuk mengisi formulir ini. Hasil
        dari ini survei ini akan menentukan menu, harga, dan faktor penting
        tentang bisnis kami.
      </p>
      <nuxt-link
        to="/id/"
        class="dark:bg-brand-darkest bg-brand-light dark:text-brand-light dark:hover:bg-brand-darker dark:hover:text-brand-lighter hover:bg-brand-light/50 hover:text-brand-darkest py-4 px-12 w-fit rounded-full font-medium"
      >
        <p>Kembali Ke Beranda</p>
      </nuxt-link>
    </div>
    <div>
      <img src="@/assets/branding/happy.png" class="w-96 hidden sm:block" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: "swipe",
  },
  layout: "custom",
});

if (
  !useCookie("survey_esPrice").value ||
  !useCookie("survey_smoothiePrice").value
) {
  navigateTo("/id/survey/pricing");
}
</script>
