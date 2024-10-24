import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SignUpPage from './Registration/SignUpPage.jsx'
import UserSignUpForm from './Registration/UserSignUpForm.jsx'
import AdminSignUpForm from './Registration/AdminSignUpForm.jsx'
import CategoryPage from "./CategoryPage/CategoryPage";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
