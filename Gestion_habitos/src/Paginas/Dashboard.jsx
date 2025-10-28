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
import Metas from './Metas/Metas';

export default function Dashboard() {
    const [mostrarModalPerfil, setMostrarModalPerfil] = useState(false);

    // ✅ AQUI AGREGA ESTE ESTADO
    const [habitos, setHabitos] = useState([]);   // <-- NECESARIO PARA METAS

    useEffect(() => {
        const body = document.body;
        if (mostrarModalPerfil) {
          body.classList.add('body-bloqueado');
        } else {
          body.classList.remove('body-bloqueado');
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
                    <Route path="/cuentaUsuario" element={<CuentaUsuario mostrarModalPerfil={() => setMostrarModalPerfil(true)} />} />
                    <Route path="/perfil" element={<PerfilUsuario />} />

                    {/* ✅ AQUI PASAS LOS HABITOS A METAS */}
                    <Route path="/metas" element={<Metas habitos={habitos} />} />
                </Routes>

                {mostrarModalPerfil && (
                    <div className="modal-fondo">
                        <div className="modal-base">
                        <PerfilUsuario cerrarModal={() => setMostrarModalPerfil(false)} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
