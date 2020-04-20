<template>
  <div class="adert">
    <h2>#这是广告#</h2>
    <ul>
      <li v-for="(v,i) in head_data" :key="i">{{v}}</li>
    </ul>
    <img src="../../assets/img/selfnum.jpg" alt />
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
    }
  }
}
</style>