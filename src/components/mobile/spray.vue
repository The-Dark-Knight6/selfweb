<template>
  <div class="spray">
    <el-backtop></el-backtop>
    <img :src="houlang" alt />
    <div class="after">
      <p v-for="(v,i) in after" :key="i">{{v}}</p>
    </div>
    <img :src="lizhi" alt />
    <div class="after">
      <p v-for="(v,i) in before" :key="i">{{v}}</p>
    </div>
    <img :src="luoji" alt />
    <div class="after">
      <p v-for="(v,i) in married" :key="i">{{v}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "spray",
  data() {
    return {
      houlang:this.api.houlang,
      lizhi:this.api.lizhi,
      luoji:this.api.luoji,
      after: [],
      before: [],
      married: []
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      let url = this.api.thespray;
      this.$http.get(url).then(res => {
        let my = res.data;
        this.after = my.after;
        this.before = my.before;
        this.married = my.married;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.spray {
  background-color: rgb(199, 238, 206);
  padding: 0.6rem 1rem;
  img {
    width: 100%;
    margin: 0.5rem 0;
    opacity: 0.6;
  }
  .after {
    padding: 0.2rem 0.6rem;
    p {
      margin: 0.5rem 0;
    }
  }
}
</style>