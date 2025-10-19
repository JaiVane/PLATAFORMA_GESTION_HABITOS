import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import Registro from './Registro';
import '../Estilos/Bienvenida.css';
import Footer from '../Componentes/Footer';

export default function Bienvenida() {
  const navigate = useNavigate();
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [mostrarRegistro, setMostrarRegistro] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (mostrarLogin || mostrarRegistro) {
      body.classList.add('body-bloqueado'); // Desactivar scroll
    } else {
      body.classList.remove('body-bloqueado'); // Activar scroll
    }
    return () => body.classList.remove('body-bloqueado');
  }, [mostrarLogin, mostrarRegistro]);

  return (
    <div className="bienvenida-container">
      <header className="header">
        <h2>HabiQuest</h2>
        <nav className="Botones">
          <button onClick={() => setMostrarLogin(true)}>Iniciar Sesión</button>
        </nav>
      </header>

      <section className="Fondo">
        <div className="video-background">
          <video autoPlay loop muted playsInline className="background-video">
            <source src="/video/futuro.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="titulo">
          <h1>Bienvenido a HabiQuest</h1>
          <p>
            Tu camino hacia una vida más organizada y saludable comienza aquí.
            Conquista tus hábitos y mejora tu vida.
          </p>
        </div>
      </section>

      <section className="info-section">
        {[
          { title: "¿Qué es HabiQuest?", text: "Una plataforma gamificada para ayudarte a construir hábitos saludables y sostenibles." },
          { title: "Misión", text: "Empoderar a las personas para mejorar su vida diaria a través de rutinas motivadoras y recompensas." },
          { title: "Propósito", text: "Convertir el crecimiento personal en una experiencia divertida, constante y transformadora." }
        ].map((item, index) => (
          <div className="info-card" key={index}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <Footer />

      {/* --- Modales de Login y Registro --- */}
      {mostrarLogin && !mostrarRegistro && (
        <Login
          onCerrar={() => setMostrarLogin(false)}
          onIrARegistro={() => {
            setMostrarLogin(false);
            setMostrarRegistro(true);
          }}
        />
      )}

      {mostrarRegistro && (
        <Registro
          onCerrar={() => setMostrarRegistro(false)}
          onVolverLogin={() => {
            setMostrarRegistro(false);
            setMostrarLogin(true);
          }}
        />
      )}
    </div>
  );
}
