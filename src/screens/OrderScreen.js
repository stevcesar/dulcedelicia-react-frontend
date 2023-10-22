import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import {
  getOrderByIdAction,
} from '../Redux/Actions/OrderAction';
import { Empty } from '../components/Notifications/Error';
import { Loader } from '../components/Notifications/Loader';
import { dateFormat } from '../Context/Functionalty';
import PayModal from '../components/Modals/PayModal';
function OrderScreen() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const classNames = 'text-xs bg-opacity-20 py-1.5 px-4 rounded-full ml-3';
  const {
    getOrder: { order, loading, error },
    userLogin: { userInfo },
  } = useSelector((state) => state);
  const [modalOpen, setModalOpen] = useState(false);
  // atajo
  const shipping = order?.shippingAddress;
  const orderItems = order?.orderItems;
  const payments = order?.payments;
  const user = order?.user;
  const delivery = order?.delivery;
  const paymentsStatus = {
    pedding: payments?.status === 'pending',
    complete: payments?.status === 'completed',
    canceled: payments?.status === 'cancelled',
  };

  const shippingInfoStatus = {
    complete: shipping?.status === 'completed', 
    pedding: shipping?.status === 'pending',
    canceled: shipping?.status === 'cancelled',
  }

  // aun no está disponible
  const handleDownload = () => {
    toast.error('Aun no está disponible');
  };

  // modal para información de envío
  const handlePayment = () => {
    setModalOpen(!modalOpen);
  };

  // obtener orden
  useEffect(() => {
    dispatch(getOrderByIdAction(id));
  }, [dispatch, id,modalOpen]); 

  // ************* INFORMACION **************** //
  const Totals = [
    {
      name: 'Subtotal',
      cost: `Q${order?.subTotalPrice ? order?.subTotalPrice : 0}`,
    },
    {
      name: 'IVA',
      cost: `Q${order?.taxPrice ? order?.taxPrice.toFixed(2) : 0}`,
    },

    {
      name: 'Envío',
      cost: `Q${shipping?.shippingCost ? shipping?.shippingCost : 0}`,
    },
  ];

  const paymentInfo = [
    {
      title: 'Estado pagado',
      value: payments?.status,
      bg: true,
    },
    {
      title: 'Método pago',
      value: payments?.paymentMethod,
      bg: false,
    },
    {
      title: 'Pagado el',
      value: payments?.paymentDate ? dateFormat(payments?.paymentDate) : '---',
      bg: false,
    },
  ];

  const deliveryInfo = [
    {
      title: 'Estado de entrega',
      value: delivery?.status,
      bg: true,
    },
    {
      title: 'Método de entrega',
      value: delivery?.deliveryMethod,
      bg: false,
    },
    {
      title: 'Entregado el',
      value: delivery?.deliveryDate
        ? dateFormat(delivery?.deliveryDate)
        : '---',
      bg: false,
    },
  ];

  const shippingInfo = [
    {
      title: "Nombre Cliente",
      value: shipping?.fullName,
    },
    {
      title: 'Número de Teléfono',
      value: shipping?.phoneNumber,
    },
    {
      title: 'Email',
      value: shipping?.email,
    },
    {
      title: 'Ubicación',
      value: shipping?.location,
    },
    {
      title: 'Dirección',
      value: shipping?.address,
    },
    {
      title: 'Método de envío',
      value: shipping?.shippingMethod,
    },
    {
      title: 'Costo de envío',
      value: `Q${shipping?.shippingCost}`,
    },
  ];

  const userInfos = [
    {
      title: "Nombre Cliente",
      value: user?.fullName,
    },
    {
      title: "Email Cliente",
      value: user?.email,
    },
    {
      title: "Teléfono Cliente",
      value: user?.phone,
    },
  ];

  return (
    <Layout header={true}>
      <div className="bg-deepGray">
        {loading ? (
          <div className="min-h-screen flex-colo container mx-auto">
            <Loader />
          </div>
        ) : error ? (
          <div className="min-h-screen flex-colo container mx-auto">
            <Empty text={'Orden no Encontrada'} />
          </div>
        ) : order?.createdAt ? (
          <>
          {modalOpen && (
            <PayModal
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              orderItems={order}
            />
          )}
          <div className="min-h-screen container mx-auto px-4 lg:px-32 py-12">
            <div className=" flex-colo gap-4 sm:p-6 py-6 px-4 rounded-md top-28 col-span-4 bg-white border  border-text">
              <>
                <h2 className="font-semibold text-lg">
                  <>
                    <span>Order Resumen</span>
                    {paymentsStatus.pedding ? (
                      <span className={`text-star bg-star ${classNames}`}>
                        Pendiente
                      </span>
                    ) : paymentsStatus.complete ? (
                      <span
                        className={`text-green-600 bg-green-600 ${classNames}`}
                      >
                        Completa
                      </span>
                    ) : paymentsStatus.canceled ? (
                      <span className={`text-red-600 bg-red-600 ${classNames}`}>
                        Cancelada
                      </span>
                    ) : null}
                  </>
                </h2>
                <div className="grid xl:grid-cols-2 gap-12 w-full items-start">
                  <div className="w-full space-y-8">
                    <div className="space-y-8">
                      {/* productos */}
                      {orderItems?.map((product) => (
                        <Link
                          title="View Product"
                          to={`/card/${product?.product}`}
                          key={product?.product}
                          className="grid grid-cols-8 gap-2 my-6 items-center"
                        >
                          <div className="col-span-2 bg-deepGray rounded p-2 h-32 border border-deepest">
                            <img
                              alt={product?.name}
                              src={product?.image}
                              className="w-full h-full object-cover rounded"
                            />
                          </div>
                          <div className="col-span-6 flex flex-col text-sm gap-2">
                            <h3 className="truncate">{product?.name}</h3>
                            <h2 className="text-xs text-gray-800">
                              Q{product?.price} x {product?.qty} ={' '}
                              <span className="font-bold">
                                Q{product?.price * product?.qty}
                              </span>
                            </h2>
                            {/* <div className="text-xs space-y-2 flex-wrap bg-dryGray p-2 rounded text-gray-800">
                              <p>
                                <span className="font-medium">Color : </span>
                                {product?.color}
                              </p>
                              <p>
                                <span className="font-medium">Size : </span>
                                {product?.size}
                              </p>
                            </div> */}
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* usuario */}
                    <div className="bg-dryGray border p-8 rounded">
                      <h2 className="text-md font-semibold mb-4">
                        Información Usuario
                      </h2>
                      {userInfos?.map((item, index) => (
                        <div
                          key={index}
                          className="grid grid-cols-2 gap-2 py-5 px-2 border-t border-gray-200"
                        >
                          <h5 className="text-sm">{item.title}</h5>
                          <p className={`text-xs text-gray-500`}>
                            {item?.value ? item.value : '---'}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* información forma de pago */}
                    <div className="bg-dryGray border p-8 rounded">
                      <h2 className="text-md font-semibold mb-4">
                      Información de pago
                      </h2>
                      {paymentInfo?.map((item, index) => (
                        <div
                          key={index}
                          className="grid grid-cols-2 gap-2 py-5 px-2 border-t border-gray-200"
                        >
                          <h5 className="text-sm">{item.title}</h5>
                          <p
                            className={`text-xs capitalize ${
                              item.bg
                                ? item.value === 'completed'
                                  ? ' text-green-600'
                                  : (item.value === 'awaiting') |
                                    (item.value === 'pending')
                                  ? ' text-orange-500'
                                  : item.value === 'shipped'
                                  ? ' text-main'
                                  : ' text-red-600'
                                : ' text-gray-500'
                            }`}
                          >
                            {item?.value ? item.value : '---'}
                          </p>
                        </div>
                      ))}
                    </div>

                    {shippingInfoStatus.complete && (
                      <>
                        {/* información de entrega */}
                        <div className="bg-dryGray border p-8 rounded">
                          <h2 className="text-md font-semibold mb-4">
                            Información de entrega
                          </h2>
                          {deliveryInfo?.map((item, index) => (
                            <div
                              key={index}
                              className="grid grid-cols-2 gap-2 py-5 px-2 border-t border-gray-200"
                            >
                              <h5 className="text-sm">{item.title}</h5>
                              <p
                                className={`text-xs capitalize ${
                                  item.bg
                                    ? item.value === 'completed'
                                      ? ' text-green-600'
                                      : (item.value === 'awaiting') |
                                        (item.value === 'pending')
                                      ? ' text-orange-500'
                                      : item.value === 'shipped'
                                      ? ' text-main'
                                      : ' text-red-600'
                                    : ' text-gray-500'
                                }`}
                              >
                                {item?.value ? item.value : '---'}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Envio información */}
                        <div className="bg-dryGray p-8 rounded">
                          <h2 className="text-md font-semibold mb-4">
                            Información de Envío
                          </h2>

                          {shippingInfo.map((item, index) => (
                            <div
                              key={index}
                              className="grid grid-cols-2 gap-2 py-5 px-2 border-t border-gray-200"
                            >
                              <h5 className="text-sm">{item.title}</h5>
                              <p className={`text-xs text-gray-500`}>
                                {item?.value ? item.value : '---'}
                              </p>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                  <div className="w-full sticky top-28 xl:mt-4 border-[0.5px] border-main rounded-md sm:p-12 p-4">
                    <div className="flex flex-col gap-8 mb-6">
                      {Totals.map((t, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between text-sm w-full font-semibold"
                        >
                          {t.name}
                          <span className="font-bold">{t.cost}</span>
                        </div>
                      ))}
                      <div className="p-1 pl-4 items-center text-gray-800 bg-dryGray border rounded w-full flex justify-between">
                        <h2 className="font-semibold text-sm">Total</h2>
                        <button
                          type="button"
                          className="px-8 bg-white py-4 font-bold flex-colo text-sm rounded"
                        >
                          Q{order?.totalPrice}
                        </button>
                      </div>
                    </div>
                    {/* botones */}
                    <>
                      {shippingInfoStatus.pedding && (
                        <>
                          <button
                            onClick={handlePayment}
                            className="bg-main py-4 w-full rounded text-white flex-colo"
                          >
                            Procesar Compra
                          </button>
                        </>
                      )}
                      {shippingInfoStatus.complete && (
                        <div className="grid sm:grid-cols-2 gap-6 text-sm">
                          <Link
                            to="/shop"
                            className="border border-main py-4 rounded flex-colo"
                          >
                            Seguir Comprando
                          </Link>
                          <button
                            onClick={handleDownload}
                            className="bg-main py-4 rounded text-white flex-colo"
                          >
                            Descargar factura
                          </button>
                        </div>
                      )}
                      {(shippingInfoStatus?.canceled ||
                        shipping?.status === 'cancelled') && (
                        <>
                          <p className="text-red-600 text-sm text-center">
                            {shipping?.status === 'cancelled'
                              ? 'El pedido ha sido cancelado.'
                              : 'El pago ha sido cancelado.'}{' '}
                            {'  '}
                            Si tienes cualquier pregunta, por favor póngase en contacto con nosotros
                          </p>
                          <Link
                            to="/contact-us"
                            className="bg-white py-4 rounded text-main mt-4 border flex-colo"
                          >
                            Contactanos
                          </Link>
                        </>
                      )}
                    </>
                  </div>
                </div>
              </>
            </div>
          </div>
          </>
        ) : (
          <div className="min-h-screen flex-colo container mx-auto px-2 sm:px-4 xl:px-32 my-8 sm:my-12">
            <Empty text={'Orden no encontrada'} />
          </div>
        )}
      </div>
    </Layout>
  );
}

export default OrderScreen;
