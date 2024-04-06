import { doc, setDoc, deleteDoc, getDoc } from 'firebase/firestore'
import { db } from './firebase'

interface User {
  id: string
}
export const addFavorite = async (id: number, user: User) => {
  if (user) {
    const favoriteRef = doc(db, `users/${user.id}/favorites/${id}`)
    await setDoc(favoriteRef, { id: id })
  }
}

export const removeFavorite = async (id: number, user: User) => {
  if (user) {
    const favoriteRef = doc(db, `users/${user.id}/favorites/${id}`)
    await deleteDoc(favoriteRef)
  }
}

export const isFavorite = async (id: number, user: User): Promise<boolean | undefined> => {
  if (user) {
    const favoriteRef = doc(db, `users/${user.id}/favorites/${id}`)
    const docSnap = await getDoc(favoriteRef)
    return docSnap.exists()
  }
  return undefined
}
