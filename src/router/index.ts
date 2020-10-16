import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import Render from '../views/Render/Render'
import Setup from '../views/Setup/Index.vue'
import NextTick from '../views/NextTick/NextTick.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/render',
    name: 'Render',
    component: Render
  },
  {
    path: '/setup',
    name: 'Setup',
    component: Setup
  },
  {
    path: '/next-tick',
    name: 'NextTick',
    component: NextTick
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
