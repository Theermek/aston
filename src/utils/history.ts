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

// export const isHistory = async (url: string): Promise<boolean | undefined> => {
//   if (user) {
//     const historyRef = doc(db, `users/${user.uid}/history/${url}`)
//     const docSnap = await getDoc(historyRef)
//     return docSnap.exists()
//   }
// }
