import { combineReducers } from "redux";

import {
  productCreateReducer,
  productDeleteReducer,
  productDetailsReducer,
  productListReducer,
  productTopRatedReducer,
  productUpdateReducer,
  productFeature,
  productTag,
} from "./reducers/productsReducer";
import { cartReducer } from "./reducers/cartReducer";
import {
  // userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
  // userUpdateReducer,
  userForgotPasswordReducer,
} from "./reducers/authReducer";
import { ReduxState } from "../types/reduxTypes";
// import {
//   orderCreateReducer,
//   orderDetailsReducer,
//   orderListMyReducer,
//   orderListReducer,
//   orderPayReducer,
//   orderDeliverReducer,
// } from "./reducers/ordersReducer";

import { wishlistReducer } from "./reducers/wishlistReducer";

export const rootReducer = combineReducers<ReduxState>({
  cart: cartReducer,
  // wishlist: wishlistReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  userRegister: userRegisterReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userForgotPassword: userForgotPasswordReducer,
  userList: userListReducer,
  // userDelete: userDeleteReducer,
  // userUpdate: userUpdateReducer,
  // orderPay: orderPayReducer,
  // orderList: orderListReducer,
  // orderCreate: orderCreateReducer,
  // orderListMy: orderListMyReducer,
  // orderDeliver: orderDeliverReducer,
  // orderDetails: orderDetailsReducer,
  productTag: productTag,
  productFeature: productFeature,
  productList: productListReducer,
  productCreate: productCreateReducer,
  productDelete: productDeleteReducer,
  productUpdate: productUpdateReducer,
  productDetails: productDetailsReducer,
  // productTopRated: productTopRatedReducer,
  // productCreateReview: productCreateReducer,
});

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo") as string)
  : null;

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems") as string)
  : [];

const userDetailsFromLocalStorage = localStorage.getItem("userDetails")
  ? JSON.parse(localStorage.getItem("userDetails") as string)
  : {};

const productCreateFromLocalStorage = localStorage.getItem("productCreate")
  ? JSON.parse(localStorage.getItem("productCreate") as string)
  : {};

const productTagsFromLocalStorage = localStorage.getItem("tags")
  ? JSON.parse(localStorage.getItem("tags") as string)
  : [];

const productFeaturesFromLocalStorage = localStorage.getItem("feature")
  ? JSON.parse(localStorage.getItem("feature") as string)
  : [];

const productUpdateFromLocalStorage = localStorage.getItem("productUpdate")
  ? JSON.parse(localStorage.getItem("productUpdate") as string)
  : {};

// const wishlistItemsFromLocalStorage = localStorage.getItem("wishlistItems")
//   ? JSON.parse(localStorage.getItem("wishlistItems") as string)
//   : [];

export const initialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
    loading: false,
    success: false,
    error: null,
  },

  // wishlist: {
  //   wishlistItems: wishlistItemsFromLocalStorage,
  // },

  userLogin: { userInfo: userInfoFromLocalStorage },
  userDetails: { user: userDetailsFromLocalStorage },
  productCreate: {
    product: productCreateFromLocalStorage,
    loading: false,
    success: false,
    error: null,
  },
  productFeature: {
    feature: productFeaturesFromLocalStorage,
  },
  productTag: {
    tags: productTagsFromLocalStorage,
  },
  productUpdate: {
    product: productUpdateFromLocalStorage,
    loading: false,
    success: false,
    error: null,
  },
};
