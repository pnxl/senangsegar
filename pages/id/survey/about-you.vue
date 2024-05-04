<template>
  <div class="min-h-screen min-w-full flex flex-col gap-y-4">
    <div class="flex flex-col gap-y-8">
      <button
        @click="
          useCookie('survey_started').value = null;
          navigateTo('/id/survey');
        "
        class="dark:text-neutral-500 group font-medium flex gap-x-1"
      >
        <Icon name="ph:arrow-left-bold" class="my-auto text-lg" />
        <p class="group-hover:underline">Kembali</p>
      </button>
      <h1
        class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium md:w-1/2 dark:text-brand-light"
      >
        Pertama, ceritakan sedikit tentang diri Anda
      </h1>
      <div class="flex flex-col gap-y-4">
        <p class="text-lg md:w-1/2 dark:text-brand-dark">
          Apa jenjang kelasmu?
        </p>
        <div class="flex flex-col gap-y-2">
          <label class="flex gap-x-4">
            <input
              v-model="grade"
              type="radio"
              name="grade"
              value="SD"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Sekolah Dasar (SD)</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="grade"
              type="radio"
              name="grade"
              value="SMP"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Sekolah Menengah Pertama (SMP)</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="grade"
              type="radio"
              name="grade"
              value="SMA"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Sekolah Menengah Atas/Kejuruan (SMA/K)</i>
          </label>
        </div>
      </div>
      <div class="flex flex-col gap-y-4" v-if="grade !== ''">
        <p class="text-lg md:w-1/2 dark:text-brand-dark">
          Lebih spesifik, kamu kelas apa?
        </p>
        <div class="flex flex-col gap-y-2" v-if="grade === 'SD'">
          <label class="flex gap-x-4">
            <input
              v-model="classLvl"
              type="radio"
              name="class"
              value="1"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Kelas 1</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="classLvl"
              type="radio"
              name="class"
              value="2"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Kelas 2</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="classLvl"
              type="radio"
              name="class"
              value="3"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Kelas 3</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="classLvl"
              type="radio"
              name="class"
              value="4"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Kelas 4</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="classLvl"
              type="radio"
              name="class"
              value="5"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Kelas 5</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="classLvl"
              type="radio"
              name="class"
              value="6"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Kelas 6</i>
          </label>
        </div>
        <div class="flex flex-col gap-y-2" v-if="grade === 'SMP'">
          <label class="flex gap-x-4">
            <input
              v-model="classLvl"
              type="radio"
              name="class"
              value="1"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Kelas 7 / SMP 1</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="classLvl"
              type="radio"
              name="class"
              value="2"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Kelas 8 / SMP 2</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="classLvl"
              type="radio"
              name="class"
              value="3"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Kelas 9 / SMP 3</i>
          </label>
        </div>
        <div class="flex flex-col gap-y-2" v-if="grade === 'SMA'">
          <label class="flex gap-x-4">
            <input
              v-model="classLvl"
              type="radio"
              name="class"
              value="1"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Kelas 10 / SMA/K 1</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="classLvl"
              type="radio"
              name="class"
              value="2"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Kelas 11 / SMA/K 2</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="classLvl"
              type="radio"
              name="class"
              value="3"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Kelas 12 / SMA/K 3</i>
          </label>
        </div>
      </div>
      <button
        @click="
          useCookie('survey_grade').value = grade + ' ' + classLvl;
          navigateTo('/id/survey/products-interest/smoothies');
        "
        v-if="classLvl !== ''"
        class="dark:bg-brand-darkest bg-brand-light dark:text-brand-light dark:hover:bg-brand-darker dark:hover:text-brand-lighter hover:bg-brand-light/50 hover:text-brand-darkest py-4 px-12 w-fit rounded-full font-medium"
      >
        <p>Lanjut Survei</p>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
definePageMeta({
  pageTransition: {
    name: "swipe",
  },
  layout: "custom",
});

export default {
  data() {
    return {
      grade: "",
      classLvl: "",
    };
  },
};
</script>

<script setup lang="ts">
if (!useCookie("survey_started").value) {
  navigateTo("/id/survey/");
} else if (useCookie("survey_finished").value) {
  navigateTo("/id/survey/finished");
}
</script>
