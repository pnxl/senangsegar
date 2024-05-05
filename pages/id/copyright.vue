<template>
  <div class="min-h-screen min-w-full flex flex-col gap-y-4">
    <div class="flex flex-col gap-y-8">
      <h1
        class="font-display text-3xl md:text-4xl lg:text-5xl font-medium dark:text-brand-light"
      >
        Hak Cipta dan Lisensi
      </h1>

      <div class="flex flex-col gap-y-2">
        <div
          class="dark:bg-neutral-800 bg-neutral-100 flex flex-col gap-y-2 border-neutral-300 border-2 dark:border-transparent p-4 rounded-t-xl"
        >
          <p>
            Kode yang ditemukan di situs web ini dilisensikan di bawah GNU
            General Public License v2.0.
          </p>
          <div class="flex md:flex-row flex-col gap-y-1 gap-x-1">
            <nuxt-link
              to="/id/redirect?url=https://github.com/pnxl/senangsegar/"
              class="dark:bg-brand-darkest bg-brand-light w-full dark:text-brand-light dark:hover:bg-brand-darker dark:hover:text-brand-lighter hover:bg-brand-light/50 hover:text-brand-darkest py-2 px-4 md:w-fit rounded-t-xl md:rounded-tr-none md:rounded-l-full font-medium"
            >
              <p>Lihat kode untuk situs web ini</p>
            </nuxt-link>
            <nuxt-link
              to="/id/redirect?url=https://github.com/pnxl/senangsegar/blob/main/LICENSE"
              class="dark:bg-brand-darkest bg-brand-light w-full dark:text-brand-light dark:hover:bg-brand-darker dark:hover:text-brand-lighter hover:bg-brand-light/50 hover:text-brand-darkest py-2 px-4 md:w-fit rounded-b-xl md:rounded-r-full md:rounded-bl-none font-medium"
            >
              <p>Baca GNU General Public License v2.0</p>
            </nuxt-link>
          </div>
        </div>

        <div
          class="dark:bg-neutral-800 bg-neutral-100 flex flex-col gap-y-2 border-neutral-300 border-2 dark:border-transparent p-4 rounded-b-xl"
        >
          <p>
            Aset merek resmi kami dilisensikan di bawah Creative Commons
            BY-NC-ND 4.0.
          </p>
          <div class="flex md:flex-row flex-col gap-y-1 gap-x-1">
            <nuxt-link
              to="/id/branding"
              class="dark:bg-brand-darkest bg-brand-light w-full dark:text-brand-light dark:hover:bg-brand-darker dark:hover:text-brand-lighter hover:bg-brand-light/50 hover:text-brand-darkest py-2 px-4 md:w-fit rounded-t-xl md:rounded-tr-none md:rounded-l-full font-medium"
            >
              <p>Lihat aset merek resmi</p>
            </nuxt-link>
            <nuxt-link
              to="/id/redirect?url=https://github.com/pnxl/senangsegar/blob/main/LICENSE"
              class="dark:bg-brand-darkest bg-brand-light w-full dark:text-brand-light dark:hover:bg-brand-darker dark:hover:text-brand-lighter hover:bg-brand-light/50 hover:text-brand-darkest py-2 px-4 md:w-fit rounded-b-xl md:rounded-r-full md:rounded-bl-none font-medium"
            >
              <p>Baca Creative Commons BY-NC-ND 4.0</p>
            </nuxt-link>
          </div>
        </div>
      </div>

      <hr
        class="dark:border-neutral-800/75 border-neutral-200 border-2 rounded-full mt-1"
      />

      <p>
        Kami menggunakan beberapa proyek dan aset open-source yang paling luar
        biasa untuk memberdayakan teknologi kami - oleh karena itu, kami ingin
        memberikan atribusi pada proyek tersebut di halaman ini.
      </p>

      <div class="grid lg:grid-cols-2 gap-x-4 gap-y-4 mb-16">
        <div>
          <p class="text-lg">
            Nuxt <span class="text-sm opacity-75">v3.11.2</span>
          </p>

          <ul class="list-disc ml-8">
            <li>Berlisensi di bawah Lisensi MIT</li>
            <li>Hak Cipta © 2016-sekarang - Nuxt Team</li>
          </ul>
        </div>
        <div>
          <p class="text-lg">
            Tailwind CSS <span class="text-sm opacity-75">v3.4.3</span>
          </p>

          <ul class="list-disc ml-8">
            <li>Berlisensi di bawah Lisensi MIT</li>
            <li>Hak Cipta © Tailwind Labs, Inc.</li>
          </ul>
        </div>
        <div>
          <p class="text-lg">
            PostCSS <span class="text-sm opacity-75">v8.4.38</span>
          </p>

          <ul class="list-disc ml-8">
            <li>Berlisensi di bawah Lisensi MIT</li>
            <li>Hak Cipta 2013 Andrey Sitnik {{"<andrey@sitnik.ru>"}}</li>
          </ul>
        </div>
        <div>
          <p class="text-lg">
            Autoprefixer <span class="text-sm opacity-75">v10.4.19</span>
          </p>

          <ul class="list-disc ml-8">
            <li>Berlisensi di bawah Lisensi MIT</li>
            <li>Hak Cipta 2013 Andrey Sitnik {{"<andrey@sitnik.ru>"}}</li>
          </ul>
        </div>
        <div>
          <p class="text-lg">
            Nuxt Icon <span class="text-sm opacity-75">v0.6.10</span>
          </p>

          <ul class="list-disc ml-8">
            <li>Berlisensi di bawah Lisensi MIT</li>
            <li>Hak Cipta © 2022 Sébastien Chopin</li>
          </ul>
        </div>
        <div>
          <p class="text-lg">
            supabase-js <span class="text-sm opacity-75">v2.43.1</span>
          </p>

          <ul class="list-disc ml-8">
            <li>Berlisensi di bawah Lisensi MIT</li>
            <li>Hak Cipta © 2020 Supabase</li>
          </ul>
        </div>
        <div>
          <p class="text-lg">
            Grandstander
          </p>

          <ul class="list-disc ml-8">
            <li>Berlisensi di bawah SIL Open Font License</li>
            <li>Hak Cipta © Tyler Finck & ETC</li>
          </ul>
        </div>
        <div>
          <p class="text-lg">
            Montserrat
          </p>

          <ul class="list-disc ml-8">
            <li>Berlisensi di bawah SIL Open Font License</li>
            <li>Hak Cipta © Julieta Ulanovsky & Jacques Le Bailly at Baron von Fonthausen</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Hak Cipta dan Lisensi — Senang Segar",
});
</script>

