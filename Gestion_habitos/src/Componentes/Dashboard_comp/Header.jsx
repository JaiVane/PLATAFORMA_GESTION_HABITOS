import { faBell, faUser, faSignOutAlt, faCog } from '@fortawesome/free-solid-svg-icons';
import '../../Estilos/Dashboard_style/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import imgUser from '../../assets/logoPrincipalInvert.png';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Header() {

  const nombreUsuario ="Vallery Miranda";
  const fechaActual = new Date();
  const opcionesFecha ={
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,};
  const fechaFormateada = fechaActual.toLocaleString('es-Co', opcionesFecha)
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(prev => !prev);
  };
  const navigate = useNavigate();
  return (
      <nav className="dashboard-header">
        


        <div className='header-left'>
          <h3>Bienvenido, {nombreUsuario}</h3>
          <div className='subinfo'>
            <small className="frase-habito">{fechaFormateada} {"==>"}Un pequeño habito diario genera grandes logros.</small>
          </div>
        </div>
        <div className="nivel-info">
          <span>🔰 Nivel 2</span>
          <span>⭐ 120 XP</span>
          <span>🔥 Racha: 4 días</span>
        </div>

        <div className="header-right">
          <button className="icon-btn"><FontAwesomeIcon icon={faBell}/></button>
          <div className="usuario-menu" onClick={toggleMenu}  >
            <img src={imgUser} alt="Foto de perfil" className="foto-usuario" />
            <span className="flecha">&#9662;</span> {/* flecha hacia abajo */}
            {menuAbierto && (
    <div className="menu-desplegable">
      <button onClick={ ()=> navigate('/dashboard/cuentaUsuario')}>
        <FontAwesomeIcon icon={faUser} />
        <span>Mi cuenta</span>
      </button>
      <button>
        <FontAwesomeIcon icon={faCog} />
        <span>Configuración</span>
      </button>
      <button onClick={ ()=> navigate('/')}>
        <FontAwesomeIcon icon={faSignOutAlt} />
        <span>Cerrar sesión</span>
      </button>
    </div>
  )}
          
          </div>
        </div>  
      </nav>
  );
}
