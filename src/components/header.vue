<template>
  <div class="header">
    {{ rMessage }} <Weather></Weather>
  </div>
</template>

<script setup>
import Weather from "@/components/weather.vue";
import { defineProps, ref, watch} from 'vue';

const props = defineProps([message]);
const rMessage = ref(props.message);

watch(() => props.message, (newValue)=> {
  rMessage.value = newValue;
});
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