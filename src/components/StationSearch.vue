<template>
  <div class="mb-6 relative">
    <input 
      v-model="query"
      type="text" 
      placeholder="搜尋站點" 
      class="input pl-14 pr-12 placeholder:pl-1"
      @input="handleSearch"
    >
    <div class="absolute left-5 top-0 bottom-0 flex items-center justify-center w-4">
      <i class="fas fa-search text-gray-400"></i>
    </div>
    <!-- 清空按鈕 -->
    <button 
      v-if="query"
      @click="clearSearch"
      class="absolute right-4 top-0 bottom-0 flex items-center justify-center w-8"
    >
      <i class="fas fa-times text-gray-400 hover:text-gray-600"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Station } from '@/types/metro'
import { getAllStations } from '@/services/stationService'

const emit = defineEmits<{
  (e: 'update:stations', stations: Station[]): void
}>()

const query = ref('')
const allStations = ref<Station[]>([])

// 初始化所有站點資料
async function initStations() {
  allStations.value = await getAllStations()
}

// 處理搜尋
function handleSearch() {
  const searchText = query.value.toLowerCase().trim()
  if (!searchText) {
    emit('update:stations', [])
    return
  }

  const filtered = allStations.value.filter(station => 
    station.StationName.toLowerCase().includes(searchText) ||
    station.StationCode.toLowerCase().includes(searchText)
  )
  emit('update:stations', filtered)
}

// 清空搜尋
function clearSearch() {
  query.value = ''
  emit('update:stations', [])
}

// 初始化
initStations()
</script> 