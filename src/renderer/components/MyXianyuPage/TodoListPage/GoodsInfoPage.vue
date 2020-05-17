<template>
<el-card :body-style="{ padding: '0px' }">
      <img src="@/assets/logo.png" class="image">
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button"><i class="el-icon-news"></i></el-button>
          <el-button type="text" class="button"><i class="el-icon-menu"></i></el-button>
          <el-button type="text" class="button"><i class="el-icon-setting"></i></el-button>
        </div>
      </div>
    </el-card>
</template>

<script>
export default {
  name: "goods-info-page",
  data() {
    return {
        currentDate: '2020-05-17'
    };
  },
  methods: {}
};
</script>

<style scoped>
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

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>