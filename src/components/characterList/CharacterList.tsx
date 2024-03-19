import CharacterCard from '../characterCard/CharacterCard'

type Character = {
  id: number
  name: string
  image: string
}

type CharactersListProps = {
  characters: Character[]
}

const CharactersList = ({ characters }: CharactersListProps) => {
  return (
    <div>
      <h2>Персонажи:</h2>
      <ul>
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </ul>
    </div>
  )
}

export default CharactersList
