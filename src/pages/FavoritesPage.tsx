import { useEffect, useState } from 'react'
import { db } from '../utils/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { useGetCharactersByIdQuery } from '../store/rickApi'
import CharacterCard from '../components/CharacterCard'
import { useDispatch, useSelector } from 'react-redux'
import { selectFavoriteIds, selectUser } from '../store/selector'
import { setFavorite } from '../store/slices/favoriteSlice'
import { useNavigate } from 'react-router-dom'

const FavoritesPage = () => {
  const [Loading, setLoading] = useState(true)
  const currentUser = useSelector(selectUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  if (!currentUser) {
    navigate('/login')
  }
  useEffect(() => {
    const fetchFavoriteIds = async () => {
      setLoading(true)
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
      } finally {
        setLoading(false)
      }
    }
    fetchFavoriteIds()
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
