<template>
  <div id="app">
    <navs></navs>
    <router-view/>
  </div>
</template>

<script>
import navs from './navs';
export default {
  name: 'App',
  data(){
    return{
    }
  },
  components:{
    navs
  },

}
</script>

<style>
a{
  text-decoration: none;
}
html,body,p,h1,h2,h3,h4,h5,h6{
  margin: 0%;
  padding: 0%;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  display: block;
}
#app {
  font-family: '楷体';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
}
</style>
