<template>
  <div class="sometext">
    <el-backtop></el-backtop>
    <ul class="before">
      <li v-for="(v,i) in data" :key="i">{{v}}</li>
    </ul>
    <div class="theimg">
      <img :src="icanbb" alt />
    </div>
    <ul class="thepoem">
      <li v-for="(v,i) in poem" :key="i">
        <span>{{v}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "sometext",
  data() {
    return {
      icanbb:this.api.icanbb,
      data: [],
      poem: []
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
        console.log(my);
        this.data = my.data;
        this.poem = my.poem;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.sometext {
  background-color: #eef1ed;
  .theimg {
    margin: 1rem;
    img {
      width: 100%;
      opacity: 0.5;
    }
  }
  ul {
    padding: 0.2rem;
    li {
      margin: 1rem 0;
      padding: 0 1rem;
      border-bottom: 0.1rem dashed #ddd;
    }
  }
  ul.thepoem {
    text-align: center;
    li {
      border: 0;
      span {
        display: inline-block;
        border-bottom: 0.1rem dashed #c8c1c1;
      }
    }
  }
}
</style>