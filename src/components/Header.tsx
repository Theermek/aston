import { Link, NavLink } from 'react-router-dom'
import { User, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useEffect, useState } from 'react'
import logo from '../assets/images/logo.png'

const Header = () => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user)
    })

    return () => unsubscribe()
  }, [])

  const logout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      alert('Ошибка при выходе')
    }
  }

  return (
    <header className="flex justify-between bg-zinc-600 h-20">
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
            <button onClick={logout}>Logout</button>
          </nav>
        ) : (
          <nav className=" flex gap-5">
            <NavLink to="/login">Вход</NavLink>
            <NavLink to="/register">Регистрация</NavLink>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
