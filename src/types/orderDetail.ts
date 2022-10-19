import { Order } from "./orderCreate";

export interface OrderDetail extends Order{
    user: string;
    paidAt?: Date;
    deliveredAt?: string;
    createdAt: Date;
}

export interface OrderDetailState {
    order?: OrderDetail;
    loading?: boolean;
    success?: boolean;
    error?: Error
}

export enum OrderDetailActionTypes {
    ORDER_DETAILS_REQUEST = "ORDER_DETAILS_REQUEST",
    ORDER_DETAILS_SUCCESS = "ORDER_DETAILS_SUCCESS",
    ORDER_DETAILS_FAIL = "ORDER_DETAILS_FAIL"   
}

export interface OrderDetailRequest {
    type: OrderDetailActionTypes.ORDER_DETAILS_REQUEST
    payload: any
}
export interface OrderDetailSuccess {
    type: OrderDetailActionTypes.ORDER_DETAILS_SUCCESS
    payload: OrderDetail
}
export interface OrderDetailFailure{
    type: OrderDetailActionTypes.ORDER_DETAILS_FAIL
    payload: Error
}

export type OrderDetailActions =
| OrderDetailRequest
| OrderDetailSuccess
| OrderDetailFailure