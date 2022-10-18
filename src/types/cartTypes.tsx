//path ./src/types/cartTypes.tsx
// Compare this snippet from src/stores/reducers/cartReducer.tsx:

//create interfaces for cartReducer
export interface ICartState {
  cartItems: ICartItem[];
  shippingInfo: IShippingInfo;
}

export interface ICartItem {
  product: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  stock: number;
  _id: string;
}

export interface IShippingInfo {
  address: string;
  city: string;
  phoneNo: string;
  postalCode: string;
  country: string;
}

export enum ICartActions {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_CART_ITEM = "REMOVE_CART_ITEM",
  SAVE_SHIPPING_INFO = "SAVE_SHIPPING_INFO",
}

export interface AddToCartAction {
  type: ICartActions.ADD_TO_CART;
  payload: ICartItem[];
}

export interface RemoveCartItemAction {
  type: ICartActions.REMOVE_CART_ITEM;
  payload: ICartItem[];
}

export interface SaveShippingInfoAction {
  type: ICartActions.SAVE_SHIPPING_INFO;
  payload: IShippingInfo;
}

export type CartAction =
  | AddToCartAction
  | RemoveCartItemAction
  | SaveShippingInfoAction;

// export interface CartItem {
//   product: Product;
//   quantity: number;
// }

// export interface ShippingAddress {
//   address: string;
//   city: string;
//   postalCode: string;
//   country: string;
// }

// export interface CartAction {
//   type: string;
//   payload: any;
// }

// export interface CartState {
//   cartItems: CartItem[];
//   shippingAddress: ShippingAddress;
//   paymentMethod: string;
// }

// // export interface Cart {
// //     product: string
// //     name: string
// //     price: number
// //     image: string
// //     stock: number
// //     quantity: number
// //   }

// // export interface ShippingInfo {
// //     address: string;
// //     city: string;
// //     postalCode: string;
// //     country: string;
// // }

// // export interface CartState {
// //     cartItems: []
// //     shippingInfo: {}
// // }

// // export enum CartActionTypes{
// //    ADD_TO_CART = "ADD_TO_CART",
// //    REMOVE_CART_ITEM = "REMOVE_CART_ITEM",
// //    SAVE_SHIPPING_INFO = "SAVE_SHIPPING_INFO"
// // }

// // export interface CartAddItemAction {
// //   type: CartActionTypes.ADD_TO_CART;
// //    payload: Cart;
// // }

// // export interface CartRemoveItemAction {
// //   type: CartActionTypes.REMOVE_CART_ITEM;
// //   payload: string;
// // }

// // export interface CartSaveShippingAddressAction {
// //   type: CartActionTypes.SAVE_SHIPPING_INFO;
// //   payload: ShippingInfo;
// // }

// // export type CartActions =
// //   | CartAddItemAction
// //   | CartRemoveItemAction
// //   | CartSaveShippingAddressAction;
