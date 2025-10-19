//import '../../Estilos/Dashboard_style/Sidebar.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


export default function Sidebar() {
    const [expandido, setExpandido] = useState(true);

    const menuItems = [
        { label: 'Inicio', icon: '🏠', path: '/' },
        { label: 'Hábitos', icon: '📋', path: '/habitos' },
        { label: 'Retos', icon: '🎯', path: '/retos' },
        { label: 'Estadísticas', icon: '📈', path: '/estadisticas' },
        { label: 'Misiones', icon: '🧩', path: '/misiones' },
        { label: 'Recompensas', icon: '🏅', path: '/recompensas' },
        { label: 'Reportes', icon: '📊', path: '/reportes' },
        { label: 'Notificaciones', icon: '🔔', path: '/notificaciones' },
    ];
    return (
        <aside className={`sidebar ${expandido ? 'expandido' : 'colapsado'}`}
        onMouseEnter={() => setExpandido(true)}
        onMouseLeave={() => setExpandido(false)}>

        <div className="sidebar-logo">
            {/*<img src="/assets/logo.svg" alt="HabiQuest" className="logo-icon" />*/}
            {expandido && <span className="logo-text">HabiQuest</span>}
        </div>

        <ul className="menu">
            {menuItems.map((item,index) => (
                <li key={index} >
                    <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                        `menu-item ${isActive ? 'activo' : ''}`
                        }>
                        <span className="icon">{item.icon}</span>
                        {expandido && <span className="label">{item.label}</span>}
                    </NavLink>
                </li>
            ))}
        </ul>
        </aside>
    );
}
