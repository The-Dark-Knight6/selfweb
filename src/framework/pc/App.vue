<template>
  <div
    id="app"
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <el-container>
      <el-aside width="200px">
        <left></left>
      </el-aside>
      <el-container>
        <router-view />
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
  },
  data(){
    return{
      loading:true
    }
  },
  mounted(){
    setTimeout(()=>{
      this.loading=false;
    },1500);
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
  overflow: auto;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  font-size: 16px;
}
.el-aside {
  background-color: #2b2f3e;
  color: #333;
  text-align: center;
}
</style>
