import { Order } from './orderCreate';

export interface OrderList extends Order {
    user: string;
    paidAt?: Date;
    deliveredAt?: string;
    createdAt: Date;
}

export interface OrderListState {
    orders?: OrderList[];
    loading?: boolean;
    success?: boolean;
    error?: Error;
  }
  
export enum OrderListActionTypes {
    ALL_ORDERS_REQUEST = "ALL_ORDERS_REQUEST",
    ALL_ORDERS_SUCCESS = "ALL_ORDERS_SUCCESS",
    ALL_ORDERS_FAIL = "ALL_ORDERS_FAIL"
}

export interface OrderListRequestAction {
    type: OrderListActionTypes.ALL_ORDERS_REQUEST
    payload: any;
}
export interface OrderListSuccessAction {
    type: OrderListActionTypes.ALL_ORDERS_SUCCESS
    payload: OrderList;
}
export interface OrderListFailureAction {
    type: OrderListActionTypes.ALL_ORDERS_FAIL
    payload: Error;
}

export type OrderListAction =
| OrderListRequestAction
| OrderListSuccessAction
| OrderListFailureAction