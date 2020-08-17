<template>
  <div class="sometext">
    <el-backtop></el-backtop>
    <div class="top_text">
      <el-tag v-for="(v,i) in data" :key="i" type="info" effect="plain">{{ v }}</el-tag>
    </div>
    <div class="cen_img">
      <img :src="icanbb" alt />
    </div>
    <div class="bot_poem">
      <el-card class="box-card">
        <div v-for="(v,i) in list" :key="i+1" class="item">
          <el-alert center :title="v" :closable="false" type="info"></el-alert>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "sometext",
  data() {
    return {
      icanbb:this.api.icanbb,
      data: [],
      list: []
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      let url = this.api.m_text;
      this.$http.get(url).then(res => {
        let my = res.data;
        this.data = my.data;
        this.list = my.poem;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.cen_img {
  text-align: center;
}
.el-tag {
  display: block;
  margin: 12px 0;
}
.bot_poem {
  position: absolute;
  left: 0;
  right: 0;
  margin: 50px auto;
  padding: 0 100px;
}
.sometext {
  width: 100%;
  position: relative;
  //   background-color: #eee;
  padding: 10px;
  .top_text {
    margin: 10px 0;
  }
}
</style>