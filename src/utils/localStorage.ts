// Функция для сохранения данных пользователя в локальном хранилище
export const saveUserDataToLS = (email: string, token: string, id: string) => {
  localStorage.setItem('email', email)
  localStorage.setItem('token', token)
  localStorage.setItem('id', id)
}

// Функция для удаления данных пользователя из локального хранилища
export const removeUserDataFromLS = () => {
  localStorage.removeItem('email')
  localStorage.removeItem('token')
  localStorage.removeItem('id')
}
// Функция для извлечения данных пользователя из локального хранилища
export const getUserDataFromLS = () => {
  const email = localStorage.getItem('email') || null
  const token = localStorage.getItem('token') || null
  const id = localStorage.getItem('id') || null

  return { email, token, id }
}
