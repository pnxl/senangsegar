<template>
  <main
    class="bg-neutral-100 dark:bg-neutral-900 flex flex-col gap-y-8 sm:gap-y-12 md:gap-y-16"
  >
    <header
      ref="header"
      class="sticky md:top-16 sm:top-12 top-8 md:mx-24 lg:mx-32 2xl:mx-48 sm:mx-12 mx-8 flex md:flex-row flex-col p-4 rounded-[2.5rem] justify-between text-sm bg-neutral-50/60 backdrop-blur-lg border-2 border-neutral-300 dark:border-neutral-700 text-brand-darker dark:bg-neutral-800/75 dark:text-brand-light"
    >
      <div class="flex flex-row justify-center md:justify-start mb-4 md:mb-0">
        <img src="@/assets/branding/logo.svg" class="h-8 my-auto" />
        <h1
          class="font-display pl-2 my-auto text-2xl dark:text-brand-light text-brand-darker"
        >
          Senang Segar
        </h1>
      </div>
      <div
        class="flex flex-row gap-x-8 md:my-auto text-base justify-center md:justify-start"
      >
        <nuxt-link
          to="/en/#about-us"
          class="my-auto dark:hover:text-brand-lighter hover:text-brand-darkest font-medium"
          >About Us</nuxt-link
        >
        <nuxt-link
          to="/en/menu"
          class="dark:bg-brand-darkest text-center sm:text-left bg-brand-lighter dark:text-brand-light dark:hover:bg-brand-darker dark:hover:text-brand-lighter hover:bg-brand-light hover:text-brand-darkest py-2 px-4 rounded-full font-medium"
        >
          <p>Menu</p>
        </nuxt-link>
      </div>
    </header>
    <div ref="target" class="md:mt-16 sm:mt-12 mt-8">
      <div
        class="md:px-24 lg:px-32 2xl:px-48 sm:px-12 px-8 min-h-screen md:min-w-full md:flex md:justify-center text-brand-darker dark:text-brand-light"
      >
        <slot />
      </div>
      <footer
        class="dark:bg-neutral-800/75 bg-neutral-200/25 md:pb-16 sm:pb-12 pb-8 pt-4 md:px-24 sm:px-16 px-8"
      >
        <div
          class="dark:bg-brand-darkest bg-brand-lighter rounded-[2.5rem] p-8 mb-16 -mt-24 flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 justify-between"
        >
          <h2
            class="font-medium text-xl sm:text-2xl sm:w-1/2 dark:text-brand-lightest text-brand-darkest"
          >
            Whether it's a filling meal or a cold dessert, we're ready to serve
            you.
          </h2>
          <nuxt-link
            to="/menu"
            class="dark:bg-brand-darker bg-brand-light dark:text-brand-light dark:hover:bg-brand-darker/50 dark:hover:text-brand-lighter hover:bg-brand-lightest hover:text-brand-darkest py-4 px-12 text-center sm:text-left sm:w-fit h-fit my-auto rounded-full font-medium"
          >
            <p>See the menu</p>
          </nuxt-link>
        </div>
        <div
          class="flex flex-col md:flex-row gap-y-8 md:gap-y-0 justify-between"
        >
          <div class="flex flex-col gap-y-2">
            <div class="flex flex-row justify-start">
              <img src="@/assets/branding/logo.svg" class="h-8 my-auto" />
              <h1
                class="font-display pl-2 my-auto text-2xl dark:text-brand-light text-brand-darker"
              >
                Senang Segar
              </h1>
            </div>
            <div class="flex gap-x-2 ml-10">
              <Icon name="flagpack:gb-ukm" class="text-lg my-auto opacity-75" />
              <p class="my-auto dark:text-neutral-400">
                English (International)
              </p>
            </div>
            <div class="flex gap-x-2 ml-[2.375rem]">
              <nuxt-link
                to="/id/"
                class="my-auto text-sm hover:underline dark:text-neutral-500"
              >
                Mau pakai Bahasa Indonesia aja?
              </nuxt-link>
            </div>
          </div>
          <div class="gap-y-2 flex flex-col">
            <h3
              class="text-lg font-semibold dark:text-brand-dark text-brand-light"
            >
              Pages
            </h3>
            <div
              class="flex flex-col gap-y-2 dark:text-brand-lightest text-brand-darkest"
            >
              <nuxt-link to="/#about-us" class="hover:underline"
                >About Us</nuxt-link
              >
              <nuxt-link to="/menu" class="hover:underline">Menu</nuxt-link>
              <nuxt-link to="/en/branding" class="hover:underline"
                >Branding</nuxt-link
              >
            </div>
          </div>
          <div class="gap-y-2 flex flex-col">
            <h3
              class="text-lg font-semibold dark:text-brand-dark text-brand-light"
            >
              Address
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
                (In front of Building D)
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
