import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import(/* @vite-ignore */ '@/views/FavoritesView.vue')
    },
    {
      path: '/map',
      name: 'map',
      component: () => import(/* @vite-ignore */ '@/views/MapView.vue')
    }
  ]
})

export default router 