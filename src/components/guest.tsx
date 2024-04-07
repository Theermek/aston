import { NavLink } from 'react-router-dom'
import ThemeButton from './ThemeButton'

const GuestLinks = () => {
  return (
    <nav className="flex gap-5">
      <NavLink to="/login">Вход</NavLink>
      <NavLink to="/register">Регистрация</NavLink>
      <ThemeButton />
    </nav>
  )
}

export default GuestLinks
