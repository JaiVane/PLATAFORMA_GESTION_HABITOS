import { useState,useEffect } from 'react';
import '../Estilos/PerfilUsuario.css';


export default function PerfilUsuario({cerrarModal}) {
  const [perfil, setPerfil] = useState({
    nombre: 'Vallery Miranda',
    biografia: '',
    genero: '',
    objetivo: '',
    imagen: '',
    rol: '',
  });
  // 🔥 EFECTO CLAVE: Ocultar header cuando el modal se abre
  useEffect(() => {
    // Agregar clase al body para ocultar header
    document.body.classList.add('modal-perfil-open');
    
    // Limpiar: remover clase cuando el componente se desmonte
    return () => {
      document.body.classList.remove('modal-perfil-open');
    };
  }, []);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setPerfil({ ...perfil, [name]: value });
  };

  const manejarImagen = (e) => {
    const archivo = e.target.files[0];
    const url = URL.createObjectURL(archivo);
    setPerfil({ ...perfil, imagen: url });
  };
  const guardarCambios = () => {
    console.log('Datos guardados:', perfil);
    cerrarModal();
  };
  return (
    <div className="perfil-container">
        <div className="editar">
          <h2>Editar Perfil</h2>
          <button onClick={cerrarModal}>X</button>
        </div>
      <div className="perfil-base">
        <div className="perfil-foto">
        <img src={perfil.imagen || '/default-avatar.png'} alt="Foto de perfil" />
        <input type="file" accept="image/*" onChange={manejarImagen} />
        </div>

        <div className="perfil-formulario">
        <label>Nombre
          <input name="nombre" value={perfil.nombre} onChange={manejarCambio} />
        </label>

        <label>Biografía
          <textarea name="biografia" value={perfil.biografia} onChange={manejarCambio} />
        </label>

        <label>Género
          <select name="genero" value={perfil.genero} onChange={manejarCambio}>
            <option value="">Selecciona</option>
            <option value="femenino">Femenino</option>
            <option value="masculino">Masculino</option>
            <option value="otro">Prefiero no decirlo</option>
          </select>
        </label>

        <label>Objetivo principal
          <input name="objetivo" value={perfil.objetivo} onChange={manejarCambio} />
        </label>

        <label>Rol RPG
          <select name="rol" value={perfil.rol} onChange={manejarCambio}>
            <option value="">Selecciona</option>
            <option value="guerrero">Guerrero</option>
            <option value="mago">Mago</option>
            <option value="explorador">Explorador</option>
          </select>
        </label>

        <button className="btn-guardar"  onClick={guardarCambios}>
          Guardar cambios
        </button>
        </div>
      </div>
      
    </div>
  );
}
