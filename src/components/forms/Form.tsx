import { useState } from 'react'

type FormProps = {
  title: string
  handleClick: (email: string, pass: string) => void
}

const Form = ({ title, handleClick }: FormProps) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  return (
    <div>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" />
      <input type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder="password" />
      <button onClick={() => handleClick(email, pass)}>{title}</button>
    </div>
  )
}

export { Form }
