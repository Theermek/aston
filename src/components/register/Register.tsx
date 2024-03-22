import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { Form } from '../forms/Form'
import { setUser } from '../../store/slices/userSlice'

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
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
      .catch(console.error)
  }

  return <Form title="register" handleClick={handleRegister} />
}

export { Register }
