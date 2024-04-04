import { useEffect } from 'react'
import { db } from '../utils/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { useGetCharactersByIdQuery } from '../store/rickApi'
import CharacterCard from '../components/CharacterCard'
import { useDispatch, useSelector } from 'react-redux'
import { selectFavoriteIds, selectUser } from '../store/selector'
import { setFavorite } from '../store/slices/favoriteSlice'
import { useNavigate } from 'react-router-dom'

const FavoritesPage = () => {
  const currentUser = useSelector(selectUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  if (!currentUser) {
    navigate('/login')
  }
  const fetchFavoriteIds = async () => {
    try {
      const favoriteIdsSnapshot = await getDocs(collection(db, `users/${currentUser.id}/favorites`))
      const ids: number[] = []
      favoriteIdsSnapshot.forEach(doc => {
        ids.push(doc.data().id)
      })
      if (ids.length) {
        return dispatch(setFavorite(ids))
      }
      return []
    } catch (error) {
      alert('Error fetching favorites')
    }
  }
  const favoriteIds = useSelector(selectFavoriteIds)
  useEffect(() => {
    fetchFavoriteIds()
  }, [currentUser, dispatch])

  const {
    data: characterData,
    isLoading,
    isError,
  } = useGetCharactersByIdQuery(favoriteIds, { skip: favoriteIds.length === 0 })

  return (
    <div>
      {isLoading && <p>Загрузка...</p>}
      {isError && <p>Произошла ошибка при загрузке данных</p>}
      <ul>
        {favoriteIds.length ? (
          characterData?.map((character: { id: number; name: string; image: string }) => (
            <CharacterCard key={character.id} character={character} />
          ))
        ) : (
          <p>Нет избранных персонажей</p>
        )}
      </ul>
    </div>
  )
}

export default FavoritesPage
