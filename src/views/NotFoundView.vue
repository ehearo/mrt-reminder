<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center px-4">
    <div class="max-w-lg w-full text-center">
      <div class="text-6xl font-bold text-metro-blue mb-8">404</div>
      <h1 class="text-2xl font-semibold mb-4">{{ $t('error.pageNotFound') }}</h1>
      <p class="text-gray-600 mb-8">{{ $t('error.pageNotFoundDesc') }}</p>
      <router-link 
        to="/" 
        class="inline-block bg-metro-blue text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
      >
        {{ $t('common.backToHome') }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useHead({
  title: `404 - ${t('error.pageNotFound')} | Metro Taipei`
})
</script> 