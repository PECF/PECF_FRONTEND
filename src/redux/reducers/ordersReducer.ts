import { IOrdersActions, IOrdersState } from "../../types/ordersTypes";

const initialState: IOrdersState = {
  orders: [],
  loading: false,
  error: "",
};

export const ordersReducer = (
  state = initialState,
  action: IOrdersActions
): IOrdersState => {
  const handlers: Record<IOrdersActions["type"], any> = {
    [IOrdersActions.FETCH_ORDERS]: () => ({ ...state, loading: true }),
    [IOrdersActions.FETCH_ORDERS_SUCCESS]: (
      payload: IOrdersState["orders"]
    ) => ({
      ...state,
      loading: false,
      orders: payload,
    }),
    [IOrdersActions.FETCH_ORDERS_ERROR]: (payload: IOrdersState["error"]) => ({
      ...state,
      loading: false,
      error: payload,
    }),
    DEFAULT: () => state,
  };

  return handlers[action.type]
    ? handlers[action.type](action.payload)
    : handlers.DEFAULT();
};

// export const newOrderReducer = (state = {}, action) => {
//   const reducers = {
//     CREATE_ORDER_REQUEST: {
//       ...state,
//       loading: true,
//     },
//     CREATE_ORDER_SUCCESS: {
//       loading: false,
//       order: action.payload,
//     },
//     CREATE_ORDER_FAIL: {
//       loading: false,
//       error: action.payload,
//     },
//     CLEAR_ERRORS: {
//       ...state,
//       error: null,
//     },
//   };
//   return reducers[action.type] || { ...state };
// };

// export const myOrdersReducer = (state = { orders: [] }, action) => {
//   const reducers = {
//     MY_ORDER_REQUEST: {
//       loading: true,
//     },
//     MY_ORDER_SUCCESS: {
//       loading: false,
//       orders: action.payload,
//     },
//     MY_ORDERS_FAIL: {
//       loading: false,
//       error: action.payload,
//     },
//     CLEAR_ERRORS: {
//       ...state,
//       error: null,
//     },
//   };
//   return reducers[action.type] || { ...state };
// };

// export const allOrdersReducer = (state = { orders: [] }, action) => {
//   const reducers = {
//     ALL_ORDERS_REQUEST: {
//       loading: true,
//     },
//     ALL_ORDERS_SUCCESS: {
//       loading: false,
//       orders: action.payload,
//     },
//     ALL_ORDERS_FAIL: {
//       loading: false,
//       error: action.payload,
//     },
//     CLEAR_ERRORS: {
//       ...state,
//       error: null,
//     },
//   };
//   return reducers[action.type] || { ...state };
// };

// export const orderReducer = (state = {}, action) => {
//   const reducers = {
//     UPDATE_ORDER_REQUEST: {
//       ...state,
//       loading: true,
//     },
//     DELETE_ORDER_REQUEST: {
//       ...state,
//       loading: true,
//     },
//     UPDATE_ORDER_SUCCESS: {
//       ...state,
//       loading: false,
//       isUpdated: action.payload,
//     },
//     DELETE_ORDER_SUCCESS: {
//       ...state,
//       loading: false,
//       isDeleted: action.payload,
//     },
//     UPDATE_ORDER_FAIL: {
//       ...state,
//       loading: false,
//       error: action.payload,
//     },
//     DELETE_ORDER_FAIL: {
//       ...state,
//       loading: false,
//       error: action.payload,
//     },
//     UPDATE_ORDER_RESET: {
//       ...state,
//       isUpdated: false,
//     },
//     DELETE_ORDER_RESET: {
//       ...state,
//       isDeleted: false,
//     },
//     CLEAR_ERRORS: {
//       ...state,
//       error: null,
//     },
//   };
//   return reducers[action.type] || { ...state };
// };

// export const orderDetailsReducer = (state = { order: {} }, action) => {
//   const request = {
//     ORDER_DETAILS_REQUEST: {
//       loading: true,
//     },
//     ORDER_DETAILS_SUCCESS: {
//       loading: false,
//       order: action.payload,
//     },
//     ORDER_DETAILS_FAIL: {
//       loading: false,
//       error: action.payload,
//     },
//     CLEAR_ERRORS: {
//       ...state,
//       error: null,
//     },
//   };
//   return reducers[action.type] || { ...state };
// };
