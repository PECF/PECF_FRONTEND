export interface CartItem {
  _id: string;
  name: string;
  quantity: number;
}

export interface CartState {
  cartItems?: CartItem[];
  loading?: boolean;
  error?: any;
  success?: boolean;
}

export enum CartActionTypes {
  CART_ADD_REQUEST = "CART_ADD_REQUEST",
  CART_ADD_SUCCESS = "CART_ADD_SUCCESS",
  CART_ADD_FAIL = "CART_ADD_FAIL",
  CART_UPDATE_REQUEST = "CART_UPDATE_REQUEST",
  CART_UPDATE_SUCCESS = "CART_UPDATE_SUCCESS",
  CART_UPDATE_FAIL = "CART_UPDATE_FAIL",
  CART_REMOVE_REQUEST = "CART_REMOVE_REQUEST",
  CART_REMOVE_SUCCESS = "CART_REMOVE_SUCCESS",
  CART_REMOVE_FAIL = "CART_REMOVE_FAIL",
}

export interface CartAddRequestAction {
  type: CartActionTypes.CART_ADD_REQUEST;
}

export interface CartAddSuccessAction {
  type: CartActionTypes.CART_ADD_SUCCESS;
  payload: CartItem[];
}

export interface CartAddFailAction {
  type: CartActionTypes.CART_ADD_FAIL;
  payload: string;
}

export interface CartUpdateRequestAction {
  type: CartActionTypes.CART_UPDATE_REQUEST;
}

export interface CartUpdateSuccessAction {
  type: CartActionTypes.CART_UPDATE_SUCCESS;
  payload: CartItem[];
}

export interface CartUpdateFailAction {
  type: CartActionTypes.CART_UPDATE_FAIL;
  payload: string;
}

export interface CartRemoveRequestAction {
  type: CartActionTypes.CART_REMOVE_REQUEST;
}

export interface CartRemoveSuccessAction {
  type: CartActionTypes.CART_REMOVE_SUCCESS;
  payload: CartItem[];
}

export interface CartRemoveFailAction {
  type: CartActionTypes.CART_REMOVE_FAIL;
  payload: string;
}

export type CartAction =
  | CartAddRequestAction
  | CartAddSuccessAction
  | CartAddFailAction
  | CartUpdateRequestAction
  | CartUpdateSuccessAction
  | CartUpdateFailAction
  | CartRemoveRequestAction
  | CartRemoveSuccessAction
  | CartRemoveFailAction;
