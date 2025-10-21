import React, { useState } from 'react';
import HabitTracker from './HabitTracker';
import '../../Estilos/Habitos_style/AgregarHabitos.css';

const AgregarHabitos = () => {
  const [habito, setHabito] = useState({
    titulo: "",
    categoria: "",
    frecuencia: "",
    recordatorio: { diaSemana: "", diaMes: "", hora: "" },
  });

  const [habitos, setHabitos] = useState([]);
  const [habitoEnEdicion, setHabitoEnEdicion] = useState(null);

  // Filtros y búsqueda
  const [busqueda, setBusqueda] = useState("");
  const [tipoFiltro, setTipoFiltro] = useState(""); // Tipo de filtro: categoria o frecuencia
  const [valorFiltro, setValorFiltro] = useState(""); // Valor seleccionado del filtro

  const onMarkDone = (id, indexDia) => {
    const actualizados = habitos.map((h) => {
      if (h.id === id) {
        const progreso = h.progress.includes(indexDia)
          ? h.progress.filter((i) => i !== indexDia)
          : [...h.progress, indexDia];
        return { ...h, progress: progreso };
      }
      return h;
    });
    setHabitos(actualizados);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (!habito.titulo || !habito.categoria || !habito.frecuencia) {
      alert("Por favor completa todos los campos obligatorios");
      return;
    }

    const nuevoHabito = {
      ...habito,
      id: habitoEnEdicion !== null ? habitos[habitoEnEdicion].id : Date.now(),
      progress: habitoEnEdicion !== null ? habitos[habitoEnEdicion].progress : [],
    };

    if (habitoEnEdicion !== null) {
      const actualizados = habitos.map((h, i) =>
        i === habitoEnEdicion ? nuevoHabito : h
      );
      setHabitos(actualizados);
      setHabitoEnEdicion(null);
    } else {
      setHabitos([...habitos, nuevoHabito]);
    }

    setHabito({
      titulo: "",
      categoria: "",
      frecuencia: "",
      recordatorio: { diaSemana: "", diaMes: "", hora: "" },
    });
  };

  const manejarEdicion = (index) => {
    setHabito(habitos[index]);
    setHabitoEnEdicion(index);
  };

  const manejarEliminacion = (index) => {
    if (window.confirm("¿Deseas eliminar este hábito?")) {
      const nuevosHabitos = habitos.filter((_, i) => i !== index);
      setHabitos(nuevosHabitos);
    }
  };

  // Filtrado dinámico
  const habitosFiltrados = habitos.filter((h) => {
    const coincideNombre = h.titulo.toLowerCase().includes(busqueda.toLowerCase());
    let coincideFiltro = true;

    if (tipoFiltro === "categoria" && valorFiltro) {
      coincideFiltro = h.categoria === valorFiltro;
    } else if (tipoFiltro === "frecuencia" && valorFiltro) {
      coincideFiltro = h.frecuencia === valorFiltro;
    }

    return coincideNombre && coincideFiltro;
  });

  // Colores por frecuencia
  const colorFondo = (frecuencia) => {
    switch (frecuencia) {
      case "Diaria":
        return "#d0d7f4ff"; 
      case "Semanal":
        return "#f2c1d0ff"; // Azul claro
      case "Mensual":
        return "#faf8c4ff"; // Amarillo claro
      default:
        return "#f7fafc"; // Gris claro por defecto
    }
  };

  return (
    <div className="contenedor-habitos">
      {/* Formulario */}
      <form className="formulario-habito" onSubmit={manejarEnvio}>
        <h2>{habitoEnEdicion !== null ? "Editar Hábito" : "Agregar Hábito"}</h2>

        <input
          type="text"
          placeholder="Título del hábito"
          value={habito.titulo}
          onChange={(e) => setHabito({ ...habito, titulo: e.target.value })}
        />

        <select
          value={habito.categoria}
          onChange={(e) => setHabito({ ...habito, categoria: e.target.value })}
        >
          <option value="">Selecciona una categoría</option>
          <option value="salud">Salud</option>
          <option value="estudios">Estudios</option>
          <option value="trabajo">Trabajo</option>
          <option value="finanzas">Finanzas</option>
          <option value="personal">Desarrollo Personal</option>
          <option value="hogar">Hogar</option>
        </select>

        <select
          value={habito.frecuencia}
          onChange={(e) => setHabito({ ...habito, frecuencia: e.target.value })}
        >
          <option value="">Frecuencia</option>
          <option value="Diaria">Diaria</option>
          <option value="Semanal">Semanal</option>
          <option value="Mensual">Mensual</option>
        </select>

        {habito.frecuencia === "Semanal" && (
          <select
            value={habito.recordatorio.diaSemana}
            onChange={(e) =>
              setHabito({
                ...habito,
                recordatorio: {
                  ...habito.recordatorio,
                  diaSemana: e.target.value,
                },
              })
            }
          >
            <option value="">Día de la semana</option>
            {["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"].map((dia) => (
              <option key={dia}>{dia}</option>
            ))}
          </select>
        )}

        {habito.frecuencia === "Mensual" && (
          <input
            type="number"
            placeholder="Día del mes"
            min="1"
            max="31"
            value={habito.recordatorio.diaMes}
            onChange={(e) =>
              setHabito({
                ...habito,
                recordatorio: {
                  ...habito.recordatorio,
                  diaMes: e.target.value,
                },
              })
            }
          />
        )}

        <input
          type="time"
          value={habito.recordatorio.hora}
          onChange={(e) =>
            setHabito({
              ...habito,
              recordatorio: {
                ...habito.recordatorio,
                hora: e.target.value,
              },
            })
          }
        />

        <button type="submit">
          {habitoEnEdicion !== null ? "Guardar Cambios" : "Agregar Hábito"}
        </button>
      </form>

      {/* Buscador y filtro único */}
     <div>
      <div className="buscador-filtros">
         <h2> Mis Hábitos</h2>
        
        <input 
          type="text"
          placeholder="Buscar hábito..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        {/* Selección de tipo de filtro */}
        <select
          value={tipoFiltro}
          onChange={(e) => {
            setTipoFiltro(e.target.value);
            setValorFiltro(""); // reinicia el valor al cambiar tipo
          }}
        >
          <option value="">Filtrar por...</option>
          <option value="categoria">Categoría</option>
          <option value="frecuencia">Frecuencia</option>
        </select>

        {/* Filtro dinámico */}
        {tipoFiltro === "categoria" && (
          <select
            value={valorFiltro}
            onChange={(e) => setValorFiltro(e.target.value)}
          >
            <option value="">Todas las categorías</option>
            <option value="salud">Salud</option>
            <option value="estudios">Estudios</option>
            <option value="trabajo">Trabajo</option>
            <option value="finanzas">Finanzas</option>
            <option value="personal">Desarrollo Personal</option>
            <option value="hogar">Hogar</option>
          </select>
        )}

        {tipoFiltro === "frecuencia" && (
          <select
            value={valorFiltro}
            onChange={(e) => setValorFiltro(e.target.value)}
          >
            <option value="">Todas las frecuencias</option>
            <option value="Diaria">Diaria</option>
            <option value="Semanal">Semanal</option>
            <option value="Mensual">Mensual</option>
          </select>
        )}
      </div>

      {/* Resultados en cajitas */}
      <div className="cajitas-habitos">
        {habitosFiltrados.length === 0 ? (
          <p className="sin-habitos">No hay hábitos que coincidan</p>
        ) : (
          habitosFiltrados.map((h, i) => (
            <div
              key={h.id}
              className="caja-habito"
              style={{ backgroundColor: colorFondo(h.frecuencia) }}
            >
              <div className="info-habito">
                <h4>{h.titulo}</h4>
                <p>
                  <strong>Categoría:</strong> {h.categoria}
                </p>
                <p>
                  <strong>Frecuencia:</strong> {h.frecuencia}
                </p>
                
              </div>
              <div className="botones">
                <button className="btn-editar" onClick={() => manejarEdicion(i)}>
                  Editar
                </button>
                <button
                  className="btn-eliminar"
                  onClick={() => manejarEliminacion(i)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      </div>

      {/* Tracker debajo */}
      <HabitTracker habitos={habitos} onMarkDone={onMarkDone} />
    </div>
  );
};

export default AgregarHabitos;

