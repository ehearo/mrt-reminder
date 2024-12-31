<template>
  <div class="grid grid-cols-2 gap-3">
    <button 
      v-for="line in lines" 
      :key="line.id"
      @click="$emit('select', line.id)"
      class="card flex items-center gap-3 transition-all"
      :class="{
        'ring-2 ring-offset-2': modelValue === line.id,
        [`ring-metro-${line.id}`]: modelValue === line.id
      }"
      :aria-label="$t('line.select')"
    >
      <div 
        class="w-3 h-3 rounded-full"
        :style="{ backgroundColor: line.color }"
      ></div>
      <span class="font-medium">{{ line.name }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { MetroLine, LineInfo } from '@/types/metro'

defineProps<{
  lines: LineInfo[]
  modelValue: MetroLine | null
}>()

defineEmits<{
  (e: 'select', value: MetroLine): void
}>()
</script> 