import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      component: resolve => require(['@/components/mobile/HelloWorld'], resolve),
      meta: { title: '首页' }
    },
    {
      path: '/adert',
      component: resolve => require(['@/components/mobile/adert'], resolve),
    },
    {
      path: '/sometext',
      component: resolve => require(['@/components/mobile/sometext'], resolve),
    },
    {
      path: '/links',
      component: resolve => require(['@/components/mobile/links'], resolve),
    },
    {
      path: '/listen',
      component: resolve => require(['@/components/mobile/listen'], resolve),
    },
    {
      path: '/theday',
      component: resolve => require(['@/components/mobile/theday'], resolve),
    },
  ]
})
/**
 * 判断是否为移动设备，是，则跳转到移动端的路径
 */
router.beforeEach((to, from, next) => {
  if (!(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent))) {
    window.location.href = '/p_index.html#/'
    return
  }
  next()
})
export default router
