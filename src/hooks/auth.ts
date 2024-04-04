import { useEffect } from 'react'
import { onAuthStateChanged } from '@firebase/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../store/slices/userSlice'
import { auth } from '../utils/firebase'

const useAuth = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      if (user) {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }),
        )
      }
    })

    return () => unsubscribe()
  }, [dispatch])

  return null
}

export default useAuth
