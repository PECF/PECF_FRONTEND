// // Path: src/redux/actions/ordersActions.ts

// import { IOrderActionTypes, IOrder } from "../../types/ordersTypes";
// import { AppThunk } from "../rootStore";
// import axios from "axios";

// export const createOrder =
//   (order: IOrder): AppThunk =>
//   async (dispatch) => {
//     try {
//       dispatch({ type: IOrderActionTypes.CREATE_ORDER_REQUEST });

//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };

//       const { data } = await axios.post("/api/v1/order/new", order, config);

//       dispatch({
//         type: IOrderActionTypes.CREATE_ORDER_SUCCESS,
//         payload: data,
//       });
//     } catch (error) {
//       dispatch({
//         type: IOrderActionTypes.CREATE_ORDER_FAIL,
//         payload: error.response.data.message,
//       });
//     }
//   };

// export const getOrderDetails =
//   (id: string): AppThunk =>
//   async (dispatch) => {
//     try {
//       dispatch({ type: IOrderActionTypes.GET_ORDER_REQUEST });

//       const { data } = await axios.get(`/api/v1/order/${id}`);

//       dispatch({
//         type: IOrderActionTypes.GET_ORDER_SUCCESS,
//         payload: data.order,
//       });
//     } catch (error) {
//       dispatch({
//         type: IOrderActionTypes.GET_ORDER_FAIL,
//         payload: error.response.data.message,
//       });
//     }
//   };

// export const getOrders = (): AppThunk => async (dispatch) => {
//   try {
//     dispatch({ type: IOrderActionTypes.GET_ORDERS_REQUEST });

//     const { data } = await axios.get("/api/v1/admin/orders");

//     dispatch({
//       type: IOrderActionTypes.GET_ORDERS_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: IOrderActionTypes.GET_ORDERS_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// export const updateOrder =
//   (id: string, orderData: IOrder): AppThunk =>
//   async (dispatch) => {
//     try {
//       dispatch({ type: IOrderActionTypes.UPDATE_ORDER_REQUEST });

//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };

//       const { data } = await axios.put(
//         `/api/v1/admin/order/${id}`,
//         orderData,
//         config
//       );

//       dispatch({
//         type: IOrderActionTypes.UPDATE_ORDER_SUCCESS,
//         payload: data.success,
//       });
//     } catch (error) {
//       dispatch({
//         type: IOrderActionTypes.UPDATE_ORDER_FAIL,
//         payload: error.response.data.message,
//       });
//     }
//   };

// export const deleteOrder =
//   (id: string): AppThunk =>
//   async (dispatch) => {
//     try {
//       dispatch({ type: IOrderActionTypes.DELETE_ORDER_REQUEST });

//       const { data } = await axios.delete(`/api/v1/admin/order/${id}`);

//       dispatch({
//         type: IOrderActionTypes.DELETE_ORDER_SUCCESS,
//         payload: data.success,
//       });
//     } catch (error) {
//       dispatch({
//         type: IOrderActionTypes.DELETE_ORDER_FAIL,
//         payload: error.response.data.message,
//       });
//     }
//   };

// export const clearErrors = () => async (dispatch) => {
//   dispatch({
//     type: IOrderActionTypes.CLEAR_ERRORS,
//   });
// };
