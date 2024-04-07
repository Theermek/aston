import { Link } from 'react-router-dom'
import useHistoryData from '../hooks/history'

const HistoryPage = () => {
  const { currentUrl, onDelete } = useHistoryData()

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
