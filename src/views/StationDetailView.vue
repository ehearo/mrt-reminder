<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="loading" class="text-center">
      {{ $t('common.loading') }}
    </div>
    <div v-else-if="error" class="text-center text-red-500">
      {{ $t('common.error') }}
    </div>
    <template v-else>
      <!-- 站點基本信息 -->
      <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h1 class="text-3xl font-bold mb-4">
          {{ $t(`station.names.${stationId}`) }}
        </h1>
        <div class="text-gray-600 mb-2">{{ stationId }}</div>
        
        <!-- 收藏按鈕 -->
        <button
          @click="toggleFavorite(stationId)"
          class="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
          :class="isFavorite(stationId) ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 hover:bg-gray-200'"
        >
          <i class="mdi" :class="isFavorite(stationId) ? 'mdi-star' : 'mdi-star-outline'"></i>
          {{ isFavorite(stationId) ? $t('station.removeFromFavorites') : $t('station.addToFavorites') }}
        </button>
      </div>

      <!-- 即時到站信息 -->
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-xl font-semibold mb-4">{{ $t('station.arrivals') }}</h2>
        <div v-if="!arrivals.length" class="text-gray-500 text-center py-4">
          {{ $t('station.noTrains') }}
        </div>
        <div v-else class="space-y-4">
          <div
            v-for="(arrival, index) in arrivals"
            :key="index"
            class="flex items-center justify-between p-4 rounded-lg"
            :class="getArrivalClass(arrival.timeInMinutes)"
          >
            <div>
              <div class="font-medium">
                {{ $t('station.towards', { destination: $t(`station.names.${arrival.destination}`) }) }}
              </div>
              <div class="text-sm">
                {{ formatArrivalTime(arrival.timeInMinutes) }}
              </div>
            </div>
            <div class="text-2xl font-bold">
              {{ arrival.timeInMinutes }}
              <span class="text-base font-normal">{{ $t('station.time.minute', { n: arrival.timeInMinutes }) }}</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { useFavoriteStations } from '../composables/useFavoriteStations'

const route = useRoute()
const { t } = useI18n()
const { isFavorite, toggleFavorite } = useFavoriteStations()

const stationId = ref(route.params.id as string)
const loading = ref(true)
const error = ref(false)
const arrivals = ref<Array<{ destination: string; timeInMinutes: number }>>([])

// Set page title
useHead({
  title: `${t(`station.names.${stationId.value}`)} | Metro Taipei`
})

// Format arrival time
const formatArrivalTime = (minutes: number) => {
  if (minutes <= 1) {
    return t('station.arriving')
  }
  return t('station.time.minute', { n: minutes })
}

// Get arrival status class
const getArrivalClass = (minutes: number) => {
  if (minutes <= 1) return 'bg-green-100 text-green-800'
  if (minutes <= 3) return 'bg-yellow-100 text-yellow-800'
  return 'bg-gray-100 text-gray-800'
}

// Fetch station data
onMounted(async () => {
  try {
    // TODO: Replace with actual API call
    // Mock data for now
    await new Promise(resolve => setTimeout(resolve, 1000))
    arrivals.value = [
      { destination: 'BL23', timeInMinutes: 1 },
      { destination: 'BL01', timeInMinutes: 3 },
      { destination: 'BL23', timeInMinutes: 8 },
      { destination: 'BL01', timeInMinutes: 12 }
    ]
    loading.value = false
  } catch (e) {
    console.error('Failed to fetch station data:', e)
    error.value = true
    loading.value = false
  }
})
</script> 