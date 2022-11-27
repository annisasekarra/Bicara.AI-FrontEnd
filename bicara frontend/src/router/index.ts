import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import DashBoard from '../views/DashBoard.vue'
import LandingPage from '../views/LandingPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: LandingPage
  },
  {
    path: '/dashboard',
    component: DashBoard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
