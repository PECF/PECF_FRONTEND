import {
  IProductState,
  IProductActions,
  IProductActionTypes,
} from "../../types/productsTypes.ts";

const initialState: IProductState = {
  products: [],
  product: null,
  loading: false,
  error: "",
};

export const productsReducer = (
  state: IProductState = initialState,
  action: IProductActions
) => {
  const handlers = {
    [IProductActionTypes.GET_PRODUCTS_REQUEST]: {
      ...state,
      loading: true,
    },
    [IProductActionTypes.GET_PRODUCTS_SUCCESS]: {
      ...state,
      products: action.payload,
      loading: false,
    },
    [IProductActionTypes.GET_PRODUCTS_FAIL]: {
      ...state,
      error: action.payload,
      loading: false,
    },
    [IProductActionTypes.GET_PRODUCT_DETAILS_REQUEST]: {
      ...state,
      loading: true,
    },
    [IProductActionTypes.GET_PRODUCT_DETAILS_SUCCESS]: {
      ...state,
      product: action.payload,
      loading: false,
    },
    [IProductActionTypes.GET_PRODUCT_DETAILS_FAIL]: {
      ...state,
      error: action.payload,
      loading: false,
    },
    [IProductActionTypes.CLEAR_ERRORS]: {
      ...state,
      error: "",
    },
    default: state,
  };
  return handlers[action.type] || handlers.default;
};
