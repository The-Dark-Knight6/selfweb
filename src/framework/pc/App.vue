<template>
  <div id="app">
    <el-container>
      <el-container>
        <el-aside width="220px">
          <left></left>
        </el-aside>
        <el-container>
          <router-view />
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import left from "./Left";
export default {
  name: "App",
  components: {
    left
  }
};
</script>

<style>
html,
body,
#app,
.el-container {
  padding: 0;
  margin: 0;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  font-size: 16px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
</style>
