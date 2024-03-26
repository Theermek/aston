import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetCharacterByIdQuery } from '../store/rickApi'

const CharacterDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { data: character, error, isLoading } = useGetCharacterByIdQuery(id || '')

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
      {/* Добавим кнопку для добавления/удаления из избранного здесь */}
    </div>
  )
}

export default CharacterDetailsPage
