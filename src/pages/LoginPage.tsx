import { auth } from '../utils/firebase'
import Form from '../components/Form'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  const handleSubmit = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
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
