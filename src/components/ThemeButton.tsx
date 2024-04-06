import { useContext } from 'react'
import { ThemeContext } from '../context/theme'

const ThemeButton = () => {
  const { changeThemeMode, themeMode } = useContext(ThemeContext)

  return (
    <label className=" px-10 inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={changeThemeMode}
        checked={themeMode === 'dark'}
      />
      <div className="relative w-11 h-6 bg-gray-200 rounded-full  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-lime-600"></div>
      <span className="ms-3 text-sm text-white">Mode</span>
    </label>
  )
}

export default ThemeButton
