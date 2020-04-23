<template>
  <div class="Left">
    <el-menu
      mode="vertical"
      :unique-opened="true"
      default-active="1-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="false"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-unfold"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" title="adsf">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-unfold"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "Left",
  data() {
    return {
      isCollapse: false
    };
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
.el-menu,
.el-menu-item,
/deep/ .el-menu-item-group__title{
    background-color: #D3DCE6 ;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.el-submenu .el-menu-item{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>