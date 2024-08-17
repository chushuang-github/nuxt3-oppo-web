<template>
  <div class="section-category">
    <section-title :title="category.title"></section-title>
    <grid-view
      :product-detailss="category.productDetailss"
      :category-url="category.url"
    ></grid-view>
  </div>
</template>

<script lang="ts" setup>
import type { ICategory } from "../../store/home";
interface IProps {
  category: ICategory;
}
withDefaults(defineProps<IProps>(), {
  category: () => ({}),
});
</script>

<style lang="scss" scoped></style>
