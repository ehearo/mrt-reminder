<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center px-4">
    <div class="max-w-md w-full bg-white rounded-lg shadow-md p-8">
      <h2 class="text-2xl font-bold text-center mb-8">後台管理登入</h2>
      
      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700">管理員密碼</label>
          <input 
            type="password" 
            v-model="password"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          >
        </div>
        
        <div v-if="error" class="text-red-500 text-sm">
          {{ error }}
        </div>
        
        <button 
          type="submit"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          登入
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const password = ref('')
const error = ref('')

const handleLogin = () => {
  // 這裡使用簡單的密碼驗證，實際應用中應該使用更安全的方式
  if (password.value === 'mia130905') {
    localStorage.setItem('admin-token', 'true')
    router.push({ name: 'admin-dashboard' })
  } else {
    error.value = '密碼錯誤'
  }
}
</script> 