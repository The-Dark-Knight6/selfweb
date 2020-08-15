// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '../../router/pc/index'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import api from '../../assets/apis/api'
import VueResource from 'vue-resource'

// Vue.use(ElementUI);
//设置全局数据 api （接口）
Vue.prototype.api = api;
//全局获取当前的路由
Vue.prototype.act_router = window.location.href.split('#')[1];
Vue.use(VueResource)

//设置 全局数据 $myself
Vue.prototype.$myself = 'welcome to my blog...';
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
