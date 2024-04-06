import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Определяем тип для payload action setUser
interface SetUserPayload {
  email: string
  id: string
}

const initialState = {
  email: '',
  id: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<SetUserPayload>) {
      state.email = action.payload.email
      state.id = action.payload.id
    },
    removeUser(state) {
      state.email = ''
      state.id = ''
    },
  },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer
