<template>
  <div
    class="md:flex p-4 rounded-full sticky justify-between text-sm bg-neutral-50/60 backdrop-blur-lg border-2 border-neutral-300 dark:border-neutral-700 text-brand-darker dark:bg-neutral-800/75 dark:text-brand-light"
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
</template>
