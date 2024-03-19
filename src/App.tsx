import { useState } from 'react'
import { useGetAllCharactersQuery, useSearchCharactersByNameQuery } from './redux'
import CharactersList from './components/characterList/CharacterList'
import SearchBar from './components/searchBar/SearchBar'

const App = () => {
  const [searchState, setSearchState] = useState('')
  const {
    data: allCharacters,
    error: allCharactersError,
    isLoading: allCharactersLoading,
  } = useGetAllCharactersQuery({ page: 1 })
  const {
    data: searchCharacters,
    error: searchError,
    isLoading: searchLoading,
  } = useSearchCharactersByNameQuery(searchState)
  const characters = searchState ? searchCharacters?.results : allCharacters?.results

  const handleChange = (value: string) => {
    setSearchState(value)
  }

  return (
    <div>
      <SearchBar value={searchState} onChange={handleChange} />
      {(allCharactersLoading || searchLoading) && <p>Загрузка...</p>}
      {(allCharactersError || searchError) && (
        <p>Ошибка загрузки данных. Попробуйте обновить страницу или попробовать позже</p>
      )}
      {characters && <CharactersList characters={characters} />}
    </div>
  )
}

export default App
