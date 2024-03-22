import { configureStore } from '@reduxjs/toolkit'
import { rickApi } from './rickApi'
import userReducer from './slices/userSlice'

export const store = configureStore({
  reducer: {
    [rickApi.reducerPath]: rickApi.reducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(rickApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
