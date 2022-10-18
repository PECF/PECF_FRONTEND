// path: ./src/stores/reducers/productsReducer.ts
// create productsReducer with typescript, redux, react. All logic in function in other place, and not use switch case, use object

import { IProductsState, IProductsActions } from "../../types/productTypes";

const initialState: IProductsState = {
  products: [],
  loading: false,
  error: "",
};

export const productsReducer = (
  state = initialState,
  action: IProductsActions
): IProductsState => {
  const handlers: Record<IProductsActions["type"], any> = {
    [IProductsActions.FETCH_PRODUCTS]: () => ({ ...state, loading: true }),
    [IProductsActions.FETCH_PRODUCTS_SUCCESS]: (
      payload: IProductsState["products"]
    ) => ({
      ...state,
      loading: false,
      products: payload,
    }),
    [IProductsActions.FETCH_PRODUCTS_ERROR]: (
      payload: IProductsState["error"]
    ) => ({
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

// export const productsReducer = (state = { products: [] }, action) => {
//   const reducers = {
//     ALL_PRODUCT_REQUEST: {
//       loading: true,
//       products: [],
//     },
//     ADMIN_PRODUCT_REQUEST: {
//       loading: true,
//       products: [],
//     },
//     ALL_PRODUCT_SUCCESS: {
//       loading: false,
//       products: action.payload.products,
//       productsCount: action.payload.productsCount,
//       resultPerPage: action.payload.resultPerPage,
//       filteredProductsCount: action.payload.filteredProductsCount,
//     },
//     ADMIN_PRODUCT_SUCCESS: {
//       loading: false,
//       products: action.payload,
//     },
//     ALL_PRODUCT_FAIL: {
//       loading: false,
//       error: action.payload,
//     },
//     ADMIN_PRODUCT_FAIL: {
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

// export const newProductReducer = (state = { product: {} }, action) => {
//   const reducers = {
//     NEW_PRODUCT_REQUEST: {
//       ...state,
//       loading: true,
//     },
//     NEW_PRODUCT_SUCCESS: {
//       loading: false,
//       success: action.payload.success,
//       product: action.payload.product,
//     },
//     NEW_PRODUCT_FAIL: {
//       ...state,
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

// export const productReducer = (state = {}, action) => {
//   const reducers = {
//     UPDATE_PRODUCT_REQUEST: {
//       ...state,
//       loading: true,
//     },
//     UPDATE_PRODUCT_SUCCESS: {
//       ...state,
//       loading: false,
//       isUpdated: action.payload,
//     },
//     UPDATE_PRODUCT_FAIL: {
//       ...state,
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

// export const deleteProductReducer = (state = {}, action) => {
//   const reducers = {
//     DELETE_PRODUCT_REQUEST: {
//       ...state,
//       loading: true,
//     },
//     DELETE_PRODUCT_SUCCESS: {
//       ...state,
//       loading: false,
//       isDeleted: action.payload,
//     },
//     DELETE_PRODUCT_FAIL: {
//       ...state,
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

// export const productDetailsReducer = (state = { product: {} }, action) => {
//   const reducers = {
//     PRODUCT_DETAILS_REQUEST: {
//       loading: true,
//       ...state,
//     },
//     PRODUCT_DETAILS_SUCCESS: {
//       loading: false,
//       product: action.payload,
//     },
//     PRODUCT_DETAILS_FAIL: {
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

// export const newReviewReducer = (state = {}, action) => {
//   const reducers = {
//     NEW_REVIEW_REQUEST: {
//       ...state,
//       loading: true,
//     },
//     NEW_REVIEW_SUCCESS: {
//       loading: false,
//       success: action.payload,
//     },
//     NEW_REVIEW_FAIL: {
//       ...state,
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

// export const productReviewsReducer = (state = { reviews: [] }, action) => {
//   const reducers = {
//     ALL_REVIEW_REQUEST: {
//       ...state,
//       loading: true,
//     },
//     ALL_REVIEW_SUCCESS: {
//       loading: false,
//       reviews: action.payload,
//     },
//     ALL_REVIEW_FAIL: {
//       ...state,
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

// export const reviewReducer = (state = {}, action) => {
//   const reducers = {
//     DELETE_REVIEW_REQUEST: {
//       ...state,
//       loading: true,
//     },
//     DELETE_REVIEW_SUCCESS: {
//       ...state,
//       loading: false,
//       isDeleted: action.payload,
//     },
//     DELETE_REVIEW_FAIL: {
//       ...state,
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
