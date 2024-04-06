import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../utils/firebase'
import { setFavorite, removeFromFavorite } from '../../store/slices/favoriteSlice'
import { setHistory, removeFromHistory } from '../../store/slices/historySlice'
import { setUser, removeUser } from '../../store/slices/userSlice'
import { PayloadAction } from '@reduxjs/toolkit'

type MyPayloadType = {
  email: string
  id: string
}

export const importedListenerMiddleware = createListenerMiddleware()

importedListenerMiddleware.startListening({
  matcher: isAnyOf(setUser),
  effect: async (action: PayloadAction<MyPayloadType>, listenerApi) => {
    const { id } = action.payload
    if (!id) {
      return
    }
    try {
      const favoriteIdsSnapshot = await getDocs(collection(db, `users/${id}/favorites`))
      const favoriteIds = favoriteIdsSnapshot.docs.map(doc => doc.data().id)

      const historyUrlsSnapshot = await getDocs(collection(db, `users/${id}/history`))
      const historyUrls = historyUrlsSnapshot.docs.map(doc => doc.data().url)

      listenerApi.dispatch(setFavorite(favoriteIds))
      listenerApi.dispatch(setHistory(historyUrls))
    } catch (error) {
      alert('Error fetching user data')
    }
  },
})

importedListenerMiddleware.startListening({
  matcher: isAnyOf(removeUser),
  effect: async (action, listenerApi) => {
    listenerApi.dispatch(setFavorite([]))
    listenerApi.dispatch(setHistory([]))
    listenerApi.dispatch(removeFromFavorite(''))
    listenerApi.dispatch(removeFromHistory(0))
  },
})

export default importedListenerMiddleware.middleware
