import axios from "../../config/axiosConfig";

// ************ APIs Publicas ************

// obtener todas las productos
const getcardsService = async ({ pageNumber, category, tag, search, sort }) => {
  const { data } = await axios.get(
    `https://dulcedeliciabackend.azurewebsites.net/api/products?pageNumber=${pageNumber}&category=${category}&tag=${tag}&search=${search}&sort=${sort}`
  );

  return data;
};

// obtener producto por id
const getCardByIdService = async (id) => {
  const { data } = await axios.get(`https://dulcedeliciabackend.azurewebsites.net/api/products/${id}`);
  return data;
};

// obtener tags
const getTagsService = async () => {
  const { data } = await axios.get('https://dulcedeliciabackend.azurewebsites.net/api/products/all/tags');
  return data;
};

// export funciones
export { getcardsService, getCardByIdService, getTagsService };
