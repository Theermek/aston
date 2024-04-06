import { doc, setDoc, deleteDoc } from 'firebase/firestore'
import { db } from './firebase'

interface User {
  id: string
}

export const addHistory = async (url: string, user: User) => {
  if (user) {
    const historyRef = doc(db, `users/${user.id}/history${url}`)
    await setDoc(historyRef, { url: url })
  }
}

export const removeHistory = async (url: string, user: User) => {
  if (user) {
    const historyRef = doc(db, `users/${user.id}/history${url}`)
    await deleteDoc(historyRef)
  }
}
