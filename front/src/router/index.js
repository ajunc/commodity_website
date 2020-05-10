import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import About from '@/components/AboutUs'
import Connect from '@/components/ContactUs'
import AppInfo from '@/components/AppInfo'
import Shopping from '@/components/Shopping'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/connect',
      name: 'connect',
      component: Connect
    },
    {
      path: '/appinfo',
      name: 'appinfo',
      component: AppInfo
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: Shopping
    }
  ]
})
