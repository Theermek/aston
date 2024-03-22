import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { Form } from '../forms/Form'
import { setUser } from '../../store/slices/userSlice'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }),
        )
        navigate('/')
      })
      .catch(() => alert('Invalid user!'))
  }

  return <Form title="sign in" handleClick={handleLogin} />
}

export { Login }
