<template>
  <main
    class="bg-neutral-100 dark:bg-neutral-900 flex flex-col gap-y-8 sm:gap-y-12 md:gap-y-16 md:py-16 sm:py-12 py-8"
  >
    <div
      :class="{ sticking }"
      ref="header"
      class="md:mx-24 lg:mx-32 2xl:mx-48 sm:mx-12 mx-8 md:flex p-4 rounded-[2.5rem] justify-between text-sm bg-neutral-50/60 backdrop-blur-lg border-2 border-neutral-300 dark:border-neutral-700 text-brand-darker dark:bg-neutral-800/75 dark:text-brand-light"
    >
      <h1
        class="font-display pl-2 my-auto text-2xl dark:text-brand-light text-brand-darker"
      >
        Senang Segar
      </h1>
      <div class="flex gap-x-8 my-auto text-base">
        <div class="my-auto flex gap-x-8">
          <nuxt-link
            to="#about"
            class="dark:hover:text-brand-lighter hover:text-brand-darkest font-medium"
            >About</nuxt-link
          >
          <nuxt-link
            to="#faq"
            class="dark:hover:text-brand-lighter hover:text-brand-darkest font-medium"
            >FAQ</nuxt-link
          >
        </div>
        <nuxt-link
          to="/menu"
          class="dark:bg-brand-darkest bg-brand-light dark:text-brand-light dark:hover:bg-brand-darker dark:hover:text-brand-lighter hover:bg-brand-dark hover:text-brand-darkest py-2 px-4 rounded-full font-medium"
        >
          <p>Menu</p>
        </nuxt-link>
      </div>
    </div>
    <div
      ref="target"
      class="md:px-24 lg:px-32 2xl:px-48 sm:px-12 px-8 min-h-screen md:min-w-full md:flex md:justify-center text-brand-darker dark:text-brand-light"
    >
      <slot />
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const target = ref<Element>();
const sticking = ref<boolean>(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      sticking.value = entry.isIntersecting;
    },
    { threshold: 0.783 }
  );

  observer.observe(target.value as Element);
});
</script>

<style>
.sticking {
  @apply sticky top-0 rounded-t-none border-t-0;
}
</style>
