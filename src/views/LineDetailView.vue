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
        <div class="px-4">
          <h1 class="text-xl font-bold mb-4">
            {{ $t(`line.names.${color}`) }}
          </h1>
          <div class="relative pb-16">
            <!-- 路線背景線 -->
            <div 
              class="absolute left-[1.125rem] top-4 bottom-0 w-2.5"
              :class="{
                'bg-[#0070BD]': color === 'blue',
                'bg-[#E3002C]': color === 'red',
                'bg-[#008659]': color === 'green',
                'bg-[#F8B61C]': color === 'orange'
              }"
            ></div>
            
            <!-- 站點列表 -->
            <div class="space-y-6">
              <div
                v-for="(station, index) in stations"
                :key="station.id"
                class="flex items-center gap-6 relative pl-3"
                @click="navigateToStation(station.id)"
              >
                <!-- 站點標記 -->
                <div class="relative flex-shrink-0 w-5 h-5">
                  <!-- 外圈白圈 -->
                  <div 
                    class="w-5 h-5 rounded-full bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-4"
                    :class="{
                      'border-[#0070BD]': color === 'blue',
                      'border-[#E3002C]': color === 'red',
                      'border-[#008659]': color === 'green',
                      'border-[#F8B61C]': color === 'orange'
                    }"
                  ></div>
                </div>
                
                <!-- 站點資訊卡片 -->
                <div 
                  class="flex-grow p-3 bg-white rounded-lg shadow-sm hover:shadow transition-shadow cursor-pointer"
                >
                  <div class="flex items-center gap-2">
                    <h2 class="font-semibold">{{ $t(`station.names.${station.id}`) }}</h2>
                    <span 
                      class="text-sm px-1.5 py-0.5 rounded text-white"
                      :class="{
                        'bg-[#0070BD]': color === 'blue',
                        'bg-[#E3002C]': color === 'red',
                        'bg-[#008659]': color === 'green',
                        'bg-[#F8B61C]': color === 'orange'
                      }"
                    >
                      {{ station.id }}
                    </span>
                  </div>
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
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import MetroHeader from '@/components/MetroHeader.vue'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

const color = ref(route.params.color as string)
const stations = ref<{ id: string }[]>([])
const loading = ref(true)
const error = ref(false)

// Set page title
useHead({
  title: `${t(`line.names.${color.value}`)} | Metro Taipei`
})

// Navigate to station detail page
const navigateToStation = (stationId: string) => {
  router.push({
    name: 'station-detail',
    params: { id: stationId }
  })
}

// Fetch stations data
onMounted(async () => {
  try {
    // 根據台北捷運官網資料
    const mockStations = {
      blue: [
        'BL01', 'BL02', 'BL03', 'BL04', 'BL05', 'BL06', 'BL07', 'BL08', 'BL09', 'BL10',
        'BL11', 'BL12', 'BL13', 'BL14', 'BL15', 'BL16', 'BL17', 'BL18', 'BL19', 'BL20',
        'BL21', 'BL22', 'BL23'
      ],
      red: [
        'R02', 'R03', 'R04', 'R05', 'R06', 'R07', 'R08', 'R09', 'R10', 'R11',
        'R12', 'R13', 'R14', 'R15', 'R16', 'R17', 'R18', 'R19', 'R20', 'R21',
        'R22', 'R22A', 'R23', 'R24', 'R25', 'R26', 'R27', 'R28'
      ],
      green: [
        'G01', 'G02', 'G03', 'G03A', 'G04', 'G05', 'G06', 'G07', 'G08', 'G09', 
        'G10', 'G11', 'G12', 'G13', 'G14', 'G15', 'G16', 'G17', 'G18', 'G19'
      ],
      orange: [
        'O01', 'O02', 'O03', 'O04', 'O05', 'O06', 'O07', 'O08', 'O09', 'O10',
        'O11', 'O12', 'O13', 'O14', 'O15', 'O16', 'O17', 'O18', 'O19', 'O20',
        'O21', 'O50', 'O51', 'O52', 'O53', 'O54'
      ]
    }[color.value] || []

    stations.value = mockStations.map(id => ({ id }))
    loading.value = false
  } catch (e) {
    console.error('Failed to fetch stations:', e)
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