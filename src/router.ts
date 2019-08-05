import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/global',
      name: 'global',
      component: () => import(/* webpackChunkName: "global" */ './views/Global.vue')
    },
    {
      path: '/temp/user',
      name: 'user',
      component: () => import(/* webpackChunkName: "global" */ './views/User.vue')
    }
  ]
})
