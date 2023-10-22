import React, { useEffect } from 'react';
import Uploader from '../../components/Uploder';
import SideBar from './SideBar';
import Input from './../../components/Input';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { updateProfileSchema } from '../../components/Validation';
import {
  deleteProfileAction,
  updateProfileAction,
} from '../../Redux/Actions/UserAction';

function UpdateProfile() {
  const dispatch = useDispatch();
  const [image, setImage] = React.useState(null);
  const {
    updateProfile: { loading, error, success },
    userLogin: { userInfo },
    deleteProfile: {
      loading: deleteLoading,
      error: deleteError,
      success: deleteSuccess,
    },
  } = useSelector((state) => state);
  // validar usuario
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateProfileSchema),
  });

  // actualizar usuario
  const handlerSubmit = (data) => {
    dispatch(updateProfileAction({ ...data, image }));
  };

  // eliminar usuario
  const handlerDelete = () => {
    window.confirm('Todos tus datos se perderán. ¿Está seguro?') &&
      dispatch(deleteProfileAction());
  };

  // error y éxito
  useEffect(() => {
    if (error || deleteError) {
      toast.error(error || deleteError);
      dispatch({
        type: error ? 'PROFILE_UPDATE_RESET' : 'PROFILE_DELETE_RESET',
      });
    }
    // si tiene éxito restablecer el formulario
    if (success || deleteSuccess) {
      toast.success(success ? 'Perfil Actualizado!!' : 'Cuenta Eliminada!!');
      dispatch({
        type: success ? 'PROFILE_UPDATE_RESET' : 'PROFILE_DELETE_RESET',
      });
    }
  }, [dispatch, error, success, deleteError, deleteSuccess]);

  // establecer datos de usuario
  useEffect(() => {
    if (userInfo) {
      setValue('fullName', userInfo.fullName);
      setValue('email', userInfo.email);
      setValue('phone', userInfo.phone);
      setImage(userInfo.image);
    }    
  }, [userInfo, setValue]);

  return (
    <SideBar>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Perfil</h2>
        <Uploader image={image} setImage={setImage} />
        <Input
          type="text"
          placeHolder="Nombre Completo"
          label="Nombre Completo"
          register={register('fullName')}
          errors={errors.fullName}
          name={'fullName'}
        />
        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            type="email"
            placeHolder="user@gmail.com"
            label="Email"
            register={register('email')}
            errors={errors.email}
            name={'email'}
          />
          <Input
            type="number"
            placeHolder="8888888"
            label="Número Teléfono"
            register={register('phone')}
            errors={errors.phone}
            name={'phone'}
          />
        </div>
        <div className="flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4">
          <button
            disabled={deleteLoading || loading}
            onClick={handlerDelete}
            className="bg-flash font-medium text-white py-3 px-6 rounded sm:w-auto w-full"
          >
            {deleteLoading ? 'Eliminando...' : 'Eliminar Cuenta'}
          </button>
          <button
            disabled={loading || deleteLoading}
            onClick={handleSubmit(handlerSubmit)}
            className="bg-flash font-medium text-white py-3 px-6 rounded sm:w-auto w-full"
          >
            {loading ? 'Actualizando...' : 'Actualizar Perfil'}
          </button>
        </div>
      </div>
    </SideBar>
  );
}

export default UpdateProfile;
