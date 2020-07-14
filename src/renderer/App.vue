<template>
  <el-container class="main-container">
    <el-container class="content-container">
      <el-aside>
        <my-side-menu></my-side-menu>
      </el-aside>
      <el-main>
        <el-row>
          <el-col :span="6" class="sub-menu">
            <router-view></router-view>
          </el-col>
          <el-col :span="18" class="sub-content">
            <router-view name="content"></router-view>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
    <el-footer>copy right @ 2020</el-footer>
  </el-container>
</template>

<script>
import MySideMenu from "@/components/MySideMenu.vue";
import MyHeader from "@/components/MyHeader.vue";

export default {
  components: { MySideMenu, MyHeader },
  name: "itools"
};
</script>

<style scoped>
/* CSS */
.main-container {
  width: 100%;
  height: 720px;
  background-color: lightgray;
}

.content-container {
  width: 100%;
  height: 696px;
  background-color: lightgray;
}
.el-main {
  padding: 0px;
  height: 100%;
}
.el-row {
  height: 100%;
}
.el-aside {
  background-color: #191c1f;
  width: 56px !important;
  height: 100%;
  padding:0px !important;
}

.el-footer {
  background-color: rgb(11, 104, 226);
  height: 24px !important;
  line-height: 24px;
  text-align: center;
  color: white;
}

.sub-menu {
  background-color: lightgray;
  height: 100%;
}

.sub-content {
  background-color: white;
  height: 100%;
}
</style>
