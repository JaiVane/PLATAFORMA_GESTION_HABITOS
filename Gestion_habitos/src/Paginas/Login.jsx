import React from "react";
import IconoUser from "../Componentes/Iconos/IconoUser";
import IconPassword from "../Componentes/Iconos/IconoPassword";
import IconGoogle from "../Componentes/Iconos/IconoGoogle";
import IconFacebook from "../Componentes/Iconos/IconoFacebook";
import '../Estilos/Login.css';
import { useNavigate } from "react-router-dom";


export default function Login({ onCerrar, onIrARegistro }) {
    
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); 
        // Lógica de autenticación aquí
        // Si la autenticación es exitosa, redirigir a la página principal
        const usuarioValido =true; // Reemplazar con la lógica real de validación
        if(usuarioValido){
          navigate('/dashboard/paginaPrincipal');
        }else{
          alert('Usuario o Contraseña Incorrectos')
        }
        

    }


    return (
      <div className="modal-fondo">
        <div className="modal-base">
          <div className="login-header">
            <h2>HabiQuest</h2>
            <button className="btn-cerrar" onClick={onCerrar}>✕</button>
          </div>
          <form className="form login-modal">
          <div className="flex-column">
            <label>Email o Usuario</label>
            <div className="inputForm">
            <IconoUser/>
              <input placeholder="Ingresar Usuario" className="input" type="text" />
            </div>
          </div>
  
          <div className="flex-column">
            <label>Contraseña</label>
            <div className="inputForm">
              <IconPassword/>
              <input placeholder="Ingresar Contraseña" className="input" type="password" />
            </div>
          </div>
  
          <div className="flex-row">
            <div>
              <input type="radio" />
              <label className="label1">Recuérdame</label>
            </div>
            <span className="span">¿Olvidaste tu contraseña?</span>
          </div>
  
          <button className="button-submit" onClick={handleLogin}>Iniciar Sesión</button>
  
          <p className="p line">O con</p>
  
          <section className="social-buttons">
            <button className="btn google"><IconGoogle/></button>
            <button className="btn facebook"><IconFacebook/></button>
          </section>
          <p className="p">
            ¿No tienes cuenta?{" "}
            <span className="span" onClick={onIrARegistro}>
              Crear Cuenta
            </span>
          </p>
          </form>
          </div>
      </div>
    );
  }