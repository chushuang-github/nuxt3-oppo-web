<template>
  <div class="detail">
    <div class="wrapper content">
      <el-tabs v-model="activeName" class="oppo-tabs">
        <template v-for="(item, index) in data?.data" :key="item">
          <el-tab-pane :label="item.title" :name="item.title">
            <grid-view
              :product-detailss="data?.data[index].productDetailss"
            ></grid-view
          ></el-tab-pane>
        </template>
      </el-tabs>

      <no-more></no-more>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getDetailInfo } from "../../service/detail";
import type { IDetailProductType } from "../../service/detail";

const route = useRoute();
const { type } = route.query;

const { data } = await getDetailInfo(type as IDetailProductType);
const activeName = ref<string>(data.value.data[0].title);
</script>

<style scoped lang="scss">
.detail {
  background-color: $bgGrayColor;
  padding-bottom: 60px;
  padding-top: 8px;

  .content {
    .oppo-tabs {
      /* 背景 */
      :deep(.el-tabs__header) {
        background-color: white;
      }

      :deep(.el-tabs__nav-wrap) {
        height: 48px;
        padding: 0 52px;
        /* 底部线 */
        &::after {
          background-color: white;
        }
        /* 按钮 */
        .el-tabs__nav-prev,
        .el-tabs__nav-next {
          width: 48px;
          .el-icon,
          svg {
            width: 25px;
            height: 25px;
          }
          svg {
            position: relative;
            top: 10px;
          }
        }

        /* 移动线条激化样式 */
        .el-tabs__nav-next + .el-tabs__nav-scroll .el-tabs__active-bar {
          left: 0px;
        }
        .el-tabs__active-bar {
          background-color: $priceColor;
        }
      }

      :deep(.el-tabs__item) {
        height: 48px;
        opacity: 0.6;
        font-weight: 400;
        padding-top: 5px;

        position: relative;
        /* hover字体演示 */
        &:hover,
        &.is-active {
          color: $priceColor;
        }
      }
    }
  }
}
</style>
