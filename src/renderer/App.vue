<template>
  <div id="app">
    <el-container id="container">
      <el-aside width="200px">
        <nav-menu></nav-menu>
      </el-aside>
      <el-container>
        <el-header>
          <my-header></my-header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenu from "@/components/NavMenu.vue";
import MyHeader from "@/components/MyHeader.vue";

export default {
  components: { NavMenu, MyHeader },
  name: "itools"
};
</script>

<style>
/* CSS */
.el-header {
  background-color: #b3c0d1;
  color: #fff;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  /* background-color: #d3dce6; */
  color: #333;
  text-align: center;
}

.el-main {
  /* background-color: #e9eef3; */
  color: #333;
  text-align: center;
  line-height: 40px;
}

#container {
  width: 1280px;
  height: 720px;
}
</style>
