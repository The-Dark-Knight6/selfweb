<template>
  <div class="pc_adert">
    <p># 这是广告 #</p>
    <p v-for="(v,i) in head_data" :key="i">{{v}}</p>
    <div class="img_boxs">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="(v,i) in urls" :key="i">
          <img :src="v" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <span v-for="(v,i) in lists" :key="i+9">{{v}}</span>
  </div>
</template>
<script>
export default {
  name: "pc_adert",
  data() {
    return {
      urls: [
        this.api.selfnum,
        this.api.getb,
        this.api.code,
        this.api.books,
        this.api.bj,
        this.api.xiyang,
      ],
      head_data: [],
      lists: [],
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      let url = this.api.m_ad;
      this.$http.get(url).then((res) => {
        let my = res.data;
        // console.log(my);
        this.head_data = my.head;
        this.lists = my.list;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
/deep/ .el-carousel__indicators--outside button {
  background-color: red;
  margin-top: 25px;
}
@mixin spacial_p {
  background: linear-gradient(to right, black, red);
  -webkit-background-clip: text;
  color: transparent;
}
@mixin spacial_span {
  background: linear-gradient(to left, blue, yellow);
  -webkit-background-clip: text;
  color: transparent;
}
.pc_adert {
  width: 100%;
  background-color: #fafafa;
  span {
    margin: 20px 0;
    display: block;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    @include spacial_span;
  }
  p {
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    @include spacial_p;
  }
  .img_boxs {
    padding: 20px;
  }
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>