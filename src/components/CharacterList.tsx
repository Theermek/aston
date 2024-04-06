import CharacterCard from './CharacterCard'
import PropTypes from 'prop-types'

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

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default CharactersList
