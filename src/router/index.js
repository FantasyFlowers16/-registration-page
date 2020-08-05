import Vue from 'vue'
import VueRouter from 'vue-router'
import reg from '../views/registration.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/reg',
    component: reg
  },
  {
      path: '/',
      component: () => import('../views/home.vue')
  },
    {
      path: '/success',
      component: () => import('../views/successRegistration.vue')
    },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
