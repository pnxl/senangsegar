<template>
  <div class="min-h-screen min-w-full flex flex-col gap-y-4">
    <div class="flex flex-col gap-y-8">
      <button
        @click="
          useCookie('survey_started').value = null;
          navigateTo('/en/survey');
        "
        class="dark:text-neutral-500 group font-medium flex gap-x-1"
      >
        <Icon name="ph:arrow-left-bold" class="my-auto text-lg" />
        <p class="group-hover:underline">Back</p>
      </button>
      <h1
        class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium md:w-1/2 dark:text-brand-light"
      >
        First, tell us a bit more about you
      </h1>
      <div class="flex flex-col gap-y-4">
        <p class="text-lg md:w-1/2 dark:text-brand-dark">
          What is your education level?
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
            <i class="my-auto">Elementary School</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="grade"
              type="radio"
              name="grade"
              value="SMP"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Junior High School</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="grade"
              type="radio"
              name="grade"
              value="SMA"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Senior High/Vocational School</i>
          </label>
        </div>
      </div>
      <div class="flex flex-col gap-y-4" v-if="grade !== ''">
        <p class="text-lg md:w-1/2 dark:text-brand-dark">
          To be more specific, what grade are you on?
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
            <i class="my-auto">Grade 1</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="classLvl"
              type="radio"
              name="class"
              value="2"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Grade 2</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="classLvl"
              type="radio"
              name="class"
              value="3"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Grade 3</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="classLvl"
              type="radio"
              name="class"
              value="4"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Grade 4</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="classLvl"
              type="radio"
              name="class"
              value="5"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Grade 5</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="classLvl"
              type="radio"
              name="class"
              value="6"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Grade 6</i>
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
            <i class="my-auto">Grade 7</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="classLvl"
              type="radio"
              name="class"
              value="2"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Grade 8</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="classLvl"
              type="radio"
              name="class"
              value="3"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Grade 9</i>
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
            <i class="my-auto">Grade 10</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="classLvl"
              type="radio"
              name="class"
              value="2"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Grade 11</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="classLvl"
              type="radio"
              name="class"
              value="3"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Grade 12</i>
          </label>
        </div>
      </div>
      <button
        @click="
          useCookie('survey_grade').value = grade + ' ' + classLvl;
          navigateTo('/en/survey/products-interest/smoothies');
        "
        v-if="classLvl !== ''"
        class="dark:bg-brand-darkest bg-brand-light dark:text-brand-light dark:hover:bg-brand-darker dark:hover:text-brand-lighter hover:bg-brand-light/50 hover:text-brand-darkest py-4 px-12 w-fit rounded-full font-medium"
      >
        <p>Continue Survey</p>
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
useHead({
  title: "Survey — Senang Segar",
});

if (!useCookie("survey_started").value) {
  navigateTo("/en/survey/");
} else if (useCookie("survey_finished").value) {
  navigateTo("/en/survey/finished");
}
</script>
