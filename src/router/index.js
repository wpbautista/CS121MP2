import { createRouter, createWebHistory } from 'vue-router'
import SUView from '../views/SUView.vue'

const routes = [
  {
    path: '/seller-signup',
    name: 'seller-signup',
    component: SUView
  },
  {
    path: '/seller-dashboard',
    name: 'seller-dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SLDView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
