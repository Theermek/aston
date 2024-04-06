import { useEffect } from 'react'
import { fetchHistoryUrls, removeHistory } from '../utils/history'
import { useDispatch, useSelector } from 'react-redux'
import { selectHistoryUrls, selectUser } from '../store/selector'
import { removeFromHistory, setHistory } from '../store/slices/historySlice'
import { Link } from 'react-router-dom'

const HistoryPage = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  if (!user) {
    throw new Error('Current user is not defined')
  }

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

  return (
    <div className=" flex flex-col items-center gap-5 ">
      <h2 className=" text-4xl my-10 font-medium">История поиска</h2>
      <ul>
        {!currentUrl.length ? <p>Нет истории поиска</p> : null}
        {currentUrl.map(url => {
          const name = url.split('=')[1]
          return (
            <li className="text-2xl flex justify-between gap-7" key={url}>
              <Link className=" flex gap-5" to={url}>
                <p className=" font-medium">{name}</p>
                {url}
              </Link>
              <button className=" mx-5 border-2 border-indigo-500" onClick={() => onDelete(url)}>
                Удалить
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default HistoryPage
