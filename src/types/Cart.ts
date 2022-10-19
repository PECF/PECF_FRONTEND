export interface Cart {
    product: string
    name: string
    price: number
    image: string
    stock: number
    quantity: number
  }
  
export interface ShippingInfo {
  address: String
  city: String
  state: String
  country: String
  pinCode: Number
  phoneNo: Number
}
  
export interface CartState {
    cartItems: Cart[]
    shippingInfo: ShippingInfo[]
}
  
export enum CartActionTypes{
   ADD_TO_CART = "ADD_TO_CART",
   REMOVE_CART_ITEM = "REMOVE_CART_ITEM",
   SAVE_SHIPPING_INFO = "SAVE_SHIPPING_INFO"
}
  
export interface CartAddItemAction {
  type: CartActionTypes.ADD_TO_CART;
   payload: Cart;
}
  
export interface CartRemoveItemAction {
  type: CartActionTypes.REMOVE_CART_ITEM;
  payload: string;
}
  
export interface CartSaveShippingAddressAction {
  type: CartActionTypes.SAVE_SHIPPING_INFO;
  payload: ShippingInfo;
}
  
export type CartActions =
  | CartAddItemAction
  | CartRemoveItemAction
  | CartSaveShippingAddressAction;
