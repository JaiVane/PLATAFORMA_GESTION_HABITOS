/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bienvenida from './Paginas/Bienvenida';
import Login  from './Paginas/Login';
import Registro from './Paginas/Registro';
import Dashboard from './Paginas/Dashboard';
import Habitos from './Paginas/Habitos';
import Retos from './Paginas/Retos';
import Estadisticas from './Paginas/Estadisticas';
import Misiones from './Paginas/Misiones';
import Recompensas from './Paginas/Recompensas';
import Reportes from './Paginas/Reportes';
import Notificaciones from './Paginas/Notificaciones';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bienvenida />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/habitos" element={<Habitos />} />
        <Route path="/retos" element={<Retos />} />
        <Route path="/estadisticas" element={<Estadisticas />} />
        <Route path="/misiones" element={<Misiones />} />
        <Route path="/recompensas" element={<Recompensas />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/reportes" element={<Reportes />} />
        <Route path="/notificaciones" element={<Notificaciones />} />
      </Routes>
    </Router>
  );
}

export default App;