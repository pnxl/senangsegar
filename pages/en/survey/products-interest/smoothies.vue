<template>
  <div class="min-h-screen min-w-full flex flex-col gap-y-4">
    <div class="flex flex-col gap-y-8">
      <button
        @click="
          useCookie('survey_grade').value = null;
          navigateTo('/en/survey/about-you');
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
          Are you interested in purchasing a juice or smoothie?
        </p>
        <div class="flex flex-col gap-y-2">
          <label class="flex gap-x-4">
            <input
              v-model="interest"
              type="radio"
              name="interest"
              value="Iya"
              class="w-4 h-4 my-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Yes</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="interest"
              type="radio"
              name="interest"
              value="Tidak"
              class="w-4 h-4 my-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">No</i>
          </label>
        </div>
      </div>
      <div class="flex flex-col gap-y-4" v-if="interest === 'Iya'">
        <p class="text-lg md:w-1/2 dark:text-brand-dark">
          From the following options, what fruits would you make into a juice?
        </p>
        <div class="flex flex-col gap-y-2">
          <label class="flex gap-x-4">
            <input
              v-model="apple"
              type="checkbox"
              name="apple"
              value="Apel"
              class="w-4 h-4 my-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Apples</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="banana"
              type="checkbox"
              name="banana"
              value="Pisang"
              class="w-4 h-4 my-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Bananas</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="orange"
              type="checkbox"
              name="orange"
              value="Jeruk"
              class="w-4 h-4 my-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Oranges</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="pineapple"
              type="checkbox"
              name="pineapple"
              value="Nanas"
              class="w-4 h-4 my-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Pineapples</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="strawberry"
              type="checkbox"
              name="Stroberi"
              value="Stroberi"
              class="w-4 h-4 my-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Strawberries</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="watermelon"
              type="checkbox"
              name="watermelon"
              value="Semangka"
              class="w-4 h-4 my-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Watermelons</i>
          </label>
        </div>
      </div>
      <div
        class="flex flex-col gap-y-4"
        v-if="
          (apple !== false ||
            orange !== false ||
            pineapple !== false ||
            banana !== false ||
            watermelon !== false ||
            strawberry !== false) &&
          interest === 'Iya'
        "
      >
        <p class="text-lg md:w-1/2 dark:text-brand-dark">
          From the following options, what ingredients would you mix with a
          smoothie?
        </p>
        <div class="flex flex-col gap-y-2">
          <label class="flex gap-x-4">
            <input
              v-model="sparklingWater"
              type="checkbox"
              name="sparklingWater"
              value="Air Soda"
              class="w-4 h-4 my-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Sparkling Water</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="syrup"
              type="checkbox"
              name="syrup"
              value="Sirup"
              class="w-4 h-4 my-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Syrup</i>
            <label class="flex gap-x-4">
              <input
                v-model="yakult"
                type="checkbox"
                name="yakult"
                value="Yakult"
                class="w-4 h-4 my-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
              />
              <i class="my-auto">Yakult</i>
            </label>
          </label>
        </div>
      </div>
      <div
        class="flex flex-col gap-y-4"
        v-if="
          (apple !== false ||
            orange !== false ||
            pineapple !== false ||
            banana !== false ||
            watermelon !== false ||
            strawberry !== false) &&
          interest === 'Iya'
        "
      >
        <p class="text-lg md:w-1/2 dark:text-brand-dark">
          From the following options, what toppings would you put on a smoothie?
        </p>
        <div class="flex flex-col gap-y-2">
          <label class="flex gap-x-4">
            <input
              v-model="fruitSlices"
              type="checkbox"
              name="fruitSlices"
              value="Potongan Buah"
              class="w-4 h-4 my-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Chopped Fruit</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="whippedCream"
              type="checkbox"
              name="whippedCream"
              value="Whipped Cream"
              class="w-4 h-4 my-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Whipped Cream</i>
          </label>
        </div>
      </div>
      <div class="flex flex-col gap-y-4" v-if="interest === 'Iya'">
        <p class="text-lg md:w-1/2 dark:text-brand-dark">
          Do you have any suggestions on other fruits, ingredients, or toppings
          that we can provide?
        </p>
        <div class="flex flex-col gap-y-2">
          <label class="flex gap-x-4">
            <textarea
              v-model="ingredientSuggestion"
              name="class"
              placeholder="If so, please enter it here..."
              class="h-40 md:w-1/2 w-full text-pretty my-auto p-4 dark:bg-neutral-800 ring-transparent valid:ring-brand-light ring-offset-neutral-900 ring-2 ring-offset-1 rounded-2xl appearance-none"
            />
          </label>
        </div>
      </div>
      <div class="flex flex-col gap-y-4" v-else-if="interest === 'Tidak'">
        <p class="text-lg md:w-1/2 dark:text-brand-dark">
          If you can, please provide a short reason why you aren't interested in
          purchasing a juice or smoothie.
        </p>
        <div class="flex flex-col gap-y-2">
          <label class="flex gap-x-4">
            <textarea
              v-model="whyNot"
              name="class"
              placeholder="Please provide a short reason why you aren't interested in this product..."
              class="h-40 md:w-1/2 w-full text-pretty my-auto p-4 dark:bg-neutral-800 ring-transparent valid:ring-brand-light ring-offset-neutral-900 ring-2 ring-offset-1 rounded-2xl appearance-none"
            />
          </label>
        </div>
      </div>
      <button
        @click="
          useCookie('survey_juiceInterest').value = interest;
          useCookie('survey_juiceWhyNot').value = whyNot;
          useCookie('survey_juiceFruits').value = [
            String(apple).replace('true', 'Apel'),
            String(orange).replace('true', 'Jeruk'),
            String(pineapple).replace('true', 'Nanas'),
            String(banana).replace('true', 'Pisang'),
            String(watermelon).replace('true', 'Semangka'),
            String(strawberry).replace('true', 'Stroberi'),
          ]
            .join(', ')
            .replaceAll('false, ', '')
            .replaceAll('false', '')
            .replaceAll(', ', '');

          useCookie('survey_juiceIngredients').value = [
            String(yakult).replace('true', 'Yakult'),
            String(sparklingWater).replace('true', 'Air Soda'),
            String(syrup).replace('true', 'Sirup'),
          ]
            .join(', ')
            .replaceAll('false, ', '')
            .replaceAll('false', '')
            .replaceAll(', ', '');

          useCookie('survey_juiceToppings').value = [
            String(fruitSlices).replace('true', 'Potongan Buah'),
            String(whippedCream).replace('true', 'Whipped Cream'),
          ]
            .join(', ')
            .replaceAll('false, ', '')
            .replaceAll('false', '')
            .replaceAll(', ', '');

          useCookie('survey_juiceSuggestion').value = ingredientSuggestion;

          navigateTo('/en/survey/products-interest/es-campur');
        "
        v-if="
          interest === 'Tidak' ||
          ((apple !== false ||
            orange !== false ||
            pineapple !== false ||
            banana !== false ||
            watermelon !== false ||
            strawberry !== false ||
            ingredientSuggestion !== '') &&
            interest === 'Iya')
        "
        class="dark:bg-brand-darkest bg-brand-lighter dark:text-brand-light dark:hover:bg-brand-darker dark:hover:text-brand-lighter hover:bg-brand-light hover:text-brand-darkest py-4 px-12 w-fit rounded-full font-medium"
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
      banana: false,
      orange: false,
      pineapple: false,
      strawberry: false,
      watermelon: false,
      yakult: false,
      sparklingWater: false,
      syrup: false,
      fruitSlices: false,
      whippedCream: false,
      ingredientSuggestion: "",
    };
  },
};
</script>

<script setup lang="ts">
if (!useCookie("survey_grade").value) {
  navigateTo("/en/survey/about-you");
} else if (useCookie("survey_finished").value) {
  navigateTo("/id/survey/finished");
}
</script>
