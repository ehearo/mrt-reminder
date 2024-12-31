<template>
  <div class="card p-4">
    <div class="flex justify-between items-start">
      <div class="flex-1">
        <div class="flex items-center gap-3 mb-2">
          <div 
            class="flex flex-col items-center justify-center w-[22px] h-[22px] border-2 rounded-[3px] leading-none text-black"
            :style="{ borderColor: station.LineColor || lineColor }"
          >
            <div class="text-[8px] font-bold">{{ stationCode }}</div>
            <div class="text-[9px] font-bold">{{ stationNumber }}</div>
          </div>
          <div class="flex items-center gap-2">
            <h3 class="font-medium">{{ station.StationName }}</h3>
            <span 
              v-if="station.LineName" 
              class="text-sm px-2 py-0.5 rounded-full text-white"
              :style="{ backgroundColor: station.LineColor || lineColor }"
            >
              {{ station.LineName }}
            </span>
          </div>
        </div>
        
        <div 
          class="flex items-center gap-2 text-sm"
          :class="{'text-green-600': isArrivingSoon}"
        >
          <i class="fas fa-train"></i>
          <span>{{ nextTrainInfo }}</span>
        </div>
      </div>

      <button 
        class="p-2 transition-colors"
        :class="isFavorite ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'"
        @click="toggleFavorite"
      >
        <i class="fas fa-star"></i>
      </button>
    </div>

    <div class="mt-3 pt-3 border-t border-gray-100">
      <div class="grid grid-cols-3 gap-4 text-sm text-gray-500">
        <div v-for="train in nextTrains" :key="train.Time">
          <div class="text-xs">{{ train.Time }}</div>
          <div class="truncate">往{{ train.destination }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Station, TrainInfo } from '@/types/metro'
import { computed } from 'vue'
import { useFavoriteStore } from '@/stores/favorite'

const props = defineProps<{
  station: Station
  lineColor?: string
  nextTrains: TrainInfo[]
}>()

const favoriteStore = useFavoriteStore()
const isFavorite = computed(() => favoriteStore.isFavorite(props.station.StationCode))

function toggleFavorite() {
  favoriteStore.toggleFavorite(props.station)
}

const isArrivingSoon = computed(() => {
  return props.nextTrains[0]?.arrivalTime === '即將到站'
})

const nextTrainInfo = computed(() => {
  if (!props.nextTrains.length) return '目前無班次'
  const next = props.nextTrains[0]
  return `往${next.destination} - ${next.arrivalTime}`
})

// 從站點代碼中提取數字部分
const stationNumber = computed(() => {
  return props.station.StationCode.replace(/[A-Za-z]/g, '')
})

// 從站點代碼中提取英文部分
const stationCode = computed(() => {
  return props.station.StationCode.replace(/[0-9]/g, '')
})
</script> 