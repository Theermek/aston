import { useGetCharactersByIdQuery } from '../store/rickApi'
import CharacterCard from '../components/CharacterCard'
import { useSelector } from 'react-redux'
import { selectFavoriteIds } from '../store/selector'
import useFavoritesData from '../hooks/favorites'

const FavoritesPage = () => {
  const { loading } = useFavoritesData()
  const favoriteIds = useSelector(selectFavoriteIds)
  const { data: characters } = useGetCharactersByIdQuery(favoriteIds, { skip: favoriteIds.length === 0 })

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && (
        <ul>
          {favoriteIds.length ? (
            characters?.map((character: { id: number; name: string; image: string }) => (
              <CharacterCard key={character.id} character={character} />
            ))
          ) : (
            <p>Нет избранных персонажей</p>
          )}
        </ul>
      )}
    </div>
  )
}

export default FavoritesPage
