<template>
  <div class="page-container safe-area">
    <MetroHeader />
    <main class="page-content">
      <div v-if="favoriteStations.length" class="space-y-3">
        <StationCard
          v-for="station in favoriteStations"
          :key="station.StationCode"
          :station="station"
          :line-color="getLineColor(station.StationCode)"
          :next-trains="getNextTrains(station.StationCode)"
        />
      </div>
      <div v-else class="text-center py-12">
        <div class="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <i class="fas fa-star text-2xl text-gray-400"></i>
        </div>
        <p class="text-gray-500">{{ $t('station.noFavorites') }}</p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import { useFavoriteStore } from '@/stores/favorite'
import { getNextTrains, getLineFromStationCode } from '@/services/stationService'
import type { MetroLine } from '@/types/metro'
import MetroHeader from '@/components/MetroHeader.vue'
import StationCard from '@/components/StationCard.vue'

const favoriteStore = useFavoriteStore()
const favoriteStations = computed(() => favoriteStore.getFavoriteStations)

const lineColors: Record<MetroLine, string> = {
  'red': '#E3002C',
  'blue': '#0070BD',
  'green': '#008659',
  'orange': '#F8B61C',
  '': '#000000'
}

function getLineColor(stationCode: string): string {
  const line = getLineFromStationCode(stationCode)
  return lineColors[line]
}

// 添加自動更新功能
let timer: number
onMounted(() => {
  timer = window.setInterval(() => {
    if (favoriteStations.value.length > 0) {
      // 強制更新收藏站點的時刻表
      favoriteStore.$patch({ stations: [...favoriteStore.stations] })
    }
  }, 30000)
})

onUnmounted(() => {
  if (timer) {
    window.clearInterval(timer)
  }
})
</script> 