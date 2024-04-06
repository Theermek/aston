import { createContext, useContext, useMemo, useState } from 'react'

export const ThemeContext = createContext({
  themeMode: 'light',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeThemeMode: () => {},
})

export const useThemeContext = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setThemeMode] = useState('light')

  const contextValue = useMemo(
    () => ({
      themeMode,
      changeThemeMode: () => {
        document.querySelector('html')?.classList.remove('dark', 'light')
        if (themeMode === 'light') {
          setThemeMode('dark')
          document.querySelector('html')?.classList.add('dark')
        } else {
          setThemeMode('light')
          document.querySelector('html')?.classList.add('light')
        }
      },
    }),
    [themeMode],
  )
  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}
