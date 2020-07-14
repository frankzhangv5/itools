<template>
  <el-menu
    text-color="#cfcccc"
    active-text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="1">
      <router-link class="navigation-button" to="/my-dashboard">
        <i class="el-icon-goods"></i>
      </router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link class="navigation-button" to="/my-xianyu-page">
        <i class="el-icon-hot-water"></i>
      </router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link class="navigation-button" to="/my-toutiao-page">
        <i class="el-icon-knife-fork"></i>
      </router-link>
    </el-menu-item>
    <el-menu-item index="4">
      <router-link class="navigation-button" to="/my-weixin-page">
        <i class="el-icon-star-off"></i>
      </router-link>
    </el-menu-item>
    <el-menu-item index="5">
      <router-link class="navigation-button" to="/my-haosheng-page">
        <i class="el-icon-menu"></i>
      </router-link>
    </el-menu-item>
    <el-menu-item index="6">
      <router-link class="navigation-button" to="/my-settings">
        <i class="el-icon-setting"></i>
      </router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "my-side-menu",
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-menu {
  background-color: #191c1f;
  border: 0px !important;
}
</style>
