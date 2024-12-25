import { defineStore } from 'pinia';
export const useFavoriteStore = defineStore('favorite', {
    state: () => ({
        favoriteStations: new Set(),
        stations: []
    }),
    getters: {
        // 獲取收藏的站點列表
        getFavoriteStations() {
            return this.stations.filter(station => this.favoriteStations.has(station.StationCode));
        },
        // 檢查站點是否已收藏
        isFavorite() {
            return (stationCode) => this.favoriteStations.has(stationCode);
        }
    },
    actions: {
        // 切換收藏狀態
        toggleFavorite(station) {
            const code = station.StationCode;
            if (this.favoriteStations.has(code)) {
                this.favoriteStations.delete(code);
            }
            else {
                this.favoriteStations.add(code);
                // 確保站點資訊被緩存
                if (!this.stations.find(s => s.StationCode === code)) {
                    this.stations.push(station);
                }
            }
        },
        // 更新站點資訊
        updateStation(station) {
            const index = this.stations.findIndex(s => s.StationCode === station.StationCode);
            if (index >= 0) {
                this.stations[index] = station;
            }
        }
    }
});
//# sourceMappingURL=favorite.js.map