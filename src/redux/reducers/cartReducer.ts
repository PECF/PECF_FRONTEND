import { CartAction, CartActionTypes, CartState } from "../../types/cartTypes";

const cartInitialState: CartState = {
  cartItems: [],
};

export const cartReducer = (
  state: CartState = cartInitialState,
  action: CartAction
) => {
  switch (action.type) {
    case CartActionTypes.CART_ADD_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        success: false,
      };
    case CartActionTypes.CART_ADD_SUCCESS:
      return {
        loading: false,
        success: true,
        error: false,
        cartItems: action.payload,
      };
    case CartActionTypes.CART_ADD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };
    case CartActionTypes.CART_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        success: false,
      };
    case CartActionTypes.CART_UPDATE_SUCCESS:
      return {
        ...state,
        cartItems: action.payload,
        loading: false,
        error: false,
        success: true,
      };
    case CartActionTypes.CART_UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };
    case CartActionTypes.CART_REMOVE_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        success: false,
      };
    case CartActionTypes.CART_REMOVE_SUCCESS:
      return {
        ...state,
        cartItems: action.payload,
        loading: false,
        error: false,
        success: true,
      };
    case CartActionTypes.CART_REMOVE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };

    default:
      return state;
  }
};
