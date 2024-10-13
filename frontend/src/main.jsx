import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SignUpPage from './Registration/SignUpPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <SignUpPage/>
  </StrictMode>,
)
