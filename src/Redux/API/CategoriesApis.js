import axios from "../../config/axiosConfig";

// ************ APIs Publicas ************

// obtener todas las categorias
const getCategoriesService = async () => {
  const { data } = await axios.get('/api/categories');
  return data;
};

export { getCategoriesService };
