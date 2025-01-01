<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="loading" class="text-center">
      {{ $t('common.loading') }}
    </div>
    <div v-else-if="error" class="text-center text-red-500">
      {{ $t('common.error') }}
    </div>
    <template v-else>
      <h1 class="text-2xl font-bold mb-6">
        {{ $t(`line.names.${color}`) }}
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="station in stations"
          :key="station.id"
          class="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          @click="navigateToStation(station.id)"
        >
          <h2 class="font-semibold mb-2">{{ $t(`station.names.${station.id}`) }}</h2>
          <div class="text-sm text-gray-600">
            {{ station.id }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'

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
    // TODO: Replace with actual API call
    // This is mock data for now
    const mockStations = {
      blue: ['BL01', 'BL02', 'BL03', 'BL04', 'BL05'],
      red: ['R02', 'R03', 'R04', 'R05', 'R06'],
      green: ['G01', 'G02', 'G03', 'G04', 'G05'],
      orange: ['O01', 'O02', 'O03', 'O04', 'O05']
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