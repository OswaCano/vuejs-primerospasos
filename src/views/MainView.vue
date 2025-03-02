<template>
  <div>
    <Header :message="text"></Header>
    <div class="container">
      <SideBar></SideBar>
      <div class="content">
        <input type="text" v-model="text">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import SideBar from "@/components/sideBar.vue";
import Header from "@/components/header.vue";
import {ref} from "vue";

const text = ref('');
</script>

<style scoped>
.container {
  display: flex;
}
</style>