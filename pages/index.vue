<template>
  <div class="home">
    <div class="wrapper content">
      <swiper :banners="banners"></swiper>
      <tab-category
        :categorys="categorys"
        @itemClick="handleItemClick"
      ></tab-category>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useHomeStore } from "../store/home";
import type { ICategory } from "../store/home";

const homeStore = useHomeStore();
const { banners, categorys } = storeToRefs(homeStore);

const handleItemClick = (item: ICategory) => {
  console.log(item);
};
</script>

<style scoped lang="scss">
.home {
  background-color: $bgGrayColor;
}
</style>
