import {
  IOrderAction,
  IOrderActionTypes,
  IOrderState,
} from "../../types/ordersTypes";

const initialState: IOrderState = {
  orders: [],
  order: null,
  loading: false,
  error: "",
};

export const ordersReducer = (
  state = initialState,
  action: IOrderAction
): IOrderState => {
  const handlers = {
    [IOrderActionTypes.CREATE_ORDER_REQUEST]: () => ({
      ...state,
      loading: true,
    }),
    [IOrderActionTypes.CREATE_ORDER_SUCCESS]: (
      payload: IOrderState["order"]
    ) => ({
      ...state,
      loading: false,
      order: payload,
    }),
    [IOrderActionTypes.CREATE_ORDER_FAIL]: (payload: IOrderState["error"]) => ({
      ...state,
      loading: false,
      error: payload,
    }),
    [IOrderActionTypes.GET_ORDER_REQUEST]: () => ({ ...state, loading: true }),
    [IOrderActionTypes.GET_ORDER_SUCCESS]: (payload: IOrderState["order"]) => ({
      ...state,
      loading: false,
      order: payload,
    }),
    [IOrderActionTypes.GET_ORDER_FAIL]: (payload: IOrderState["error"]) => ({
      ...state,
      loading: false,
      error: payload,
    }),
    [IOrderActionTypes.GET_ORDERS_REQUEST]: () => ({ ...state, loading: true }),
    [IOrderActionTypes.GET_ORDERS_SUCCESS]: (
      payload: IOrderState["orders"]
    ) => ({
      ...state,
      loading: false,
      orders: payload,
    }),
    [IOrderActionTypes.GET_ORDERS_FAIL]: (payload: IOrderState["error"]) => ({
      ...state,
      loading: false,
      error: payload,
    }),
    [IOrderActionTypes.UPDATE_ORDER_REQUEST]: () => ({
      ...state,
      loading: true,
    }),
    [IOrderActionTypes.UPDATE_ORDER_SUCCESS]: (
      payload: IOrderState["order"]
    ) => ({
      ...state,
      loading: false,
      order: payload,
    }),
    [IOrderActionTypes.UPDATE_ORDER_FAIL]: (payload: IOrderState["error"]) => ({
      ...state,
      loading: false,
      error: payload,
    }),
    [IOrderActionTypes.DELETE_ORDER_REQUEST]: () => ({
      ...state,
      loading: true,
    }),
    [IOrderActionTypes.DELETE_ORDER_SUCCESS]: (
      payload: IOrderState["order"]
    ) => ({
      ...state,
      loading: false,
      order: payload,
    }),
    [IOrderActionTypes.DELETE_ORDER_FAIL]: (payload: IOrderState["error"]) => ({
      ...state,
      loading: false,
      error: payload,
    }),
    [IOrderActionTypes.CLEAR_ERRORS]: () => ({ ...state, error: "" }),
    DEFAULT: () => state,
  };

  return handlers[action.type]
    ? handlers[action.type](action.payload)
    : handlers.DEFAULT();
};
