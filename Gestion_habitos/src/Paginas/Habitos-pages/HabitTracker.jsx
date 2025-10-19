import React, { useState } from "react";
import '../../Estilos/Habitos_style/HabitTracker.css';

export default function HabitTracker({ habitos, onMarkDone }) {
  const [tab, setTab] = useState("Diaria");

  // Filtra los hábitos por la frecuencia seleccionada
  const filteredHabits = habitos.filter((h) => h.frecuencia === tab);

  // Número de columnas según la frecuencia
  const columns = tab === "Diaria" ? 31 : tab === "Semanal" ? 4 : 12;

  return (
    <div className="habit-tracker">
      <h2>Habit Tracker</h2>

      {/* Pestañas de frecuencia */}
      <div className="tabs">
        {["Diaria", "Semanal", "Mensual"].map((f) => (
          <button
            key={f}
            className={tab === f ? "active" : ""}
            onClick={() => setTab(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Tabla de hábitos */}
      <div className="tracker-table">
        <table>
          <thead>
            <tr>
              <th>Hábito</th>
              {Array.from({ length: columns }, (_, i) => (
                <th key={i}>
                  {tab === "Diaria"
                    ? i + 1
                    : tab === "Semanal"
                    ? `Semana ${i + 1}`
                    : `Mes ${i + 1}`}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredHabits.length === 0 ? (
              <tr>
                <td colSpan={columns + 1} style={{ textAlign: "center" }}>
                  No hay hábitos para esta frecuencia
                </td>
              </tr>
            ) : (
              filteredHabits.map((h) => (
                <tr key={h.id}>
                  <td className="sticky">{h.titulo}</td>
                  {Array.from({ length: columns }, (_, i) => (
                    <td
                      key={i}
                      className={h.progress.includes(i) ? "done" : ""}
                      onClick={() => onMarkDone(h.id, i)}
                    >
                      {h.progress.includes(i) ? "✓" : ""}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

