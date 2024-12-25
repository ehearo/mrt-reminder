import { defineStore } from 'pinia'
import type { Station } from '@/types/metro'

interface FavoriteState {
  favoriteStations: Set<string>  // 使用 Set 來存儲收藏的站點代碼
  stations: Station[]            // 緩存站點資訊
}

export const useFavoriteStore = defineStore('favorite', {
  state: (): FavoriteState => ({
    favoriteStations: new Set(),
    stations: []
  }),

  getters: {
    // 獲取收藏的站點列表
    getFavoriteStations(): Station[] {
      return this.stations.filter(station => 
        this.favoriteStations.has(station.StationCode)
      )
    },

    // 檢查站點是否已收藏
    isFavorite(): (stationCode: string) => boolean {
      return (stationCode: string) => this.favoriteStations.has(stationCode)
    }
  },

  actions: {
    // 切換收藏狀態
    toggleFavorite(station: Station) {
      const code = station.StationCode
      if (this.favoriteStations.has(code)) {
        this.favoriteStations.delete(code)
      } else {
        this.favoriteStations.add(code)
        // 確保站點資訊被緩存
        if (!this.stations.find(s => s.StationCode === code)) {
          this.stations.push(station)
        }
      }
    },

    // 更新站點資訊
    updateStation(station: Station) {
      const index = this.stations.findIndex(s => s.StationCode === station.StationCode)
      if (index >= 0) {
        this.stations[index] = station
      }
    }
  }
}) 