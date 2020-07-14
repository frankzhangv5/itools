<template>
  <el-container>
    <el-header>
      <span>待整理商品</span>
    </el-header>
    <el-main>
      <el-row class="row-preview">
        <my-goods-preview :url='url' class="goods-preview"></my-goods-preview>
      </el-row>
      <el-row class="row-actions">
        <el-button>添加到待出售</el-button>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import MyGoodsPreview from "@/components/MyGoodsPreview.vue";

export default {
  props: ['url'],
  components: { MyGoodsPreview },
  name: "draft-page",
  data() {
    return {
    };
  },
  methods: {

  },
  mounted: function() {
    console.log(this.$router);
  }
};
</script>

<style scoped>
.el-header {
  background-color: lightgray;
  height: 30px !important;
  line-height: 30px;
  text-align: left;
}
.el-main {
  border-left: lightgray;
  border-left-width: 1px;
  border-left-style: solid;

  padding: 0px;
  margin: 0px;
  height: 666px;
}
.goods-preview {
  height: 540px;
  width: 360px;
  display: inline-flex;
}

.row-preview {
  height: 540px;
  /* line-height: 540px; */
  padding: 0px;
  margin: 0px;
  text-align:center;
}

.row-actions {
  text-align: center;
  padding:16px;
}
</style>