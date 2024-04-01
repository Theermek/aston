import { configureStore } from '@reduxjs/toolkit'
import { rickApi } from './rickApi'
import { userSlice } from './slices/userSlice'
import { favoriteSlice } from './slices/favoriteSlice'

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    favorites: favoriteSlice.reducer,
    [rickApi.reducerPath]: rickApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(rickApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
