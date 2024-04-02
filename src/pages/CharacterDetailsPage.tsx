import { useParams } from 'react-router-dom'
import { useGetCharacterByIdQuery } from '../store/rickApi'
import FavoriteButton from '../components/FavoriteButton'

const CharacterDetailsPage = () => {
  const { id } = useParams<{ id: string }>()
  const {
    data: character,
    error,
    isLoading,
  } = useGetCharacterByIdQuery(id || '', {
    skip: !id,
  })

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error: Error message</p>
  }

  return (
    <div className=" flex justify-center mt-40">
      <div className="relative">
        <img src={character?.image} alt={character?.name} />
        <FavoriteButton characterId={character.id} />
      </div>
      <div className=" mx-10 my-10">
        <h2>{character?.name}</h2>
        <p>Status: {character?.status}</p>
        <p>Species: {character?.species}</p>
        <p>Location: {character?.location?.name}</p>
      </div>
    </div>
  )
}

export default CharacterDetailsPage
