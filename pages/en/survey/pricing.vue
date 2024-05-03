<template>
  <div class="min-h-screen min-w-full flex flex-col gap-y-4">
    <div class="flex flex-col gap-y-8">
      <nuxt-link
        to="/id/survey/products-interest/es-campur"
        class="dark:text-neutral-500 group font-medium flex gap-x-1"
      >
        <Icon name="ph:arrow-left-bold" class="my-auto text-lg" />
        <p class="group-hover:underline">Back</p>
      </nuxt-link>
      <h1
        class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium md:w-1/2 dark:text-brand-light"
      >
        Finally, let's determine the price point for the product.
      </h1>
      <div class="flex flex-col gap-y-4">
        <p class="text-lg md:w-1/2 dark:text-brand-dark">
          In your opinion, what is the right price for one juice or smoothie
          (without any additions)?
        </p>
        <div
          class="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 w-fit gap-x-6 md:gap-y-3 gap-y-5 lg:gap-y-0"
        >
          <label class="flex flex-col gap-y-2">
            <input
              v-model="smoothiePrice"
              type="radio"
              name="smoothiePrice"
              value="Rp 7.500"
              class="w-4 h-4 mx-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i>7,500 IDR</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="smoothiePrice"
              type="radio"
              name="smoothiePrice"
              value="Rp 9.000"
              class="w-4 h-4 mx-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i>9,000 IDR</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="smoothiePrice"
              type="radio"
              name="smoothiePrice"
              value="Rp 10.500"
              class="w-4 h-4 mx-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i>10,500 IDR</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="smoothiePrice"
              type="radio"
              name="smoothiePrice"
              value="Rp 12.000"
              class="w-4 h-4 mx-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i>12,000 IDR</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="smoothiePrice"
              type="radio"
              name="smoothiePrice"
              value="Rp 13.500"
              class="w-4 h-4 mx-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i>13,500 IDR</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="smoothiePrice"
              type="radio"
              name="smoothiePrice"
              value="Rp 15.000"
              class="w-4 h-4 mx-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i>15,000 IDR</i>
          </label>
        </div>
      </div>
      <div class="flex flex-col gap-y-4" v-if="smoothiePrice !== ''">
        <p class="text-lg md:w-1/2 dark:text-brand-dark">
          In your opinion, what is the right price for one serving of Es Campur
          (without any toppings)?
        </p>
        <div
          class="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 w-fit gap-x-6 md:gap-y-3 gap-y-5 lg:gap-y-0"
        >
          <label class="flex flex-col gap-y-2">
            <input
              v-model="esPrice"
              type="radio"
              name="esPrice"
              value="Rp 7.500"
              class="w-4 h-4 mx-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i>7,500 IDR</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="esPrice"
              type="radio"
              name="esPrice"
              value="Rp 9.000"
              class="w-4 h-4 mx-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i>9,000 IDR</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="esPrice"
              type="radio"
              name="esPrice"
              value="Rp 10.500"
              class="w-4 h-4 mx-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i>10,500 IDR</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="esPrice"
              type="radio"
              name="esPrice"
              value="Rp 12.000"
              class="w-4 h-4 mx-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i>12,000 IDR</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="esPrice"
              type="radio"
              name="esPrice"
              value="Rp 13.500"
              class="w-4 h-4 mx-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i>13,500 IDR</i>
          </label>
          <label class="flex flex-col gap-y-2">
            <input
              v-model="esPrice"
              type="radio"
              name="esPrice"
              value="Rp 15.000"
              class="w-4 h-4 mx-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i>15,000 IDR</i>
          </label>
        </div>
      </div>
      <button
        @click="
          useCookie('survey_smoothiePrice').value = smoothiePrice;
          useCookie('survey_esPrice').value = esPrice;

          navigateTo('/id/survey/products-interest/es-campur');
        "
        v-if="smoothiePrice !== '' && esPrice !== ''"
        class="dark:bg-brand-darkest bg-brand-lighter dark:text-brand-light dark:hover:bg-brand-darker dark:hover:text-brand-lighter hover:bg-brand-light hover:text-brand-darkest py-4 px-12 w-fit rounded-full font-medium"
      >
        <p>Submit Survey</p>
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
