<template>
  <div class="page-container safe-area">
    <MetroHeader />
    <main class="page-content">
      <div v-if="loading" class="text-center">
        {{ $t('common.loading') }}
      </div>
      <div v-else-if="error" class="text-center text-red-500">
        {{ $t('common.error') }}
      </div>
      <template v-else>
        <!-- 站點基本信息 -->
        <div class="px-4">
          <div class="bg-white rounded-lg shadow-lg p-6 mb-4">
            <div class="flex items-center gap-4 mb-4">
              <div 
                class="w-3 h-12 rounded"
                :class="{
                  'bg-[#0070BD]': stationId.startsWith('BL'),
                  'bg-[#E3002C]': stationId.startsWith('R'),
                  'bg-[#008659]': stationId.startsWith('G'),
                  'bg-[#F8B61C]': stationId.startsWith('O')
                }"
              ></div>
              <div>
                <h1 class="text-3xl font-bold">
                  {{ $t(`station.names.${stationId}`) }}
                </h1>
                <div class="text-gray-600">
                  <span 
                    class="inline-block px-2 py-1 rounded text-white text-sm mr-2"
                    :class="{
                      'bg-[#0070BD]': stationId.startsWith('BL'),
                      'bg-[#E3002C]': stationId.startsWith('R'),
                      'bg-[#008659]': stationId.startsWith('G'),
                      'bg-[#F8B61C]': stationId.startsWith('O')
                    }"
                  >
                    {{ stationId }}
                  </span>
                  {{ $t(`line.names.${getLineColor}`) }}
                </div>
              </div>
            </div>
            
            <!-- 收藏按鈕 -->
            <button
              @click="toggleFavorite(stationId)"
              class="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
              :class="isFavorite(stationId) ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 hover:bg-gray-200'"
            >
              <i class="fas" :class="isFavorite(stationId) ? 'fa-star' : 'fa-star'"></i>
              {{ isFavorite(stationId) ? $t('station.removeFromFavorites') : $t('station.addToFavorites') }}
            </button>
          </div>

          <!-- 站點資訊 -->
          <div class="bg-white rounded-lg shadow-lg p-6 mb-4">
            <h2 class="text-xl font-semibold mb-4">站點資訊</h2>
            <div class="space-y-4">
              <div class="flex items-center gap-4">
                <i class="fas fa-clock text-gray-400 w-6"></i>
                <div>
                  <div class="text-sm text-gray-500">首末班車時間</div>
                  <div>首班車 06:00 / 末班車 00:00</div>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <i class="fas fa-elevator text-gray-400 w-6"></i>
                <div>
                  <div class="text-sm text-gray-500">無障礙設施</div>
                  <div>電梯、輪椅坡道、愛心鈴</div>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <i class="fas fa-toilet text-gray-400 w-6"></i>
                <div>
                  <div class="text-sm text-gray-500">車站設施</div>
                  <div>哺集乳室、廁所、飲水機</div>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <i class="fas fa-store text-gray-400 w-6"></i>
                <div>
                  <div class="text-sm text-gray-500">便利設施</div>
                  <div>便利商店、提款機</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 即時到站信息 -->
          <div class="bg-white rounded-lg shadow-lg p-6 mb-16">
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
        </div>
      </template>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { useFavoriteStations } from '../composables/useFavoriteStations'
import MetroHeader from '@/components/MetroHeader.vue'

const route = useRoute()
const { t } = useI18n()
const { isFavorite, toggleFavorite } = useFavoriteStations()

const stationId = ref(route.params.id as string)
const loading = ref(true)
const error = ref(false)
const arrivals = ref<Array<{ destination: string; timeInMinutes: number }>>([])

// Get line color based on station ID
const getLineColor = computed(() => {
  const prefix = stationId.value.substring(0, 2)
  const colorMap: { [key: string]: string } = {
    'BL': 'blue',
    'R': 'red',
    'G': 'green',
    'O': 'orange'
  }
  return colorMap[prefix] || ''
})

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

<style scoped>
.page-content {
  padding-top: calc(40px + env(safe-area-inset-top));
}
</style> 