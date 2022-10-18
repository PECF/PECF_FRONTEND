// path: ./src/stores/reducers/cartReducer.ts
// create cartReducer with typescript, redux, react. All logic in function in other place, and not use switch case, use object

import { ICartState, ICartActions } from "../../types/cartTypes";

const initialState: ICartState = {
  cartItems: [],
  shippingInfo: {},
};

export const cartReducer = (
  state = initialState,
  action: ICartActions
): ICartState => {
  const handlers: Record<ICartActions["type"], any> = {
    [ICartActions.ADD_TO_CART]: (payload: ICartState["cartItems"]) => ({
      ...state,
      cartItems: payload,
    }),
    [ICartActions.REMOVE_CART_ITEM]: (payload: ICartState["cartItems"]) => ({
      ...state,
      cartItems: payload,
    }),
    [ICartActions.SAVE_SHIPPING_INFO]: (
      payload: ICartState["shippingInfo"]
    ) => ({
      ...state,
      shippingInfo: payload,
    }),
    DEFAULT: () => state,
  };

  return handlers[action.type]
    ? handlers[action.type](action.payload)
    : handlers.DEFAULT();
};


// path: ./src/stores/reducers/productReducer.ts

// import { CartAction, CartState } from "../../types/cart";

// const initialState: CartState = {
//   cartItems: [],
//   shippingAddress: {},
// };

// export const cartReducer = (
//   state = initialState,
//   action: CartAction
// ): CartState => {
//   return {
//     ...state,
//     ...handleCartAction[action.type](state, action),
//   };
// };

// const handleCartAction = {
//   ADD_TO_CART: (state: CartState, action: CartAction) => {
//     const item = action.payload;
//     const existItem = state.cartItems.find((x) => x.product === item.product);
//     if (existItem) {
//       return {
//         cartItems: state.cartItems.map((x) =>
//           x.product === existItem.product ? item : x
//         ),
//       };
//     } else {
//       return {
//         cartItems: [...state.cartItems, item],
//       };
//     }
//   },
//   REMOVE_FROM_CART: (state: CartState, action: CartAction) => {
//     return {
//       cartItems: state.cartItems.filter(
//         (x) => x.product !== action.payload.product
//       ),
//     };
//   },
//   SAVE_SHIPPING_ADDRESS: (state: CartState, action: CartAction) => {
//     return {
//       shippingAddress: action.payload,
//     };
//   },
//   SAVE_PAYMENT_METHOD: (state: CartState, action: CartAction) => {
//     return {
//       paymentMethod: action.payload,
//     };
//   },
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   CLEAR_CART: (state: CartState, action: CartAction) => {
//     return {
//       cartItems: [],
//     };
//   },

//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   RESET_CART: (state: CartState, action: CartAction) => {
//     return {
//       cartItems: [],
//     };
//   },
// };
