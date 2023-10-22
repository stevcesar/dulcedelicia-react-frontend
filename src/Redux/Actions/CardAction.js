import * as Types from '../Constants/AllConstants';
import * as Apis from '../API/ProductsApis';
import { ErrorsAction } from '../Protection';

export const getCardsAction =
  ({ pageNumber, category, tag, search, sort }) =>
  async (dispatch) => {
    try {
      dispatch({ type: Types.PRODUCT_LIST_REQUEST });
      const data = await Apis.getcardsService({
        pageNumber,
        category,
        tag,
        search,
        sort,
      });
      dispatch({ type: Types.PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      ErrorsAction(error, dispatch, Types.PRODUCT_LIST_FAIL);
    }
  };

// obtener una sola tarjeta
export const getCardAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: Types.GET_PRODUCT_REQUEST });
    const data = await Apis.getCardByIdService(id);
    dispatch({ type: Types.GET_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    ErrorsAction(error, dispatch, Types.GET_PRODUCT_FAIL);
  }
};

// todas las tarjetas
export const getTagsAction = () => async (dispatch) => {
  try {
    const data = await Apis.getTagsService();
    dispatch({ type: Types.TAGS_PRODUCT, payload: data });
  } catch (error) {
    ErrorsAction(error, dispatch, Types.TAGS_PRODUCT_FAIL);
  }
};

// agregar lista de compras
export const addWishListAction = (wishlist) => async (dispatch) => {
  // guardar en local storage
  var wish = JSON.parse(localStorage.getItem('wishlists') || '[]');
  wish.push(wishlist);
  localStorage.setItem('wishlists', JSON.stringify(wish));
  dispatch({ type: Types.ADD_WISHLIST, payload: wishlist });
};

// eliminar lista de compras
export const removeAllWishListAction = () => async (dispatch) => {
  // eliminar del local storage
  localStorage.removeItem('wishlists');
  dispatch({ type: Types.DELETE_ALL_WISHLIST });
};

// eliminar lista de compras un producto
export const removeWishListAction = (id) => async (dispatch) => {
  // eliminar lista de compras un producto del local storage
  var wish = JSON.parse(localStorage.getItem('wishlists') || '[]');
  wish = wish.filter((item) => item._id !== id);
  localStorage.setItem('wishlists', JSON.stringify(wish));
  dispatch({ type: Types.DELETE_WISHLIST, payload: id });
};
