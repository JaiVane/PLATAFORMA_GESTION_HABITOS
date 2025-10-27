// src/services/api.js
const API_URL = import.meta.env.VITE_API_URL;

//getData: función para obtener datos de un endpoint específico
export async function getData(endpoint) {
  const response = await fetch(`${API_URL}/${endpoint}`);
  if (!response.ok) throw new Error('Error al obtener los datos');
  return response.json();
}

//postData: función para enviar datos a un endpoint específico
export async function postData(endpoint, data) {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Error al enviar los datos');
  return response.json();
}

//putData: función para actualizar datos en un endpoint específico
export async function putData(endpoint, body) {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    method: "PUT",
    headers: {"Content-Type": "application/json",},
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error ${response.status}: ${errorText}`);
  }

  return await response.json();
}

//deleteData: función para eliminar datos en un endpoint específico
export async function deleteData(endpoint) {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error ${response.status}: ${errorText}`);
  }
  return await response.json();
}

//subirImagenPerfil: función para subir una imagen de perfil
export async function subirImagenPerfil(userId, archivo) {
  const formData = new FormData();
  formData.append("archivo", archivo);

  try {
    const response = await fetch(`${API_URL}/usuarios/${userId}/imagen`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error al subir la imagen");
    }

    return await response.json(); // { imagen: "/imagenesUsuarios/..." }
  } catch (error) {
    console.error("Error en subirImagenPerfil:", error);
    throw error;
  }
}

