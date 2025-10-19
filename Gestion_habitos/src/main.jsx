import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Registro from './Paginas/Registro.jsx'
import App from './App.jsx'
import AgregarHabitos from './Paginas/Habitos/AgregarHabitos.jsx';
import HabitTracker from './Paginas/Habitos/HabitTracker.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AgregarHabitos />
  </StrictMode>
);
