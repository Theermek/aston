import { Link } from 'react-router-dom'
import FavoriteButton from './FavoriteButton'
import PropTypes from 'prop-types'

type CharacterCardProps = {
  character: {
    id: number
    name: string
    image: string
  }
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <li className=" bg-lime-200 flex flex-col w-64 h-80 rounded-md border-y-8 border-lime-500 m-5 relative">
      <Link to={`/characters/${character.id}`}>
        <img src={character.image} alt={character.name} />
        <p className=" text-center font-light text-xl">{character.name}</p>
      </Link>
      <FavoriteButton characterId={character.id} />
    </li>
  )
}

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
}

export default CharacterCard
