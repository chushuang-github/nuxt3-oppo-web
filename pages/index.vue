<template>
  <div class="home">
    <div class="wrapper content">
      <swiper :banners="banners"></swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useHomeStore } from "../store/home";

const homeStore = useHomeStore();
const { banners } = storeToRefs(homeStore);
</script>

<style scoped lang="scss">
.home {
  background-color: $bgGrayColor;
}
</style>
