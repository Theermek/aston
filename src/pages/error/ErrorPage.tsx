import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Страница не найдена</h1>
      <p>К сожалению, запрошенная вами страница не найдена.</p>
      <p>
        Пожалуйста, вернитесь на <Link to="/">главную страницу</Link>.
      </p>
    </div>
  )
}

export default NotFoundPage
