<template>
  <div class="min-h-screen min-w-full flex flex-col gap-y-32 mb-16">
    <div class="flex flex-col gap-y-8 h-screen">
      <h1
        class="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium lg:w-2/3 dark:text-brand-light"
      >
        Drinks that cool you down more than a cucumber.
      </h1>
      <p class="text-lg md:w-1/2 dark:text-brand-dark">
        We serve freshly made smoothies and es cendol - great for those hot
        summers!
      </p>
      <nuxt-link
        to="/en/menu"
        class="dark:bg-brand-darkest bg-brand-light dark:text-brand-light dark:hover:bg-brand-darker dark:hover:text-brand-lighter hover:bg-brand-light/50 hover:text-brand-darkest py-4 px-12 w-fit rounded-full font-medium"
      >
        <p>See the menu</p>
      </nuxt-link>
    </div>
    <div class="flex flex-col gap-y-8 -mt-80 pt-48" id="about-us">
      <h1
        class="font-display text-3xl md:text-4xl lg:text-5xl font-medium dark:text-brand-light"
      >
        About Us
      </h1>
      <div class="flex flex-col gap-y-4">
        <p class="md:w-2/3">
          Senang Segar is inspired by the products it offers, namely drinks
          cold, designed to provide freshness and happiness to consumers.
        </p>
        <p class="md:w-2/3">
          We want to delight and refresh customers, with variety cold drinks
          such as mixed ice, fruit soda, and smoothies.
        </p>
        <p class="md:w-2/3">
          Our strategy involves placing stands in strategic locations, to
          refresh the students when they are tired after physical activities, so
          that they are enthusiastic about learning again.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "english",
});

useHead({
  title: "Home — Senang Segar",
});
</script>
