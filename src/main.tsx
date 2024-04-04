import App from './App'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import './utils/firebase'
import ErrorBoundary from './components/ErrorBoundaries'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
  )
}
