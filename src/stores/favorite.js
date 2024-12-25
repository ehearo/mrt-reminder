import { defineStore } from 'pinia';
// 從 localStorage 讀取資料的函數
function loadFromStorage() {
    try {
        const savedFavorites = localStorage.getItem('favorites');
        const savedStations = localStorage.getItem('favoriteStations');
        // 確保正確轉換 Array 到 Set
        const favoritesArray = savedFavorites ? JSON.parse(savedFavorites) : [];
        const stationsArray = savedStations ? JSON.parse(savedStations) : [];
        return {
            favoriteStations: new Set(favoritesArray),
            stations: stationsArray
        };
    }
    catch (e) {
        console.error('Error loading favorites from storage:', e);
        return {
            favoriteStations: new Set(),
            stations: []
        };
    }
}
export const useFavoriteStore = defineStore('favorite', {
    state: () => loadFromStorage(),
    getters: {
        getFavoriteStations() {
            return this.stations.filter(station => this.favoriteStations.has(station.StationCode));
        },
        isFavorite() {
            return (stationCode) => this.favoriteStations.has(stationCode);
        }
    },
    actions: {
        toggleFavorite(station) {
            const code = station.StationCode;
            if (this.favoriteStations.has(code)) {
                this.favoriteStations.delete(code);
                this.stations = this.stations.filter(s => s.StationCode !== code);
            }
            else {
                this.favoriteStations.add(code);
                if (!this.stations.find(s => s.StationCode === code)) {
                    this.stations.push(station);
                }
            }
            // 立即保存到 localStorage
            this.saveToStorage();
        },
        updateStation(station) {
            const index = this.stations.findIndex(s => s.StationCode === station.StationCode);
            if (index >= 0) {
                this.stations[index] = station;
                this.saveToStorage();
            }
        },
        saveToStorage() {
            try {
                // 將 Set 轉換為陣列再儲存
                const favoritesArray = Array.from(this.favoriteStations);
                localStorage.setItem('favorites', JSON.stringify(favoritesArray));
                localStorage.setItem('favoriteStations', JSON.stringify(this.stations));
            }
            catch (e) {
                console.error('Error saving favorites to storage:', e);
            }
        },
        clearFavorites() {
            this.favoriteStations.clear();
            this.stations = [];
            localStorage.removeItem('favorites');
            localStorage.removeItem('favoriteStations');
        }
    }
});
//# sourceMappingURL=favorite.js.map