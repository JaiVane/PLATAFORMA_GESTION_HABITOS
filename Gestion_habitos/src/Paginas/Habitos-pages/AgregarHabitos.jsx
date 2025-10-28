import React, { useState } from 'react';
import '../../Estilos/Habitos_style/AgregarHabitos.css';
import {
  getHabitosPorUsuario,
  crearHabito,
  actualizarHabito,
  eliminarHabito,
} from "../../Services/habitosService";

const AgregarHabitos = () => {
  const [habito, setHabito] = useState({
    titulo: "",
    categoria: "",
    frecuencia: "",
    recordatorio: { diaSemana: "", diaMes: "", hora: "" },
  });

  const [habitos, setHabitos] = useState([]);
  const [habitoEnEdicion, setHabitoEnEdicion] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [tipoFiltro, setTipoFiltro] = useState("");
  const [valorFiltro, setValorFiltro] = useState("");

  // 🔹 Cargar hábitos desde la API
  const cargarHabitos = async (usuarioId, token) => {
    try {
      const data = await getHabitosPorUsuario(usuarioId, token);
      setHabitos(data);
    } catch (error) {
      console.error("Error al cargar hábitos:", error);
    }
  };

  // 🔹 Cargar al iniciar
  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const token = localStorage.getItem("token");
    if (usuario && usuario.id && token) {
      cargarHabitos(usuario.id, token);
    } else {
      console.warn("No hay usuario autenticado en localStorage");
    }
  }, []);

  // 🔹 Guardar o editar hábito
  const manejarEnvio = async (e) => {
    e.preventDefault();
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const token = localStorage.getItem("token");

    if (!usuario || !usuario.id || !token) {
      alert("Debes iniciar sesión para agregar hábitos");
      return;
    }

    if (!habito.titulo || !habito.categoria || !habito.frecuencia) {
      alert("Por favor completa todos los campos obligatorios");
      return;
    }

    const nuevoHabito = {
      nombre: habito.titulo,
      frecuencia: habito.frecuencia,
      usuarioId: usuario.id,
      categoriaId: obtenerCategoriaId(habito.categoria),
    };

    try {
      if (habitoEnEdicion !== null) {
        const habitoExistente = habitos[habitoEnEdicion];
        await actualizarHabito(habitoExistente.id, nuevoHabito, token);
        alert("Hábito actualizado correctamente");
      } else {
        await crearHabito(nuevoHabito, token);
        alert("Hábito agregado correctamente");
      }

      await cargarHabitos(usuario.id, token);
      setHabito({ titulo: "", categoria: "", frecuencia: "", recordatorio: { diaSemana: "", diaMes: "", hora: "" } });
      setHabitoEnEdicion(null);
    } catch (error) {
      console.error("Error al guardar hábito:", error);
      alert("Error al guardar el hábito");
    }
  };

  // 🔹 Editar hábito
  const manejarEdicion = (index) => {
    const h = habitos[index];
    setHabito({
      titulo: h.nombre,
      categoria: h.categoria?.nombre || "",
      frecuencia: h.frecuencia,
      recordatorio: { diaSemana: "", diaMes: "", hora: "" },
    });
    setHabitoEnEdicion(index);
  };

  // 🔹 Eliminar hábito
  const manejarEliminacion = async (index) => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (window.confirm("¿Deseas eliminar este hábito?")) {
      try {
        const token = localStorage.getItem("token");
        const habitoId = habitos[index].id;
        await eliminarHabito(habitoId, token);
        await cargarHabitos(usuario.id, token);
        alert("Hábito eliminado correctamente");
      } catch (error) {
        console.error("Error al eliminar hábito:", error);
      }
    }
  };

  // 🔹 Filtros y búsqueda
  const habitosFiltrados = habitos.filter((h) => {
    const coincideNombre = h.nombre?.toLowerCase().includes(busqueda.toLowerCase());
    let coincideFiltro = true;
    if (tipoFiltro === "categoria" && valorFiltro) {
      coincideFiltro = h.categoria?.nombre === valorFiltro;
    } else if (tipoFiltro === "frecuencia" && valorFiltro) {
      coincideFiltro = h.frecuencia === valorFiltro;
    }
    return coincideNombre && coincideFiltro;
  });

  const colorFondo = (frecuencia) => {
    switch (frecuencia) {
      case "Diaria": return "#d0d7f4ff";
      case "Semanal": return "#f2c1d0ff";
      case "Mensual": return "#faf8c4ff";
      default: return "#f7fafc";
    }
  };

  const obtenerCategoriaId = (categoria) => {
    const mapa = {
      salud: 1, estudios: 2, trabajo: 3, finanzas: 4, personal: 5, hogar: 6
    };
    return mapa[categoria] || 1;
  };

  return (
    <div className="contenedor-habitos">
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
        <button type="submit">
          {habitoEnEdicion !== null ? "Guardar Cambios" : "Agregar Hábito"}
        </button>
      </form>

      {/* 🔹 Filtros y listado */}
      <div className="buscador-filtros">
        <h2>Mis Hábitos</h2>
        <input
          type="text"
          placeholder="Buscar hábito..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <select
          value={tipoFiltro}
          onChange={(e) => {
            setTipoFiltro(e.target.value);
            setValorFiltro("");
          }}
        >
          <option value="">Filtrar por...</option>
          <option value="categoria">Categoría</option>
          <option value="frecuencia">Frecuencia</option>
        </select>
        {tipoFiltro === "categoria" && (
          <select value={valorFiltro} onChange={(e) => setValorFiltro(e.target.value)}>
            <option value="">Todas las categorías</option>
            <option value="Salud">Salud</option>
            <option value="Estudios">Estudios</option>
            <option value="Trabajo">Trabajo</option>
            <option value="Finanzas">Finanzas</option>
            <option value="Desarrollo Personal">Desarrollo Personal</option>
            <option value="Hogar">Hogar</option>
          </select>
        )}
        {tipoFiltro === "frecuencia" && (
          <select value={valorFiltro} onChange={(e) => setValorFiltro(e.target.value)}>
            <option value="">Todas las frecuencias</option>
            <option value="Diaria">Diaria</option>
            <option value="Semanal">Semanal</option>
            <option value="Mensual">Mensual</option>
          </select>
        )}
      </div>

      {/* 🔹 Mostrar hábitos */}
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
                <h4>{h.nombre}</h4>
                <p><strong>Categoría:</strong> {h.categoria?.nombre}</p>
                <p><strong>Frecuencia:</strong> {h.frecuencia}</p>
              </div>
              <div className="botones">
                <button className="btn-editar" onClick={() => manejarEdicion(i)}>
                  Editar
                </button>
                <button className="btn-eliminar" onClick={() => manejarEliminacion(i)}>
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

export default AgregarHabitos;
