export interface ICartItem {
  product: string;
  name: string;
  price: number;
  image: string;
  stock: number;
  quantity: number;
}

export interface IShippingInfo {
  address: string;
  city: string;
  phoneNo: string;
  postalCode: string;
  country: string;
}

export interface ICartState {
  cartItems: ICartItem[];
  shippingInfo: IShippingInfo;
  paymentMethod: string;
}

export enum ICartActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_CART_ITEM = "REMOVE_CART_ITEM",
  SAVE_SHIPPING_INFO = "SAVE_SHIPPING_INFO",
  SAVE_PAYMENT_METHOD = "SAVE_PAYMENT_METHOD",
  CLEAR_CART = "CLEAR_CART",
}

export interface addToCart {
  type: ICartActionTypes.ADD_TO_CART;
  payload: ICartItem;
}

export interface removeCartItem {
  type: ICartActionTypes.REMOVE_CART_ITEM;
  payload: string;
}

export interface saveShippingInfo {
  type: ICartActionTypes.SAVE_SHIPPING_INFO;
  payload: IShippingInfo;
}

export interface savePaymentMethod {
  type: ICartActionTypes.SAVE_PAYMENT_METHOD;
  payload: string;
}

export interface clearCart {
  type: ICartActionTypes.CLEAR_CART;
}

export type ICartAction =
  | addToCart
  | removeCartItem
  | saveShippingInfo
  | savePaymentMethod
  | clearCart;
