import { NavLink, useNavigate } from 'react-router-dom'
import ThemeButton from './ThemeButton'
import { logout, subscribeToAuthChanges } from '../utils/authService'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { User } from 'firebase/auth'
import { selectUser } from '../store/selector'

const AuthLinks = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [user, setUser] = useState<User | null>(null)
  const currentUser = useSelector(selectUser)

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges(setUser)
    return () => unsubscribe()
  }, [])

  const onLogout = () => {
    logout(dispatch).then(() => {
      navigate('/login')
    })
  }

  const renderAuthenticatedLinks = () => (
    <nav className="flex gap-5">
      <NavLink to="/favorites">Избранное</NavLink>
      <NavLink to="/history">История</NavLink>
      <button onClick={onLogout}>Logout</button>
      <ThemeButton />
    </nav>
  )

  const renderGuestLinks = () => (
    <nav className="flex gap-5">
      <NavLink to="/login">Вход</NavLink>
      <NavLink to="/register">Регистрация</NavLink>
      <ThemeButton />
    </nav>
  )

  return user || currentUser ? renderAuthenticatedLinks() : renderGuestLinks()
}

export default AuthLinks
