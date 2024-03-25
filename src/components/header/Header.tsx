import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { removeUser } from '../../store/slices/userSlice'
import { useAppDispatch } from '../../hooks/reduxHooks'
import logo from '../../assets/images/logo.png'

const Header = () => {
  const dispatch = useAppDispatch()
  const { isAuth } = useAuth()

  return (
    <header className="flex justify-between bg-zinc-600 h-20">
      <div className="flex justify-start items-center">
        <Link to="/">
          <img className=" w-52 pl-7" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className=" flex justify-end text-white px-10 items-center">
        {isAuth ? (
          <nav>
            <NavLink to="/favorites">Избранное</NavLink>
            <NavLink to="/history">История</NavLink>
            <button onClick={() => dispatch(removeUser())}>Выход</button>
          </nav>
        ) : (
          <nav>
            <NavLink to="/login">Вход</NavLink>
            <NavLink to="/register">Регистрация</NavLink>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
