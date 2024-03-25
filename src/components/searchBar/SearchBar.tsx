import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom' // Импорт useHistory для перенаправления

type SearchBarProps = {
  value: string
  onChange: (value: string) => void
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState(value)
  const navigate = useNavigate() // Инициализация useHistory

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // При нажатии Enter перенаправляем на страницу поиска с параметрами запроса
      if (inputValue.trim() !== '') {
        navigate(`/search?name=${encodeURIComponent(inputValue)}`)
      }
    }
  }

  const handleIconClick = () => {
    // При клике на иконку поиска также перенаправляем на страницу поиска с параметрами запроса
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
          onKeyDown={handleKeyPress} // Убрана проверка на Enter, так как она есть в handleKeyPress
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
