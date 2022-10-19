import { Order } from "./orderCreate";

export interface myOrder extends Order{
    user: string;
    paidAt?: Date;
    deliveredAt?: string;
    createdAt: Date;
}

export interface MyOrderState {
    orders?: myOrder;
    success?: boolean;
    loading?: boolean;
    error?: Error;
}

export enum MyOrderActionTypes {
    MY_ORDER_REQUEST = "MY_ORDER_REQUEST",
    MY_ORDER_SUCCESS = "MY_ORDER_SUCCESS",
    MY_ORDERS_FAIL = "MY_ORDERS_FAIL"
}

export interface myOrderRequest {
    type: MyOrderActionTypes.MY_ORDER_REQUEST
    payload: any
}

export interface myOrderSuccess {
    type: MyOrderActionTypes.MY_ORDER_SUCCESS
    payload: myOrder
}

export interface myOrderFail {
    type: MyOrderActionTypes.MY_ORDERS_FAIL
    payload: Error;
}

export type MyOrderAction =
| myOrderRequest
| myOrderSuccess
| myOrderFail