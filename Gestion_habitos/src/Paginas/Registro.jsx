import React from "react";
import '../Estilos/Registro.css';
//import { Link } from "react-router-dom";
import IconGoogle from "../Componentes/Iconos/IconoGoogle";
import IconFacebook from "../Componentes/Iconos/IconoFacebook";
import  { useState } from "react";
import { postData } from "../Services/api";


export default function Registro({onCerrar, onVolverLogin}) {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nombreUsuario, setNombreUsuario] = useState('');

    const handleRegistro = async (e) => {
      e.preventDefault();
    
      try {
        const data = await postData("auth/register", {
          nombre,
          email,
          password,
          nombreUsuario
          }); 
           //guarda el usuario en localstorage para usarlo en el dashboard
          localStorage.setItem("usuario", JSON.stringify(data.usuario));
          //si el backemd tambien devuelve un token, se guarda asi:
          if(data.token){
            localStorage.setItem("token", data.token);
          }
          alert("Registro exitoso");
          onVolverLogin();
      } catch (error) {
        console.error("Error al registrar:", error);
        alert("No se pudo conectar con el servidor");
      }
    };
    
  return (
    <div className="modal-fondo">
      <div className="modal-base registro-modal">
        <div className="registro-header">
          <h2>Crear Cuenta</h2>
          <button className="btn-cerrar" onClick={onCerrar}>✕</button>
        </div>

        <div className="registro-scroll">
          <form className="registro-form">
            <div className="input-group">

              <label>Nombre Completo</label>
              <input type="text" placeholder="Ingresa tu nombre" value={nombre} 
              onChange={e => setNombre(e.target.value)} />
            </div>

            <div className="input-group">
              <label>Correo Electrónico</label>
              <input type="email" placeholder="Ingresa tu correo" 
              value={email} onChange={e => setEmail(e.target.value)} />
            </div>

            <div className="input-group">
              <label>Nombre de Usuario</label>
              <input type="text" placeholder="Crea un nombre de usuario" 
              value={nombreUsuario} onChange={e => setNombreUsuario(e.target.value)} />
            </div>

            <div className="input-group">
              <label>Contraseña</label>
              <input type="password" placeholder="Crea una contraseña" 
              value={password} onChange={e => setPassword(e.target.value)} />
            </div>

            <button className="btn-registrar" onClick={handleRegistro}>Registrarse</button>
            
            <p className="p line">O con</p>
            <section className="social-buttons">
              <button className="btn google"><IconGoogle/></button>
              <button className="btn facebook"><IconFacebook/></button>
            </section>

            <p className="texto-login">
            ¿Ya tienes una cuenta?{" "}
            <span className="link" onClick={onVolverLogin}>
              Iniciar Sesion
            </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}