<template>
  <header class="page-header">
    <div class="h-full px-4 flex items-center">
      <router-link to="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity" @click="clearSelection">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- 背景圓形 -->
          <circle cx="16" cy="16" r="16" fill="#0070BD"/>
          <!-- 字母 M -->
          <path d="M8 10V22H10V14L13 19H15L18 14V22H20V10H17L14 16L11 10H8Z" fill="white"/>
          <!-- 底部軌道線 -->
          <rect x="6" y="23" width="20" height="2" rx="1" fill="white"/>
        </svg>
        <h1 class="text-lg font-semibold">台北捷運</h1>
      </router-link>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useLineStore } from '@/stores/line'

const router = useRouter()
const lineStore = useLineStore()

const clearSelection = () => {
  lineStore.clearSelectedLine()
}
</script> 