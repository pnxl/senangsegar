<template>
  <div class="min-w-full flex flex-row gap-x-8 justify-between">
    <div class="flex flex-col gap-y-8">
      <h1
        class="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium md:w-2/3 dark:text-brand-light"
      >
        Sampai jumpa lagi!
      </h1>
      <p class="text-lg md:w-2/3 dark:text-brand-dark">
        Anda akan diarahkan ke halaman diluar website ini dalam 3 detik.
      </p>
    </div>
    <div>
      <img
        src="/branding/senangsegar-mascot-cici-sad-1024.png"
        class="w-96 hidden sm:block"
      />
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

definePageMeta({
  layout: "custom",
});
</script>
