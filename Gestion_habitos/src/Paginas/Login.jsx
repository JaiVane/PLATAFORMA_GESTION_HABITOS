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
        // Traemos la lista de usuarios desde el backend
        const usuarios = await fetch("https://localhost:7140/api/Usuario");
        const data = await usuarios.json();
    
        // Buscamos si existe un usuario con ese email y password
        const usuarioEncontrado = data.find(
          (u) => u.email === email && u.password === password
        );
    
        if (usuarioEncontrado) {
          alert("Inicio de sesión exitoso ");
          navigate("/dashboard/paginaPrincipal");
        } else {
          alert("Usuario o contraseña incorrectos ");
        }
    
      } catch (error) {
        console.error("Error al conectar con la API:", error);
        alert("No se pudo conectar con el servidor ");
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
            <label>Email o Usuario</label>
            <div className="inputForm">
            <IconoUser/>
              <input 
              placeholder="Ingresar Usuario" 
              className="input" 
              type="text"
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