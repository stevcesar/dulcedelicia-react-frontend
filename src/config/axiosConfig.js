// axiosConfig.js
import axios from 'axios';

// Define la URL base que deseas utilizar en todas las solicitudes
const baseURL = process.env.API_URL; // Puedes definir API_URL en tu archivo .env

// Crea una instancia de Axios con la URL base configurada
const instance = axios.create({
  baseURL,
  // Puedes agregar otras configuraciones aquí, como encabezados comunes, etc.
});

export default instance;
