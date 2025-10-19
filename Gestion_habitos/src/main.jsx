import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Dashboard from './Paginas/Dashboard.jsx'
import App from './App.jsx'
import AgregarHabitos from './Paginas/Habitos/AgregarHabitos.jsx';
import HabitTracker from './Paginas/Habitos/HabitTracker.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Dashboard/>
  </StrictMode>,
)