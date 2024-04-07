import { configureStore } from '@reduxjs/toolkit'
import { rickApi } from './rickApi'
import { userSlice } from './slices/userSlice'
import { favoriteSlice } from './slices/favoriteSlice'
import { historySlice } from './slices/historySlice'
import { isAuthSlice } from './slices/authSlice'
import { importedListenerMiddleware } from '../store/middlewares/userMiddleware'

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    favorites: favoriteSlice.reducer,
    history: historySlice.reducer,
    auth: isAuthSlice.reducer,
    [rickApi.reducerPath]: rickApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(rickApi.middleware).prepend(importedListenerMiddleware.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
