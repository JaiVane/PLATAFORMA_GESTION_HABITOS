
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Bienvenida from './Paginas/Bienvenida';
import Login  from './Paginas/Login';
import Registro from './Paginas/Registro';
import Dashboard from './Paginas/Dashboard';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bienvenida />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        
      </Routes>
    </Router>
  );
}

export default App;