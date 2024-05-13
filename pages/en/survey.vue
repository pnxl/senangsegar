<template>
  <div class="min-w-full flex flex-row gap-x-8 justify-between">
    <div class="flex flex-col gap-y-8">
      <h1
        class="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium md:w-3/4 dark:text-brand-light"
      >
        Thanks for your interest in our survey!
      </h1>
      <p class="text-lg md:w-3/4 dark:text-brand-dark">
        Unfortunately, our survey has been closed - we'll see you on the 21st
        for our smoothie stand!
      </p>
      <nuxt-link
        to="/en/"
        class="dark:bg-brand-darkest bg-brand-light dark:text-brand-light dark:hover:bg-brand-darker dark:hover:text-brand-lighter hover:bg-brand-light/50 hover:text-brand-darkest py-4 px-12 w-fit rounded-full font-medium"
      >
        <p>Go Back</p>
      </nuxt-link>
    </div>
    <div>
      <img
        src="/branding/senangsegar-mascot-cici-happy-1024.png"
        class="w-96 hidden sm:block"
      />
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

useHead({
  title: "Survey — Senang Segar",
});
</script>
