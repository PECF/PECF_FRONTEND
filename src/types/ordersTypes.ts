// // import { Cart, ShippingAddress } from "./cartTypes";

// export interface Order {
//   orderItems: Cart[];
//   shippingAddress: ShippingAddress;
//   paymentMethod: string;
//   itemsPrice: number;
//   taxPrice: number;
//   shippingPrice: number;
//   totalPrice: number;
// }

// export interface OrderCreate extends Order {
//   _id: string;
//   user: string;
// }

// export interface OrderCreateState {
//   loading: boolean;
//   order?: OrderCreate;
//   success?: boolean;
//   error?: any;
// }
export enum OrderCreateActionTypes {
  ORDER_CREATE_REQUEST = "ORDER_CREATE_REQUEST",
  ORDER_CREATE_SUCCESS = "ORDER_CREATE_SUCCESS",
  ORDER_CREATE_FAILURE = "ORDER_CREATE_FAILURE",
}

// export interface OrderCreateRequestAction {
//   type: OrderCreateActionTypes.ORDER_CREATE_REQUEST;
// }

// export interface OrderCreateSuccessAction {
//   type: OrderCreateActionTypes.ORDER_CREATE_SUCCESS;
//   payload: OrderCreate;
// }

// export interface OrderCreateFailureAction {
//   type: OrderCreateActionTypes.ORDER_CREATE_FAILURE;
//   payload: any;
// }

// export type OrderCreateAction =
//   | OrderCreateRequestAction
//   | OrderCreateSuccessAction
//   | OrderCreateFailureAction;

// export interface OrderDeliverState {
//   loading?: boolean;
//   success?: boolean;
//   error?: any;
// }

// export enum OrderDeliverActionTypes {
//   ORDER_DELIVER_REQUEST = "ORDER_DELIVER_REQUEST",
//   ORDER_DELIVER_SUCCESS = "ORDER_DELIVER_SUCCESS",
//   ORDER_DELIVER_FAILURE = "ORDER_DELIVER_FAILURE",
//   ORDER_DELIVER_RESET = "ORDER_DELIVER_RESET",
// }

// export interface OrderDeliverRequestAction {
//   type: OrderDeliverActionTypes.ORDER_DELIVER_REQUEST;
// }

// export interface OrderDeliverSuccessAction {
//   type: OrderDeliverActionTypes.ORDER_DELIVER_SUCCESS;
// }

// export interface OrderDeliverFailureAction {
//   type: OrderDeliverActionTypes.ORDER_DELIVER_FAILURE;
//   payload: any;
// }

// export interface OrderDeliverResetAction {
//   type: OrderDeliverActionTypes.ORDER_DELIVER_RESET;
// }

// export type OrderDeliverAction =
//   | OrderDeliverRequestAction
//   | OrderDeliverSuccessAction
//   | OrderDeliverFailureAction
//   | OrderDeliverResetAction;

// export interface OrderDetails extends Order {
//   _id: string;
//   user: {
//     _id: string;
//     name: string;
//     email: string;
//   };
//   isPaid: boolean;
//   isDelivered: boolean;
//   paidAt?: string;
//   deliveredAt?: string;
//   paymentResult?: PaymentResult;
// }

// export interface OrderDetailsState {
//   loading: boolean;
//   order?: OrderDetails;
//   error?: any;
// }

// export enum OrderDetailsActionTypes {
//   ORDER_DETAILS_REQUEST = "ORDER_DETAILS_REQUEST",
//   ORDER_DETAILS_SUCCESS = "ORDER_DETAILS_SUCCESS",
//   ORDER_DETAILS_FAILURE = "ORDER_DETAILS_FAILURE",
// }

// export interface OrderDetailsRequestAction {
//   type: OrderDetailsActionTypes.ORDER_DETAILS_REQUEST;
// }

// export interface OrderDetailsSuccessAction {
//   type: OrderDetailsActionTypes.ORDER_DETAILS_SUCCESS;
//   payload: OrderDetails;
// }

// export interface OrderDetailsFailureAction {
//   type: OrderDetailsActionTypes.ORDER_DETAILS_FAILURE;
//   payload: any;
// }

// export type OrderDetailsAction =
//   | OrderDetailsRequestAction
//   | OrderDetailsSuccessAction
//   | OrderDetailsFailureAction;

// export interface OrderList extends Order {
//   _id: string;
//   user: {
//     _id: string;
//     name: string;
//   };
//   isPaid: boolean;
//   isDelivered: boolean;
//   paidAt?: string;
//   deliveredAt?: string;
//   createdAt: string;
//   paymentResult?: PaymentResult;
// }

// export interface OrderListState {
//   orders: OrderList[];
//   loading: boolean;
//   error?: any;
// }

// export enum OrderListActionTypes {
//   ORDER_LIST_REQUEST = "ORDER_LIST_REQUEST",
//   ORDER_LIST_SUCCESS = "ORDER_LIST_SUCCESS",
//   ORDER_LIST_FAILURE = "ORDER_LIST_FAILURE",
// }

// export interface OrderListRequestAction {
//   type: OrderListActionTypes.ORDER_LIST_REQUEST;
// }

// export interface OrderListSuccessAction {
//   type: OrderListActionTypes.ORDER_LIST_SUCCESS;
//   payload: OrderList[];
// }

// export interface OrderListFailureAction {
//   type: OrderListActionTypes.ORDER_LIST_FAILURE;
//   payload: any;
// }

// export type OrderListAction =
//   | OrderListRequestAction
//   | OrderListSuccessAction
//   | OrderListFailureAction;

// export interface OrderListMy extends Order {
//   _id: string;
//   user: string;
//   isPaid: boolean;
//   isDelivered: boolean;
//   paidAt?: string;
//   deliveredAt?: string;
//   createdAt: string;
//   paymentResult?: PaymentResult;
// }

// export interface OrderListMyState {
//   orders?: OrderListMy[]; // TODO: Check this, made orders optional for now
//   loading: boolean;
//   error?: any;
// }

// export enum OrderListMyActionTypes {
//   ORDER_LIST_MY_REQUEST = "ORDER_LIST_MY_REQUEST",
//   ORDER_LIST_MY_SUCCESS = "ORDER_LIST_MY_SUCCESS",
//   ORDER_LIST_MY_FAILURE = "ORDER_LIST_MY_FAILURE",
//   ORDER_LIST_MY_RESET = "ORDER_LIST_MY_RESET",
// }

// export interface OrderListMyRequestAction {
//   type: OrderListMyActionTypes.ORDER_LIST_MY_REQUEST;
// }

// export interface OrderListMySuccessAction {
//   type: OrderListMyActionTypes.ORDER_LIST_MY_SUCCESS;
//   payload: OrderListMy[];
// }

// export interface OrderListMyFailureAction {
//   type: OrderListMyActionTypes.ORDER_LIST_MY_FAILURE;
//   payload: any;
// }

// export interface OrderListMyResetAction {
//   type: OrderListMyActionTypes.ORDER_LIST_MY_RESET;
// }

// export type OrderListMyAction =
//   | OrderListMyRequestAction
//   | OrderListMySuccessAction
//   | OrderListMyFailureAction
//   | OrderListMyResetAction;

// export interface OrderPayState {
//   loading?: boolean;
//   success?: boolean;
//   error?: any;
// }

// export enum OrderPayActionTypes {
//   ORDER_PAY_REQUEST = "ORDER_PAY_REQUEST",
//   ORDER_PAY_SUCCESS = "ORDER_PAY_SUCCESS",
//   ORDER_PAY_FAILURE = "ORDER_PAY_FAILURE",
//   ORDER_PAY_RESET = "ORDER_PAY_RESET",
// }

// export interface OrderPayRequestAction {
//   type: OrderPayActionTypes.ORDER_PAY_REQUEST;
// }

// export interface OrderPaySuccessAction {
//   type: OrderPayActionTypes.ORDER_PAY_SUCCESS;
// }

// export interface OrderPayFailureAction {
//   type: OrderPayActionTypes.ORDER_PAY_FAILURE;
//   payload: any;
// }

// export interface OrderPayResetAction {
//   type: OrderPayActionTypes.ORDER_PAY_RESET;
// }

// export type OrderPayAction =
//   | OrderPayRequestAction
//   | OrderPaySuccessAction
//   | OrderPayFailureAction
//   | OrderPayResetAction;

// export interface PaymentResult {
//   id: string;
//   status: string;
//   update_time: string;
//   payer: { email_address: string };
// }
