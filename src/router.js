import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import MyLocations from './views/MyLocations.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/locations',
      name: 'about',
      component: MyLocations
    }
  ]
})
