import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type CharacterCardProps = {
  character: {
    name: string
    image: string
  }
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <li className=" bg-lime-200 flex flex-col w-64 h-80 rounded-md border-y-8 border-lime-500 m-5 relative">
      <img src={character.image} alt={character.name} />
      <p className=" text-center font-light text-xl">{character.name}</p>
      <FontAwesomeIcon
        icon={faHeart}
        size="xs"
        style={{ color: '#ff3d3d' }}
        className=" absolute top-1 right-1 size-7 cursor-pointer"
      />
      {/* закрасить сердце если кликнули, меняя класс */}
    </li>
  )
}

export default CharacterCard
