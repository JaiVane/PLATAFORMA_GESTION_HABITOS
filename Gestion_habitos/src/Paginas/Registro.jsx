import React from "react";
import "../Estilos/Registro.css";

export default function Registro() {
return (
    <div className="registro-wrapper">
        <form className="form">
            <div className="flex-column">
                <label>Usuario</label>
            </div>
                <div className="inputForm">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    viewBox="0 0 32 32"
                    height={20}
                    >
                    <g data-name="Layer 3" id="Layer_3">
                        <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
                    </g>
                </svg>
                <input placeholder="Ingresar Usuario" className="input" type="text" />
                </div>

            <div className="flex-column">
                <label>Contraseña</label>
                </div>
                <div className="inputForm">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    viewBox="-64 0 512 512"
                    height={20}
                >
                    <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" />
                    <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" />
                </svg>
                <input
                placeholder="Ingresar Contraseña"
                className="input"
                type="password"
                />
                </div>

        <div className="flex-row">
            <div>
            <input type="radio" />
            <label className="label1">Recuérdame </label>
            </div>
            <span className="span">¿Olvidaste tu contraseña?</span>
        </div>

        <button className="button-submit">Iniciar Sesión</button>

        <p className="p">
            ¿No tienes cuenta? <span className="span">Regístrate</span>
        </p>

        <p className="p line">O con</p>

        <div className="social-buttons">
            <button className="btn google">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 48 48" height="18">
                <path fill="#EA4335" d="M24 9.5c3.94 0 6.64 1.7 8.17 3.13l6.03-5.87C34.84 3.64 29.83 1.5 24 1.5 14.86 1.5 6.96 6.83 3.13 14.18l7.27 5.66C11.96 13.13 17.47 9.5 24 9.5z"/>
                <path fill="#34A853" d="M46.15 24.57c0-1.36-.12-2.7-.35-4H24v7.57h12.4c-.53 2.85-2.14 5.26-4.56 6.89l7.02 5.46C43.39 36.68 46.15 31.1 46.15 24.57z"/>
                <path fill="#4A90E2" d="M10.4 28.18c-.63-1.85-.98-3.81-.98-5.81s.35-3.96.98-5.81L3.13 10.9C1.55 14.06.75 17.44.75 21s.8 6.94 2.38 10.1l7.27-2.92z"/>
                <path fill="#FBBC05" d="M24 46.5c5.83 0 10.74-1.92 14.32-5.24l-7.02-5.46C29.41 37.18 26.81 38 24 38c-6.53 0-12.04-3.63-14.6-8.93l-7.27 5.64C6.96 41.17 14.86 46.5 24 46.5z"/>
            </svg>
            Google
            </button>

            <button className="btn facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48">
                <path fill="#1877F2" d="M24 1C11.85 1 2 10.85 2 23c0 10.9 8.22 19.9 18.94 21.8V30.3h-5.7v-7.3h5.7v-5.4c0-5.6 3.36-8.7 8.5-8.7 2.46 0 5.04.44 5.04.44v5.56h-2.84c-2.8 0-3.67 1.74-3.67 3.52v4.58h6.25l-1 7.3h-5.25v14.5C37.78 42.9 46 33.9 46 23 46 10.85 36.15 1 24 1z"/>
            </svg>
            Facebook
            </button>
        </div>
        </form>
    </div>
    );
}
