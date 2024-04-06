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
          }),
        )
      })
    } catch (error) {
      alert('Error logging in:')
    }
  }
  return (
    <div className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
      <section>
        <h3 className="font-semibold text-3xl text-center text-zinc-700">Login</h3>
      </section>
      <section className="mt-10">
        <Form handleSubmit={handleSubmit} />
      </section>
      <div className="max-w-lg mx-auto text-center mt-12 mb-6">
        <p className="text-black">Dont have an account?</p>
        <Link className=" text-lime-600 hover:text-lime-500" to="/register">
          Sign up
        </Link>
      </div>
    </div>
  )
}

export default LoginPage
