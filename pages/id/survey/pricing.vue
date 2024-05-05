<template>
  <div class="min-h-screen min-w-full flex flex-col gap-y-4">
    <div class="flex flex-col gap-y-8">
      <button
        @click="
          useCookie('survey_esInterest').value = null;
          useCookie('survey_esWhyNot').value = null;
          useCookie('survey_esToppings').value = null;
          useCookie('survey_esSuggestion').value = null;
          navigateTo('/id/survey/products-interest/es-campur');
        "
        class="dark:text-neutral-500 group font-medium flex gap-x-1"
      >
        <Icon name="ph:arrow-left-bold" class="my-auto text-lg" />
        <p class="group-hover:underline">Kembali</p>
      </button>
      <h1
        class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium md:w-1/2 dark:text-brand-light"
      >
        Terakhir, mari kita tentukan titik harga untuk produk tersebut.
      </h1>
      <div class="flex flex-col gap-y-4">
        <p class="text-lg md:w-1/2 dark:text-brand-dark">
          Menurut Anda, berapa harga yang pas untuk satu smoothie (dengan dua
          buah dan tanpa tambahan apapun)?
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
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 mx-auto rounded-full appearance-none"
            />
            <i>Rp 7.500</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="smoothiePrice"
              type="radio"
              name="smoothiePrice"
              value="Rp 9.000"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 mx-auto rounded-full appearance-none"
            />
            <i>Rp 9.000</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="smoothiePrice"
              type="radio"
              name="smoothiePrice"
              value="Rp 10.500"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 mx-auto rounded-full appearance-none"
            />
            <i>Rp 10.500</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="smoothiePrice"
              type="radio"
              name="smoothiePrice"
              value="Rp 12.000"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 mx-auto rounded-full appearance-none"
            />
            <i>Rp 12.000</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="smoothiePrice"
              type="radio"
              name="smoothiePrice"
              value="Rp 13.500"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 mx-auto rounded-full appearance-none"
            />
            <i>Rp 13.500</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="smoothiePrice"
              type="radio"
              name="smoothiePrice"
              value="Rp 15.000"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 mx-auto rounded-full appearance-none"
            />
            <i>Rp 15.000</i>
          </label>
        </div>
      </div>
      <div class="flex flex-col gap-y-4" v-if="smoothiePrice !== ''">
        <p class="text-lg md:w-1/2 dark:text-brand-dark">
          Menurut Anda, berapa harga yang pas untuk satu soda buah (tanpa
          topping apapun)?
        </p>
        <div
          class="grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 w-fit gap-x-6 md:gap-y-3 gap-y-5 lg:gap-y-0"
        >
          <label class="flex flex-col gap-y-2">
            <input
              v-model="sodaPrice"
              type="radio"
              name="sodaPrice"
              value="Rp 7.500"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 mx-auto rounded-full appearance-none"
            />
            <i>Rp 7.500</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="sodaPrice"
              type="radio"
              name="sodaPrice"
              value="Rp 9.000"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 mx-auto rounded-full appearance-none"
            />
            <i>Rp 9.000</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="sodaPrice"
              type="radio"
              name="sodaPrice"
              value="Rp 10.500"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 mx-auto rounded-full appearance-none"
            />
            <i>Rp 10.500</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="sodaPrice"
              type="radio"
              name="sodaPrice"
              value="Rp 12.000"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 mx-auto rounded-full appearance-none"
            />
            <i>Rp 12.000</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="sodaPrice"
              type="radio"
              name="sodaPrice"
              value="Rp 13.500"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 mx-auto rounded-full appearance-none"
            />
            <i>Rp 13.500</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="sodaPrice"
              type="radio"
              name="sodaPrice"
              value="Rp 15.000"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 mx-auto rounded-full appearance-none"
            />
            <i>Rp 15.000</i>
          </label>
        </div>
      </div>
      <div class="flex flex-col gap-y-4" v-if="sodaPrice !== ''">
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
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 mx-auto rounded-full appearance-none"
            />
            <i>Rp 7.500</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="esPrice"
              type="radio"
              name="esPrice"
              value="Rp 9.000"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 mx-auto rounded-full appearance-none"
            />
            <i>Rp 9.000</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="esPrice"
              type="radio"
              name="esPrice"
              value="Rp 10.500"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 mx-auto rounded-full appearance-none"
            />
            <i>Rp 10.500</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="esPrice"
              type="radio"
              name="esPrice"
              value="Rp 12.000"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 mx-auto rounded-full appearance-none"
            />
            <i>Rp 12.000</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="esPrice"
              type="radio"
              name="esPrice"
              value="Rp 13.500"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 mx-auto rounded-full appearance-none"
            />
            <i>Rp 13.500</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="esPrice"
              type="radio"
              name="esPrice"
              value="Rp 15.000"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 mx-auto rounded-full appearance-none"
            />
            <i>Rp 15.000</i>
          </label>
        </div>
      </div>
      <button
        @click="
          useCookie('survey_smoothiePrice').value = smoothiePrice;
          useCookie('survey_sodaPrice').value = sodaPrice;
          useCookie('survey_esPrice').value = esPrice;

          useCookie('survey_finished').value = 'true';

          submit(
            String(useCookie('survey_grade').value),
            String(useCookie('survey_smoothieInterest').value),
            String(useCookie('survey_smoothieWhyNot').value),
            String(useCookie('survey_smoothieFruits').value),
            String(useCookie('survey_smoothieToppings').value),
            String(useCookie('survey_smoothieSuggestion').value),
            String(smoothiePrice),
            String(useCookie('survey_sodaInterest').value),
            String(useCookie('survey_sodaWhyNot').value),
            String(useCookie('survey_sodaFruits').value),
            String(useCookie('survey_sodaToppings').value),
            String(useCookie('survey_sodaSuggestion').value),
            String(sodaPrice),
            String(useCookie('survey_esInterest').value),
            String(useCookie('survey_esWhyNot').value),
            String(useCookie('survey_esToppings').value),
            String(useCookie('survey_esSuggestion').value),
            String(esPrice)
          );

          navigateTo('/id/survey/finished');
        "
        v-if="smoothiePrice !== '' && esPrice !== ''"
        class="dark:bg-brand-darkest bg-brand-light dark:text-brand-light dark:hover:bg-brand-darker dark:hover:text-brand-lighter hover:bg-brand-light/50 hover:text-brand-darkest py-4 px-12 w-fit rounded-full font-medium"
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
      sodaPrice: "",
    };
  },
};
</script>

<script setup lang="ts">
import { createClient } from "@supabase/supabase-js";

useHead({
  title: "Survey — Senang Segar",
});

const config = useRuntimeConfig();

if (!useCookie("survey_esInterest").value) {
  navigateTo("/id/survey/products-interest/es-campur");
} else if (useCookie("survey_finished").value) {
  navigateTo("/id/survey/finished");
}

const supabase = createClient(
  config.public.databaseUrl,
  config.public.anonymousApikey
);

async function submit(
  ans_class: string,
  ans_smoothieInterest: string,
  ans_smoothieWhyNot: string,
  ans_smoothieFruits: string,
  ans_smoothieToppings: string,
  ans_smoothieSuggestions: string,
  ans_smoothiePrice: string,
  ans_sodaInterest: string,
  ans_sodaWhyNot: string,
  ans_sodaFruits: string,
  ans_sodaToppings: string,
  ans_sodaSuggestions: string,
  ans_sodaPrice: string,
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
      smoothieInterest: ans_smoothieInterest,
      smoothieWhyNot: ans_smoothieWhyNot,
      smoothieFruits: ans_smoothieFruits,
      smoothieToppings: ans_smoothieToppings,
      smoothieSuggestions: ans_smoothieSuggestions,
      smoothiePrice: ans_smoothiePrice,
      sodaWhyNot: ans_sodaWhyNot,
      sodaFruits: ans_sodaFruits,
      sodaToppings: ans_sodaToppings,
      sodaSuggestions: ans_sodaSuggestions,
      sodaPrice: ans_sodaPrice,
      campurInterest: ans_campurInterest,
      campurWhyNot: ans_campurWhyNot,
      campurToppings: ans_campurToppings,
      campurSuggestions: ans_campurSuggestions,
      campurPrice: ans_campurPrice,
      sodaInterest: ans_sodaInterest,
    })
    .then((r: any) => console.log(r));
}
</script>
