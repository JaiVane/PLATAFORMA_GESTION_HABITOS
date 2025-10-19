import Header from '../Componentes/Dashboard_comp/Header';
import Sidebar from '../Componentes/Dashboard_comp/Sidebar';
import '../Estilos/Dashboard_style/Dashboard.css';
import PaginaPrincipal from '../Componentes/Dashboard_comp/PaginaPrincipal';

export default  function Dashboard() {

    return (
        <div className="dashboard-container">
            
            <h2>bienvenida</h2>
            <div className="dashboard-content">
                <Header />
                <PaginaPrincipal />
            </div>
        </div>

    );
}