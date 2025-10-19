
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bienvenida from './Paginas/Bienvenida';
import Login  from './Paginas/Login';
import Registro from './Paginas/Registro';
import Dashboard from './Paginas/Dashboard';
import Retos from './Paginas/Retos';
import Estadisticas from './Paginas/Estadisticas';
import Misiones from './Paginas/Misiones';
import Recompensas from './Paginas/Recompensas';
import Reportes from './Paginas/Reportes';
import Notificaciones from './Paginas/Notificaciones';
import AgregarHabitos from './Paginas/Habitos-pages/AgregarHabitos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bienvenida />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/agregar-habitos" element={<AgregarHabitos />} />
      </Routes>
    </Router>
  );
}

export default App;