import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Events from '../views/Events.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Events',
    component: Events,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'));
      if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
      else next()
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
