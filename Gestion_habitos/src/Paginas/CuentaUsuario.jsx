
import '../Estilos/CuentaUsuario.css';
import avatar from '../assets/logoPrincipalInvert.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faUser } from '@fortawesome/free-solid-svg-icons'; 
import { faArchive, faCog } from '@fortawesome/free-solid-svg-icons';

export default function CuentaUsuario({ mostrarModalPerfil }) {



  // Datos simulados del usuario (puedes reemplazar con datos reales del login)
  const usuario = {
    nombre: 'Vallery Miranda',
    biografia: 'Amante del crecimiento personal y los retos diarios.',
    genero: 'Femenino',
    objetivo: 'Mejorar mi salud física y mental',
    rol: 'Exploradora',
    imagen: avatar,
// o imagen cargada por el usuario
  };

  return (
    <div className="cuenta-container">
      <h2 ><FontAwesomeIcon icon={faUser}/> Mi Cuenta</h2>

      <div className="cuenta-header">
        <img src={usuario.imagen} alt="Foto de perfil" className="cuenta-avatar" />
        <h2 className="cuenta-nombre">{usuario.nombre}</h2>

        {/* Botones */}
        <div className="cuenta-botones">
          <button onClick={mostrarModalPerfil}><FontAwesomeIcon icon={faPencil}/> Editar perfil</button>
          <button><FontAwesomeIcon icon={faArchive}/> Ver logros</button>
          <button><FontAwesomeIcon icon={faCog}/> Configuración</button>
        </div>
      </div>
      
      {/* Separador */}
      <hr className="cuenta-separador" />

      {/* Información detallada */}
      <div className="cuenta-info">
        <h3>Detalles</h3>
        <p><strong>Biografía:</strong> {usuario.biografia}</p>
        <p><strong>Género:</strong> {usuario.genero}</p>
        <p><strong>Objetivo:</strong> {usuario.objetivo}</p>
        <p><strong>Rol RPG:</strong> {usuario.rol}</p>
      </div>

    </div>
  );
}
