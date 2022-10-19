import {
  ICartState,
  ICartAction,
  ICartActionTypes,
} from "../../types/cartTypes";

const cartInitialState: ICartState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems") || "")
    : [],
  shippingInfo: localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo") || "")
    : {},
  paymentMethod: localStorage.getItem("paymentMethod")
    ? JSON.parse(localStorage.getItem("paymentMethod") || "")
    : {},
};

export const cartReducer = (
  state: ICartState = cartInitialState,
  action: ICartAction
) => {
  const handlers = {
    [ICartActionTypes.ADD_TO_CART]: (payload: ICartState["cartItems"]) => ({
      ...state,
      cartItems: payload,
    }),
    [ICartActionTypes.REMOVE_CART_ITEM]: (
      payload: ICartState["cartItems"]
    ) => ({
      ...state,
      cartItems: payload,
    }),
    [ICartActionTypes.SAVE_SHIPPING_INFO]: (
      payload: ICartState["shippingInfo"]
    ) => ({
      ...state,
      shippingInfo: payload,
    }),
    [ICartActionTypes.SAVE_PAYMENT_METHOD]: (
      payload: ICartState["paymentMethod"]
    ) => ({
      ...state,
      paymentMethod: payload,
    }),
    [ICartActionTypes.CLEAR_CART]: () => ({
      ...state,
      cartItems: [],
    }),

    DEFAULT: () => state,
  };

  return handlers[action.type]
    ? handlers[action.type](action.payload)
    : handlers.DEFAULT();
};
