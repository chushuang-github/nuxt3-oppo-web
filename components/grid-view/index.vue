<template>
  <div class="grid-view">
    <!-- 第一个item -->
    <div class="view-item first" v-if="categoryUrl">
      <img :src="categoryUrl" alt="OPPO" />
    </div>
    <!-- 非第一个item -->
    <template v-for="(item, index) in productDetailss" :key="index">
      <div class="view-item">
        <grid-view-item :product-detail="item"></grid-view-item>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { IProductDetail } from "../../store/home";
interface IProps {
  productDetailss: IProductDetail[];
  categoryUrl?: string; // 分类的图片
}
withDefaults(defineProps<IProps>(), {
  productDetailss: () => [],
});
</script>

<style scoped lang="scss">
.grid-view {
  width: $contentWidth + 18px;
  /* @include border(green); */
  @include normalFlex();
  flex-wrap: wrap;
  justify-content: flex-start;

  .view-item {
    width: 20%;
    padding-right: 18px;
    margin-bottom: 18px;
    /* @include border(); */
    height: $gridItemHeight;
    box-sizing: border-box;
    background-color: $bgGrayColor;
    cursor: pointer;
  }

  .first {
    width: 40%;
    & > img {
      width: 100%;
      height: 100%;
      transition: all 0.2s linear;
      &:hover {
        @include hoverEffect();
      }
    }
  }
}
</style>
