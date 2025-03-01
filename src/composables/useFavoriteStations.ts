import { ref, computed } from 'vue'

const STORAGE_KEY = 'favorite-stations'

export function useFavoriteStations() {
  // Load favorites from localStorage
  const getFavorites = (): string[] => {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  }

  // Save favorites to localStorage
  const saveFavorites = (favorites: string[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
  }

  const favorites = ref<string[]>(getFavorites())

  const isFavorite = (stationId: string) => {
    return favorites.value.includes(stationId)
  }

  const toggleFavorite = (stationId: string) => {
    const index = favorites.value.indexOf(stationId)
    if (index === -1) {
      favorites.value.push(stationId)
    } else {
      favorites.value.splice(index, 1)
    }
    saveFavorites(favorites.value)
  }

  return {
    favorites,
    isFavorite,
    toggleFavorite
  }
} 