<template>
  <main
    class="bg-neutral-200 dark:bg-neutral-900 flex flex-col gap-y-8 sm:gap-y-12 md:gap-y-16 md:py-16 md:px-24 lg:px-32 2xl:px-48 sm:p-12 p-8"
  >
    <Header />
    <div
      class="min-h-screen md:min-w-full md:flex md:justify-center text-sm text-brand-darker dark:text-brand-light"
    >
      <slot />
    </div>
  </main>
</template>
