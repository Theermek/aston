import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  auth: false,
  initializeSuccess: false,
}

export const isAuthSlice = createSlice({
  name: 'isAuth',
  initialState,
  reducers: {
    initialize(state, action) {
      state.initializeSuccess = action.payload.initializeSuccess
    },
  },
})

export const { initialize } = isAuthSlice.actions
