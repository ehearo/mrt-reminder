<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

const router = useRouter()
</script>

<template>
  <router-view></router-view>
</template>
