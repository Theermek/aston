import { useEffect, useState } from 'react'
import { useGetCharactersByIdQuery } from '../store/rickApi'
import CharacterCard from '../components/CharacterCard'
import { useDispatch, useSelector } from 'react-redux'
import { selectFavoriteIds, selectUser } from '../store/selector'
import { setFavorite } from '../store/slices/favoriteSlice'
import { fetchFavoriteIds } from '../utils/favorites'

const FavoritesPage = () => {
  const [Loading, setLoading] = useState(true)
  const currentUser = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const loadFavorites = async () => {
      setLoading(true)
      try {
        const ids = await fetchFavoriteIds(currentUser.id)
        dispatch(setFavorite(ids))
      } catch (error) {
        alert('Error fetching favorites')
      } finally {
        setLoading(false)
      }
    }
    loadFavorites()
  }, [currentUser, dispatch])

  const favoriteIds = useSelector(selectFavoriteIds)
  const {
    data: characterData,
    isLoading,
    isError,
  } = useGetCharactersByIdQuery(favoriteIds, { skip: favoriteIds.length === 0 })

  return (
    <div>
      {isError && <p>Произошла ошибка при загрузке данных</p>}
      {isLoading && <p>Loading...</p>}
      {!Loading && (
        <ul>
          {favoriteIds.length ? (
            characterData?.map((character: { id: number; name: string; image: string }) => (
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
