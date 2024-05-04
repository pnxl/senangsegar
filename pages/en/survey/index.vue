<template>
  <div class="min-w-full flex flex-row gap-x-8 justify-between">
    <div class="flex flex-col gap-y-8">
      <h1
        class="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium md:w-2/3 dark:text-brand-light"
      >
        Welcome to our survey!
      </h1>
      <p class="text-lg md:w-2/3 dark:text-brand-dark">
        This survey will decide our menus, prices, and crucial aspects about our
        business. Don't worry, it won't take long - five minutes tops - we
        promise!
      </p>
      <button
        @click="
          useCookie('survey_started').value = 'true';
          navigateTo('/en/survey/about-you');
        "
        class="dark:bg-brand-darkest bg-brand-lighter dark:text-brand-light dark:hover:bg-brand-darker dark:hover:text-brand-lighter hover:bg-brand-light hover:text-brand-darkest py-4 px-12 w-fit rounded-full font-medium"
      >
        <p>Start Survey</p>
      </button>
    </div>
    <div>
      <img src="@/assets/branding/logo.png" class="w-96 hidden sm:block" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: "swipe",
  },
  layout: "custom",
});

if (useCookie("survey_finished").value) {
  navigateTo("/id/survey/finished");
} else if (useCookie("survey_finished").value) {
  navigateTo("/id/survey/finished");
}
</script>
