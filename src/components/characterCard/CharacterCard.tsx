type CharacterCardProps = {
  character: {
    name: string
    image: string
  }
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <li>
      {character.name}
      <br />
      <img src={character.image} alt={character.name} />
    </li>
  )
}

export default CharacterCard
