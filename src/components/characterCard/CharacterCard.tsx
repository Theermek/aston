import type React from 'react'
import type { ICharacter } from '../../utils/types'

interface CharacterCardProps {
  character: ICharacter
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <li>
      {character.name}
      <br />
      <img src={character.image} alt={character.name} />
    </li>
  )
}

export default CharacterCard
