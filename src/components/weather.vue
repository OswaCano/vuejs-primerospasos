<template>
  <h1>La temperatura actual es: {{ store.temperature }} °C</h1>
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