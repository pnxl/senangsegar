<template>
  <div class="min-h-screen min-w-full flex flex-col gap-y-4">
    <div class="flex flex-col gap-y-8">
      <h1
        class="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium w-1/2 dark:text-brand-light"
      >
        Hidangan yang mengenyangkan dan menyenangkan.
      </h1>
      <p class="text-lg w-1/2 dark:text-brand-dark">
        Kami menyediakan makanan lezat beraroma, dibuat hanya dengan bahan-bahan
        segar.
      </p>
      <nuxt-link
        to="/menu"
        class="dark:bg-brand-darkest bg-brand-lighter dark:text-brand-light dark:hover:bg-brand-darker dark:hover:text-brand-lighter hover:bg-brand-light hover:text-brand-darkest py-4 px-12 w-fit rounded-full font-medium"
      >
        <p>Lihat Menu</p>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  useCookie("language").value = "id";
});
</script>
