<template>
  <div class="theday">
    <p>此时此刻：{{thetime}}</p>
    <div class="getbox" v-for="(v,i) in timebox" :key="i">
      <span>{{v.name}}</span>
      <el-progress :stroke-width="20" :percentage="v.type" :status="v.sta"></el-progress>
    </div>
    <div class="showtime">
      <p>距离今日上班还有：{{totime}}</p>
      <p>距离今日下班还有：{{daotime}}</p>
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
      daotime: "",
      totime: ""
    };
  },
  mounted() {
    this.countTime();
  },
  methods: {
    countTime() {
      let tig = this.timebox;
      let data = new Date();
      let year = data.getFullYear();
      let month = data.getMonth() + 1;
      let day = data.getDate();
      let hour = data.getHours();
      let minuter = data.getMinutes();
      let second = data.getSeconds();
      let time = `${hour}时${minuter}分${second}秒`;
      let offwork = `${year}/${month}/${day} 18:00:00`;
      let onwork = `${year}/${month}/${day} 09:00:00`;
      let nows = `${year}/${month}/${day} ${hour}:${minuter}:${second}`;
      let off = new Date(offwork);
      let thenow = new Date(nows);
      let on = new Date(onwork);
      let leng = Date.parse(off) - Date.parse(thenow);
      let towork = Date.parse(on) - Date.parse(thenow);
      // 距离上班时长
      if (towork > 0) {
        let obj = this.calculate(towork);
        let total = `${obj.shi}时,${obj.fen}分,${obj.now_miao}秒`;
        this.totime = total;
      } else if (leng > 0) {
        this.totime = `It's time to work！`;
      } else {
        this.totime = `It's time to go off work！`;
      }
      //距离下班时长
      if (leng > 0 && towork < 0) {
        let obj = this.calculate(leng);
        let total = `${obj.shi}时,${obj.fen}分,${obj.now_miao}秒`;
        this.daotime = total;
      } else {
        this.daotime = `It's time to go off work！`;
      }
      //显示当前时刻
      this.thetime = time;
      this.timebox[0].type = Math.floor(hour * 4.2);
      this.timebox[1].type = Math.floor(minuter * 1.7);
      this.timebox[2].type = Math.floor(second * 1.7);
      //递归每秒调用countTime方法，显示动态时间效果
      setTimeout(this.countTime, 1000);
    },
    //倒计时 计算
    calculate(leng) {
      let miao = parseInt(leng / 1000), //距离某一时刻（18:00:00）的总秒数
        tian = parseInt(miao / (24 * 60 * 60)), //总天数（总秒数/一天的总秒数）
        shi = parseInt(miao / (60 * 60) - tian * 24), //总小时数
        fen = parseInt(miao / 60 - (tian * 24 * 60 + shi * 60)), //总分钟数
        now_miao = parseInt(miao - (tian * 86400 + shi * 3600 + fen * 60)); //相差的秒数
      let obj = {
        tian: tian,
        shi: shi,
        fen: fen,
        now_miao: now_miao
      };
      return obj;
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