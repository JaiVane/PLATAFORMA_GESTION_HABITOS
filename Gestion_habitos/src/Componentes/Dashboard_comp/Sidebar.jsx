import '../../Estilos/Dashboard_style/Sidebar.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faClipboardList,
  faBullseye,
  faChartLine,
  faPuzzlePiece,
  faMedal,
  faChartBar,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import imgLogo from '../../assets/logoall.png';


export default function Sidebar() {
    const [expandido, setExpandido] = useState(true);

    const menuItems = [
        { label: 'Inicio', icon: faHouse, path: '/dashboard/paginaPrincipal' },
        { label: 'Hábitos', icon: faClipboardList, path: '/dashboard/habitos' },
        {label: 'Mis Metas', icon: faStar, path: '/dashboard/metas' },
        { label: 'Retos', icon: faBullseye, path: '/dashboard/retos' },
        { label: 'Recompensas', icon: faMedal, path: '/dashboard/recompensas' },
        { label: 'Estadísticas', icon: faChartLine, path: '/dashboard/estadisticas' },
        
       
        
    ];
    return (
        <aside className={`sidebar ${expandido ? 'expandido' : 'colapsado'}`}
        onMouseEnter={() => setExpandido(true)}
        onMouseLeave={() => setExpandido(false)}>

        <div className="sidebar-logo">
            <img  src= {imgLogo} alt="logoHabiQuest"  className='logo-img'/>
            {expandido && <span className={`logo-text ${expandido ? 'visible' : 'oculto'}`}>HabiQuest</span>}
        </div>

        <ul className="menu">
            {menuItems.map((item,index) => (
                <li key={index} >
                    <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                        `menu-item ${isActive ? 'activo' : ''}`
                        }>
                        <span className="icon"><FontAwesomeIcon icon={item.icon}/></span>
                        {expandido && <span className="label">{item.label}</span>}
                    </NavLink>
                </li>
            ))}
        </ul>
        </aside>
    );
}
