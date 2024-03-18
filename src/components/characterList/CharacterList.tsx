import type React from 'react'
import CharacterCard from '../characterCard/CharacterCard'
import type { ICharacter } from '../../utils/types'

interface CharactersListProps {
  characters: ICharacter[]
}

const CharactersList: React.FC<CharactersListProps> = ({ characters }) => {
  return (
    <div>
      <h2>Персонажи:</h2>
      <ul>
        {characters.map((character: ICharacter) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </ul>
    </div>
  )
}

export default CharactersList
