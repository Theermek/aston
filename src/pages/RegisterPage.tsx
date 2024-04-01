import { auth } from '../utils/firebase'
import Form from '../components/Form'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '../store/slices/userSlice'

const RegisterPage = () => {
  const dispatch = useDispatch()
  const handleSubmit = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }),
        )
      })
    } catch (error) {
      alert('Error registering:')
    }
  }

  return (
    <div>
      <h2>Register</h2>
      <Form handleSubmit={handleSubmit} />
      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  )
}

export default RegisterPage
