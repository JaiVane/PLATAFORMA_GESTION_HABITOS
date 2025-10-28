import { useState, useEffect } from "react";
import "../../Estilos/Metas/Metas.css";



const Metas = ({ habitos = [] }) => {
  const [metas, setMetas] = useState([]);
  const [nuevaMeta, setNuevaMeta] = useState({
    titulo: "",
    descripcion: "",
    fechaFinal: "",
    habitosAsociados: [],
  });
  const [metaEnEdicion, setMetaEnEdicion] = useState(null);

  // Cargar metas guardadas al iniciar
  useEffect(() => {
    const metasGuardadas = JSON.parse(localStorage.getItem("metas")) || [];
    setMetas(metasGuardadas);
  }, []);

  // Guardar metas al cambiar
  useEffect(() => {
    localStorage.setItem("metas", JSON.stringify(metas));
  }, [metas]);

  // Manejar envío del formulario
  const manejarEnvio = (e) => {
    e.preventDefault();

    if (!nuevaMeta.titulo || !nuevaMeta.descripcion || !nuevaMeta.fechaFinal) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    const metaFinal = {
      ...nuevaMeta,
      id: metaEnEdicion ? metaEnEdicion.id : Date.now(),
      progreso: 0,
    };

    if (metaEnEdicion) {
      setMetas(metas.map((meta) => (meta.id === metaEnEdicion.id ? metaFinal : meta)));
      setMetaEnEdicion(null);
    } else {
      setMetas([...metas, metaFinal]);
    }

    setNuevaMeta({
      titulo: "",
      descripcion: "",
      fechaFinal: "",
      habitosAsociados: [],
    });
  };

  // Seleccionar hábitos
  const manejarSeleccionHabito = (id) => {
    setNuevaMeta((prevMeta) => {
      const yaExiste = prevMeta.habitosAsociados.includes(id);
      return {
        ...prevMeta,
        habitosAsociados: yaExiste
          ? prevMeta.habitosAsociados.filter((h) => h !== id)
          : [...prevMeta.habitosAsociados, id],
      };
    });
  };

  return (
    <div className="contenedor-metas">
      <form className="formulario-meta" onSubmit={manejarEnvio}>
        <h2>{metaEnEdicion ? "Editar Meta" : "Crear Nueva Meta"}</h2>

        <input
          type="text"
          placeholder="Título de la Meta"
          value={nuevaMeta.titulo}
          onChange={(e) => setNuevaMeta({ ...nuevaMeta, titulo: e.target.value })}
        />

        <textarea
          placeholder="Descripción de la Meta"
          value={nuevaMeta.descripcion}
          onChange={(e) => setNuevaMeta({ ...nuevaMeta, descripcion: e.target.value })}
        ></textarea>

        <label>Fecha Final:</label>
        <input
          type="date"
          value={nuevaMeta.fechaFinal}
          onChange={(e) => setNuevaMeta({ ...nuevaMeta, fechaFinal: e.target.value })}
        />

        <h4>Selecciona los hábitos que aportan a esta meta:</h4>
        <div className="lista-habitos">
          {habitos.length === 0 ? (
            <p>No hay hábitos disponibles. Por favor crea algunos primero.</p>
          ) : (
            habitos.map((habito) => (
              <label key={habito.id} className="checkbox-habito">
                <input
                  type="checkbox"
                  checked={nuevaMeta.habitosAsociados.includes(habito.id)}
                  onChange={() => manejarSeleccionHabito(habito.id)}
                />
                {habito.titulo}
              </label>
            ))
          )}
        </div>

        <button type="submit">
          {metaEnEdicion ? "Guardar Cambios" : "Crear Meta"}
        </button>
      </form>

      <div className="lista-metas">
        <h3>Mis Metas</h3>
        {metas.length === 0 ? (
          <p>Aún no tienes metas registradas</p>
        ) : (
          metas.map((m) => (
            <div key={m.id} className="caja-meta">
              <h4>{m.titulo}</h4>
              <p>{m.descripcion}</p>
              <p><strong>Fecha límite:</strong> {m.fechaFinal}</p>
              <p>
                <strong>Hábitos vinculados:</strong>{" "}
                {m.habitosAsociados.length > 0
                  ? m.habitosAsociados
                      .map((id) => habitos.find((h) => h.id === id)?.titulo)
                      .join(", ")
                  : "Ninguno"}
              </p>
              <p><strong>Progreso:</strong> {m.progreso}%</p>

              <div className="acciones-meta">
                <button onClick={() => setMetaEnEdicion(m)}>Editar</button>
                <button onClick={() => setMetas(metas.filter(meta => meta.id !== m.id))}>
                  Eliminar
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Metas;
