<template>
  <div class="hello">
    <div class="show_text">
      <p v-for="(v,i) in head_poem" :key="i">{{v}}</p>
    </div>
    <div class="website_links">
      <p>
        Copyright 2019-2020 小付同学 All Rights Reserved |
        <span @click="link_to_soical">粤ICP备19054851号-1</span>
      </p>
    </div>
    <div class="blub">
      <span :class="{action:to_play}"></span>
      <img :src="music_src" alt @click="plays" />
    </div>
    <audio :src="mus" ref="themusic"></audio>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      to_play: false,
      head_poem: [],
      music_src: require("../../assets/img/bulb.svg"),
      mus: require("../../assets/qing.mp3"),
    };
  },
  created() {
    this.getdata();
    console.log(this.$myself);
  },
  methods: {
    getdata() {
      let url = this.api.m_index;
      this.$http.get(url).then(res => {
        let my = res.data;
        this.head_poem = my.poem;
      });
    },
    //备案网址
    link_to_soical() {
      window.open("http://beian.miit.gov.cn/");
    },
    //播放音乐  更换灯泡样式
    plays() {
      let but = this.$refs.themusic;
      this.to_play = !this.to_play;
      if (this.to_play) {
        but.play();
        this.music_src = require("../../assets/img/actb.svg");
        this.$message({
          type: "success",
          message: "音乐开始播放！"
        });
      } else {
        but.pause();
        this.music_src = require("../../assets/img/bulb.svg");
        this.$message("音乐停止播放！");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink-caret {
  50% {
    border-color: transparent;
  }
}
.show_text {
  font-size: 16px;
  color: #f4ecec;
  margin-top: 20px;
  p {
    text-align: center;
    border-right: 0.1px dotted;
    // width: 10px;
    /* 动画定义长度  此也就是h1标签长度 */
    width: 75ch;
    /* # of chars */
    margin: 1rem 0;
    white-space: nowrap;
    overflow: hidden;
    // animation-delay:2s;
    animation: typing 5s steps(60, end) 1.2s,
      blink-caret 0.3s step-end infinite alternate 1.2s;
  }
}
.action {
  background-color: red !important;
  height: 200px !important;
  transition: 2s;
}
.hello {
  width: 100%;
  height: 100%;
  background: url("../../assets/img/8524.jpg") no-repeat;
  background-size: 100% 100%;
  position: relative;
  .blub {
    position: absolute;
    top: 0;
    right: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 35px;
      transform: rotate(180deg);
      cursor: pointer;
    }
    span {
      display: inline-block;
      height: 120px;
      width: 2px;
      background-color: #bfbfbf;
      transition: 2s;
    }
  }
  .website_links {
    position: absolute;
    bottom: 0%;
    left: 0;
    right: 0;
    text-align: center;
    margin: 0 auto;
    p {
      margin: 20px 0;
      color: gray;
      font-size: 0.6rem;
      font-family: "微软雅黑";
      span {
        cursor: pointer;
      }
    }
  }
}
ul {
  list-style-type: none;
}
</style>
