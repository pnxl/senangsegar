<template>
  <div class="min-h-screen min-w-full flex flex-col gap-y-4">
    <div class="flex flex-col gap-y-2">
      <p class="text-2xl md:w-1/2 font-medium dark:text-brand-light">
        Silakan pilih bahasa yang ingin Anda gunakan untuk melanjutkan.
      </p>
      <p class="text-xl md:w-1/2 dark:text-brand-dark">
        Please choose a language you'd like to continue in.
      </p>
    </div>
    <div class="md:w-1/2">
      <div class="flex md:flex-row flex-col gap-y-8 gap-x-16">
        <nuxt-link
          to="/id/survey"
          class="hover:underline group flex flex-col gap-y-2"
        >
          <Icon
            name="flagpack:id"
            class="text-[8rem] group-hover:opacity-75 mx-auto"
          />
          <p class="mx-auto dark:text-brand-lightest text-center">
            Bahasa Indonesia
          </p>
        </nuxt-link>
        <nuxt-link
          to="/en/survey"
          class="hover:underline group flex flex-col gap-y-2"
        >
          <Icon
            name="flagpack:gb-ukm"
            class="text-[8rem] mx-auto group-hover:opacity-75"
          />
          <p class="mx-auto dark:text-brand-lightest text-center">
            English (International)
          </p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  useCookie("language").value = "en";
});

definePageMeta({
  layout: "custom",
});
</script>
