import React from "react";
import IconoUser from "../Componentes/Iconos/IconoUser";
import IconPassword from "../Componentes/Iconos/IconoPassword";
import IconGoogle from "../Componentes/Iconos/IconoGoogle";
import IconFacebook from "../Componentes/Iconos/IconoFacebook";
import '../Estilos/Login.css';
import { useNavigate } from "react-router-dom";
import { postData } from "../Services/api";

import	{ useState } from "react";
export default function Login({ onCerrar, onIrARegistro }) {
    
    const navigate = useNavigate();

    const[email,setEmail]= useState('');
    const[password,setPassword]= useState('');


    const handleLogin = async (e) => {
      e.preventDefault();
    
      try {
        console.log("Intentando iniciar sesión con:", { email, password });
        const data = await postData("auth/login", {email,password,});
        console.log("Respuesta del login:", data);

        // Guardar token y usuario en localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("usuario", JSON.stringify(data.usuario));
      
        alert("Inicio de sesión exitoso");
        navigate("/dashboard/paginaPrincipal");
      } catch (error) {
        console.error("Error al conectar con la API:", error);
        alert("Usuario o contraseña incorrectos o error del servidor");
      }
    };



    return (
      <div className="modal-fondo">
        <div className="modal-base">
          <div className="login-header">
            <h2>HabiQuest</h2>
            <button className="btn-cerrar" onClick={onCerrar}>✕</button>
          </div>
          <form className="form login-modal">
          <div className="flex-column">
            <label>Email </label>
            <div className="inputForm">
            <IconoUser/>
              <input 
              placeholder="Ingresar Correo Electrónico" 
              className="input" 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
  
          <div className="flex-column">
            <label>Contraseña</label>
            <div className="inputForm">
              <IconPassword/>
              <input 
              placeholder="Ingresar Contraseña" 
              className="input" 
              type="password" 
              value ={password}
              onChange={(e) => setPassword(e.target.value)}/>
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