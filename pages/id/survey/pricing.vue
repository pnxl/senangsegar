<template>
  <div class="min-h-screen min-w-full flex flex-col gap-y-4">
    <div class="flex flex-col gap-y-8">
      <nuxt-link
        to="/id/survey/products-interest/es-campur"
        class="dark:text-neutral-500 group font-medium flex gap-x-1"
      >
        <Icon name="ph:arrow-left-bold" class="my-auto text-lg" />
        <p class="group-hover:underline">Kembali</p>
      </nuxt-link>
      <h1
        class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium md:w-1/2 dark:text-brand-light"
      >
        Terakhir, mari kita tentukan titik harga untuk produk tersebut.
      </h1>
      <div class="flex flex-col gap-y-4">
        <p class="text-lg md:w-1/2 dark:text-brand-dark">
          Menurut Anda, berapa harga yang pas untuk satu jus atau smoothie
          (tanpa tambahan apapun)?
        </p>
        <div
          class="grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 w-fit gap-x-6 md:gap-y-3 gap-y-5 lg:gap-y-0"
        >
          <label class="flex flex-col gap-y-2">
            <input
              v-model="smoothiePrice"
              type="radio"
              name="smoothiePrice"
              value="Rp 7.500"
              class="w-4 h-4 mx-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i>Rp 7.500</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="smoothiePrice"
              type="radio"
              name="smoothiePrice"
              value="Rp 9.000"
              class="w-4 h-4 mx-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i>Rp 9.000</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="smoothiePrice"
              type="radio"
              name="smoothiePrice"
              value="Rp 10.500"
              class="w-4 h-4 mx-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i>Rp 10.500</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="smoothiePrice"
              type="radio"
              name="smoothiePrice"
              value="Rp 12.000"
              class="w-4 h-4 mx-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i>Rp 12.000</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="smoothiePrice"
              type="radio"
              name="smoothiePrice"
              value="Rp 13.500"
              class="w-4 h-4 mx-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i>Rp 13.500</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="smoothiePrice"
              type="radio"
              name="smoothiePrice"
              value="Rp 15.000"
              class="w-4 h-4 mx-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i>Rp 15.000</i>
          </label>
        </div>
      </div>
      <div class="flex flex-col gap-y-4" v-if="smoothiePrice !== ''">
        <p class="text-lg md:w-1/2 dark:text-brand-dark">
          Menurut Anda, berapa harga yang pas untuk satu porsi Es Campur (tanpa
          topping apapun)?
        </p>
        <div
          class="grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 w-fit gap-x-6 md:gap-y-3 gap-y-5 lg:gap-y-0"
        >
          <label class="flex flex-col gap-y-2">
            <input
              v-model="esPrice"
              type="radio"
              name="esPrice"
              value="Rp 7.500"
              class="w-4 h-4 mx-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i>Rp 7.500</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="esPrice"
              type="radio"
              name="esPrice"
              value="Rp 9.000"
              class="w-4 h-4 mx-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i>Rp 9.000</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="esPrice"
              type="radio"
              name="esPrice"
              value="Rp 10.500"
              class="w-4 h-4 mx-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i>Rp 10.500</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="esPrice"
              type="radio"
              name="esPrice"
              value="Rp 12.000"
              class="w-4 h-4 mx-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i>Rp 12.000</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="esPrice"
              type="radio"
              name="esPrice"
              value="Rp 13.500"
              class="w-4 h-4 mx-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i>Rp 13.500</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="esPrice"
              type="radio"
              name="esPrice"
              value="Rp 15.000"
              class="w-4 h-4 mx-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i>Rp 15.000</i>
          </label>
        </div>
      </div>
      <button
        @click="
          useCookie('survey_smoothiePrice').value = smoothiePrice;
          useCookie('survey_esPrice').value = esPrice;

          submit(
            String(useCookie('survey_grade').value),
            String(useCookie('survey_juiceInterest').value),
            String(useCookie('survey_juiceWhyNot').value),
            String(useCookie('survey_juiceFruits').value),
            String(useCookie('survey_juiceIngredients').value),
            String(useCookie('survey_juiceToppings').value),
            String(useCookie('survey_juiceSuggestions').value),
            String(useCookie('survey_smoothiePrice').value),
            String(useCookie('survey_esInterest').value),
            String(useCookie('survey_esWhyNot').value),
            String(useCookie('survey_esToppings').value),
            String(useCookie('survey_esSuggestions').value),
            String(useCookie('survey_esPrice').value)
          );

          navigateTo('/id/survey/finished');
        "
        v-if="smoothiePrice !== '' && esPrice !== ''"
        class="dark:bg-brand-darkest bg-brand-lighter dark:text-brand-light dark:hover:bg-brand-darker dark:hover:text-brand-lighter hover:bg-brand-light hover:text-brand-darkest py-4 px-12 w-fit rounded-full font-medium"
      >
        <p>Kumpul Survei</p>
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
      smoothiePrice: "",
      esPrice: "",
    };
  },
};
</script>

<script setup lang="ts">
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://qsungmsncfglkrhjapia.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzdW5nbXNuY2ZnbGtyaGphcGlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ4MDI3NTEsImV4cCI6MjAzMDM3ODc1MX0.yUozFWavwITc-KLxwmqB32ACmIYL7JDwF54ntYJaza0"
);
async function submit(
  ans_class: string,
  ans_juiceInterest: string,
  ans_juiceWhyNot: string,
  ans_juiceFruits: string,
  ans_juiceIngredients: string,
  ans_juiceToppings: string,
  ans_juiceSuggestions: string,
  ans_juicePrice: string,
  ans_campurInterest: string,
  ans_campurWhyNot: string,
  ans_campurToppings: string,
  ans_campurSuggestions: string,
  ans_campurPrice: string
) {
  await supabase
    .from("surveyResults")
    .insert({
      class: ans_class,
      juiceInterest: ans_juiceInterest,
      juiceWhyNot: ans_juiceWhyNot,
      juiceFruits: ans_juiceFruits,
      juiceIngredients: ans_juiceIngredients,
      juiceToppings: ans_juiceToppings,
      juiceSuggestions: ans_juiceSuggestions,
      juicePrice: ans_juicePrice,
      campurInterest: ans_campurInterest,
      campurWhyNot: ans_campurWhyNot,
      campurToppings: ans_campurToppings,
      campurSuggestions: ans_campurSuggestions,
      campurPrice: ans_campurPrice,
    })
    .then((r: any) => console.log(r));
}
</script>
