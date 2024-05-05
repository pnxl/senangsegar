<template>
  <main
    class="bg-neutral-100 dark:bg-neutral-900 flex flex-col gap-y-8 sm:gap-y-12 md:gap-y-16 min-h-screen"
  >
    <div class="md:my-16 sm:my-12 my-8">
      <div
        class="md:px-24 lg:px-32 2xl:px-48 sm:px-12 px-8 md:min-w-full md:flex md:justify-center text-brand-darker dark:text-brand-light"
      >
        <div class="min-w-full flex flex-row gap-x-8 justify-between">
          <div class="flex flex-col gap-y-8">
            <div class="flex flex-col gap-y-4">
              <h1
                class="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium md:w-3/4 dark:text-brand-light"
              >
                Uh-oh, ada kesalahan!
              </h1>
              <h2
                class="font-medium md:w-3/4 dark:text-brand-dark lg:text-4xl md:text-3xl sm:text-2xl text-xl"
              >
                Uh-oh - an error!
              </h2>
            </div>
            <div class="flex flex-col gap-y-4">
              <p class="text-lg md:w-3/4 dark:text-brand-dark">
                Kami mohon maaf atas ketidaknyamanan ini, namun sepertinya situs
                web kami mengalami kesalahan!
              </p>
              <p class="md:w-3/4 dark:text-brand-dark opacity-75">
                We're sorry for the inconvenience, but it seems like our website
                ran to an error!
              </p>
            </div>
            <nuxt-link
              to="/"
              class="dark:bg-brand-darkest bg-brand-lighter dark:text-brand-light dark:hover:bg-brand-darker dark:hover:text-brand-lighter hover:bg-brand-light hover:text-brand-darkest py-4 px-12 w-fit rounded-full font-medium"
            >
              <p>Kembali / Go Back</p>
            </nuxt-link>
          </div>
          <div>
            <img
              src="/branding/senangsegar-mascot-cici-sad-1024.png"
              class="w-96 hidden sm:block"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
