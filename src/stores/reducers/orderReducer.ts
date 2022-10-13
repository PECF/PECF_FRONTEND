export const newOrderReducer = (state = {}, action) => {
  const reducers = {
    CREATE_ORDER_REQUEST: {
      ...state,
      loading: true,
    },
    CREATE_ORDER_SUCCESS: {
      loading: false,
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

export const myOrdersReducer = (state = { orders: [] }, action) => {};

export const allOrdersReducer = (state = { orders: [] }, action) => {};

export const orderReducer = (state = {}, action) => {};

export const orderDetailsReducer = (state = { order: {} }, action) => {};
