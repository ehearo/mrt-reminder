import { defineStore } from 'pinia'

interface LineState {
  selectedLine: string | null
}

export const useLineStore = defineStore('line', {
  state: (): LineState => ({
    selectedLine: null
  }),

  actions: {
    setSelectedLine(line: string) {
      this.selectedLine = line
    },

    clearSelectedLine() {
      this.selectedLine = null
    }
  }
}) 