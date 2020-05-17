<template>
  <el-container>
    <el-aside width="200px">
      <el-col>
        <el-row>
          <goods-info-page></goods-info-page>
        </el-row>
        <el-row>
          <goods-info-page></goods-info-page>
        </el-row>
        <el-row>
          <goods-info-page></goods-info-page>
        </el-row>
      </el-col>
    </el-aside>
    <el-main>
      <goods-preview-page></goods-preview-page>
    </el-main>
  </el-container>
</template>

<script>
import GoodsInfoPage from "@/components/MyXianyuPage/TodoListPage/GoodsInfoPage.vue";
import GoodsPreviewPage from "@/components/MyXianyuPage/TodoListPage/GoodsPreviewPage.vue";

export default {
  components: { GoodsInfoPage, GoodsPreviewPage },
  name: "todo-list-page",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
ul {
  list-style: none;
}
</style>