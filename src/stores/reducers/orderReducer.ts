import { OrderCreateState, OrderCreateAction } from '../../types/orderCreate';
import { MyOrderAction, MyOrderState } from '../../types/myOrder';
import { OrderListAction, OrderListState } from '../../types/orderList';
import { OrderDetailActions, OrderDetailState } from '../../types/orderDetail';
import { orderUpdateState, OrderUpdateTypes } from '../../types/orderUpdate';

const newOrderInitialState: OrderCreateState = {
  loading: false,
} 

export const newOrderReducer = (state = newOrderInitialState, action: OrderCreateAction) => {
  const reducers = {
    CREATE_ORDER_REQUEST: {
      ...state,
      loading: false,
    },
    CREATE_ORDER_SUCCESS: {
      loading: false,
      success: true,
      order: action.payload,
    },
    CREATE_ORDER_FAIL: {
      loading: false,
      error: action.payload,
    },
    CLEAR_ERRORS: {
      ...state,
      error: null,
    },
  };
};

const myOrderInitialState: MyOrderState = {
  loading: false
}

export const myOrdersReducer = (state = myOrderInitialState, action: MyOrderAction) => {
  const reducers = {
    MY_ORDER_REQUEST: {
      loading: false,
    },
    MY_ORDER_SUCCESS: {
      loading: false,
      orders: action.payload,
    },
    MY_ORDERS_FAIL: {
      loading: false,
      error: action.payload,
    },
    CLEAR_ERRORS: {
      ...state,
      error: null,
    },
  };
};

const listOrderInitialState : OrderListState = {
  loading: false,
}

export const allOrdersReducer = (state = listOrderInitialState, action: OrderListAction) => {
  const reducers = {
    ALL_ORDERS_REQUEST: {
      loading: true,
    },
    ALL_ORDERS_SUCCESS: {
      loading: false,
      orders: action.payload,
    },
    ALL_ORDERS_FAIL: {
      loading: false,
      error: action.payload,
    },
    CLEAR_ERRORS: {
      ...state,
      error: null,
    },
  };
};

const orderUpdateInitialState: orderUpdateState = {
  loading: false
}

export const orderReducer = (state = orderUpdateInitialState, action: OrderUpdateTypes) => {
  const reducers = {
    UPDATE_ORDER_REQUEST: {
      ...state,
      loading: true,
    },
    DELETE_ORDER_REQUEST: {
      ...state,
      loading: true,
    },
    UPDATE_ORDER_SUCCESS: {
      ...state,
      loading: false,
      isUpdated: action.payload,
    },
    DELETE_ORDER_SUCCESS: {
      ...state,
      loading: false,
      isDeleted: action.payload,
    },
    UPDATE_ORDER_FAIL: {
      ...state,
      loading: false,
      error: action.payload,
    },
    DELETE_ORDER_FAIL: {
      ...state,
      loading: false,
      error: action.payload,
    },
    UPDATE_ORDER_RESET: {
      ...state,
      isUpdated: false,
    },
    DELETE_ORDER_RESET: {
      ...state,
      isDeleted: false,
    },
    CLEAR_ERRORS: {
      ...state,
      error: null,
    },
  };
};

const orderDetailInitialState: OrderDetailState = {
  loading: false
}

export const orderDetailsReducer = (state = orderDetailInitialState, action: OrderDetailActions) => {
  const reducers = {
    ORDER_DETAILS_REQUEST: {
      loading: true,
    },
    ORDER_DETAILS_SUCCESS: {
      loading: false,
      order: action.payload,
    },
    ORDER_DETAILS_FAIL: {
      loading: false,
      error: action.payload,
    },
    CLEAR_ERRORS: {
      ...state,
      error: null,
    },
  };
};
