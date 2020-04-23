import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      component: resolve => require(['@/components/pc/HelloWorld'], resolve),
      meta: { title: '首页' }
    },
    {
      path: '/jsworld',
      component: resolve => require(['@/components/pc/jsworld'], resolve),
    },
    {
      path: '/pc_adert',
      component: resolve => require(['@/components/pc/pc_adert'], resolve),
    },
  ]
})
/**
 * 判断是否为移动设备，是，则跳转到移动端的路径
 */
router.beforeEach((to, from, next) => {
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.location.href = '/m_index.html#/'
    return
  }
  next()
})
export default router