import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import useAuth from './hooks/auth'
import PrivateRoute from './router/PrivateRoute'

const HomePage = lazy(() => import('./pages/HomePage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const RegisterPage = lazy(() => import('./pages/RegisterPage'))
const FavoritesPage = lazy(() => import('./pages/FavoritesPage'))
const HistoryPage = lazy(() => import('./pages/HistoryPage'))
const ErrorPage = lazy(() => import('./pages/ErrorPage'))
const SearchPage = lazy(() => import('./pages/SearchPage'))
const CharacterDetailsPage = lazy(() => import('./pages/CharacterDetailsPage'))

function App() {
  useAuth()

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<PrivateRoute />}>
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Route>
        <Route path="/characters/:id" element={<CharacterDetailsPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/search/" element={<SearchPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}

export default App
