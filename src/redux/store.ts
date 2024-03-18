import { configureStore } from '@reduxjs/toolkit'
import { rickApi } from './rickApi'

export const store = configureStore({
  reducer: {
    [rickApi.reducerPath]: rickApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(rickApi.middleware),
})
