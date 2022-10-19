import { CartState, CartActions } from '../../types/Cart';
const cartInitialState: CartState = {
  cartItems: [],
  shippingInfo: []
}

export const cartReducer = (
  state = cartInitialState,
  action: CartActions
) => {
  const reducers = {
    ADD_TO_CART: {
      ...state,
      cartItems: [...state.cartItems],
    },
    REMOVE_CART_ITEM: {
      ...state,
      cartItems: state.cartItems.filter((i) => i.product !== action.payload),
    },
    SAVE_SHIPPING_INFO: {
      ...state,
      shippingInfo: action.payload,
    },
  };

  return reducers[action.type] || { ...state };
};
