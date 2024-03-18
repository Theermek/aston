import type React from 'react'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return <input type="text" placeholder="Введите имя персонажа" value={value} onChange={handleChange} />
}

export default SearchBar
