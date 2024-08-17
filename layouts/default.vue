<template>
  <div class="layout">
    <!-- header -->
    <app-header></app-header>
    <navbar :navbars="navbars"></navbar>

    <!-- 页面内容占位 -->
    <slot></slot>

    <!-- footer -->
    <app-footer></app-footer>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useHomeStore } from "../store/home";

const homeStore = useHomeStore();
const { navbars } = storeToRefs(homeStore);
homeStore.fetchHomeInfoData("oppo");
</script>

<style scoped lang="scss"></style>
