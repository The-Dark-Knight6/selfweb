<template>
  <div class="HelloWorld">
    <!-- 返回顶部 -->
    <el-backtop></el-backtop>
    <div class="the_head">
      <ul>
        <li v-for="(v,i) in head_poem" :key="i">{{v}}</li>
      </ul>
    </div>
    <div class="the_story">
      <ul>
        <li v-for="(v,i) in the_story" :key="i">{{v}}</li>
      </ul>
    </div>
    <div class="img_box">
      <img src="../../assets/img/25043752.gif" alt />
    </div>
    <div class="the_story">
      <ul>
        <li v-for="(v,i) in other" :key="i">{{v}}</li>
      </ul>
    </div>
    <div class="img_box">
      <img src="../../assets/img/25043751.gif" alt />
    </div>
    <div class="last_poem">
      <ul>
        <li v-for="(v,i) in last_poem" :key="i">{{v}}</li>
      </ul>
    </div>
    <div class="img_box_qq" v-show="the_qq">
      <img src="../../assets/img/myqq.png" alt />
    </div>
    <div class="the_bottom">
      <div class="bot_img">
        <img v-for="(v,i) in botimg" :key="i" :src="v" @click="bot_img_click(i)" />
      </div>
      <p>Copyright 2019-2020 小付同学 All Rights Reserved</p>
      <p>粤ICP备19054851号-1</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      the_qq: false,
      botimg: [
        require("../../assets/img/social_github.svg"),
        require("../../assets/img/qqs.svg"),
        require("../../assets/img/social_sina.svg")
      ],
      head_poem: [],
      the_story: [],
      other: [],
      last_poem: []
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    //   downloadPDf() {
    //     let url = this.api.musics;
    //    this.$http.get(url).then(res=>{
    //      let data = res.url;
    //      console.log(data);
    //       let a = document.createElement('a');
    //  a.href = data;
    //  a.download = 'adsf.mp3';
    //  a.click();
    //    })
    //     },
    bot_img_click(el) {
      switch (el) {
        case 1:
          this.the_qq = !this.the_qq;
          break;
        case 2:
          window.open(
            "https://weibo.com/u/6096309423?topnav=1&wvr=6&topsug=1&is_all=1"
          );
          break;
        default:
          window.open("https://github.com/The-Dark-Knight6");
      }
    },
    getdata() {
      let url = this.api.m_index;
      this.$http.get(url).then(res => {
        let my = res.data;
        this.head_poem = my.poem;
        this.the_story = my.story;
        this.other = my.other;
        this.last_poem = my.last_poem;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/deep/ .el-image {
  width: 100%;
}
.the_bottom {
  margin-top: 1rem;
  padding: 1.2rem 0;
  text-align: center;
  background-color: #475050;
  p {
    font-size: 0.8rem;
    margin: 0.8rem 0;
    color: white;
  }
  .bot_img {
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    img {
      width: 1.5rem;
    }
  }
}
.last_poem {
  padding: 0 15px;
  ul {
    padding: 0.1rem 0;
    background-color: #f8fafa;
    li {
      display: block;
      margin: 1rem 0;
      text-align: center;
      color: #304455;
    }
  }
}
.img_box > img {
  width: 100%;
}
.img_box_qq {
  text-align: center;
  margin: 1rem;
  img {
    width: 6rem;
  }
}
.the_story {
  padding: 0 15px;
  ul {
    padding: 0.2rem 0;
    li {
      margin: 0.6rem 0;
    }
  }
}
@keyframes identifier {
  from {
    opacity: 0;
    transform: translate(0,200px);
  }to{
    opacity: 1;
    transform: translate(0,0px);
  }
}
.the_head {
  padding: 0 15px;
  background: url("../../assets/img/8576.jpg") no-repeat;
  background-size: cover;
  height: 230px;
  overflow: hidden;
  ul {
    animation: identifier 8s forwards;
    padding: 0.1rem 0;
    li {
      display: block;
      margin: 0.8rem 0;
      text-align: center;
      color: #e9e4e4;
    }
  }
}
</style>
