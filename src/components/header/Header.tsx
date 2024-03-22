import { useAuth } from '../../hooks/useAuth'
import { removeUser } from '../../store/slices/userSlice'
import { useAppDispatch } from '../../hooks/reduxHooks'
import SearchBar from '../../components/searchBar/SearchBar'

const Header = ({ searchState, onChange }: { searchState: string; onChange: (value: string) => void }) => {
  const dispatch = useAppDispatch()
  const { isAuth, email } = useAuth()

  return (
    <header>
      {isAuth && <button onClick={() => dispatch(removeUser())}>Log out from {email}</button>}
      <SearchBar value={searchState} onChange={onChange} />
    </header>
  )
}

export default Header
