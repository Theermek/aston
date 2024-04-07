import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { initialize } from '../store/slices/authSlice'
import { setUser, removeUser } from '../store/slices/userSlice'
import { auth } from '../utils/firebase'
import { selectInitializeSuccess } from '../store/authSelector'

export const useInitialize = () => {
  const dispatch = useDispatch()
  const initializeSuccess = useSelector(selectInitializeSuccess)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      if (user) {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
          }),
        )
      } else {
        dispatch(removeUser())
      }
      dispatch(initialize({ initializeSuccess: true }))
    })
    return () => unsubscribe()
  }, [dispatch, initializeSuccess])

  return initializeSuccess
}

export default useInitialize
