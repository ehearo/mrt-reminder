import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AdminLogin from '@/views/admin/AdminLogin.vue'
import AdminDashboard from '@/views/admin/AdminDashboard.vue'
import i18n from '@/i18n'

// 定義路由 meta 類型
declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean
    locale?: 'en' | 'ja' | 'zh-TW'
  }
}

// 基礎路由配置
const baseRoutes = {
  home: {
    component: HomeView
  },
  favorites: {
    component: () => import('@/views/FavoritesView.vue')
  },
  map: {
    component: () => import('@/views/MapView.vue')
  },
  lines: {
    component: () => import('@/views/LinesView.vue')
  },
  'line-detail': {
    component: () => import('@/views/LineDetailView.vue')
  },
  stations: {
    component: () => import('@/views/StationDetailView.vue')
  },
  fare: {
    component: () => import('@/views/FareView.vue')
  }
}

// 生成多語言路由
function generateLocalizedRoutes(): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  const languages = ['en', 'ja'] as const // 非預設語言列表

  // 添加預設語言（中文）路由
  Object.entries(baseRoutes).forEach(([name, config]) => {
    if (name === 'line-detail') return // 跳過 line-detail，因為它是動態路由

    routes.push({
      path: name === 'home' ? '/' : `/${name}`,
      name: name,
      component: config.component
    })
  })

  // 添加動態路由
  routes.push({
    path: '/lines/:color',
    name: 'line-detail',
    component: baseRoutes['line-detail'].component
  })

  routes.push({
    path: '/stations/:id',
    name: 'station-detail',
    component: baseRoutes.stations.component
  })

  // 為其他語言生成路由
  languages.forEach(lang => {
    Object.entries(baseRoutes).forEach(([name, config]) => {
      if (name === 'line-detail') return // 跳過 line-detail，因為它是動態路由

      routes.push({
        path: name === 'home' ? `/${lang}` : `/${lang}/${name}`,
        name: `${name}-${lang}`,
        component: config.component,
        meta: { locale: lang }
      })
    })

    // 為其他語言添加動態路由
    routes.push({
      path: `/${lang}/lines/:color`,
      name: `line-detail-${lang}`,
      component: baseRoutes['line-detail'].component,
      meta: { locale: lang }
    })

    routes.push({
      path: `/${lang}/stations/:id`,
      name: `station-detail-${lang}`,
      component: baseRoutes.stations.component,
      meta: { locale: lang }
    })
  })

  // 添加管理員路由
  routes.push(
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
  )

  // 添加 404 路由
  routes.push({
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue')
  })

  return routes
}

const router = createRouter({
  history: createWebHistory(),
  routes: generateLocalizedRoutes()
})

// 路由守衛
router.beforeEach((to, from, next) => {
  // 檢查認證
  if (to.meta.requiresAuth && !localStorage.getItem('admin-token')) {
    next({ name: 'admin-login' })
    return
  }

  // 設置語言
  if (to.meta.locale) {
    i18n.global.locale.value = to.meta.locale as 'en' | 'ja' | 'zh-TW'
  }

  next()
})

export default router 