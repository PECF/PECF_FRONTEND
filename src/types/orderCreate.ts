import { Cart, ShippingInfo } from "./Cart";

export interface Order {
    orderItems: Cart[]
    shippingAddress: ShippingInfo
    itemsPrice: Number
    taxPrice: Number
    shippingPrice: Number
    totalPrice: Number
}

export interface OrderCreate extends Order {
    _id: string;
}

export interface OrderCreateState {
    loading?: boolean;
    success?: boolean;
    order?: OrderCreate;
    error?: Error;
}

export enum OrderCreateActionTypes {
    CREATE_ORDER_REQUEST = "CREATE_ORDER_REQUEST",
    CREATE_ORDER_SUCCESS = "CREATE_ORDER_SUCCESS",
    CREATE_ORDER_FAIL = "CREATE_ORDER_FAIL",
  }

export interface OrderCreateRequestAction {
    type: OrderCreateActionTypes.CREATE_ORDER_REQUEST
    payload: any
}

export interface OrderCreateSuccessAction {
    type: OrderCreateActionTypes.CREATE_ORDER_SUCCESS;
    payload: OrderCreate;
}

export interface OrderCreateFailureAction {
    type: OrderCreateActionTypes.CREATE_ORDER_FAIL;
    payload: Error;
}
  
export type OrderCreateAction =
| OrderCreateRequestAction
| OrderCreateSuccessAction
| OrderCreateFailureAction