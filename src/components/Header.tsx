import { Link, NavLink, useNavigate } from 'react-router-dom'
import { User } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useEffect, useState } from 'react'
import logo from '../assets/images/logo.png'
import ThemeButton from './ThemeButton'
import { logout } from '../utils/authService'
import { useDispatch } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState<User | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user)
    })

    return () => unsubscribe()
  }, [])

  const onLogout = () => {
    logout(dispatch).then(() => {
      navigate('/login')
    })
  }

  return (
    <header className="flex justify-between bg-zinc-600 dark:bg-zinc-800 h-20">
      <div className="flex justify-start items-center">
        <Link to="/homepage">
          <img className=" w-52 pl-7" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className=" flex justify-end text-white px-10 items-center">
        {user ? (
          <nav className=" flex gap-5">
            <NavLink to="/favorites">Избранное</NavLink>
            <NavLink to="/history">История</NavLink>
            <button onClick={onLogout}>Logout</button>
            <ThemeButton />
          </nav>
        ) : (
          <nav className=" flex gap-5">
            <NavLink to="/login">Вход</NavLink>
            <NavLink to="/register">Регистрация</NavLink>
            <ThemeButton />
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
