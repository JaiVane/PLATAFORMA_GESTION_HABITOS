import Header from '../Componentes/Dashboard_comp/Header';
import Sidebar from '../Componentes/Dashboard_comp/Sidebar';
import '../Estilos/Dashboard.css';
import PaginaPrincipal from './PaginaPrincipal';
import { Routes, Route } from 'react-router-dom';
import AgregarHabitos from './Habitos-pages/AgregarHabitos';
import Estadisticas from './Estadisticas';
import Misiones from './Misiones';
import Notificaciones from './Notificaciones';
import Recompensas from './Recompensas';
import Reportes from './Reportes';
import Retos from './Retos';
import CuentaUsuario from './CuentaUsuario';
import PerfilUsuario from './PerfilUsuario';
import { useState,useEffect } from 'react';



export default  function Dashboard() {
    const [mostrarModalPerfil, setMostrarModalPerfil] = useState(false);

    useEffect(() => {
        const body = document.body;
        if (mostrarModalPerfil) {
          body.classList.add('body-bloqueado'); // Desactivar scroll
        } else {
          body.classList.remove('body-bloqueado'); // Activar scroll
        }
        return () => body.classList.remove('body-bloqueado');
      }, [mostrarModalPerfil]);

    return (
        <div className="dashboard-container">
            <Sidebar />
            
            <div className={`dashboard-content ${mostrarModalPerfil ? 'modal-abierto' : ''}`}>
                <Header />
                <Routes>
                    <Route path='/paginaPrincipal' element={<PaginaPrincipal />} />
                    <Route path='/habitos' element={<AgregarHabitos />} />
                    <Route path='/estadisticas' element={<Estadisticas />} />
                    <Route path='/misiones' element={<Misiones />} />   
                    <Route path='/notificaciones' element={<Notificaciones />} />
                    <Route path='/recompensas' element={<Recompensas />} />
                    <Route path='/reportes' element={<Reportes />} />
                    <Route path='/retos' element={<Retos />} />
                    <Route path="/cuentaUsuario" element={<CuentaUsuario mostrarModalPerfil={()=> setMostrarModalPerfil(true)}/>} />
                    <Route path="/perfil" element={<PerfilUsuario />} />
                </Routes>
                {mostrarModalPerfil && (
                    <div className="modal overlay">
                        <div className="modal-contenido">
                            <button className="modal-cerrar" onClick={() => setMostrarModalPerfil(false)}>X</button>
                            <PerfilUsuario />
                        </div>
                    </div>
                )}
                
            </div>
        </div>

    );
}