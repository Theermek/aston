import { Outlet } from 'react-router-dom'
import Header from './Header'
import { Suspense } from 'react'
import { ThemeProvider } from '../context/theme'

const Layout = () => {
  return (
    <div>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}

export default Layout
