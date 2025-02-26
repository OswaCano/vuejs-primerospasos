<template>
  <div class="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
    <h2 class="text-xl font-bold mb-4">Lista de tareas</h2>
    <div class="flex mb-4">
      <input type="text" v-model="newTask" @keyup.enter="addTask" class="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500">
      <button @click="addTask" class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">Agregar</button>
    </div>
    <ul class="space-y-2">
      <li v-for="(task, index) in tasks" :key="index" class="flex justify-between items-center bg-gray-100 p-2 rounded-md">
        <span>{{ task }}</span>
        <button @click="removeTask(index)" class="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {ref} from "vue";

const tasks = ref([]);
const newTask = ref('');

const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value);
    newTask.value = '';
  }
};

const removeTask = (index) => {
  tasks.value.splice(index, 1);
}

</script>

<style scoped>

</style>
