<template>
  <div class="min-h-screen min-w-full flex flex-col gap-y-4">
    <div class="flex flex-col gap-y-8">
      <button
        @click="
          useCookie('survey_smoothieInterest').value = null;
          useCookie('survey_smoothieWhyNot').value = null;
          useCookie('survey_smoothieFruits').value = null;
          useCookie('survey_smoothieToppings').value = null;
          useCookie('survey_smoothieSuggestion').value = null;
          navigateTo('/en/survey/products-interest/smoothies');
        "
        class="dark:text-neutral-500 group font-medium flex gap-x-1"
      >
        <Icon name="ph:arrow-left-bold" class="my-auto text-lg" />
        <p class="group-hover:underline">Back</p>
      </button>
      <h1
        class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium md:w-1/2 dark:text-brand-light"
      >
        Next, let's talk about our products that might be of interest for you
      </h1>
      <div class="flex flex-col gap-y-4">
        <p class="text-lg md:w-1/2 dark:text-brand-dark">
          Are you interested in purchasing a fruit soda?
        </p>
        <div class="flex flex-col gap-y-2">
          <label class="flex gap-x-4">
            <input
              v-model="interest"
              type="radio"
              name="interest"
              value="Iya"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Yes</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="interest"
              type="radio"
              name="interest"
              value="Tidak"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">No</i>
          </label>
        </div>
      </div>
      <div class="flex flex-col gap-y-4" v-if="interest === 'Iya'">
        <p class="text-lg md:w-1/2 dark:text-brand-dark">
          From the following options, what flavour would want in a fruit soda?
        </p>
        <p class="md:w-1/2 -mt-4 text-sm dark:text-brand-dark opacity-50">
          (Multiple choices are accepted)
        </p>
        <div class="flex flex-col gap-y-2">
          <label class="flex gap-x-4">
            <input
              v-model="apple"
              type="checkbox"
              name="apple"
              value="Apel"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Apple</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="grape"
              type="checkbox"
              name="grape"
              value="Pisang"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Grape</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="lemon"
              type="checkbox"
              name="lemon"
              value="Lemon"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Lemon</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="orange"
              type="checkbox"
              name="orange"
              value="Jeruk"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Orange</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="strawberry"
              type="checkbox"
              name="Stroberi"
              value="Stroberi"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Strawberry</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="watermelon"
              type="checkbox"
              name="watermelon"
              value="Semangka"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Watermelon</i>
          </label>
        </div>
      </div>
      <div
        class="flex flex-col gap-y-4"
        v-if="
          (apple !== false ||
            orange !== false ||
            lemon !== false ||
            grape !== false ||
            watermelon !== false ||
            strawberry !== false) &&
          interest === 'Iya'
        "
      >
        <p class="text-lg md:w-1/2 dark:text-brand-dark">
          From the following options, what toppings would you put on a fruit
          soda?
        </p>
        <p class="md:w-1/2 -mt-4 text-sm dark:text-brand-dark opacity-50">
          (Multiple choices are accepted)
        </p>
        <div class="flex flex-col gap-y-2">
          <label class="flex gap-x-4">
            <input
              v-model="chiaSeeds"
              type="checkbox"
              name="chiaSeeds"
              value="Chia Seeds"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Chia Seeds</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="fruitSlices"
              type="checkbox"
              name="fruitSlices"
              value="Potongan Buah"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Chopped Fruit</i>
          </label>
        </div>
      </div>
      <div class="flex flex-col gap-y-4" v-if="interest === 'Iya'">
        <p class="text-lg md:w-1/2 dark:text-brand-dark">
          Do you have any suggestions on other flavours or toppings that we can
          provide?
        </p>
        <div class="flex flex-col gap-y-2">
          <label class="flex gap-x-4">
            <textarea
              v-model="flavourSuggestion"
              name="class"
              placeholder="If so, please enter it here..."
              class="h-40 md:w-1/2 w-full text-pretty my-auto p-4 bg-neutral-100 dark:bg-neutral-800 ring-transparent valid:ring-brand-light ring-offset-neutral-900 ring-2 ring-offset-1 rounded-2xl appearance-none"
            />
          </label>
        </div>
      </div>
      <div class="flex flex-col gap-y-4" v-else-if="interest === 'Tidak'">
        <p class="text-lg md:w-1/2 dark:text-brand-dark">
          If you can, please provide a short reason why you aren't interested in
          purchasing a fruit soda.
        </p>
        <div class="flex flex-col gap-y-2">
          <label class="flex gap-x-4">
            <textarea
              v-model="whyNot"
              name="class"
              placeholder="Please provide a short reason why you aren't interested in this product..."
              class="h-40 md:w-1/2 w-full text-pretty my-auto p-4 bg-neutral-100 dark:bg-neutral-800 ring-transparent valid:ring-brand-light ring-offset-neutral-900 ring-2 ring-offset-1 rounded-2xl appearance-none"
            />
          </label>
        </div>
      </div>
      <button
        @click="
          useCookie('survey_sodaInterest').value = interest;
          useCookie('survey_sodaWhyNot').value = whyNot;
          useCookie('survey_sodaFruits').value = [
            String(apple).replace('true', 'Apel'),
            String(orange).replace('true', 'Jeruk'),
            String(lemon).replace('true', 'Lemon'),
            String(grape).replace('true', 'Anggur'),
            String(watermelon).replace('true', 'Semangka'),
            String(strawberry).replace('true', 'Stroberi'),
          ]
            .join(', ')
            .replaceAll('false, ', '')
            .replaceAll('false', '');

          useCookie('survey_sodaToppings').value = [
            String(fruitSlices).replace('true', 'Potongan Buah'),
            String(chiaSeeds).replace('true', 'Chia Seeds'),
          ]
            .join(', ')
            .replaceAll('false, ', '')
            .replaceAll('false', '');

          useCookie('survey_sodaSuggestion').value = flavourSuggestion;

          navigateTo('/en/survey/products-interest/es-campur');
        "
        v-if="
          interest === 'Tidak' ||
          ((apple !== false ||
            orange !== false ||
            lemon !== false ||
            grape !== false ||
            watermelon !== false ||
            strawberry !== false ||
            flavourSuggestion !== '') &&
            interest === 'Iya')
        "
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
      interest: "",
      whyNot: "",
      apple: false,
      grape: false,
      orange: false,
      lemon: false,
      strawberry: false,
      watermelon: false,
      fruitSlices: false,
      chiaSeeds: false,
      flavourSuggestion: "",
    };
  },
};
</script>

<script setup lang="ts">
useHead({
  title: "Survey — Senang Segar",
});

if (!useCookie("survey_smoothieInterest").value) {
  navigateTo("/id/survey/products-interest/smoothies");
} else if (useCookie("survey_finished").value) {
  navigateTo("/id/survey/finished");
}
</script>
