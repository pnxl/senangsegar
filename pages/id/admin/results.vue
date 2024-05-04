<script setup lang="ts">
import { onMounted, ref } from "vue";
import { createClient } from "@supabase/supabase-js";
const config = useRuntimeConfig();
const results = ref([]);
const supabase = createClient(
  "https://qsungmsncfglkrhjapia.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzdW5nbXNuY2ZnbGtyaGphcGlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ4MDI3NTEsImV4cCI6MjAzMDM3ODc1MX0.yUozFWavwITc-KLxwmqB32ACmIYL7JDwF54ntYJaza0"
);

async function getResults() {
  const { data } = await supabase.from("surveyResults").select();
  console.log(data);
  results.value = data;
}

onMounted(() => {
  getResults();
});

definePageMeta({
  layout: "custom",
});
</script>

<template>
  <ul>
    <li v-for="result in results" :key="result.id">{{ result.id }}</li>
  </ul>
</template>
