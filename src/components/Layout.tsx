import { Outlet } from 'react-router-dom'
import Header from './Header'
import { Suspense } from 'react'

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}

export default Layout
