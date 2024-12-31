<template>
  <nav class="page-footer">
    <div class="flex justify-around items-center h-14">
      <router-link 
        v-for="item in navItems" 
        :key="item.path"
        :to="item.path"
        class="flex flex-col items-center"
        :class="{ 'text-metro-blue': isActive(item.path), 'text-gray-400': !isActive(item.path) }"
      >
        <i :class="['text-xl mb-1', item.icon]"></i>
        <span class="text-xs">{{ $t(item.label) }}</span>
      </router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const navItems = [
  { path: '/', label: 'nav.lines', icon: 'fas fa-subway' },
  { path: '/map', label: 'nav.map', icon: 'fas fa-map' },
  { path: '/favorites', label: 'nav.favorites', icon: 'fas fa-star' }
]

const isActive = (path: string) => route.path === path
</script> 