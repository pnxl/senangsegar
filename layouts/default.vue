<template>
  <main
    class="bg-neutral-100 dark:bg-neutral-900 flex flex-col gap-y-8 sm:gap-y-12 md:gap-y-16 md:pt-16 sm:pt-12 pt-8"
  >
    <header
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
          class="dark:bg-brand-darkest bg-brand-lighter dark:text-brand-light dark:hover:bg-brand-darker dark:hover:text-brand-lighter hover:bg-brand-light hover:text-brand-darkest py-2 px-4 rounded-full font-medium"
        >
          <p>Menu</p>
        </nuxt-link>
      </div>
    </header>
    <div ref="target">
      <div
        class="md:px-24 lg:px-32 2xl:px-48 sm:px-12 px-8 min-h-screen md:min-w-full md:flex md:justify-center text-brand-darker dark:text-brand-light"
      >
        <slot />
      </div>
      <footer
        class="dark:bg-neutral-800/75 bg-neutral-200/25 md:pb-16 sm:pb-12 pb-8 pt-4 px-24"
      >
        <div
          class="dark:bg-brand-darkest bg-brand-lighter rounded-2xl p-8 mb-16 -mt-24 flex justify-between"
        >
          <h2
            class="font-medium text-2xl w-1/2 dark:text-brand-lightest text-brand-darkest"
          >
            Entah makanan mengenyangkan atau hidangan penutup yang dingin, kami
            siap melayani Anda.
          </h2>
          <nuxt-link
            to="/menu"
            class="dark:bg-brand-darker bg-brand-light dark:text-brand-light dark:hover:bg-brand-darker/50 dark:hover:text-brand-lighter hover:bg-brand-lightest hover:text-brand-darkest py-4 px-12 w-fit h-fit my-auto rounded-full font-medium"
          >
            <p>Lihat Menu</p>
          </nuxt-link>
        </div>
        <div class="flex justify-between">
          <div>
            <h1
              class="font-display dark:text-brand-light text-brand-dark text-2xl"
            >
              Senang Segar
            </h1>
          </div>
          <div class="gap-y-2 flex flex-col">
            <h3
              class="text-lg font-semibold dark:text-brand-dark text-brand-light"
            >
              Halaman Ini
            </h3>
            <div
              class="flex flex-col gap-y-2 dark:text-brand-lightest text-brand-darkest"
            >
              <nuxt-link to="/#tentang-kita" class="hover:underline"
                >Tentang Kita</nuxt-link
              >
              <nuxt-link to="/#faq" class="hover:underline">FAQ</nuxt-link>
              <nuxt-link to="/menu" class="hover:underline">Menu</nuxt-link>
            </div>
          </div>
          <div class="gap-y-2 flex flex-col">
            <h3
              class="text-lg font-semibold dark:text-brand-dark text-brand-light"
            >
              Halaman Lain
            </h3>
            <div
              class="flex flex-col gap-y-2 dark:text-brand-lightest text-brand-darkest"
            >
              <nuxt-link to="/merek" class="hover:underline">Merek</nuxt-link>
            </div>
          </div>
          <div class="gap-y-2 flex flex-col">
            <h3
              class="text-lg font-semibold dark:text-brand-dark text-brand-light"
            >
              Alamat
            </h3>
            <a
              href="https://maps.app.goo.gl/RDJjLqVUpjtgFtha6"
              target="_blank"
              rel="noopener noreferrer"
              class="flex flex-col gap-y-2 group dark:text-brand-lightest text-brand-darkest"
            >
              <p class="group-hover:underline">SDH Daan Mogot</p>
              <p
                class="text-sm dark:text-brand-lighter group-hover:underline text-brand-darker -mt-1"
              >
                (Di depan Gedung D)
              </p>
              <p class="group-hover:underline">Jl. Bedugul No. 1</p>
              <p class="group-hover:underline">Daan Mogot Baru, Kalideres</p>
            </a>
          </div>
        </div>
      </footer>
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
  @apply sticky top-0 rounded-t-none border-t-0 mx-0;
}
</style>
