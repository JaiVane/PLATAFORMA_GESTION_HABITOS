import '../Estilos/PaginaPrincipal.css';

export default function PaginaPrincipal() {
  return (
    <main className="panel-principal">
      {/* Saludo y resumen de usuario */}
      <section className="bloque-saludo">
        <h2>Buen día, Valery 👋</h2>
        <p>Sábado 15 de Octubre | 3 días de racha</p>
        <div className="nivel-xp">
          <span>Nivel 5</span>
          <span>1,250 XP / 1,500 XP</span>
        </div>
      </section>

      {/* Contenedor de hábitos activos */}
      <section className="bloque-habitos">
        <h3>Hábitos activos</h3>
        <div className="contenedor-habitos">
          {/* Aquí se renderizarán los hábitos */}
        </div>
      </section>

      {/* Contenedor de progreso general */}
      <section className="bloque-progreso">
        <h3>Progreso general</h3>
        <div className="contenedor-progreso">
          {/* Aquí irán los contadores diarios/semanales/mensuales */}
        </div>
      </section>

      {/* Contenedor de motivación */}
      <section className="bloque-mensaje">
        <p>¡Sigue así Valery! Cada hábito continuo genera logros.</p>
      </section>

      {/* Contenedor de historial por días */}
      <section className="bloque-historial">
        <h3>Historial semanal</h3>
        <div className="contenedor-historial">
          {/* Aquí se mostrarán los días LUN, MAR, MIE, etc. */}
        </div>
      </section>

      {/* Contenedor de widgets */}
      <section className="bloque-widgets">
        <h3>Widgets</h3>
        <div className="contenedor-widgets">
          <div className="widget">📅 Calendario</div>
          <div className="widget">📊 Estadísticas</div>
          <div className="widget">📁 Historial</div>
          <div className="widget">📝 Generar informe</div>
        </div>
      </section>
    </main>
  );
}
