import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import FavoritesPage from './pages/FavoritesPage'
import HistoryPage from './pages/HistoryPage'
import ErrorPage from './pages/ErrorPage'
import SearchPage from './pages/SearchPage'
import CharacterDetailsPage from './pages/CharacterDetailsPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/characters/:id" element={<CharacterDetailsPage />} />
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
