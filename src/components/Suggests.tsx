import { Link } from 'react-router-dom'

import { useGetSuggestsQuery } from '../store/rickApi'

const Suggests = ({ searchInput }: { searchInput: string }) => {
  const { data: suggests, error, isLoading } = useGetSuggestsQuery(searchInput)

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error....</p>
  }

  if (suggests) {
    return (
      <ul className="max-h-72 overflow-auto rounded">
        {suggests.slice(0, 5).map(suggest => (
          <li key={suggest.id} className=" px-2 mb-1 text-sm hover:bg-lime-500">
            <Link to={`/characters/${suggest.id}`}> {suggest.name}</Link>
          </li>
        ))}
      </ul>
    )
  }

  return null
}
export default Suggests
