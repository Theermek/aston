import { useSelector } from 'react-redux'
import { selectUser } from '../store/selector'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const currentUser = useSelector(selectUser)
  return currentUser.id ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute
