<template>
  <div class="min-h-screen min-w-full flex flex-col gap-y-4">
    <div class="flex flex-col gap-y-8">
      <p class="text-lg w-1/2 dark:text-brand-dark">
        Please choose a language you'd like to continue in.
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
