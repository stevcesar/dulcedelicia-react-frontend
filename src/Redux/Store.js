import { combineReducers, configureStore } from '@reduxjs/toolkit';
import * as user from './Reducers/UserReducers';
import * as cat from './Reducers/CatReducers';
import * as cards from './Reducers/CardReducers';
import * as orders from './Reducers/OrderReducers';

const rootReducer = combineReducers({
  // Usuario reducer
  userLogin: user.LoginReducer,
  userRegister: user.registerReducer,
  changePassword: user.changePasswordReducer,
  updateProfile: user.profileReducer,
  deleteProfile: user.deleteProfileReducer,
  // categoria reducer
  categoriesList: cat.getAllCategoriesReducer,
  // productos reducer
  getAllCards: cards.getAllCardsReducer,
  getCard: cards.getSingleCardReducer,
  allTags: cards.getAllTagsReducer,
  // ordenes reducer
  createOrder: orders.createOrderReducer,
  getOrder: orders.getOrderDetailsReducer,
  getAllOrders: orders.getAllOrdersReducer,
  deleteAllOrders: orders.deleteAllOrdersReducer,
  deleteOrder: orders.deleteOrderReducer,
  completeOrder: orders.completeOrderReducer,
  // lista de compras reducer
  wishlists: cards.wishlistReducer,
});

// obtener información de usuario de localStorage
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

// obtener listas de deseos de localStorage
const wishlistFromStorage = localStorage.getItem('wishlists')
  ? JSON.parse(localStorage.getItem('wishlists'))
  : [];

// estado inicial
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  wishlists: { wishlist: wishlistFromStorage },
};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
