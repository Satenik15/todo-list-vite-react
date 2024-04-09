import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemProvider } from './context/ThemeProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemProvider>
   </React.StrictMode>,
)
