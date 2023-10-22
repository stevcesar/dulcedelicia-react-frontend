import axios from 'axios';

// ************ APIs Privadas ************

// obtener todas las ordenes
const getAllOrders = async (token) => {
  const { data } = await axios.get(`/api/orders`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

// obtener orden por id
const getOrderById = async (id, token) => {
  const { data } = await axios.get(`/api/orders/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

// crear orden
const createOrder = async (order, token) => {
  const { data } = await axios.post(`/api/orders`, order, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

// eliminar orden
const deleteOrder = async (id, token) => {
  const { data } = await axios.delete(`/api/orders/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

// eliminar todas las ordenes
const deleteAllOrders = async (token) => {
  const { data } = await axios.delete(`/api/orders`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

// actualizar orden para enviar
const completeOrder = async (datas, token) => {
  const { data } = await axios.post(`/api/orders/${datas.orderItems._id}`, datas, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

// export
export {
  getAllOrders,
  getOrderById,
  createOrder,
  deleteOrder,
  deleteAllOrders,
  completeOrder,
};
