export interface IOrdersState {
  orders: IOrder[];
  loading: boolean;
  error: string;
}

export interface IOrder {
  shippingInfo: IShippingInfo;
  orderItems: IOrderItem[];
  paymentInfo: IPaymentInfo;
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  orderStatus: string;
  deliveredAt: string;
  createdAt: string;
  _id: string;
}

export interface IShippingInfo {
  address: string;
  city: string;
  phoneNo: string;
  postalCode: string;
  country: string;
}

export interface IOrderItem {
  name: string;
  quantity: number;
  image: string;
  price: number;
  product: string;
}

export interface IPaymentInfo {
  id: string;
  status: string;
}

export interface IOrdersActions {
  type: IOrdersActionsTypes;
  payload?: any;
}

export enum IOrdersActionsTypes {
  FETCH_ORDERS = "FETCH_ORDERS",
  FETCH_ORDERS_SUCCESS = "FETCH_ORDERS_SUCCESS",
  FETCH_ORDERS_ERROR = "FETCH_ORDERS_ERROR",
}

export interface FetchOrdersAction {
  type: IOrdersActionsTypes.FETCH_ORDERS;
}

export interface FetchOrdersSuccessAction {
  type: IOrdersActionsTypes.FETCH_ORDERS_SUCCESS;
  payload: IOrder[];
}

export interface FetchOrdersErrorAction {
  type: IOrdersActionsTypes.FETCH_ORDERS_ERROR;
  payload: string;
}

export type OrderAction =
  | FetchOrdersAction
  | FetchOrdersSuccessAction
  | FetchOrdersErrorAction;
