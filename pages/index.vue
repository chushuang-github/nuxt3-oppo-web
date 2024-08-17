<template>
  <div class="home">home</div>
</template>

<script setup lang="ts">
interface IProps {
  title: string;
}
const props = withDefaults(defineProps<IProps>(), {
  title: "",
});
</script>

<style scoped lang="scss">
.home {
}
</style>
