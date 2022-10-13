export const productsReducer = (state = { products: [] }, action) => {
  const reducers = {
    ALL_PRODUCT_REQUEST: {
      loading: true,
      products: [],
    },
    ADMIN_PRODUCT_REQUEST: {
      loading: true,
      products: [],
    },
    ALL_PRODUCT_SUCCESS: {
      loading: false,
      products: action.payload.products,
      productsCount: action.payload.productsCount,
      resultPerPage: action.payload.resultPerPage,
      filteredProductsCount: action.payload.filteredProductsCount,
    },
    ADMIN_PRODUCT_SUCCESS: {
      loading: false,
      products: action.payload,
    },
    ALL_PRODUCT_FAIL: {
      payload: error.response.data.message,
    },
    ADMIN_PRODUCT_FAIL: {
      payload: error.response.data.message,
    },
  };
};

export const newProductReducer = (state = { product: {} }, action) => {};

export const productReducer = (state = {}, action) => {};

export const productDetailsReducer = (state = { product: {} }, action) => {};

export const newReviewReducer = (state = {}, action) => {};

export const productReviewsReducer = (state = { reviews: [] }, action) => {};

export const reviewReducer = (state = {}, action) => {};
