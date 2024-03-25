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
    <div className=" bg-slate-200 flex justify-center">
      <ul className=" flex flex-wrap justify-center w-3/4">
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </ul>
    </div>
  )
}

export default CharactersList
