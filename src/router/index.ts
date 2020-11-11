import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import { Menu, Router } from "@/types/menu.ts"
// import Home from '../views/Home.vue'
import NoPage from '@/components/Default/NoPage.vue'
import Login from '@/components/Login/Login.vue'
// import List from '../views/List.vue'
// import Render from '../views/Render/Render'
// import Setup from '../views/Setup/Index.vue'
// import NextTick from '../views/NextTick/NextTick.vue'
import Collect from "./Collect"
import Layout from "@/views/Layout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: "/myapp",
    name: "myapp",
    component: Layout,
    children: [...Collect]
  },
  {
    path: '/nopage',
    name: 'nopage',
    component: NoPage
  },
  {
    path: "/:catchAll(.*)",
    redirect: {
      name: "nopage"
    }
  },
]

console.log('routes', routes);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
