<template>
  <div class="navs">
    <div class="the_navs">
      <img v-for="(v,i) in item_img" :key="i" :src="v" @click="click_img(i)" />
    </div>
    <el-drawer title :visible.sync="drawer" direction="ltr" size="40%">
      <div class="drawer_box">
        <el-tabs tab-position="left" @tab-click="now_tab" v-model="activeName">
          <el-tab-pane v-for="(v,i) in allofpage" :key="i" :name="v.url" :label="v.name"></el-tab-pane>
        </el-tabs>
      </div>
    </el-drawer>
    <audio :src="mus" class="media-audio" loop ref="MusicPlay"></audio>
  </div>
</template>
<script>
export default {
  name: "navs",
  data() {
    return {
      mus: this.api.yequ,
      activeName: "/",
      allofpage: [],
      item_img: [
        require("../../assets/img/menu.png"),
        require("../../assets/img/ico2.png"),
        require("../../assets/img/mus.svg")
      ],
      drawer: false
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      let url = this.api.m_router;
      this.$http.get(url).then(res => {
        let my = res.data;
        this.allofpage = my.list;
      });
    },
    //   抽屉的页面跳转
    now_tab(el) {
      this.drawer = false;
      this.$router.push({
        path: el.name
      });
    },
    //导航栏的操作
    click_img(el) {
      switch (el) {
        case 1:
          this.$router.push({
            path: "/"
          });
          this.activeName = "/";
          break;
        case 2:
          let but = this.$refs.MusicPlay;
          if (but.paused) {
            this.$refs.MusicPlay.play();
            this.$notify({
              title: "提示",
              message: "音乐开始播放!",
              type: "success",
              position: "bottom-right"
            });
          } else {
            this.$refs.MusicPlay.pause();
            this.$notify.info({
              title: "提示",
              message: "音乐停止播放！",
              position: "bottom-right"
            });
          }
          break;
        default:
          this.drawer = true;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.drawer_box {
  margin: 0 1.5rem;
  .box_link {
    margin: 0 1rem;
  }
}
.navs {
  background-color: white;
  border-bottom: 2px solid #eee;
  .the_navs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    img {
      width: 1.6rem;
    }
  }
}
</style>