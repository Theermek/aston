import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { Dispatch } from 'redux'
import { setUser } from '../store/slices/userSlice'

export const loginWithEmailAndPassword = async (email: string, password: string, dispatch: Dispatch) => {
  try {
    await signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
        }),
      )
    })
  } catch (error) {
    alert('Error logging in:')
  }
}
export const signUpWithEmailAndPassword = async (email: string, password: string, dispatch: Dispatch) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
        }),
      )
    })
  } catch (error) {
    alert('Error registering:')
  }
}
