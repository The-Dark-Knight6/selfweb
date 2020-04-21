<template>
<div class="links">
    <el-backtop></el-backtop>
  <ul>
    <li v-for="(v,i) in data" :key="i">
      <h6>{{v.title}}</h6>
      <p v-for="(p,t) in v.list" :key="t">
        <a :href="p.link" target="_blank">{{p.name}}</a>
      </p>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  name: "links",
  data () {
    return {
      data:[],
    };
  },
  mounted(){
    this.getdata();
  },
  methods:{
    getdata(){
       let url = this.api.the_link;
      this.$http.get(url).then(res => {
        let my = res.data;
        this.data = my.data;
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.links{
  background-color: #f5f4f4;
  padding: 1rem 0;
  h6{
    margin: .5rem;
    color: #8caed1;
    font-size: 1.3rem;
  }
  li{
    margin-left: 1rem;
    padding: .5rem 0;
    p{
      margin-left: 4rem;
    }
  }
  a{
    display: inline-block;
    padding: .5rem 0;
    color: #64854c;
    border-bottom: 1px dashed #ddd;
  }
}
</style>