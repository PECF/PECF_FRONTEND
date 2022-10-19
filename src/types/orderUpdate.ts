export interface orderUpdateState {
    loading?: boolean;
    isUpdated?: boolean;
    isDeleted?: boolean;
    error?: Error;
}

export enum OrderActionTypes {
    UPDATE_ORDER_REQUEST = "UPDATE_ORDER_REQUEST",
    UPDATE_ORDER_SUCCESS = "UPDATE_ORDER_SUCCESS",
    UPDATE_ORDER_FAIL = "UPDATE_ORDER_FAIL",
    UPDATE_ORDER_RESET = "UPDATE_ORDER_RESET",
    DELETE_ORDER_REQUEST = "DELETE_ORDER_REQUEST",
    DELETE_ORDER_SUCCESS = "DELETE_ORDER_SUCCESS",
    DELETE_ORDER_FAIL = "DELETE_ORDER_FAIL",
    DELETE_ORDER_RESET = "DELETE_ORDER_RESET"
}

export interface updateOrderRequest {
    type: OrderActionTypes.UPDATE_ORDER_REQUEST
    payload: any
}
export interface updateOrderSucces {
    type: OrderActionTypes.UPDATE_ORDER_SUCCESS
    payload: any
}
export interface updateOrderFailure {
    type: OrderActionTypes.UPDATE_ORDER_FAIL
    payload: Error;
}
export interface updateOrderReset {
    type: OrderActionTypes.UPDATE_ORDER_RESET
    payload: any
}
export interface deleteOrderRequest {
    type: OrderActionTypes.DELETE_ORDER_REQUEST
    payload: any
}
export interface deleteOrderSuccess {
    type: OrderActionTypes.DELETE_ORDER_SUCCESS
    payload: any
}
export interface deleteOrderFailure {
    type: OrderActionTypes.UPDATE_ORDER_FAIL
    payload: Error
}
export interface deleteOrderReset {
    type: OrderActionTypes.DELETE_ORDER_RESET
    payload: any
}

export type OrderUpdateTypes =
| updateOrderRequest
| updateOrderSucces
| updateOrderFailure
| updateOrderReset
| deleteOrderRequest
| deleteOrderSuccess
| deleteOrderFailure
| deleteOrderReset