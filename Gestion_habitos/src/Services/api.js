// src/services/api.js
const API_URL = import.meta.env.VITE_API_URL;
console.log("API_URL:", API_URL);

// Ejemplo de función para obtener datos de un endpoint
export async function getData(endpoint) {
  const response = await fetch(`${API_URL}/${endpoint}`);
  if (!response.ok) throw new Error('Error al obtener los datos');
  return response.json();
}



// Ejemplo de función para enviar datos a un endpoint
export async function postData(endpoint, data) {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error ${response.status}: ${errorText}`);
  }

  return await response.json();
}

