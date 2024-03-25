import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type SearchBarProps = {
  value: string
  onChange: (value: string) => void
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState(value)
  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (inputValue.trim() !== '') {
        navigate(`/search?name=${encodeURIComponent(inputValue)}`)
      }
    }
  }

  const handleIconClick = () => {
    if (inputValue.trim() !== '') {
      navigate(`/search?name=${encodeURIComponent(inputValue)}`)
    }
  }

  return (
    <div className="bg-slate-200 flex justify-center">
      <div className="w-1/4 relative">
        <input
          className="bg-slate-600 w-full p-2 m-2 rounded-md text-white"
          type="text"
          placeholder="Введите имя персонажа"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
        <FontAwesomeIcon
          className="absolute top-5 right-1 cursor-pointer text-gray-200"
          icon={faMagnifyingGlass}
          onClick={handleIconClick}
        />
      </div>
    </div>
  )
}

export default SearchBar
