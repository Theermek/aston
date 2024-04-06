import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  email: '',
  id: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email
      state.id = action.payload.id
    },
    removeUser(state) {
      state.email = ''
      state.id = ''
    },
    clearUser() {
      return initialState
    },
  },
})

export const { setUser, removeUser, clearUser } = userSlice.actions

export default userSlice.reducer
