<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-lg font-semibold">捷運時刻表更新</h1>
          </div>
          <div class="flex items-center">
            <button @click="handleLogout" class="text-gray-700 hover:text-gray-900">
              登出
            </button>
          </div>
        </div>
      </div>
    </nav>

    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="bg-white rounded-lg shadow p-6">
          <div class="mb-4 text-sm text-gray-600">
            <div>上次更新時間：{{ lastUpdateTime || '尚未更新' }}</div>
          </div>
          
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-medium">時刻表更新</h2>
            <button 
              @click="updateTimetables"
              class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              :disabled="isUpdating"
              :class="{ 'opacity-50 cursor-not-allowed': isUpdating }"
            >
              {{ isUpdating ? '更新中...' : '更新時刻表' }}
            </button>
          </div>
          
          <div class="mt-4 bg-gray-50 rounded-md p-4">
            <h3 class="text-sm font-medium text-gray-700 mb-2">更新日誌</h3>
            <div class="text-sm text-gray-600 space-y-1">
              <div v-for="(log, index) in updateLogs" :key="index">
                {{ log }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const isUpdating = ref(false)
const updateLogs = ref<string[]>([])
const lastUpdateTime = ref('')

async function updateTimetables() {
  if (isUpdating.value) return
  isUpdating.value = true
  updateLogs.value = []

  try {
    // 取得 Token
    const tokenResponse = await axios.post(
      'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token',
      new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: 'ehearo-01d96d83-fe70-4e46',
        client_secret: '38768557-1ba5-4ec3-a857-b518321103e2'
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    )

    const token = tokenResponse.data.access_token
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }

    // 更新四條線路
    const lines = [
      { id: 'BL', name: '板南線' },
      { id: 'R', name: '淡水信義線' },
      { id: 'G', name: '松山新店線' },
      { id: 'O', name: '中和新蘆線' }
    ]

    for (const line of lines) {
      try {
        const response = await axios.get(
          'https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/StationTimeTable/TRTC',
          {
            headers,
            params: {
              '$filter': `LineID eq '${line.id}'`,
              '$format': 'JSON'
            }
          }
        )

        // 保存資料
        await axios.post('/api/save-data', {
          lineId: line.id,
          content: response.data
        })

        updateLogs.value.push(`✅ ${line.name}更新成功`)
      } catch (error: any) {
        updateLogs.value.push(`❌ ${line.name}更新失敗: ${error.message}`)
      }
    }

    lastUpdateTime.value = new Date().toLocaleString()
  } catch (error: any) {
    updateLogs.value.push(`❌ 更新失敗: ${error.message}`)
  } finally {
    isUpdating.value = false
  }
}

const handleLogout = () => {
  localStorage.removeItem('admin-token')
  router.push({ name: 'admin-login' })
}
</script> 