<template>
  <div class="page-container safe-area">
    <MetroHeader />
    
    <main class="page-content" role="main">
      <!-- 搜尋組件 -->
      <section aria-label="站點搜尋" class="mb-6">
        <StationSearch v-model:stations="searchResults" />
      </section>

      <!-- 路線選擇器 -->
      <section aria-label="捷運路線" v-if="!searchResults.length">
        <LineSelector
          :lines="lines"
          v-model="selectedLine"
          @select="handleLineSelect"
        />
      </section>

      <!-- 站點列表 -->
      <section 
        v-if="displayStations.length" 
        class="space-y-3"
        aria-label="站點列表"
      >
        <StationCard
          v-for="station in displayStations"
          :key="station.StationCode"
          :station="station"
          :line-color="getLineColor(station.StationCode)"
          :next-trains="getNextTrains(station.StationCode)"
          @toggle-favorite="toggleFavorite(station.StationCode)"
        />
      </section>

      <!-- 無搜尋結果 -->
      <section 
        v-else-if="searchResults.length === 0 && !selectedLine" 
        class="text-center py-12"
        aria-label="提示訊息"
      >
        <div class="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <i class="fas fa-subway text-2xl text-gray-400" aria-hidden="true"></i>
        </div>
        <p class="text-gray-500">{{ $t('line.prompt') }}</p>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import type { MetroLine, Station } from '@/types/metro'
import { fetchStationTimetable, getAvailableLines, getNextTrains, getLineColorByStation } from '@/services/stationService'
import { useLineStore } from '@/stores/line'
import MetroHeader from '@/components/MetroHeader.vue'
import LineSelector from '@/components/LineSelector.vue'
import StationCard from '@/components/StationCard.vue'
import StationSearch from '@/components/StationSearch.vue'

const { t, locale } = useI18n()
const router = useRouter()
const lineStore = useLineStore()
const lineStations = ref<Station[]>([])
const searchResults = ref<Station[]>([])
const lines = ref(getAvailableLines())

// 監聽語言變化，更新路線名稱
watch(locale, () => {
  lines.value = getAvailableLines()
  if (selectedLine.value) {
    handleLineSelect(selectedLine.value)
  }
})

const selectedLine = computed({
  get: () => lineStore.selectedLine as MetroLine,
  set: (value) => lineStore.setSelectedLine(value)
})

watch(() => lineStore.selectedLine, (newValue) => {
  if (!newValue) {
    lineStations.value = []
    searchResults.value = []
  }
})

const displayStations = computed(() => {
  return searchResults.value.length > 0 ? searchResults.value : lineStations.value
})

// 生成本地化路徑
const localizedPath = (path: string) => {
  if (locale.value === 'zh-TW') {
    return path
  }
  return `/${locale.value}${path}`
}

function getLineColor(stationCode: string) {
  const station = displayStations.value.find(s => s.StationCode === stationCode)
  return station?.LineColor || getLineColorByStation(stationCode)
}

async function handleLineSelect(line: MetroLine) {
  selectedLine.value = line
  lineStations.value = await fetchStationTimetable(line)
}

function toggleFavorite(stationCode: string) {
  console.log('Toggle favorite:', stationCode)
}
</script> 