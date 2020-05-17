<template>
  <div>
    <div id="logo">iTools</div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1">
        <i class="el-icon-news"></i>
        <span slot="title">
          <router-link class="navigation-button" to="/my-dashboard">控制面板</router-link>
        </span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>
            <router-link class="navigation-button" to="/my-xianyu-page">闲鱼工具</router-link>
          </span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">
            <span slot="title">
              <router-link class="navigation-button" to="/my-xianyu-page/todo-list-page">待整理</router-link>
            </span>
          </el-menu-item>
          <el-menu-item index="2-2">
            <router-link class="navigation-button" to="/my-xianyu-page/in-selling-page">售卖中</router-link>
          </el-menu-item>
          <el-menu-item index="2-3">
            <router-link class="navigation-button" to="/my-xianyu-page/sold-out-page">已售出</router-link>
          </el-menu-item>
          <el-menu-item index="2-4">
            <router-link class="navigation-button" to="/my-xianyu-page/draft-page">草稿箱</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">
          <router-link class="navigation-button" to="/my-toutiao-page">头条工具</router-link>
        </span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-menu"></i>
        <span slot="title">
          <router-link class="navigation-button" to="/my-weixin-page">微信工具</router-link>
        </span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-menu"></i>
        <span slot="title">
          <router-link class="navigation-button" to="/my-haosheng-page">好省工具</router-link>
        </span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-setting"></i>
        <span slot="title">
          <router-link class="navigation-button" to="/my-settings">偏好设置</router-link>
        </span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "nav-menu",
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
#logo {
  background-color: $--color-primary;
  color: #fff;
  font-size: 2em;
  text-align: center;
  line-height: 60px;
}

.navigation-button {
  // outline: none;
  text-decoration: none;
}
</style>
