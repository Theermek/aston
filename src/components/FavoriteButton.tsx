import { useState, useEffect } from 'react'
import { isFavorite, addFavorite, removeFavorite } from '../utils/favorites'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../store/selector'
import { removeFromFavorite } from '../store/slices/favoriteSlice'

type FavoriteButtonProps = {
  characterId: number
}

const FavoriteButton = ({ characterId }: FavoriteButtonProps) => {
  const [isFavorited, setIsFavorited] = useState(false)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchIsFavorite = async () => {
      const favorite = await isFavorite(characterId, user)
      setIsFavorited(favorite || false)
    }
    if (!user.id) {
      return
    }
    fetchIsFavorite()
  }, [characterId, user.id])

  const handleToggleFavorite = async () => {
    if (isFavorited) {
      await removeFavorite(characterId, user)
      dispatch(removeFromFavorite(characterId))
      setIsFavorited(false)
    } else {
      await addFavorite(characterId, user)
      setIsFavorited(true)
    }
  }
  if (!user.id) {
    return null
  }

  return (
    <FontAwesomeIcon
      icon={faHeart}
      size="xs"
      style={{ color: isFavorited ? '#ff3d3d' : 'gray' }}
      className=" absolute top-1 right-1 size-7 cursor-pointer"
      onClick={handleToggleFavorite}
    />
  )
}

export default FavoriteButton
