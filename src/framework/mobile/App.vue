<template>
  <div
    id="app"
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <navs></navs>
    <router-view  v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
import navs from "./navs";
export default {
  name: "App",
  //单页面刷新的 isRouterAlive
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      loading: true,
      allofpage: [],
      isRouterAlive: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
  components: {
    navs
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>

<style lang='scss'>
a {
  text-decoration: none;
}
html,
body,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0%;
  padding: 0%;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  display: block;
}
#app,
html,
body {
  font-family: "楷体";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
}
/* 控制 加载样式出现在屏幕中央位置 */
.el-loading-spinner {
  top: 300px !important;
}
</style>
