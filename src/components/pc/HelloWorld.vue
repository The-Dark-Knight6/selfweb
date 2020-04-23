<template>
  <div class="hello">
    <div class="website_links">
      <p>
        Copyright 2019-2020 小付同学 All Rights Reserved |
        <span @click="link_to_soical">粤ICP备19054851号-1</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to PC"
    };
  },
  methods:{
    link_to_soical(){
      window.open('http://beian.miit.gov.cn/');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.hello {
  width: 100%;
  height: 100%;
  background: url("../../assets/img/8524.jpg") no-repeat;
  background-size: 100% 100%;
  position: relative;
  .website_links {
    position: absolute;
    bottom: 0%;
    left: 0;
    right: 0;
    text-align: center;
    margin:0 auto;
    p {
      margin: 20px 0;
      color: gray;
      font-size: 0.6rem;
      font-family: "微软雅黑";
      span {
        cursor: pointer;
      }
    }
  }
}
ul {
  list-style-type: none;
}
</style>
