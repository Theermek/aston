import { useState } from 'react'
import SearchBar from '../searchBar/SearchBar'
import { useGetAllCharactersQuery, useGetFilteredCharactersByNameQuery } from '../../store/rickApi'
import CharactersList from '../characterList/CharacterList'

const Main = () => {
  const [searchState, setSearchState] = useState('')
  const {
    data: allCharacters,
    error: allCharactersError,
    isLoading: allCharactersLoading,
  } = useGetAllCharactersQuery({ page: 1 })
  const {
    data: filteredCharacters,
    error: filteredError,
    isLoading: filteredLoading,
  } = useGetFilteredCharactersByNameQuery(searchState)
  const characters = searchState ? filteredCharacters?.results : allCharacters?.results

  const handleChange = (value: string) => {
    setSearchState(value)
  }

  return (
    <div>
      <SearchBar value={searchState} onChange={handleChange} />
      {(allCharactersLoading || filteredLoading) && <p>Загрузка...</p>}
      {(allCharactersError || filteredError) && (
        <p>Ошибка загрузки данных. Попробуйте обновить страницу или попробовать позже</p>
      )}
      {characters && <CharactersList characters={characters} />}
    </div>
  )
}

export default Main
