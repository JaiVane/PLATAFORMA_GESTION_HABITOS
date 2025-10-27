import { useState,useEffect } from 'react';
import '../Estilos/PerfilUsuario.css';
import {putData} from '../Services/api';
import { subirImagenPerfil } from '../Services/api';


export default function PerfilUsuario({usuario, onGuardar,cerrarModal}) {

  const [perfil, setPerfil] = useState({
    nombre: usuario?.nombre || "",
    biografia: usuario?.biografia || "",
    genero: usuario?.genero || "",
    objetivo: usuario?.objetivo || "",
    imagenPerfil: usuario?.ImagenPerfil || "/default-avatar.png",
    rol: usuario?.rol || "",
  });
  
  useEffect(() => {
    if (usuario) {
      setPerfil({
        nombre: usuario.nombre || "",
        biografia: usuario.biografia || "",
        genero: usuario.genero || "",
        objetivo: usuario.objetivo || "",
        imagenPerfil: usuario.imagenPerfil || "/default-avatar.png",
        rol: usuario.rol || "",
      });
    }
  }, [usuario]);
  


  //EFECTO CLAVE: Ocultar header cuando el modal se abre
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

  const manejarImagen = async (e) => {
    const archivo = e.target.files[0];
    if(!archivo) return;

    try {
      const data = await subirImagenPerfil(usuario.id, archivo);
      const nuevaRuta =data.imagen;

      const perfilActualizado = {...perfil,ImagenPerfil: nuevaRuta};
      setPerfil(perfilActualizado);


      const usuarioActualizado = {...usuario, imagenPerfil: nuevaRuta};
      localStorage.setItem("usuario", JSON.stringify(usuarioActualizado));
    }catch (error) {
      alert("Error al subir la imagen de perfil");
    }
  };

  const guardarCambios = async () => {
    try {
      const userId = usuario.id;
      
  
      const data = await putData(`Usuario/usuarios/${userId}/actualizar`, perfil);
      onGuardar(data.usuario);
    } catch (error) {
      console.error("Error al guardar los cambios del perfil:", error);
      alert("No se pudo guardar el perfil");
    }
  };
  

  return (
    <div className="perfil-container">
        <div className="editar">
          <h2>Editar Perfil</h2>
          <button onClick={cerrarModal}>X</button>
        </div>
      <div className="perfil-base">
        <div className="perfil-foto"> 
        <label htmlFor="imagen-upload" className="foto-wrapper">
          <img
            src={perfil.ImagenPerfil || "/default-avatar.png"}
            alt="Foto de perfil"
            className="foto-perfil"
          />
          <div className="icono-camara">📷</div>
        </label>
        <input 
          id='imagen-upload' 
          type="file" 
          accept="image/*" 
          onChange={manejarImagen} 
          style={{ display: 'none' }}
        />
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
