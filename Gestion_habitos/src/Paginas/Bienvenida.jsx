import {useNavigate} from 'react-router-dom';
import '../Estilos/Bienvenida.css';

export default function Bienvenida() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="bienvenida-container">
            <header className='header'>
                <h2>HabiQuest</h2>
                <nav className='Botones'>
                    <button onClick={()=> navigate('/login')}>Iniciar Sesion </button>
                    <button onClick={()=> navigate('/registro')}>Registrarse </button>
                </nav>
            </header>

            <section className='Fondo'>
                <div className='video-background'>
                    <video autoPlay loop muted playsInline className="background-video">
                        <source src="/assets/213027_small.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className='titulo'>
                    <h1>Bienvenido a HabiQuest</h1>
                    <p>
                        Tu camino hacia una vida más organizada y saludable comienza aquí.
                        Conquista tus habitos y mejora tu vida.
                    </p>
                </div>
            </section>
            

            <section className="info-section">
            {[
                { title: "¿Qué es HabitQuest?", text: "Una plataforma gamificada para ayudarte a construir hábitos saludables y sostenibles." },
                { title: "Misión", text: "Empoderar a las personas para mejorar su vida diaria a través de rutinas motivadoras y recompensas." },
                { title: "Propósito", text: "Convertir el crecimiento personal en una experiencia divertida, constante y transformadora." }
            ].map((item, index) => (
                <div className="info-card" key={index}>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                </div>
            ))}
            </section>

            <footer className="footer">
                <p>Contacto: habitquest@correo.com</p>
                <p>Creado por Johan Briñez, Jaider Vanegas y Vallery Miranda  • Valledupar, Colombia</p>
            </footer>
            
            </div>
        </div>
    
    );
}