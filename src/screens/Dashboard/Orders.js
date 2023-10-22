import React, { useEffect } from 'react';
import Table from '../../components/Table';
import SideBar from './SideBar';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteAllOrdersAction,
  getAllOrdersAction,
} from '../../Redux/Actions/OrderAction';
import { toast } from 'react-hot-toast';
import { Loader } from '../../components/Notifications/Loader';
import { Empty } from '../../components/Notifications/Error';

function Orders() {
  const dispatch = useDispatch();
  // estados
  const {
    getAllOrders: { loading, error, orders },
    deleteAllOrders: { loading: deleteLoading, error: deleteError, success },
  } = useSelector((state) => state);

  // obtener todas las ordenes
  useEffect(() => {
    dispatch(getAllOrdersAction());
  }, [dispatch, success]);

  // eliminar todas las ordenes
  const deleteAllOrdersHandler = () => {
    if (window.confirm('Todos los pedidos serán eliminados.')) {
      dispatch(deleteAllOrdersAction());
    }
  };

  // manejo de errores
  useEffect(() => {
    if (error || deleteError) {
      toast.error(error || deleteError);
      dispatch({
        type: error ? 'ORDER_LIST_RESET' : 'DELETE_ALL_ORDERS_RESET',
      });
    }
  }, [dispatch, error, deleteError]);

  return (
    <SideBar>
      {loading ? (
        <div className="h-96 flex-colo">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center gap-2">
            <h2 className="text-xl font-bold">Historial de ordenes</h2>
            {orders?.length > 0 && (
              <button
                disabled={deleteLoading}
                onClick={deleteAllOrdersHandler}
                className="bg-flash font-medium text-white py-2 px-6 rounded"
              >
                {deleteLoading ? 'Eliminando..' : 'Eliminar Todo'}
              </button>
            )}
          </div>

          {orders?.length === 0 ? (
            <div className="flex-colo h-96">
              <Empty text={'No se encontró ningún pedido'} />
            </div>
          ) : (
            <Table datas={orders} dashboard={false} />
          )}
        </div>
      )}
    </SideBar>
  );
}

export default Orders;
