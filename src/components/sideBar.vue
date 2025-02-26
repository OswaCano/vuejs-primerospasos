
<template>
  <div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>Nombre: {{name}}</h3>
    <h3>Email: {{email}}</h3>
    <ul>
      <li><router-link to="/login"> Login</router-link></li>
      <li><router-link to="/tasks"> Lista de tareas</router-link></li>
      <li><router-link to="/register"> Registrarse</router-link></li>
    </ul>
  </div>
</template>

<script setup>
import {useRegisterStore} from "@/registro/stores/registerStore.js";
import {ref, watch} from "vue";

const registerStore = useRegisterStore();
const name = ref(registerStore.name.value);
const email = ref(registerStore.email.value);

watch(() => registerStore.name, (newValue) => {
  name.value = newValue;
});
watch(() => registerStore.email, (newValue) => {
  email.value = newValue;
})
</script>

<style scoped>
.sidebar {
  width: 200px;
  background: #4b0000;
  padding: 20px;
  color: white;
}
</style>