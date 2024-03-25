import { useLocation } from 'react-router-dom'
import { useGetFilteredCharactersByNameQuery } from '../../store/rickApi'
import CharacterList from '../../components/characterList/CharacterList'
import SearchBar from '../../components/searchBar/SearchBar'

const SearchPage = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const searchTerm = searchParams.get('name') || ''
  const { data, error, isLoading } = useGetFilteredCharactersByNameQuery(searchTerm)

  return (
    <div>
      <SearchBar value={searchTerm} onChange={String} />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: Такой персонаж не найден</p>}
      {data && <CharacterList characters={data.results} />}
    </div>
  )
}

export default SearchPage
