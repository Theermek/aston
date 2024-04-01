import { auth } from '../utils/firebase'
import Form from '../components/Form'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '../store/slices/userSlice'

const LoginPage = () => {
  const dispatch = useDispatch()
  const handleSubmit = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }),
        )
      })
    } catch (error) {
      alert('Error logging in:')
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <Form handleSubmit={handleSubmit} />
      <p>
        Dont have an account? <Link to="/register">Sign in</Link>
      </p>
    </div>
  )
}

export default LoginPage
