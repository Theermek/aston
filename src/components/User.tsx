/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom'
import ThemeButton from './ThemeButton'

const UserLinks = ({ onLogout }: { onLogout: () => void }) => {
  return (
    <nav className="flex gap-5">
      <NavLink to="/favorites">Избранное</NavLink>
      <NavLink to="/history">История</NavLink>
      <button onClick={onLogout}>Logout</button>
      <ThemeButton />
    </nav>
  )
}

export default UserLinks
