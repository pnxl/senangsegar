<template>
  <main
    class="bg-neutral-100 dark:bg-neutral-900 flex flex-col gap-y-8 sm:gap-y-12 md:gap-y-16"
    id="main"
  >
    <header
      ref="header"
      class="sticky z-50 selection:bg-transparent md:top-16 sm:top-12 top-8 md:mx-24 lg:mx-32 2xl:mx-48 sm:mx-12 mx-8 flex md:flex-row flex-col md:p-4 pb-2 pt-3 rounded-[2.5rem] justify-between text-sm bg-neutral-50/60 backdrop-blur-lg border-2 border-neutral-300 dark:border-neutral-700 text-brand-darker dark:bg-neutral-800/75 dark:text-brand-light"
    >
      <nuxt-link
        to="/id/#main"
        class="flex flex-row justify-center md:justify-start mb-4 md:mb-0"
      >
        <img
          src="/branding/senangsegar-mascot-cici-default.svg"
          class="h-8 my-auto"
        />
        <h1
          class="font-display pl-2 my-auto text-2xl dark:text-brand-light text-brand-darker selection:dark:text-brand-light selection:text-brand-darker"
        >
          Senang Segar
        </h1>
      </nuxt-link>
      <div
        class="flex flex-row gap-x-8 md:my-auto text-base justify-center md:justify-start"
      >
        <nuxt-link
          to="/id/#about-us"
          class="my-auto selection:dark:text-brand-light selection:text-brand-darker selection:dark:hover:text-brand-lighter dark:hover:text-brand-lighter selection:hover:text-brand-darkest hover:text-brand-darkest font-medium"
          >Tentang Kami</nuxt-link
        >
        <nuxt-link
          to="/id/menu"
          class="dark:bg-brand-darkest text-center sm:text-left bg-brand-light selection:dark:text-brand-light dark:text-brand-light dark:hover:bg-brand-darker selection:dark:hover:text-brand-lighter dark:hover:text-brand-lighter hover:bg-brand-light selection:hover:text-brand-darkest hover:text-brand-darkest py-2 px-4 rounded-full font-medium"
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
        class="dark:bg-neutral-800/75 bg-neutral-200/25 md:pb-16 sm:pb-12 pb-8 pt-4 md:px-24 mt-24 sm:px-16 px-8"
      >
        <div
          class="dark:bg-brand-darkest bg-brand-light rounded-[2.5rem] p-8 -mt-24 mb-16 flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 justify-between"
        >
          <h2
            class="font-medium text-xl sm:text-2xl sm:w-1/2 dark:text-brand-lightest text-brand-darkest"
          >
            Entah makanan mengenyangkan atau hidangan penutup yang dingin, kami
            siap melayani Anda.
          </h2>
          <nuxt-link
            to="/id/menu"
            class="dark:bg-brand-darker bg-brand-lighter dark:text-brand-light dark:hover:bg-brand-darker/50 dark:hover:text-brand-lighter hover:bg-brand-lightest hover:text-brand-darkest py-4 px-12 text-center sm:text-left sm:w-fit h-fit my-auto rounded-full font-medium"
          >
            <p>Lihat Menu</p>
          </nuxt-link>
        </div>
        <div
          class="flex flex-col md:flex-row gap-y-8 md:gap-y-0 justify-between"
        >
          <div class="flex flex-col gap-y-2">
            <nuxt-link
              to="/id/#main"
              class="flex flex-row selection:bg-transparent justify-start md:mb-0"
            >
              <img
                src="/branding/senangsegar-mascot-cici-default.svg"
                class="h-8 my-auto"
              />
              <h1
                class="font-display pl-2 my-auto text-2xl dark:text-brand-light text-brand-darker selection:dark:text-brand-light selection:text-brand-darker"
              >
                Senang Segar
              </h1>
            </nuxt-link>
            <div class="flex flex-row justify-start gap-x-4 ml-[2.375rem] mb-4">
              <nuxt-link
                to="/id/redirect?url=https://www.instagram.com/senang_segar/"
              >
                <Icon
                  name="fa6-brands:instagram"
                  class="text-[1.375rem] my-auto dark:text-brand-dark text-brand-darker hover:text-brand-dark dark:hover:text-brand-light duration-75 ease-linear"
                />
              </nuxt-link>
              <nuxt-link
                to="/id/redirect?url=https://www.github.com/pnxl/senangsegar"
              >
                <Icon
                  name="fa6-brands:github"
                  class="text-[1.375rem] my-auto dark:text-brand-dark text-brand-darker hover:text-brand-dark dark:hover:text-brand-light duration-75 ease-linear"
                />
              </nuxt-link>
            </div>
            <div class="flex gap-x-2 ml-10">
              <Icon name="flagpack:id" class="text-lg my-auto opacity-75" />
              <p class="my-auto dark:text-neutral-400">Bahasa Indonesia</p>
            </div>
            <div class="flex gap-x-2 ml-[2.375rem]">
              <button
                @click="
                  useCookie('language').value = 'en';
                  navigateTo('/en/' + $route.path.slice(4));
                "
                class="my-auto text-sm hover:underline dark:text-neutral-500"
              >
                Prefer English instead?
              </button>
            </div>
          </div>
          <div class="gap-y-2 flex flex-col">
            <h3
              class="text-lg font-semibold dark:text-brand-dark text-brand-darker"
            >
              Tentang Senang Segar
            </h3>
            <div
              class="flex flex-col ml-[2.375rem] md:ml-0 gap-y-2 dark:text-brand-lightest text-brand-darkest"
            >
              <nuxt-link to="/id/copyright" class="hover:underline"
                >Hak Cipta dan Lisensi</nuxt-link
              >
              <nuxt-link to="/id/branding" class="hover:underline"
                >Merek</nuxt-link
              >
            </div>
          </div>
          <div class="gap-y-2 flex flex-col">
            <h3
              class="text-lg font-semibold dark:text-brand-dark text-brand-darker"
            >
              Alamat
            </h3>
            <nuxt-link
              href="/id/redirect?url=https://maps.app.goo.gl/RDJjLqVUpjtgFtha6"
              class="flex flex-col ml-[2.375rem] md:ml-0 gap-y-2 group dark:text-brand-lightest text-brand-darkest"
            >
              <p class="group-hover:underline">SDH Daan Mogot</p>
              <p
                class="text-sm dark:text-brand-lighter group-hover:underline text-brand-darker -mt-1"
              >
                (Di depan Gedung D)
              </p>
              <p class="group-hover:underline">Jl. Bedugul No. 1</p>
              <p class="group-hover:underline">Daan Mogot Baru, Kalideres</p>
            </nuxt-link>
          </div>
        </div>
      </footer>
    </div>
  </main>
</template>
