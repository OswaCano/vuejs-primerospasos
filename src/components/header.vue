<template>
  <div class="header">
    <h1>La temperatura actual es: <Weather></Weather></h1>
  </div>
</template>

<script setup>
import Weather from "@/components/weather.vue";
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  top: 0;
  right: 0;
  left: 0;
  background: #333;
  color: #fff;
}
h1 {
  margin: 0;
}
</style>