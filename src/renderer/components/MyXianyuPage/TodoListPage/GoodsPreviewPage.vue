<template>
  <webview id="webview" :src="url" useragent="Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1"></webview>
</template>

<script>
export default {
  name: "goods-preview-page",
  data() {
    return {
      webpage: "宝贝详情",
      url: "http://www.fontawesome.com.cn/faicons/"
    };
  },
  created: function() {
  }
};
</script>

<style scoped>
webview {
    width: 100%;
    height: 100%;
}
</style>