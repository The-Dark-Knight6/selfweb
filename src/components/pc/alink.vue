<template>
  <div class="alink">
    <div class="the_box" v-for="(v,i) in data" :key="i">
      <el-alert show-icon :closable="false" :title="v.title" type="success"></el-alert>
      <ul>
        <li v-for="(p,j) in v.list" :key="j+1">
          <el-link type="primary" :href="p.link" target="_blank">{{p.name}}</el-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "alink",
  data() {
    return {
      data: []
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      let url = this.api.the_link;
      this.$http.get(url).then(res => {
        let my = res.data;
        console.log(my);
        this.data = my.data;
        // this.list = my.poem;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.alink{
  width: 100%;
}
.the_box {
  ul {
    list-style: none;
    li{
      margin: 12px 0;
    }
  }
}
</style>