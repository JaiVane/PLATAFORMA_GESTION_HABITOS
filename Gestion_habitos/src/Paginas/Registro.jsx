import React from "react";
import '../Estilos/Registro.css';
//import { Link } from "react-router-dom";
import IconGoogle from "../Componentes/Iconos/IconoGoogle";
import IconFacebook from "../Componentes/Iconos/IconoFacebook";

export default function Registro({onCerrar, onVolverLogin}) {
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
              <input type="text" placeholder="Ingresa tu nombre" required />
            </div>

            <div className="input-group">
              <label>Correo Electrónico</label>
              <input type="email" placeholder="Ingresa tu correo" required />
            </div>

            <div className="input-group">
              <label>Nombre de Usuario</label>
              <input type="text" placeholder="Crea un usuario" required />
            </div>

            <div className="input-group">
              <label>Contraseña</label>
              <input type="password" placeholder="Crea una contraseña" required />
            </div>

            <button className="btn-registrar">Registrarse</button>
            
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