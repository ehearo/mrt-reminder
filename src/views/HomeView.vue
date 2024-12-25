<template>
  <div class="page-container safe-area">
    <MetroHeader />
    
    <main class="page-content">
      <!-- 搜尋區 -->
      <div class="mb-6 relative">
        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="搜尋站點或路線" 
          class="input pl-10"
        >
        <i class="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
        <!-- 清空按鈕 -->
        <button 
          v-if="searchQuery"
          @click="searchQuery = ''"
          class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <i class="fas fa-times"></i>
        </button>
      </div>

      <!-- 路線選擇器 -->
      <div class="mb-6" v-if="!searchQuery">
        <LineSelector
          :lines="lines"
          v-model="selectedLine"
          @select="handleLineSelect"
        />
      </div>

      <!-- 站點列表 -->
      <div v-if="selectedLine" class="space-y-3">
        <StationCard
          v-for="station in filteredStations"
          :key="station.StationCode"
          :station="station"
          :line-color="getCurrentLineColor"
          :next-trains="getNextTrains(station.StationCode)"
          @toggle-favorite="toggleFavorite(station.StationCode)"
        />
      </div>

      <!-- 無搜尋結果 -->
      <div v-else-if="searchQuery && !filteredStations.length" class="text-center py-12">
        <div class="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <i class="fas fa-search text-2xl text-gray-400"></i>
        </div>
        <p class="text-gray-500">找不到符合的站點</p>
      </div>

      <!-- 空狀態 -->
      <div v-else class="text-center py-12">
        <div class="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <i class="fas fa-subway text-2xl text-gray-400"></i>
        </div>
        <p class="text-gray-500">請選擇捷運路線以查看即時資訊</p>
      </div>
    </main>

    <MetroNav />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import type { MetroLine, Station } from '@/types/metro'
import { fetchStationTimetable, getAvailableLines, getNextTrains } from '@/services/stationService'
import MetroHeader from '@/components/MetroHeader.vue'
import MetroNav from '@/components/MetroNav.vue'
import LineSelector from '@/components/LineSelector.vue'
import StationCard from '@/components/StationCard.vue'

const selectedLine = ref<MetroLine>('')
const stationList = ref<Station[]>([])
const searchQuery = ref('')
const lines = getAvailableLines()

// 過濾後的站點列表
const filteredStations = computed(() => {
  const query = searchQuery.value.toLowerCase().trim()
  if (!query) return stationList.value

  return stationList.value.filter(station => 
    station.StationName.toLowerCase().includes(query) ||
    station.StationCode.toLowerCase().includes(query)
  )
})

// 獲取當前路線顏色
const getCurrentLineColor = computed(() => {
  const line = lines.find(l => l.id === selectedLine.value)
  return line?.color || '#000000'
})

// 處理路線選擇
async function handleLineSelect(line: MetroLine) {
  selectedLine.value = line
  stationList.value = await fetchStationTimetable(line)
  searchQuery.value = '' // 清空搜尋
}

// 處理收藏切換
function toggleFavorite(stationCode: string) {
  // TODO: 實現收藏功能
  console.log('Toggle favorite:', stationCode)
}

// 自動更新計時器
let timer: number
onMounted(() => {
  timer = window.setInterval(() => {
    if (stationList.value.length > 0) {
      stationList.value = [...stationList.value]
    }
  }, 30000)
})

onUnmounted(() => {
  if (timer) {
    window.clearInterval(timer)
  }
})
</script> 