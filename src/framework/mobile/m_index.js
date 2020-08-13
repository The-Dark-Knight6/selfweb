// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '../../router/mobile/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import VueResource from 'vue-resource'
import api from '../../assets/apis/api'
import axios from "axios"

Vue.use(ElementUI);
// Vue.use(VueResource)

Vue.config.productionTip = false
Vue.prototype.api = api;
Vue.prototype.$http = axios;
//全局获取当前路由地址
Vue.prototype.actrouter = window.location.href.split('#')[1];

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
