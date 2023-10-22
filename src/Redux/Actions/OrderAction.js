import * as Types from '../Constants/AllConstants';
import * as Apis from '../API/OrdersApis';
import { ErrorsAction, tokenProtection } from '../Protection';
import { toast } from 'react-hot-toast';

// obtener todos las ordenes
export const getAllOrdersAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: Types.ORDER_LIST_REQUEST });
    const data = await Apis.getAllOrders(tokenProtection(getState));
    dispatch({ type: Types.ORDER_LIST_SUCCESS, payload: data });
  } catch (error) {
    ErrorsAction(error, dispatch, Types.ORDER_LIST_FAIL);
  }
};

// obtener orden por id
export const getOrderByIdAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: Types.GET_ORDER_REQUEST });
    const data = await Apis.getOrderById(id, tokenProtection(getState));
    dispatch({ type: Types.GET_ORDER_SUCCESS, payload: data });
  } catch (error) {
    ErrorsAction(error, dispatch, Types.GET_ORDER_FAIL);
  }
};

// eliminar orden por id
export const deleteOrderAction = (id) => async (dispatch, getState) => {
  try {
    const data = await Apis.deleteOrder(id, tokenProtection(getState));
    dispatch({ type: Types.ORDER_DELETE, payload: data });
    toast.success('Order deleted!!');
    dispatch(getAllOrdersAction());
  } catch (error) {
    ErrorsAction(error, dispatch, Types.ORDER_DELETE_FAIL);
  }
};

// eliminar todas las ordenes
export const deleteAllOrdersAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: Types.DELETE_ALL_ORDERS_REQUEST });
    const data = await Apis.deleteAllOrders(tokenProtection(getState));
    dispatch({ type: Types.DELETE_ALL_ORDERS_SUCCESS, payload: data });
    toast.success('All orders deleted!!');
  } catch (error) {
    ErrorsAction(error, dispatch, Types.DELETE_ALL_ORDERS_FAIL);
  }
};

// crear orden
export const createOrderAction = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: Types.ORDER_CREATE_REQUEST });
    const data = await Apis.createOrder(order, tokenProtection(getState));
    dispatch({ type: Types.ORDER_CREATE_SUCCESS, payload: data });
  } catch (error) {
    ErrorsAction(error, dispatch, Types.ORDER_CREATE_FAIL);
  }
};

// actualizar orden para enviar
export const completeOrderAction = (datas) => async (dispatch, getState) => {
  try {
    dispatch({ type: Types.COMPLETEORDER_REQUEST});
    const data = await Apis.completeOrder(datas, tokenProtection(getState));
    dispatch({type: Types.COMPLETEORDER_COMPLETE})
  } catch (error) {
    ErrorsAction(error, dispatch, Types.COMPLETEORDER_ERROR);
  }
};
