import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Dirección de correo electrónico no válida')
    .required('Required')
    .trim(),
  password: Yup.string()
    .min(6, 'La contraseña es demasiado corta; debe tener un mínimo de 8 caracteres.')
    .required('Required')
    .max(20, 'La contraseña es demasiado larga; debe tener un máximo de 20 caracteres.')
    .matches(/^\S*$/, 'No se permiten espacios en blanco'),
});

export const registerSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, 'El nombre es demasiado corto; debe tener un mínimo de 3 caracteres.')
    .required('Required')
    .max(20, 'El nombre es demasiado largo; debe tener un máximo de 20 caracteres.'),
  email: Yup.string()
    .email('Dirección de correo invalida')
    .required('Required')
    .trim(),
  password: Yup.string()
    .min(6, 'La contraseña es demasiado corta; debe tener un mínimo de 8 caracteres.')
    .required('Required')
    .max(20, 'La contraseña es demasiado larga; debe tener un máximo de 20 caracteres.')
    .matches(/^\S*$/, 'No se permiten espacios en blanco'),
  phone: Yup.string().min(8, 'Numero de telefono invalido').required('Required'),
});

export const updateProfileSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, 'El nombre es demasiado corto; debe tener un mínimo de 3 caracteres.')
    .required('Required')
    .max(20, 'El nombre es demasiado largo; debe tener un máximo de 20 caracteres.'),
  email: Yup.string()
    .email('Dirección de correo invalida')
    .required('Required')
    .trim(),
  phone: Yup.string().min(8, 'Numero de telefono invalido').required('Required'),
});

// cambiar contraseña
export const changePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .min(6, 'La contraseña es demasiado corta; debe tener un mínimo de 8 caracteres.')
    .required('Required')
    .max(20, 'La contraseña es demasiado larga; debe tener un máximo de 20 caracteres.')
    .trim('La contraseña no debe contener espacios'),
  newPassword: Yup.string()
    .min(6, 'La contraseña es demasiado corta; debe tener un mínimo de 8 caracteres.')
    .required('Required')
    .max(20, 'La contraseña es demasiado larga; debe tener un máximo de 20 caracteres.')
    .trim('La contraseña no debe contener espacios'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Las contraseñas deben coincidir')
    .required('Required'),
});

// validación de información de tarjeta
export const cardInfoSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, 'El nombre es demasiado corto; debe tener un mínimo de 3 caracteres.')
    .required('Required')
    .max(20, 'El nombre es demasiado largo; debe tener un máximo de 20 caracteres.'),
  phone: Yup.string()
    .min(8, 'Numero de telefono invalido')
    .required('Required')
    .matches(/^\S*$/, 'No se permiten espacios en blanco'),
  address: Yup.string()
    .required('Required')
    .max(200, 'La dirección es demasiado larga; debe tener un máximo de 200 caracteres.'),
  paymentmethod: Yup.string()
    .default('Forma de Pago Contra Entrega')
});
