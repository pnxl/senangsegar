<template>
  <div class="min-h-screen min-w-full flex flex-col gap-y-4">
    <div class="flex flex-col gap-y-8">
      <button
        @click="
          useCookie('survey_sodaInterest').value = null;
          useCookie('survey_sodaWhyNot').value = null;
          useCookie('survey_sodaFruits').value = null;
          useCookie('survey_sodaToppings').value = null;
          useCookie('survey_sodaSuggestion').value = null;
          navigateTo('/en/survey/products-interest/fruit-soda');
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
          Are you interested in purchasing es campur?
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
          From the following options, what toppings would you put on es campur?
        </p>
        <p class="md:w-1/2 -mt-4 text-sm dark:text-brand-dark opacity-50">
          (Multiple choices are accepted)
        </p>
        <div class="flex flex-col gap-y-2">
          <label class="flex gap-x-4">
            <input
              v-model="cendol"
              type="checkbox"
              name="cendol"
              value="Cendol"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Cendol</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="grassJelly"
              type="checkbox"
              name="grassJelly"
              value="Cincau"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Grass Jelly</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="jackfruit"
              type="checkbox"
              name="jackfruit"
              value="Buah Nangka"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Jackfruit</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="coconut"
              type="checkbox"
              name="coconut"
              value="Kelapa Muda"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Coconut</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="kolangKaling"
              type="checkbox"
              name="kolangKaling"
              value="Kolang-Kaling"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Kolang-Kaling</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="coconutGel"
              type="checkbox"
              name="coconutGel"
              value="Nata de Coco"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Nata de Coco</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="aloeVera"
              type="checkbox"
              name="aloeVera"
              value="Lidah Buaya"
              class="w-4 h-4 my-auto dark:bg-neutral-600 bg-neutral-300/75 checked:bg-brand-dark checked:ring-brand-dark dark:checked:bg-brand-light chcked:ring-offset-neutral-100 dark:checked:ring-brand-light ring-transparent checked:dark:ring-offset-neutral-900 checked:ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Aloe Vera</i>
          </label>
        </div>
      </div>
      <div class="flex flex-col gap-y-4" v-if="interest === 'Iya'">
        <p class="text-lg md:w-1/2 dark:text-brand-dark">
          Do you have any suggestions on other toppings that we can provide?
        </p>
        <div class="flex flex-col gap-y-2">
          <label class="flex gap-x-4">
            <textarea
              v-model="toppingSuggestion"
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
          useCookie('survey_esInterest').value = interest;
          useCookie('survey_esWhyNot').value = whyNot;
          useCookie('survey_esToppings').value = [
            String(cendol).replace('true', 'Cendol'),
            String(grassJelly).replace('true', 'Cincau'),
            String(coconut).replace('true', 'Kelapa Muda'),
            String(kolangKaling).replace('true', 'Kolang-Kaling'),
            String(jackfruit).replace('true', 'Jackfruit'),
            String(coconutGel).replace('true', 'Nata de Coco'),
            String(aloeVera).replace('true', 'Lidah Buaya'),
          ]
            .join(', ')
            .replaceAll('false, ', '')
            .replaceAll('false', '');

          useCookie('survey_esSuggestion').value = toppingSuggestion;

          navigateTo('/en/survey/pricing');
        "
        v-if="
          interest === 'Tidak' ||
          ((cendol !== false ||
            grassJelly !== false ||
            jackfruit !== false ||
            coconut !== false ||
            kolangKaling !== false ||
            coconutGel !== false ||
            aloeVera !== false ||
            toppingSuggestion !== '') &&
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
      cendol: false,
      grassJelly: false,
      jackfruit: false,
      coconut: false,
      kolangKaling: false,
      coconutGel: false,
      aloeVera: false,
      toppingSuggestion: "",
    };
  },
};
</script>

<script setup lang="ts">
if (!useCookie("survey_sodaInterest").value) {
  navigateTo("/en/survey/products-interest/fruit-soda");
} else if (useCookie("survey_finished").value) {
  navigateTo("/id/survey/finished");
}
</script>
