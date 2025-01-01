<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-8">{{ $t('fare.title') }}</h1>

    <!-- 車資計算器 -->
    <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 class="text-xl font-semibold mb-4">{{ $t('fare.calculator') }}</h2>
      
      <!-- 起訖站選擇 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <!-- 起點站 -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            {{ $t('fare.from') }}
          </label>
          <select
            v-model="fromStation"
            class="w-full rounded-lg border-gray-300 shadow-sm focus:border-metro-blue focus:ring-metro-blue"
          >
            <option value="">{{ $t('fare.selectStation') }}</option>
            <option
              v-for="station in stations"
              :key="station.id"
              :value="station.id"
            >
              {{ $t(`station.names.${station.id}`) }}
            </option>
          </select>
        </div>

        <!-- 終點站 -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            {{ $t('fare.to') }}
          </label>
          <select
            v-model="toStation"
            class="w-full rounded-lg border-gray-300 shadow-sm focus:border-metro-blue focus:ring-metro-blue"
          >
            <option value="">{{ $t('fare.selectStation') }}</option>
            <option
              v-for="station in stations"
              :key="station.id"
              :value="station.id"
            >
              {{ $t(`station.names.${station.id}`) }}
            </option>
          </select>
        </div>
      </div>

      <!-- 票價顯示 -->
      <div v-if="fare" class="text-center p-6 bg-gray-50 rounded-lg">
        <div class="text-sm text-gray-600 mb-2">{{ $t('fare.singleJourney') }}</div>
        <div class="text-4xl font-bold text-metro-blue">
          NT$ {{ fare }}
        </div>
      </div>
    </div>

    <!-- 票價說明 -->
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-xl font-semibold mb-4">{{ $t('fare.info') }}</h2>
      <div class="prose max-w-none">
        <ul class="space-y-2">
          <li>{{ $t('fare.info1') }}</li>
          <li>{{ $t('fare.info2') }}</li>
          <li>{{ $t('fare.info3') }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Set page title
useHead({
  title: `${t('fare.title')} | Metro Taipei`
})

const fromStation = ref('')
const toStation = ref('')
const stations = ref<Array<{ id: string }>>([])
const fareMatrix = ref<Record<string, Record<string, number>>>({})

// Calculate fare based on selected stations
const fare = computed(() => {
  if (!fromStation.value || !toStation.value) return null
  return fareMatrix.value[fromStation.value]?.[toStation.value] || null
})

// Fetch stations and fare data
onMounted(async () => {
  try {
    // TODO: Replace with actual API call
    // Mock data for now
    stations.value = [
      { id: 'BL01' },
      { id: 'BL02' },
      { id: 'R02' },
      { id: 'R03' },
      { id: 'G01' },
      { id: 'G02' }
    ]

    // Mock fare matrix
    fareMatrix.value = {
      'BL01': { 'BL02': 20, 'R02': 25, 'R03': 30, 'G01': 35, 'G02': 40 },
      'BL02': { 'BL01': 20, 'R02': 25, 'R03': 30, 'G01': 35, 'G02': 40 },
      'R02': { 'BL01': 25, 'BL02': 25, 'R03': 20, 'G01': 30, 'G02': 35 },
      'R03': { 'BL01': 30, 'BL02': 30, 'R02': 20, 'G01': 25, 'G02': 30 },
      'G01': { 'BL01': 35, 'BL02': 35, 'R02': 30, 'R03': 25, 'G02': 20 },
      'G02': { 'BL01': 40, 'BL02': 40, 'R02': 35, 'R03': 30, 'G01': 20 }
    }
  } catch (e) {
    console.error('Failed to fetch data:', e)
  }
})
</script> 