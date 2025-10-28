import { getData, postData, putData, deleteData } from "./api";

// Obtener todos los hábitos de un usuario
export async function getHabitosPorUsuario(usuarioId) {
  return await getData(`Habitos/usuario/${usuarioId}`);
}

// Agregar un nuevo hábito
export async function crearHabito(data) {
  return await postData("Habitos", data);
}

// Editar un hábito existente
export async function actualizarHabito(id, data) {
  return await putData(`Habitos/${id}`, data);
}

// Eliminar un hábito
export async function eliminarHabito(id) {
  return await deleteData(`Habitos/${id}`);
}

// Marcar hábito como cumplido
export async function marcarCumplido(id) {
  return await putData(`Habitos/cumplir/${id}`, {});
}
