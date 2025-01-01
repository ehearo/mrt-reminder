<template>
  <div class="page-container safe-area">
    <MetroHeader />
    <main class="page-content">
      <div class="px-4 py-4">
        <h1 class="text-xl font-bold mb-4">{{ $t('line.select') }}</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pb-16">
          <!-- 板南線 -->
          <router-link 
            :to="localizedPath('/lines/blue')"
            class="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div class="h-2 bg-[#0070BD]"></div>
            <div class="p-4">
              <div class="flex items-center justify-between">
                <h2 class="text-lg font-semibold">{{ $t('line.names.blue') }}</h2>
                <div class="text-sm text-gray-500">BL</div>
              </div>
              <div class="mt-2 text-gray-600 text-sm">
                {{ $t('station.names.BL01') }} - {{ $t('station.names.BL23') }}
              </div>
            </div>
          </router-link>

          <!-- 淡水信義線 -->
          <router-link 
            :to="localizedPath('/lines/red')"
            class="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div class="h-2 bg-[#E3002C]"></div>
            <div class="p-4">
              <div class="flex items-center justify-between">
                <h2 class="text-lg font-semibold">{{ $t('line.names.red') }}</h2>
                <div class="text-sm text-gray-500">R</div>
              </div>
              <div class="mt-2 text-gray-600 text-sm">
                {{ $t('station.names.R02') }} - {{ $t('station.names.R28') }}
              </div>
            </div>
          </router-link>

          <!-- 松山新店線 -->
          <router-link 
            :to="localizedPath('/lines/green')"
            class="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div class="h-2 bg-[#008659]"></div>
            <div class="p-4">
              <div class="flex items-center justify-between">
                <h2 class="text-lg font-semibold">{{ $t('line.names.green') }}</h2>
                <div class="text-sm text-gray-500">G</div>
              </div>
              <div class="mt-2 text-gray-600 text-sm">
                {{ $t('station.names.G01') }} - {{ $t('station.names.G19') }}
              </div>
            </div>
          </router-link>

          <!-- 中和新蘆線 -->
          <router-link 
            :to="localizedPath('/lines/orange')"
            class="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div class="h-2 bg-[#F8B61C]"></div>
            <div class="p-4">
              <div class="flex items-center justify-between">
                <h2 class="text-lg font-semibold">{{ $t('line.names.orange') }}</h2>
                <div class="text-sm text-gray-500">O</div>
              </div>
              <div class="mt-2 text-gray-600 text-sm">
                {{ $t('station.names.O54') }} - {{ $t('station.names.O21') }}
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import MetroHeader from '@/components/MetroHeader.vue'

const { t, locale: currentLocale } = useI18n()

// 生成本地化路徑
const localizedPath = (path: string) => {
  if (currentLocale.value === 'zh-TW') {
    return path
  }
  return `/${currentLocale.value}${path}`
}

useHead({
  title: `${t('line.select')} | Metro Taipei`
})
</script>

<style scoped>
.page-content {
  padding-top: calc(54px + env(safe-area-inset-top));
}
</style> 