export interface Cart {
  _id: string;
  user: string;
  createdAt: string;
  description: string;
  image: {
    url: string;
  }[];
  name: string;
  numReviews: number;
  price: number;
  rating: number;
  stock: number;
  visibility: boolean;
  qty: number;
}

export interface ShippingAddress {
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface CartState {
  cartItems: Cart[];
  shippingAddress?: ShippingAddress;
  paymentMethod?: string;
}

export enum CartActionTypes {
  CART_ADD_ITEM = "CART_ADD_ITEM",
  CART_REMOVE_ITEM = "CART_REMOVE_ITEM",
  CART_SAVE_SHIPPING_ADDRESS = "CART_SAVE_SHIPPING_ADDRESS",
  CART_SAVE_PAYMENT_METHOD = "CART_SAVE_PAYMENT_METHOD",
  CART_UPDATE_REQUEST = "CART_UPDATE_REQUEST",
  CART_UPDATE_SUCCESS = "CART_UPDATE_SUCCESS",
  CART_UPDATE_FAIL = "CART_UPDATE_FAIL",
}

export interface CartUpdateRequestAction {
  type: CartActionTypes.CART_UPDATE_REQUEST;
}

export interface CartUpdateSuccessAction {
  type: CartActionTypes.CART_UPDATE_SUCCESS;
  payload: Cart;
}

export interface CartUpdateFailAction {
  type: CartActionTypes.CART_UPDATE_FAIL;
  payload: string;
}

export interface CartAddItemAction {
  type: CartActionTypes.CART_ADD_ITEM;
  payload: Cart;
}

export interface CartRemoveItemAction {
  type: CartActionTypes.CART_REMOVE_ITEM;
  payload: string;
}

export interface CartSaveShippingAddressAction {
  type: CartActionTypes.CART_SAVE_SHIPPING_ADDRESS;
  payload: ShippingAddress;
}

export interface CartSavePaymentMethodAction {
  type: CartActionTypes.CART_SAVE_PAYMENT_METHOD;
  payload: string;
}

export type CartAction =
  | CartAddItemAction
  | CartRemoveItemAction
  | CartSaveShippingAddressAction
  | CartSavePaymentMethodAction
  | CartUpdateRequestAction
  | CartUpdateSuccessAction
  | CartUpdateFailAction;
