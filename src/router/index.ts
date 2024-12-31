import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AdminLogin from '@/views/admin/AdminLogin.vue'
import AdminDashboard from '@/views/admin/AdminDashboard.vue'

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
    },
    {
      path: '/admin',
      name: 'admin-login',
      component: AdminLogin
    },
    {
      path: '/admin/dashboard',
      name: 'admin-dashboard',
      component: AdminDashboard,
      meta: { requiresAuth: true }
    }
  ]
})

// 路由守衛
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !localStorage.getItem('admin-token')) {
    next({ name: 'admin-login' })
  } else {
    next()
  }
})

export default router 