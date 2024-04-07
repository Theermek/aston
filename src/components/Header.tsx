// Header.js
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../store/selector'
import GuestLinks from './guest'
import { logout, subscribeToAuthChanges } from '../utils/authService'
import { useEffect } from 'react'
import { setUser } from '../store/slices/userSlice'
import UserLinks from './User'

const Header = () => {
  const navigate = useNavigate()
  const currentUser = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges(setUser)
    return () => unsubscribe()
  }, [currentUser.id])

  const onLogout = () => {
    logout(dispatch).then(() => {
      navigate('/login')
    })
  }

  return (
    <header className="flex justify-between bg-zinc-600 dark:bg-zinc-800 h-20">
      <div className="flex justify-start items-center">
        <Link to="/">
          <img className="w-52 pl-7" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="flex justify-end text-white px-10 items-center">
        {currentUser.id ? <UserLinks onLogout={onLogout} /> : <GuestLinks />}
      </div>
    </header>
  )
}

export default Header
