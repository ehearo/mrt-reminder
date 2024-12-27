<template>
  <div class="page-container safe-area">
    <MetroHeader />
    
    <main class="page-content">
      <!-- 搜尋組件 -->
      <StationSearch v-model:stations="searchResults" />

      <!-- 路線選擇器 -->
      <div class="mb-6" v-if="!searchResults.length">
        <LineSelector
          :lines="lines"
          v-model="selectedLine"
          @select="handleLineSelect"
        />
      </div>

      <!-- 站點列表 -->
      <div v-if="displayStations.length" class="space-y-3">
        <StationCard
          v-for="station in displayStations"
          :key="station.StationCode"
          :station="station"
          :line-color="getLineColor(station.StationCode)"
          :next-trains="getNextTrains(station.StationCode)"
          @toggle-favorite="toggleFavorite(station.StationCode)"
        />
      </div>

      <!-- 無搜尋結果 -->
      <div v-else-if="searchResults.length === 0 && !selectedLine" class="text-center py-12">
        <div class="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <i class="fas fa-subway text-2xl text-gray-400"></i>
        </div>
        <p class="text-gray-500">請搜尋站點或選擇捷運路線</p>
      </div>
    </main>

    <MetroNav />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { MetroLine, Station } from '@/types/metro'
import { fetchStationTimetable, getAvailableLines, getNextTrains, getLineColorByStation } from '@/services/stationService'
import MetroHeader from '@/components/MetroHeader.vue'
import MetroNav from '@/components/MetroNav.vue'
import LineSelector from '@/components/LineSelector.vue'
import StationCard from '@/components/StationCard.vue'
import StationSearch from '@/components/StationSearch.vue'

const selectedLine = ref<MetroLine>('')
const lineStations = ref<Station[]>([])
const searchResults = ref<Station[]>([])
const lines = getAvailableLines()

// 顯示的站點列表
const displayStations = computed(() => {
  return searchResults.value.length > 0 ? searchResults.value : lineStations.value
})

// 獲取站點所屬路線顏色
function getLineColor(stationCode: string) {
  const station = displayStations.value.find(s => s.StationCode === stationCode)
  return station?.LineColor || getLineColorByStation(stationCode)
}

// 處理路線選擇
async function handleLineSelect(line: MetroLine) {
  selectedLine.value = line
  lineStations.value = await fetchStationTimetable(line)
}

// 處理收藏切換
function toggleFavorite(stationCode: string) {
  // TODO: 實現收藏功能
  console.log('Toggle favorite:', stationCode)
}
</script> 