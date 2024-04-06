import { doc, setDoc, deleteDoc, collection, getDocs } from 'firebase/firestore'
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

export const fetchHistoryUrls = async (userId: string): Promise<string[]> => {
  try {
    const historyUrlsSnapshot = await getDocs(collection(db, `users/${userId}/history`))
    return historyUrlsSnapshot.docs.map(doc => doc.data().url)
  } catch (error) {
    alert(error)
    return []
  }
}
