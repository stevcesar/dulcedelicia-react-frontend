import { logoutAction } from './Actions/UserAction';

export const ErrorsAction = (error, dispatch, action) => {
  const message =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
  if (message === 'No autorizado, el token falló') {
    dispatch(logoutAction());
  }
  return dispatch({ type: action, payload: message });
};

// Protección API token
export const tokenProtection = (getState) => {
  const {
    userLogin: { userInfo },
  } = getState();
  if (!userInfo?.token) {
    return null;
  } else {
    return userInfo?.token;
  }
};
