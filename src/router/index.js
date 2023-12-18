import { createRouter, createWebHistory } from 'vue-router'
import mainPage from '../views/main-page.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: mainPage
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
