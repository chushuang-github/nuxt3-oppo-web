<template>
  <div class="layout">
    <!-- header -->
    <app-header></app-header>
    <navbar></navbar>

    <!-- 页面内容占位 -->
    <slot></slot>

    <!-- footer -->
    <app-footer></app-footer>
  </div>
</template>

<script setup lant="ts"></script>

<style scoped lang="scss"></style>
