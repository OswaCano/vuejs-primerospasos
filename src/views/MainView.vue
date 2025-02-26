<template>
  <div>
    <Header></Header>
    <div class="container">
      <SideBar></SideBar>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import SideBar from "@/components/sideBar.vue";
import Header from "@/components/header.vue";
</script>

<style scoped>
.container {
  display: flex;
}
</style>