import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetCharacterByIdQuery } from '../store/rickApi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const CharacterDetailsPage: React.FC = () => {
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
    <div>
      <h2>{character?.name}</h2>
      <img src={character?.image} alt={character?.name} />
      <p>Status: {character?.status}</p>
      <p>Species: {character?.species}</p>
      <p>Location: {character?.location?.name}</p>
      <FontAwesomeIcon icon={faHeart} size="xs" className=" absolute top-1 right-1 size-7 cursor-pointer" />
      {/* Добавим кнопку для добавления/удаления из избранного здесь */}
    </div>
  )
}

export default CharacterDetailsPage
