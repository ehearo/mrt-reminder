<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import MetroNav from '@/components/MetroNav.vue'

const router = useRouter()
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <router-view></router-view>
    <MetroNav />
  </div>
</template>
