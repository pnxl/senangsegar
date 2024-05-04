<template>
  <div class="min-w-full flex flex-row gap-x-8 justify-between">
    <div class="flex flex-col gap-y-8">
      <h1
        class="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium md:w-2/3 dark:text-brand-light"
      >
        See you later!
      </h1>
      <p class="text-lg md:w-2/3 dark:text-brand-dark">
        You will be brought to an external link outside of this website in 3
        seconds.
      </p>
    </div>
    <div>
      <img src="@/assets/branding/sad.png" class="w-96 hidden sm:block" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "custom",
});

const route = useRoute();

if (!route.query.url) {
  navigateTo("/");
} else {
  setTimeout(function () {
    return navigateTo(route.query.url, { external: true });
  }, 3000);
}
</script>
