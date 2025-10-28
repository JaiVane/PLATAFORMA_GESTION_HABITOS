import { faBell, faUser, faSignOutAlt, faCog } from '@fortawesome/free-solid-svg-icons';
import '../../Estilos/Dashboard_style/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import imgUser from '../../assets/logoPrincipalInvert.png';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Header() {

  //frases motivadoras
  const [frase, setFrase] = useState("");
  useEffect(() => {
    const frasesMotivadoras = [ "Hoy es un buen día para avanzar.",
      "Tu constancia es tu superpoder.",
      "Cada hábito te acerca a tu meta.",
      "No tienes que ser perfecto, solo constante.",
      "Hazlo por ti, no por los demás.",
      "El progreso es mejor que la perfección.",
      "Un paso a la vez, pero sin detenerte.",
      "Tu esfuerzo vale más que mil excusas.",
      "La disciplina construye tu destino.",
      "Hoy puedes más de lo que crees.",
      "El cambio empieza con una acción.",
      "No esperes motivación, crea rutina.",
      "Tu versión futura te lo agradecerá.",
      "Hazlo aunque no tengas ganas.",
      "El hábito vence al talento sin constancia.",
      "Cada día cuenta, incluso este.",
      "No pares ahora, estás más cerca.",
      "Tu misión empieza hoy.",
      "Sé el héroe de tu propia historia.",
      "La recompensa está en el camino."];
      const aleatoria = frasesMotivadoras[Math.floor(Math.random() * frasesMotivadoras.length)];
      setFrase(aleatoria);
    }, []);


    const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
    const nombreUsuario = usuarioGuardado?.nombreUsuario || usuarioGuardado?.nombre || "Usuario";

    const nivel = usuarioGuardado?.nivel || 1;
    const experiencia = usuarioGuardado?.experiencia || 0;
    const racha = usuarioGuardado?.racha || 0;


  //fecha y hora actual formateada
  const fechaActual = new Date();
  const opcionesFecha ={
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,};
  const fechaFormateada = fechaActual.toLocaleString('es-Co', opcionesFecha)
  
  //menu usuario
  const [menuAbierto, setMenuAbierto] = useState(false);
  const toggleMenu = () => {
    setMenuAbierto(prev => !prev);
  };
  const navigate = useNavigate();
  return (
      <nav className="dashboard-header">
        
        <div className='header-left'>
          <h3>Bienvenido a HabiQuest, {nombreUsuario}</h3>
          <div className='subinfo'>
            <small >{fechaFormateada} </small>
              <small>{frase}</small>
          </div>
        </div>
        <div className="nivel-info">
          <span>🔰 Nivel {nivel}</span>
          <span>⭐ {experiencia}</span>
          <span>🔥 Racha: {racha}</span>
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
