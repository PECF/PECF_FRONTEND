import { combineReducers } from "redux";

import {
  productCreateReducer,
  productDeleteReducer,
  productDetailsReducer,
  productListReducer,
  productTopRatedReducer,
  productUpdateReducer,
} from "./reducers/productsReducer";
import { cartReducer } from "./reducers/cartReducer";
import {
  userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
  userUpdateReducer,
  userForgotPasswordReducer,
} from "./reducers/authReducer";
import { ReduxState } from "../types/reduxTypes";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderListMyReducer,
  orderListReducer,
  orderPayReducer,
  orderDeliverReducer,
} from "./reducers/ordersReducer";

export const rootReducer = combineReducers<ReduxState>({
  cart: cartReducer,
  orderPay: orderPayReducer,
  orderList: orderListReducer,
  orderCreate: orderCreateReducer,
  orderListMy: orderListMyReducer,
  orderDeliver: orderDeliverReducer,
  orderDetails: orderDetailsReducer,
  productList: productListReducer,
  productCreate: productCreateReducer,
  productDelete: productDeleteReducer,
  productUpdate: productUpdateReducer,
  productDetails: productDetailsReducer,
  productTopRated: productTopRatedReducer,
  productCreateReview: productCreateReducer,
  userList: userListReducer,
  userLogin: userLoginReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  userDetails: userDetailsReducer,
  userRegister: userRegisterReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userForgotPassword: userForgotPasswordReducer,
});

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo") as string)
  : null;

const shippingAddressFromLocalStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress") as string)
  : {};

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems") as string)
  : [];

export const initialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
    shippingAddress: shippingAddressFromLocalStorage,
  },
  userLogin: { userInfo: userInfoFromLocalStorage },
};
