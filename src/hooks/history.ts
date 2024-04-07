import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectHistoryUrls, selectUser } from '../store/selector'
import { removeFromHistory, setHistory } from '../store/slices/historySlice'
import { fetchHistoryUrls, removeHistory } from '../utils/history'

const useHistoryData = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const loadHistory = async () => {
      const urls = await fetchHistoryUrls(user.id)
      dispatch(setHistory(urls))
    }
    loadHistory()
  }, [user, dispatch])

  const currentUrl = useSelector(selectHistoryUrls)

  const onDelete = async (url: string) => {
    await removeHistory(url, user)
    dispatch(removeFromHistory(url))
  }

  return { currentUrl, onDelete }
}

export default useHistoryData
