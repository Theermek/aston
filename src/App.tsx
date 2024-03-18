import type React from 'react'
import { useState } from 'react'
import { useGetAllCharactersQuery, useSearchCharactersByNameQuery } from './redux'
import CharactersList from './components/characterList/CharacterList'
import SearchBar from './components/searchBar/SearchBar'

const App: React.FC = () => {
  const [searchState, setSearchState] = useState('')
  const { data, error, isLoading } = useGetAllCharactersQuery({ page: 1 })
  const { data: searchData, error: searchError, isLoading: searchLoading } = useSearchCharactersByNameQuery(searchState)
  const characters = searchState ? searchData?.results : data?.results

  const handleChange = (value: string) => {
    setSearchState(value)
  }

  return (
    <div>
      <SearchBar value={searchState} onChange={handleChange} />
      {(isLoading || searchLoading) && <p>Загрузка...</p>}
      {(error || searchError) && <p>Ошибка загрузки данных. Попробуйте обновить страницу или попробовать позже</p>}
      {characters && <CharactersList characters={characters} />}
    </div>
  )
}

export default App
