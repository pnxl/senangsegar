<template>
  <div class="min-w-full flex flex-row gap-x-8 justify-between">
    <div class="flex flex-col gap-y-8">
      <h1
        class="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium md:w-2/3 dark:text-brand-light"
      >
        Sampai jumpa lagi!
      </h1>
      <p class="text-lg md:w-2/3 dark:text-brand-dark">
        Anda akan diarahkan ke halaman diluar website ini dalam 3 detik. Tekan
        tombol di bawah untuk membatalkan tindakan ini.
      </p>

      <div
        class="flex md:flex-row flex-col gap-x-0 md:gap-x-4 gap-y-4 md:gap-y-0"
      >
        <button
          @click="this.$router.go(-1)"
          class="dark:bg-brand-darkest bg-brand-lighter dark:text-brand-light dark:hover:bg-brand-darker dark:hover:text-brand-lighter hover:bg-brand-light hover:text-brand-darkest py-4 px-12 w-fit rounded-full font-medium"
        >
          <p>Aku ingin kembali!</p>
        </button>

        <button
          @click="navigateTo(route.query.url, { external: true })"
          class="dark:bg-brand-darkest bg-brand-lighter dark:text-brand-light dark:hover:bg-brand-darker dark:hover:text-brand-lighter hover:bg-brand-light hover:text-brand-darkest py-4 px-12 w-fit rounded-full font-medium"
        >
          <p>Bawa aku kesana!</p>
        </button>
      </div>
    </div>
    <div>
      <img src="@/assets/branding/sad.png" class="w-96 hidden sm:block" />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

if (!route.query.url) {
  navigateTo("/");
} else {
  setTimeout(function () {
    return navigateTo(route.query.url, { external: true });
  }, 3000);
}
</script>
