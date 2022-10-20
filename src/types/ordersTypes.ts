// path: src/types/ordersTypes.ts
export interface Order {
  _id: string;
  shippingInfo: ShippingInfo;
  user: string;
  orderItems: OrderItem[];
  paymentInfo: PaymentInfo;
  paidAt: string;
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  orderStatus: string;
  deliveredAt: string;
  createdAt: string;
}

export interface ShippingInfo {
  address: string;
  city: string;
  phoneNo: string;
  postalCode: string;
  country: string;
}

export interface OrderItem {
  name: string;
  quantity: number;
  image: string;
  price: number;
  product: string;
}

export interface PaymentInfo {
  id: string;
  status: string;
}

export interface IOrderState {
  orders: Order[];
  order: Order | null;
  loading: boolean;
  error: string;
}

export enum IOrderActionTypes {
  CREATE_ORDER_REQUEST = "CREATE_ORDER_REQUEST",
  CREATE_ORDER_SUCCESS = "CREATE_ORDER_SUCCESS",
  CREATE_ORDER_FAIL = "CREATE_ORDER_FAIL",
  GET_ORDER_REQUEST = "GET_ORDER_REQUEST",
  GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS",
  GET_ORDER_FAIL = "GET_ORDER_FAIL",
  GET_ORDERS_REQUEST = "GET_ORDERS_REQUEST",
  GET_ORDERS_SUCCESS = "GET_ORDERS_SUCCESS",
  GET_ORDERS_FAIL = "GET_ORDERS_FAIL",
  UPDATE_ORDER_REQUEST = "UPDATE_ORDER_REQUEST",
  UPDATE_ORDER_SUCCESS = "UPDATE_ORDER_SUCCESS",
  UPDATE_ORDER_FAIL = "UPDATE_ORDER_FAIL",
  DELETE_ORDER_REQUEST = "DELETE_ORDER_REQUEST",
  DELETE_ORDER_SUCCESS = "DELETE_ORDER_SUCCESS",
  DELETE_ORDER_FAIL = "DELETE_ORDER_FAIL",
  CLEAR_ERRORS = "CLEAR_ERRORS",
}

export interface createOrderRequest {
  type: IOrderActionTypes.CREATE_ORDER_REQUEST;
}

export interface createOrderSuccess {
  type: IOrderActionTypes.CREATE_ORDER_SUCCESS;
  payload: IOrderState["order"];
}

export interface createOrderFail {
  type: IOrderActionTypes.CREATE_ORDER_FAIL;
  payload: IOrderState["error"];
}

export interface getOrderRequest {
  type: IOrderActionTypes.GET_ORDER_REQUEST;
}

export interface getOrderSuccess {
  type: IOrderActionTypes.GET_ORDER_SUCCESS;
  payload: IOrderState["order"];
}

export interface getOrderFail {
  type: IOrderActionTypes.GET_ORDER_FAIL;
  payload: IOrderState["error"];
}

export interface getOrdersRequest {
  type: IOrderActionTypes.GET_ORDERS_REQUEST;
}

export interface getOrdersSuccess {
  type: IOrderActionTypes.GET_ORDERS_SUCCESS;
  payload: IOrderState["orders"];
}

export interface getOrdersFail {
  type: IOrderActionTypes.GET_ORDERS_FAIL;
  payload: IOrderState["error"];
}

export interface updateOrderRequest {
  type: IOrderActionTypes.UPDATE_ORDER_REQUEST;
}

export interface updateOrderSuccess {
  type: IOrderActionTypes.UPDATE_ORDER_SUCCESS;
  payload: IOrderState["order"];
}

export interface updateOrderFail {
  type: IOrderActionTypes.UPDATE_ORDER_FAIL;
  payload: IOrderState["error"];
}

export interface deleteOrderRequest {
  type: IOrderActionTypes.DELETE_ORDER_REQUEST;
}

export interface deleteOrderSuccess {
  type: IOrderActionTypes.DELETE_ORDER_SUCCESS;
  payload: IOrderState["order"];
}

export interface deleteOrderFail {
  type: IOrderActionTypes.DELETE_ORDER_FAIL;
  payload: IOrderState["error"];
}

export interface clearErrors {
  type: IOrderActionTypes.CLEAR_ERRORS;
}

export type IOrderAction =
  | createOrderRequest
  | createOrderSuccess
  | createOrderFail
  | getOrderRequest
  | getOrderSuccess
  | getOrderFail
  | getOrdersRequest
  | getOrdersSuccess
  | getOrdersFail
  | updateOrderRequest
  | updateOrderSuccess
  | updateOrderFail
  | deleteOrderRequest
  | deleteOrderSuccess
  | deleteOrderFail
  | clearErrors;
