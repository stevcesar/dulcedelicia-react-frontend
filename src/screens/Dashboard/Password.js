import React, { useEffect } from 'react';
import Input from '../../components/Input';
import SideBar from './SideBar';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { changePasswordSchema } from '../../components/Validation';
import { changePasswordAction } from '../../Redux/Actions/UserAction';

function Password() {
  const dispatch = useDispatch();

  const {
    changePassword: { loading, error, success },
  } = useSelector((state) => state);

  // validar usuario
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(changePasswordSchema),
  });

  const handlerSubmit = (data) => {
    dispatch(
      changePasswordAction({
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      })
    );
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'CHANGE_PASSWORD_RESET' });
    }
    // si tiene éxito restablecer el formulario
    if (success) {
      setValue('oldPassword', '');
      setValue('newPassword', '');
      setValue('confirmPassword', '');
      dispatch({ type: 'CHANGE_PASSWORD_RESET' });
    }
  }, [dispatch, error, success, setValue]);
  return (
    <SideBar>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Cambiar Contraseña</h2>
        <Input
          type="password"
          placeHolder="*******"
          label="Contraseña Anterior          "
          register={register('oldPassword')}
          errors={errors.oldPassword}
          name={'oldPassword'}
        />
        <Input
          type="password"
          placeHolder="********"
          label="Nueva Contraseña"
          register={register('newPassword')}
          errors={errors.newPassword}
          name={'newPassword'}
        />
        <Input
          type="password"
          placeHolder="********"
          label="Confirmar Contraseña"
          register={register('confirmPassword')}
          errors={errors.confirmPassword}
          name={'confirmPassword'}
        />
        <div className="flex justify-end items-center my-4">
          <button
            disabled={loading}
            onClick={handleSubmit(handlerSubmit)}
            className="bg-main sm:w-auto w-full font-medium text-white py-3 px-6 rounded"
          >
            {loading ? 'Cambiando...' : 'Cambiar Contraseña'}
          </button>
        </div>
      </div>
    </SideBar>
  );
}

export default Password;
