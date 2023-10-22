import axios from "../../config/axiosConfig";

// ************ APIs Publicas ************

// Funcion salir sesion usuario
const logoutService = () => {
  localStorage.removeItem('userInfo');
  return null;
};

// API inicio de sesion usuario
const loginService = async (user) => {
  const { data } = await axios.post('/api/users/login', user);
  if (data) {
    localStorage.setItem('userInfo', JSON.stringify(data));
  }
  return data;
};

// API registrar usuario
const registerService = async (user) => {
  const { data } = await axios.post('/api/users', user);
  if (data) {
    localStorage.setItem('userInfo', JSON.stringify(data));
  }
  return data;
};

// ************ APIs Privada ************

// API actualizar perfil usuario
const updateProfileService = async (user, token) => {
  const { data } = await axios.put('/api/users', user, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (data) {
    localStorage.setItem('userInfo', JSON.stringify(data));
  }
  return data;
};



// API eliminar usuario
const deleteProfileService = async (token) => {
  const { data } = await axios.delete('/api/users', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (data) {
    localStorage.removeItem('userInfo');
  }
  return data;
};

// API cambiar contraseña
const changePasswordService = async (passwords, token) => {
  const { data } = await axios.put('/api/users/password', passwords, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export {
  logoutService,
  loginService,
  updateProfileService,
  deleteProfileService,
  changePasswordService,
  registerService,
};
