<template>
{{ store.temperature }}
</template>

<script setup>
import {useWeather} from "@/composables/useWeather.js";
import {onMounted} from "vue";
import {useWeatherStore} from "@/stores/weatherStore.js";

const store = useWeatherStore();

onMounted(()=> {
  useWeather();
});
</script>

<style scoped>

</style>