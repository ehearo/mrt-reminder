<template>
  <!-- 背景遮罩 -->
  <Transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/25 z-40"
      @click="isOpen = false"
    ></div>
  </Transition>

  <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
    <div class="flex justify-around items-stretch h-14">
      <!-- 路線 (首頁) -->
      <router-link 
        :to="localizedPath('/')"
        class="flex-1 flex flex-col items-center justify-center"
        :class="$route.path === localizedPath('/') ? 'text-metro-blue' : 'text-gray-500'"
        active-class="text-metro-blue"
      >
        <i class="text-xl mb-1 fas fa-subway"></i>
        <span class="text-xs">{{ $t('nav.lines') }}</span>
      </router-link>

      <!-- 收藏 -->
      <router-link 
        :to="localizedPath('/favorites')"
        class="flex-1 flex flex-col items-center justify-center"
        :class="$route.path.includes('/favorites') ? 'text-metro-blue' : 'text-gray-500'"
        active-class="text-metro-blue"
      >
        <i class="text-xl mb-1 fas fa-star"></i>
        <span class="text-xs">{{ $t('nav.favorites') }}</span>
      </router-link>

      <!-- 更多功能 -->
      <div class="flex-1 relative">
        <button
          @click="isOpen = !isOpen"
          class="w-full h-full flex flex-col items-center justify-center"
          :class="isOpen ? 'text-metro-blue' : 'text-gray-500'"
        >
          <i class="text-xl mb-1 fas fa-ellipsis"></i>
          <span class="text-xs">{{ $t('nav.more') }}</span>
        </button>

        <!-- 彈出選單 -->
        <Transition 
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="transform translate-y-full opacity-0"
          enter-to-class="transform translate-y-0 opacity-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="transform translate-y-0 opacity-100"
          leave-to-class="transform translate-y-full opacity-0"
        >
          <div
            v-if="isOpen"
            class="absolute bottom-full inset-x-0 mx-2 mb-2 bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <router-link
              :to="localizedPath('/map')"
              class="flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50 active:bg-gray-100"
              @click="isOpen = false"
            >
              <i class="fas fa-map text-metro-blue w-5"></i>
              <span>{{ $t('nav.map') }}</span>
            </router-link>

            <router-link
              :to="localizedPath('/lines')"
              class="flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50 active:bg-gray-100"
              @click="isOpen = false"
            >
              <i class="fas fa-subway text-metro-blue w-5"></i>
              <span>{{ $t('line.intro') }}</span>
            </router-link>

            <router-link
              :to="localizedPath('/fare')"
              class="flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50 active:bg-gray-100"
              @click="isOpen = false"
            >
              <i class="fas fa-ticket-alt text-metro-blue w-5"></i>
              <span>{{ $t('fare.title') }}</span>
            </router-link>
          </div>
        </Transition>
      </div>
    </div>
  </nav>

  <!-- 底部填充，防止內容被導航欄遮擋 -->
  <div class="h-14"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { locale } = useI18n()
const isOpen = ref(false)

// 生成本地化路徑
const localizedPath = (path: string) => {
  if (locale.value === 'zh-TW') {
    return path
  }
  return `/${locale.value}${path}`
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 