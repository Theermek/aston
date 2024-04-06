import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type FormValues = {
  email: string
  password: string
}

type FormProps = {
  handleSubmit: (email: string, password: string) => Promise<void>
}

const Form = ({ handleSubmit }: FormProps) => {
  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>()
  const navigate = useNavigate()

  const onSubmitForm = async (data: FormValues) => {
    try {
      await handleSubmit(data.email, data.password)
      navigate('/')
    } catch (error) {
      navigate('/login')
      alert(error)
    }
  }

  return (
    <form className="flex flex-col" onSubmit={onSubmit(onSubmitForm)}>
      <div className="mb-6 pt-3 rounded bg-gray-200">
        <label className="block text-gray-700 text-sm font-medium mb-2 ml-3">Email</label>
        <input
          className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-lime-600 transition duration-500 px-3 pb-3"
          type="email"
          {...register('email')}
        />
        {errors.email && <div className="text-red-500">{errors.email.message}</div>}
      </div>
      <div className="mb-6 pt-3 rounded bg-gray-200">
        <label className="block text-gray-700 text-sm font-medium mb-2 ml-3">Password</label>
        <input
          className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-lime-600 transition duration-500 px-3 pb-3"
          type="password"
          {...register('password')}
        />
        {errors.password && <div className="text-red-500">{errors.password.message}</div>}
      </div>
      <button
        className="bg-lime-600 rounded hover:bg-lime-700 text-white font-semibold py-2 shadow-lg hover:shadow-xl transition duration-200"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? 'Loading...' : 'Submit'}
      </button>
      {errors.root && <div className="text-red-500">{errors.root.message}</div>}
    </form>
  )
}

export default Form
