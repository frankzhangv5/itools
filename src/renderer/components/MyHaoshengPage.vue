<template>
  <el-container>
    <el-header>
      <span>好省工具</span>
    </el-header>
    <el-main>
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="添加商品" name="1">
          <el-row>
            <el-input v-model="input" placeholder="请输入商品链接"></el-input>
          </el-row>
          <el-row>
            <el-button type="primary" size="small" @click="activeNames=['2']">确 定</el-button>
          </el-row>
        </el-collapse-item>
        <el-collapse-item title="待处理商品" name="2">
          <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
            <li v-for="i in count" :key="i" class="infinite-list-item">
              <my-goods-card></my-goods-card>
            </li>
          </ul>
        </el-collapse-item>
        <el-collapse-item title="待上架商品" name="3">
          <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
            <li v-for="i in count" :key="i" class="infinite-list-item">
              <my-goods-card></my-goods-card>
            </li>
          </ul>
        </el-collapse-item>
        <el-collapse-item title="出售中商品" name="4">
          <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
            <li v-for="i in count" :key="i" class="infinite-list-item">
              <my-goods-card></my-goods-card>
            </li>
          </ul>
        </el-collapse-item>
      </el-collapse>
    </el-main>
  </el-container>
</template>

<script>
import MyGoodsCard from "@/components/MyGoodsCard.vue";

export default {
  components: { MyGoodsCard },
  name: "my-haosheng-page",
  data() {
    return {
      input: "",
      count: 1,
      activeNames: ["2"],
      currentDate: new Date()
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
      this.activeNames = [val[1]];
    },
    load() {
      this.count += 2;
    }
  }
};
</script>


<style>
.el-collapse-item__header {
  height: 30px !important;
  line-height: 30px;
  padding-left: 10px;
  padding-right: 10px;
}

.el-collapse-item__wrap {
  height: 540px !important;
  padding-left: 10px;
  padding-right: 10px;
}
</style>

<style scoped>
.infinite-list {
  margin: 0px;
  padding: 0px;
  height: 540px !important;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.el-header {
  height: 30px !important;
  line-height: 30px;
  text-align: left;
  padding-left: 10px;
}
.el-main {
  padding: 0px;
}

.el-row {
  padding: 2px;
  text-align: center;
}
</style>