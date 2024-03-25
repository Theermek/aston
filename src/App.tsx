// App.tsx
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/home/HomePage'
import LoginPage from './pages/login/LoginPage'
import RegisterPage from './pages/register/RegisterPage'
import FavoritesPage from './pages/favorites/FavoritesPage'
import HistoryPage from './pages/history/HistoryPage'
import ErrorPage from './pages/error/ErrorPage'
import SearchPage from './pages/search/SearchPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/search/" element={<SearchPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Layout>
  )
}

export default App
