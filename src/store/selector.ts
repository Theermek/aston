interface User {
  id: string
}

interface FavoritesState {
  ids: number[]
}
export const selectUser = (state: { user: User }) => state.user
export const selectFavoriteIds = (state: { favorites: FavoritesState }) => state.favorites.ids
