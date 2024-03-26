import { auth } from '../utils/firebase'
import Form from '../components/Form'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  const handleSubmit = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
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
