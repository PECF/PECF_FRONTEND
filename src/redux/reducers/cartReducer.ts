import { CartAction, CartActionTypes, CartState } from "../../types/cartTypes";

const cartInitialState: CartState = {
  cartItems: [],
};

export const cartReducer = (
  state: CartState = cartInitialState,
  action: CartAction
) => {
  switch (action.type) {
    case CartActionTypes.CART_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CartActionTypes.CART_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: action.payload,
      };

    /*case CartActionTypes.CART_ADD_ITEM:
      return {
        ...state,
        cartItems: [action.payload],
      };*/
    // add to cart reducer
    case CartActionTypes.CART_ADD_ITEM:
      // eslint-disable-next-line no-case-declarations
      const item = action.payload;
      // eslint-disable-next-line no-case-declarations
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

      

    // case CartActionTypes.CART_REMOVE_ITEM:
    //   return {
    //     ...state,
    //     cartItems: state.cartItems.filter(
    //       (item) => item.product !== action.payload
    //     ),
    //   };
    // case CartActionTypes.CART_SAVE_SHIPPING_ADDRESS:
    //   return {
    //     ...state,
    //     shippingAddress: action.payload,
    //   };
    // case CartActionTypes.CART_SAVE_PAYMENT_METHOD:
    //   return {
    //     ...state,
    //     paymentMethod: action.payload,
    //   };
    default:
      return state;
  }
};
