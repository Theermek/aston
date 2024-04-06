import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { addHistory } from '../utils/history'
import { useSelector } from 'react-redux'
import { selectUser } from '../store/selector'
import Suggests from './Suggests'
import useDebounce from '../hooks/debounce'
import { set } from 'firebase/database'

type SearchBarProps = {
  value: string
  onChange: (value: string) => void
}

const SearchBar = ({ value }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState(value)
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  const [showSuggests, setShowSuggests] = useState(false)
  const debouncedInputValue = useDebounce(inputValue, 700)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    setShowSuggests(true)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  const handleIconClick = () => {
    handleSearch()
  }

  const handleSearch = () => {
    if (inputValue.trim() === '') {
      navigate('/search')
    } else {
      const searchUrl = `/search?name=${encodeURIComponent(inputValue)}`
      navigate(searchUrl)
      if (!user.id) {
        return
      }
      addHistory(searchUrl, user)
    }
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setShowSuggests(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="bg-slate-200 flex justify-center">
      <div className="w-1/4 relative" ref={inputRef}>
        <input
          className="bg-slate-600 w-full p-2 m-2 rounded-md text-white"
          type="text"
          placeholder="Введите имя персонажа"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          onFocus={handleChange}
        />
        <FontAwesomeIcon
          className="absolute top-5 right-1 cursor-pointer text-gray-200"
          icon={faMagnifyingGlass}
          onClick={handleIconClick}
        />
        <div className="absolute w-full bg-lime-300 rounded z-10">
          {showSuggests && inputValue && <Suggests searchInput={debouncedInputValue} />}
        </div>
      </div>
    </div>
  )
}

export default SearchBar
