export const cartReducer = (
  state = { cartItems: [], shippingInfo: {} },
  action
) => {
  const reducers = {
    ADD_TO_CART: {
      ...state,
      cartItems: [...state.cartItems, item],
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
