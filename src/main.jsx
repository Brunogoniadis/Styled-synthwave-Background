import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Main } from './styles/Main'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main>
      <App />
    </Main>
  </React.StrictMode>,
)
