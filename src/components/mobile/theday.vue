<template>
  <div class="theday">
    <p>此时此刻：{{thetime}}</p>
    <div class="getbox" v-for="(v,i) in timebox" :key="i">
      <span>{{v.name}}</span>
      <el-progress :stroke-width="20" :percentage="v.type" :status="v.sta"></el-progress>
    </div>
    <div style="margin-top:1rem">
      <el-calendar v-model="value"></el-calendar>
    </div>
  </div>
</template>

<script>
export default {
  name: "theday",
  data() {
    return {
      timebox: [
        {
          name: "时",
          type: 0,
          sta: "exception"
        },
        {
          name: "分",
          type: 0,
          sta: "warning"
        },
        {
          name: "秒",
          type: 0,
          sta: "success"
        }
      ],
      value: new Date(),
      thetime: "",
    };
  },
  mounted() {
    this.countTime();
  },
  methods: {
    countTime() {
      let tig = this.timebox;
      let data = new Date();
      let hour = data.getHours();
      let minuter = data.getMinutes();
      let second = data.getSeconds();
      let time = `${hour}时${minuter}分${second}秒`;
      this.thetime = time;
      this.timebox[0].type = Math.floor(hour * 4.2);
      this.timebox[1].type = Math.floor(minuter * 1.7);
      this.timebox[2].type = Math.floor(second * 1.7);
      //递归每秒调用countTime方法，显示动态时间效果
      setTimeout(this.countTime, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.getbox {
  position: relative;
  span {
    color: whitesmoke;
    position: absolute;
    left: 22px;
    z-index: 3;
  }
}
.el-progress {
  margin: 1rem;
}
/deep/ .el-progress__text i {
  display: none;
}
.theday {
  padding: 1rem;
  p {
    margin: 1rem 0;
  }
}
</style>