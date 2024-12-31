<template>
  <header class="page-header">
    <div class="h-[54px] px-4 flex items-center">
      <router-link to="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity" @click="clearSelection">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- 背景圓形 -->
          <circle cx="16" cy="16" r="16" fill="#0070BD"/>
          <!-- 字母 M -->
          <path d="M8 10V22H10V14L13 19H15L18 14V22H20V10H17L14 16L11 10H8Z" fill="white"/>
          <!-- 底部軌道線 -->
          <rect x="6" y="23" width="20" height="2" rx="1" fill="white"/>
        </svg>
        <h1 class="text-lg font-semibold">{{ $t('header.title') }}</h1>
      </router-link>
      
      <div class="ml-auto relative">
        <button 
          @click.stop="isLangMenuOpen = !isLangMenuOpen"
          class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          :aria-expanded="isLangMenuOpen"
        >
          <span class="text-sm font-medium">{{ currentLocaleDisplay }}</span>
          <svg 
            class="w-4 h-4 transition-transform" 
            :class="{ 'rotate-180': isLangMenuOpen }"
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>

        <div 
          v-if="isLangMenuOpen" 
          class="absolute right-0 mt-2 py-2 w-32 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <button
            v-for="(name, code) in locales" 
            :key="code"
            @click="switchLocale(code)"
            class="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
            :class="{ 'text-blue-600 font-medium': currentLocale === code }"
          >
            {{ name }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useLineStore } from '@/stores/line'
import { useI18n } from 'vue-i18n'
import { ref, computed, onMounted, onUnmounted } from 'vue'

const router = useRouter()
const lineStore = useLineStore()
const { locale } = useI18n()

const currentLocale = ref(locale.value)
const isLangMenuOpen = ref(false)

const locales = {
  'zh-TW': '中文',
  'en': 'English',
  'ja': '日本語',
  'ko': '한국어'
}

const currentLocaleDisplay = computed(() => locales[currentLocale.value as keyof typeof locales])

const switchLocale = (code: string) => {
  currentLocale.value = code
  locale.value = code
  isLangMenuOpen.value = false
}

const clearSelection = () => {
  lineStore.clearSelectedLine()
}

// Close menu when clicking outside
const closeMenu = (e: MouseEvent) => {
  if (isLangMenuOpen.value) {
    isLangMenuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeMenu)
})

onUnmounted(() => {
  document.removeEventListener('click', closeMenu)
})
</script>

<style scoped>
.page-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 50;
  padding-top: env(safe-area-inset-top);
}
</style> 