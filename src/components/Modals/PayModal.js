import React from 'react';
import MainModal from './MainModal';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { cardInfoSchema } from '../Validation';
import Input from '../Input';
import { BiLoaderCircle, BiSend } from 'react-icons/bi';
import { useSelector,useDispatch } from 'react-redux';
import { completeOrderAction } from '../../Redux/Actions/OrderAction';
function PayModal({ modalOpen, setModalOpen, orderItems}) {
  const dispatch = useDispatch();
  const {
    completeOrder: { loading, errorOrder: error, success },
  } = useSelector((state) => state);
  // validar usuario
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(cardInfoSchema),
  });

  const handlerSubmit = (data) => {
    dispatch(completeOrderAction({data, orderItems}))
  };

  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full bg-white rounded-2xl mt-40 lg:mt-20">
        <h2 className="text-2xl">Información de Envío</h2>
        <div className="bg-dryGray border p-2 rounded flex flex-col gap-2 " >
            <p className="text-sm my-4 text-black-100 text-center font-light">
                Por favor completa la información para el envío
            </p>
            <>
                <Input
                name="fullName"
                register={register('fullName')}
                errors={errors.address}
                type="text"
                placeHolder="Nombre Quien Recibe"
                />
                <Input
                name="address"
                register={register('address')}
                errors={errors.address}
                type="text"
                placeHolder="Dirección de Envío"
                />
                <Input
                name="phone"
                register={register('phone')}
                errors={errors.phone}
                type="number"
                placeHolder="Número de Teléfono"
                />
                <Input
                name="paymentmethod"
                register={register('paymentmethod')}
                errors={errors.paymentmethod}
                type="text"
                placeHolder="Forma de Pago"
                value = "Forma de Pago Contra Entrega"
                disabled  = {true}
                />
                <button
                    disabled={loading | success}
                    onClick={handleSubmit(handlerSubmit)}
                    className="bg-black flex-rows gap-4 text-white text-sm font-semibold py-4 w-full rounded"
                  >  {loading? (
                    <BiLoaderCircle className="animate-spin text-white" />
                  ) : (
                    <>
                    
                      {!success ? 'Completar Orden' : 'Orden Actualizada' } 
                      <BiSend className="w-5 h-5" />
                    </>
                  )}                
                </button>
            </>
        </div>
      </div>
    </MainModal>
  );
}

export default PayModal;
