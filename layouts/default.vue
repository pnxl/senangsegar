<template>
  <main
    class="bg-neutral-100 dark:bg-neutral-900 flex flex-col gap-y-8 sm:gap-y-12 md:gap-y-16 md:py-16 sm:py-12 py-8"
  >
    <div class="fixed w-screen md:px-24 lg:px-32 2xl:px-48 sm:px-12 px-8">
      <Header />
    </div>
    <div
      class="md:px-24 lg:px-32 2xl:px-48 sm:px-12 px-8 min-h-screen mt-16 md:min-w-full md:flex md:justify-center text-brand-darker dark:text-brand-light"
    >
      <slot />
    </div>
  </main>
</template>
