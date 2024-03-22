import { useGetAllCharactersQuery, useGetFilteredCharactersByNameQuery } from '../../store/rickApi'
import CharactersList from '../../components/characterList/CharacterList'

const Main = ({ searchState }: { searchState: string }) => {
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

  return (
    <main>
      {(allCharactersLoading || filteredLoading) && <p>Загрузка...</p>}
      {(allCharactersError || filteredError) && (
        <p>Ошибка загрузки данных. Попробуйте обновить страницу или попробовать позже</p>
      )}
      {characters && <CharactersList characters={characters} />}
    </main>
  )
}

export default Main
