<template>
  <div class="wrapper content">
    <swiper :banners="banners"></swiper>
    <tab-category
      :categorys="categorys"
      @itemClick="handleItemClick"
    ></tab-category>
    <template v-for="category in categorys" :key="category.id">
      <section-category
        :category="category"
        v-if="category.productDetailss && category.productDetailss.length"
      ></section-category>
    </template>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useHomeStore } from "../../store/home";
import type { ICategory } from "../../store/home";
import type { IHomeInfoType } from "../../service/home";

interface IProps {
  type: IHomeInfoType;
}
const props = withDefaults(defineProps<IProps>(), {
  type: "oppo",
});

const homeStore = useHomeStore();
const { banners, categorys } = storeToRefs(homeStore);
homeStore.fetchHomeInfoData(props.type);

const handleItemClick = (item: ICategory) => {
  return navigateTo({
    path: "/detail",
    query: {
      type: item.type,
    },
  });
};
</script>
