<template>
  <div class="min-h-screen min-w-full flex flex-col gap-y-4">
    <div class="flex flex-col gap-y-8">
      <h1
        class="font-display text-3xl md:text-4xl lg:text-5xl font-medium dark:text-brand-light"
      >
        Copyright and Licenses
      </h1>

      <div class="flex flex-col gap-y-2">
        <div
          class="dark:bg-neutral-800 bg-neutral-100 flex flex-col gap-y-2 border-neutral-300 border-2 dark:border-transparent p-4 rounded-t-xl"
        >
          <p>
            The code found on this website is licensed under GNU General Public License v2.0
          </p>
          <div class="flex md:flex-row flex-col gap-y-1 gap-x-1">
            <nuxt-link
              to="/en/redirect?url=https://github.com/pnxl/senangsegar/"
              class="dark:bg-brand-darkest bg-brand-light w-full dark:text-brand-light dark:hover:bg-brand-darker dark:hover:text-brand-lighter hover:bg-brand-light/50 hover:text-brand-darkest py-2 px-4 md:w-fit rounded-t-xl md:rounded-tr-none md:rounded-l-full font-medium"
            >
              <p>View the code for this website</p>
            </nuxt-link>
            <nuxt-link
              to="/en/redirect?url=https://github.com/pnxl/senangsegar/blob/main/LICENSE"
              class="dark:bg-brand-darkest bg-brand-light w-full dark:text-brand-light dark:hover:bg-brand-darker dark:hover:text-brand-lighter hover:bg-brand-light/50 hover:text-brand-darkest py-2 px-4 md:w-fit rounded-b-xl md:rounded-r-full md:rounded-bl-none font-medium"
            >
              <p>Read GNU General Public License v2.0</p>
            </nuxt-link>
          </div>
        </div>

        <div
          class="dark:bg-neutral-800 bg-neutral-100 flex flex-col gap-y-2 border-neutral-300 border-2 dark:border-transparent p-4 rounded-b-xl"
        >
          <p>
            Our official branding assets are licensed under Creative Commons BY-NC-ND 4.0.
          </p>
          <div class="flex md:flex-row flex-col gap-y-1 gap-x-1">
            <nuxt-link
              to="/en/branding"
              class="dark:bg-brand-darkest bg-brand-light w-full dark:text-brand-light dark:hover:bg-brand-darker dark:hover:text-brand-lighter hover:bg-brand-light/50 hover:text-brand-darkest py-2 px-4 md:w-fit rounded-t-xl md:rounded-tr-none md:rounded-l-full font-medium"
            >
              <p>View official branding assets</p>
            </nuxt-link>
            <nuxt-link
              to="/en/redirect?url=https://github.com/pnxl/senangsegar/blob/main/LICENSE"
              class="dark:bg-brand-darkest bg-brand-light w-full dark:text-brand-light dark:hover:bg-brand-darker dark:hover:text-brand-lighter hover:bg-brand-light/50 hover:text-brand-darkest py-2 px-4 md:w-fit rounded-b-xl md:rounded-r-full md:rounded-bl-none font-medium"
            >
              <p>Read Creative Commons BY-NC-ND 4.0</p>
            </nuxt-link>
          </div>
        </div>
      </div>

      <hr
        class="dark:border-neutral-800/75 border-neutral-200 border-2 rounded-full mt-1"
      />

      <p>
        We use some of the most incredible open-source projects and assets to empower our technologies - because of that, we'd like to give them attribution in this page.
      </p>

      <div class="grid lg:grid-cols-2 gap-x-4 gap-y-4 mb-16">
        <div>
          <p class="text-lg">
            Nuxt <span class="text-sm opacity-75">v3.11.2</span>
          </p>

          <ul class="list-disc ml-8">
            <li>Licensed under The MIT License</li>
            <li>Copyright © 2016-present - Nuxt Team</li>
          </ul>
        </div>
        <div>
          <p class="text-lg">
            @nuxtjs/sitemap <span class="text-sm opacity-75">v5.1.5</span>
          </p>

          <ul class="list-disc ml-8">
            <li>Licensed under The MIT License</li>
            <li>Copyright © 2022-present Harlan Wilton</li>
          </ul>
        </div>
        <div>
          <p class="text-lg">
            Tailwind CSS <span class="text-sm opacity-75">v3.2.4</span>
          </p>

          <ul class="list-disc ml-8">
            <li>Licensed under The MIT License</li>
            <li>Copyright © Tailwind Labs, Inc.</li>
          </ul>
        </div>
        <div>
          <p class="text-lg">
            PostCSS <span class="text-sm opacity-75">v8.4.20</span>
          </p>

          <ul class="list-disc ml-8">
            <li>Licensed under The MIT License</li>
            <li>Copyright 2013 Andrey Sitnik {{"<andrey@sitnik.ru>"}}</li>
          </ul>
        </div>
        <div>
          <p class="text-lg">
            PostCSS <span class="text-sm opacity-75">v10.4.13</span>
          </p>

          <ul class="list-disc ml-8">
            <li>Licensed under The MIT License</li>
            <li>Copyright 2013 Andrey Sitnik {{"<andrey@sitnik.ru>"}}</li>
          </ul>
        </div>
        <div>
          <p class="text-lg">
            Nuxt Icon <span class="text-sm opacity-75">v0.6.10</span>
          </p>

          <ul class="list-disc ml-8">
            <li>Licensed under The MIT License</li>
            <li>Copyright © 2022 Sébastien Chopin</li>
          </ul>
        </div>
        <div>
          <p class="text-lg">
            supabase-js <span class="text-sm opacity-75">v2.43.1</span>
          </p>

          <ul class="list-disc ml-8">
            <li>Licensed under The MIT License</li>
            <li>Copyright © 2020 Supabase</li>
          </ul>
        </div>
        <div>
          <p class="text-lg">
            Grandstander
          </p>

          <ul class="list-disc ml-8">
            <li>Licensed under SIL Open Font License</li>
            <li>Copyright © Tyler Finck & ETC</li>
          </ul>
        </div>
        <div>
          <p class="text-lg">
            Montserrat
          </p>

          <ul class="list-disc ml-8">
            <li>Licensed under bawah SIL Open Font License</li>
            <li>Copyright © Julieta Ulanovsky & Jacques Le Bailly at Baron von Fonthausen</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
definePageMeta({
  layout: "english",
});

useHead({
  title: "Copyright and Licenses — Senang Segar",
});
</script>