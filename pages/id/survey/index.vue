<template>
  <div class="min-h-screen min-w-full flex flex-col gap-y-4">
    <div class="flex flex-col gap-y-8">
      <h1
        class="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium md:w-1/2 dark:text-brand-light"
      >
        Selamat datang di survei kami!
      </h1>
      <p class="text-lg md:w-1/2 dark:text-brand-dark">
        Survei ini akan menentukan menu, harga, dan faktor penting tentang
        bisnis kami. Jangan khawatir, ini tidak akan memakan waktu lama - paling
        lama lima menit - kami janji!
      </p>

      <button
        @click="
          useCookie('survey_started').value = 'true';
          navigateTo('/id/survey/about-you');
        "
        class="dark:bg-brand-darkest bg-brand-lighter dark:text-brand-light dark:hover:bg-brand-darker dark:hover:text-brand-lighter hover:bg-brand-light hover:text-brand-darkest py-4 px-12 w-fit rounded-full font-medium"
      >
        <p>Mulai Survei</p>
      </button>
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

if (useCookie("survey_finished").value) {
  navigateTo("/id/survey/finished");
}
</script>
