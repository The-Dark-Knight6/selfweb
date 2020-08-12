<template>
  <div class="adert">
    <h2>#这是广告#</h2>
    <ul>
      <li v-for="(v,i) in head_data" :key="i">{{v}}</li>
    </ul>
    <img :src="selfnum" alt />
    <div>
      <ul>
        <li v-for="(v,i) in lists" :key="i">{{v}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "adert",
  data() {
    return {
      selfnum:this.api.selfnum,
      head_data: [],
      lists: []
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    getdata() {
      let url = this.api.m_ad;
      this.$http.get(url).then(res => {
        let my = res.data;
        this.head_data = my.head;
        this.lists = my.list;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin spacial_p {
  background: linear-gradient(to right, blue, red);
  -webkit-background-clip: text;
  color: transparent;
}
.adert {
  height: 100%;
  background-color: #f8fafa;
  text-align: center;
  h2 {
    padding: 1.4rem 0 .4rem 0;
  }
  img {
    width: 100%;
  }
  ul {
    padding: .4rem 0;
    li {
      margin: .8rem 0;
      @include spacial_p;
    }
  }
}
</style>