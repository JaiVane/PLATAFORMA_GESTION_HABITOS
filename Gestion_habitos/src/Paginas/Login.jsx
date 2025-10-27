import React from "react";
import IconoUser from "../Componentes/Iconos/IconoUser";
import IconPassword from "../Componentes/Iconos/IconoPassword";
import IconGoogle from "../Componentes/Iconos/IconoGoogle";
import IconFacebook from "../Componentes/Iconos/IconoFacebook";
import '../Estilos/Login.css';
import { useNavigate } from "react-router-dom";
import {postData} from "../Services/api";
import {useRef} from "react";

import	{ useState } from "react";
export default function Login({ onCerrar, onIrARegistro }) {
    
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const navigate = useNavigate();
    const[email,setEmail]= useState('');
    const[password,setPassword]= useState('');

    const handleLogin = async () => {
      if (!email || !password) {
        alert("Por favor ingresa tu correo y contraseña.");
        return;
      }
      
      try {
        const data = await postData("auth/login", { email, password }); 
        console.log("Respuesta del servidor:", data);
        if (!data.token || !data.usuario) {
          alert("Respuesta inválida del servidor.");
          return;
        }
        //guarda el usuario en localstorage para usarlo en el dashboard
        localStorage.setItem("token", data.token);
        localStorage.setItem("usuario", JSON.stringify(data.usuario));
        console.log("Usuario logueado:", data.usuario);
        navigate("/dashboard/paginaPrincipal");
      } catch (error) {
        // Captura el mensaje del backend si existe
        const mensaje = error.message?.includes("Usuario o contraseña") 
          ? "Usuario o contraseña incorrectos." 
          : "Error al conectar con la API.";
          alert(mensaje);
          console.error("Error al conectar con la API:", error);
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
            <label>Email</label>
            <div className="inputForm">
            <IconoUser/>
              <input 
              placeholder="Ingresar Correo Electrónico" 
              className="input" 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              ref={emailRef}
              onKeyDown={(e) => {
                if(e.key === 'Enter') {
                  e.preventDefault();
                  passwordRef.current.focus();
                }
              }}
              />
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
              onChange={(e) => setPassword(e.target.value)}
              ref={passwordRef}
              onKeyDown={(e) => {
                if(e.key === 'Enter') {
                  e.preventDefault();
                  handleLogin();
                }
              }}
              />
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