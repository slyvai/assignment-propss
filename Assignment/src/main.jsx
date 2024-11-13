import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Type.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
