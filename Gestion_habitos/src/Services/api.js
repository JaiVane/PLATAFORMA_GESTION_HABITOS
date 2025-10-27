// src/services/api.js
const API_URL = import.meta.env.VITE_API_URL;

export async function getData(endpoint) {
  const response = await fetch(`${API_URL}/${endpoint}`);
  if (!response.ok) throw new Error('Error al obtener los datos');
  return response.json();
}

export async function postData(endpoint, data) {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Error al enviar los datos');
  return response.json();
}
