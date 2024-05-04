<template>
  <div class="min-h-screen min-w-full flex flex-col gap-y-4">
    <div class="flex flex-col gap-y-8">
      <button
        @click="
          useCookie('survey_juiceInterest').value = null;
          useCookie('survey_juiceWhyNot').value = null;
          useCookie('survey_juiceFruits').value = null;
          useCookie('survey_juiceIngredients').value = null;
          useCookie('survey_juiceToppings').value = null;
          useCookie('survey_juiceSuggestion').value = null;
          navigateTo('/id/survey/products-interest/smoothies');
        "
        class="dark:text-neutral-500 group font-medium flex gap-x-1"
      >
        <Icon name="ph:arrow-left-bold" class="my-auto text-lg" />
        <p class="group-hover:underline">Kembali</p>
      </button>
      <h1
        class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium md:w-1/2 dark:text-brand-light"
      >
        Selanjutnya, mari kita bahas tentang produk kami yang mungkin menarik
        bagi Anda
      </h1>
      <div class="flex flex-col gap-y-4">
        <p class="text-lg md:w-1/2 dark:text-brand-dark">
          Apakah Anda tertarik untuk membeli es campur?
        </p>
        <div class="flex flex-col gap-y-2">
          <label class="flex gap-x-4">
            <input
              v-model="interest"
              type="radio"
              name="interest"
              value="true"
              class="w-4 h-4 my-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Iya</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="interest"
              type="radio"
              name="interest"
              value="false"
              class="w-4 h-4 my-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Tidak</i>
          </label>
        </div>
      </div>
      <div class="flex flex-col gap-y-4" v-if="interest === 'Iya'">
        <p class="text-lg md:w-1/2 dark:text-brand-dark">
          Dari pilihan berikut, topping mana yang akan Anda tambah ke es campur?
        </p>
        <div class="flex flex-col gap-y-2">
          <label class="flex gap-x-4">
            <input
              v-model="cendol"
              type="checkbox"
              name="cendol"
              value="Cendol"
              class="w-4 h-4 my-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Cendol</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="grassJelly"
              type="checkbox"
              name="grassJelly"
              value="Cincau"
              class="w-4 h-4 my-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Cincau</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="jackfruit"
              type="checkbox"
              name="jackfruit"
              value="Buah Nangka"
              class="w-4 h-4 my-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Buah Nangka</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="coconut"
              type="checkbox"
              name="coconut"
              value="Kelapa Muda"
              class="w-4 h-4 my-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Kelapa Muda</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="kolangKaling"
              type="checkbox"
              name="kolangKaling"
              value="Kolang-Kaling"
              class="w-4 h-4 my-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Kolang-Kaling</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="coconutGel"
              type="checkbox"
              name="coconutGel"
              value="Nata de Coco"
              class="w-4 h-4 my-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Nata de Coco</i>
          </label>
          <label class="flex gap-x-4">
            <input
              v-model="aloeVera"
              type="checkbox"
              name="aloeVera"
              value="Lidah Buaya"
              class="w-4 h-4 my-auto dark:bg-neutral-600 checked:bg-brand-light checked:ring-brand-light ring-transparent ring-offset-neutral-900 ring-2 ring-offset-1 rounded-full appearance-none"
            />
            <i class="my-auto">Lidah Buaya</i>
          </label>
        </div>
      </div>
      <div class="flex flex-col gap-y-4" v-if="interest === 'Iya'">
        <p class="text-lg md:w-1/2 dark:text-brand-dark">
          Apakah Anda punya saran buah, bahan, atau topping lain yang bisa kami
          berikan?
        </p>
        <div class="flex flex-col gap-y-2">
          <label class="flex gap-x-4">
            <textarea
              v-model="toppingSuggestion"
              name="class"
              placeholder="Jika ada, silakan masukkan di sini..."
              class="h-40 md:w-1/2 w-full text-pretty my-auto p-4 dark:bg-neutral-800 ring-transparent valid:ring-brand-light ring-offset-neutral-900 ring-2 ring-offset-1 rounded-2xl appearance-none"
            />
          </label>
        </div>
      </div>
      <div class="flex flex-col gap-y-4" v-else-if="interest === 'Tidak'">
        <p class="text-lg md:w-1/2 dark:text-brand-dark">
          Jika bisa, mohon jelaskan mengapa Anda tidak tertarik membeli es
          campur.
        </p>
        <div class="flex flex-col gap-y-2">
          <label class="flex gap-x-4">
            <textarea
              v-model="whyNot"
              name="class"
              placeholder="Mohon berikan alasan singkat mengapa Anda tidak tertarik dengan produk ini..."
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
            String(jackfruit).replace('true', 'Buah Nangka'),
            String(coconutGel).replace('true', 'Nata de Coco'),
            String(aloeVera).replace('true', 'Lidah Buaya'),
          ]
            .join(', ')
            .replaceAll('false, ', '')
            .replaceAll('false', '');

          useCookie('survey_esSuggestion').value = toppingSuggestion;

          navigateTo('/id/survey/pricing');
        "
        v-if="
          interest === 'Tidak' ||
          ((cendol !== false ||
            grassJelly !== false ||
            coconut !== false ||
            kolangKaling !== false ||
            jackfruit !== false ||
            coconutGel !== false ||
            aloeVera !== false ||
            toppingSuggestion !== '') &&
            interest === 'Iya')
        "
        class="dark:bg-brand-darkest bg-brand-lighter dark:text-brand-light dark:hover:bg-brand-darker dark:hover:text-brand-lighter hover:bg-brand-light hover:text-brand-darkest py-4 px-12 w-fit rounded-full font-medium"
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
      interest: "",
      whyNot: "",
      cendol: false,
      grassJelly: false,
      coconut: false,
      kolangKaling: false,
      jackfruit: false,
      coconutGel: false,
      aloeVera: false,
      toppingSuggestion: "",
    };
  },
};
</script>

<script setup lang="ts">
if (!useCookie("survey_juiceInterest").value) {
  navigateTo("/id/survey/products-interest/smoothies");
} else if (useCookie("survey_finished").value) {
  navigateTo("/id/survey/finished");
}
</script>
