import { Login } from '../../components/login/Login'
import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage: React.FC = () => {
  return (
    <div>
      <h1>Login</h1>
      <Login />
      <p>
        Or <Link to="/register">register</Link>
      </p>
    </div>
  )
}

export default LoginPage
