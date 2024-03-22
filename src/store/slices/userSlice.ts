import { createSlice } from '@reduxjs/toolkit'
import { getUserDataFromLS, saveUserDataToLS, removeUserDataFromLS } from '../../utils/localStorage'

const { email, token, id } = getUserDataFromLS()
const initialState = {
  email,
  token,
  id,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email
      state.token = action.payload.token
      state.id = action.payload.id
      saveUserDataToLS(action.payload.email, action.payload.token, action.payload.id)
    },
    removeUser(state) {
      state.email = null
      state.token = null
      state.id = null
      removeUserDataFromLS()
    },
  },
})

export const { setUser, removeUser } = userSlice.actions
export default userSlice.reducer
