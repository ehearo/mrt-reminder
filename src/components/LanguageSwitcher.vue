<template>
  <div class="relative inline-block text-left">
    <div>
      <button
        type="button"
        class="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-metro-blue"
        @click="isOpen = !isOpen"
      >
        {{ currentLanguageName }}
        <i class="fas fa-chevron-down ml-2"></i>
      </button>
    </div>

    <div
      v-if="isOpen"
      class="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
    >
      <div class="py-1" role="menu">
        <a
          v-for="(name, lang) in languages"
          :key="lang"
          :href="getLanguageUrl(lang)"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
          @click.prevent="switchLanguage(lang)"
        >
          {{ name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const router = useRouter()
const { locale } = useI18n()
const isOpen = ref(false)

const languages = {
  'zh-TW': '繁體中文',
  'en': 'English',
  'ja': '日本語',
  'ko': '한국어'
}

const currentLanguageName = computed(() => languages[locale.value as keyof typeof languages])

const getLanguageUrl = (lang: string) => {
  const currentPath = router.currentRoute.value.path
  const basePath = currentPath.replace(/^\/[a-z-]+/i, '')
  return lang === 'zh-TW' ? basePath : `/${lang}${basePath}`
}

const switchLanguage = (lang: string) => {
  locale.value = lang as 'zh-TW' | 'en' | 'ja' | 'ko'
  router.push(getLanguageUrl(lang))
  isOpen.value = false
}

// 點擊外部關閉下拉選單
const closeOnClickOutside = (e: MouseEvent) => {
  if (isOpen.value && !(e.target as Element).closest('.relative')) {
    isOpen.value = false
  }
}

// 監聽點擊事件
document.addEventListener('click', closeOnClickOutside)
</script> 