<template>
  <div class="container">
    <SideBar></SideBar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import SideBar from "@/components/sideBar.vue";

</script>

<style scoped>
.container {
  display: flex;
}
</style>