<template>
  <div class="Left">
    <div class="top_iamge">
      <img
        src="../../assets/img/smile.svg"
        class="moveing_img"
        :class="{move_over:isact,move_out:isout}"
        @mouseover="isact=!isact"
        @mouseout="isout=!isout"
      />
    </div>
    <el-menu
      mode="vertical"
      :unique-opened="true"
      default-active="1-0"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="false"
    >
      <el-submenu v-for="(v,i) in menu_box" :key="i" :index="String(i+1)">
        <template slot="title">
          <i class="el-icon-s-unfold"></i>
          <span slot="title">{{v.title}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            v-for="(j,p) in v.child"
            :key="p"
            :index="spacial(i,p)"
            :title="j.name"
            @click="push_to(j.routers)"
          >
            <i class="el-icon-star-off"></i>
            {{j.name}}
          </el-menu-item>
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
      isCollapse: false,
      isact: false,
      isout: false,
      menu_box: [
        {
          title: "中央",
          child: [
            {
              name: "首页",
              routers: "/"
            },
            {
              name: "一则广告",
              routers: "/pc_adert"
            }
          ]
        },
        {
          title: "闲言碎语",
          child: [
            {
              name: "奇葩说",
              routers: "/sometext"
            },
            {
              name: "好链接",
              routers: "/alink"
            }
          ]
        }
      ]
    };
  },
  methods: {
    //路由跳转
    push_to(par) {
      this.$router.push({
        path: par
      });
    },
    //默认打开折叠扇页
    spacial(e, l) {
      return `${e + 1}-${l}`;
    },
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
.move_out {
  transition: transform 1s;
}
.move_over {
  transition: transform 1s;
}
.moveing_img:hover {
  transform: rotate(720deg);
}
.top_iamge {
  padding: 30px 0;
  img {
    width: 50%;
  }
}
.el-menu,
.el-menu-item,
/deep/ .el-menu-item-group__title {
  background-color: #2b2f3e;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: auto;
}
.el-submenu .el-menu-item,
/deep/ .el-submenu__title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
}
/deep/ .el-submenu__title:hover {
  background-color: rgb(76, 83, 90);
}
/deep/ .el-menu-item {
  color: #b5b5b5;
}
/deep/ .el-submenu__title {
  color: #f1f1f1;
}
/deep/ .el-menu {
  border: none;
}
/deep/ .el-menu-item.is-active {
  color: #409eff;
}
</style>