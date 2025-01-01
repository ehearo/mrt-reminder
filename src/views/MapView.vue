<template>
  <div class="min-h-screen bg-gray-50 safe-area">
    <MetroHeader />
    <main class="metro-content">
      <div class="max-w-full overflow-auto p-4">
        <img 
          src="@/assets/images/routemap2023n.png" 
          alt="台北捷運路線圖"
          title="台北捷運路線圖"
          class="w-full max-w-[1200px] mx-auto"
          usemap="#FPMap1"
        >
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import MetroHeader from '@/components/MetroHeader.vue'

const { t } = useI18n()

useHead({
  title: `${t('nav.map')} | Metro Taipei`
})
</script>

<style scoped>
.metro-content {
  padding-top: calc(54px + env(safe-area-inset-top));
  padding-bottom: calc(56px + env(safe-area-inset-bottom));
}
</style> 