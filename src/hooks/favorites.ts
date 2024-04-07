import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../store/selector'
import { setFavorite } from '../store/slices/favoriteSlice'
import { fetchFavoriteIds } from '../utils/favorites'

const useFavoritesData = () => {
  const [loading, setLoading] = useState(true)
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

  return { loading }
}

export default useFavoritesData
