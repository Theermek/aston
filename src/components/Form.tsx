import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type FormProps = {
  handleSubmit: (email: string, password: string) => Promise<void>
}

const Form = ({ handleSubmit }: FormProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await handleSubmit(email, password)
    navigate('/')
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
