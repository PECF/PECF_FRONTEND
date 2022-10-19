import { ProductState, ListProductActionTypes } from '../../types/productList';
import { ProductCreateState, CreateActionTypes } from '../../types/productCreate';
import { ProductDeleteState, DeleteActionTypes } from '../../types/productDelete';
import { ProductDetailState, DetailActionTypes } from '../../types/productDetails';
import { ReviewActionTypes } from '../../types/productReview';
import { reviewState, ListReviews } from '../../types/reviewList';
import { deleteReviewState, deleteReviewActions } from '../../types/deleteReview';
import { ProductUpdateState, ProductUpdateTypes } from '../../types/productUpdate';
const productListInitialState: ProductState = {
  loading: false,
}

export const productsReducer = (state = productListInitialState, action: ListProductActionTypes) => {
  const reducers = {
    ALL_PRODUCT_REQUEST: {
      loading: true,
      products: action.payload,
    },
    ADMIN_PRODUCT_REQUEST: {
      loading: true,
      products: action.payload,
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
      loading: false,
      error: action.payload,
    },
    ADMIN_PRODUCT_FAIL: {
      loading: false,
      error: action.payload,
    },
    CLEAR_ERRORS: {
      ...state,
      error: null,
    },
  };
  return reducers[action.type] || { ...state };
};

const createProductInitialState: ProductCreateState = {
  loading: false,
}

export const newProductReducer = (state = createProductInitialState, action: CreateActionTypes) => {
  const reducers = {
    NEW_PRODUCT_REQUEST: {
      ...state,
      loading: true,
    },
    NEW_PRODUCT_SUCCESS: {
      loading: false,
      success: action.payload,
      product: action.payload
    },
    NEW_PRODUCT_FAIL: {
      ...state,
      loading: false,
      error: action.payload,
    },
    CLEAR_ERRORS: {
      ...state,
      error: null,
    },
  };
  return reducers[action.type] || { ...state };
};

const productUpdateInitialState: ProductUpdateState = {
  loading: false
}

export const productReducer = (state = productUpdateInitialState, action: ProductUpdateTypes) => {
  const reducers = {
    UPDATE_PRODUCT_REQUEST: {
      ...state,
      loading: true,
    },
    UPDATE_PRODUCT_SUCCESS: {
      ...state,
      loading: false,
      isUpdated: action.payload,
    },
    UPDATE_PRODUCT_FAIL: {
      ...state,
      loading: false,
      error: action.payload,
    },
    CLEAR_ERRORS: {
      ...state,
      error: null,
    },
  };
  return reducers[action.type] || { ...state };
};

const deleteInitialState: ProductDeleteState = {
  loading: false
}

export const deleteProductReducer = (state = deleteInitialState, action: DeleteActionTypes) => {
  const reducers = {
    DELETE_PRODUCT_REQUEST: {
      ...state,
      loading: true,
    },
    DELETE_PRODUCT_SUCCESS: {
      ...state,
      loading: false,
      success: true,
      isDeleted: action.payload,
    },
    DELETE_PRODUCT_FAIL: {
      ...state,
      loading: false,
      error: action.payload,
    },
    CLEAR_ERRORS: {
      ...state,
      error: null,
    },
  };
  return reducers[action.type] || { ...state };
};

const detailInitialState: ProductDetailState = {
  loading: false
}

export const productDetailsReducer = (state = detailInitialState, action: DetailActionTypes) => {
  const reducers = {
    PRODUCT_DETAILS_REQUEST: {
      ...state,
      loading: true,
    },
    PRODUCT_DETAILS_SUCCESS: {
      loading: false,
      product: action.payload,
    },
    PRODUCT_DETAILS_FAIL: {
      loading: false,
      error: action.payload,
    },
    CLEAR_ERRORS: {
      ...state,
      error: null,
    },
  };
  return reducers[action.type] || { ...state };
};

const reviewInitialState = {
  loading: false
}

export const newReviewReducer = (state = reviewInitialState, action: ReviewActionTypes) => {
  const reducers = {
    NEW_REVIEW_REQUEST: {
      ...state,
      loading: true,
    },
    NEW_REVIEW_SUCCESS: {
      loading: false,
      success: action.payload,
    },
    NEW_REVIEW_FAIL: {
      ...state,
      loading: false,
      error: action.payload,
    },
    CLEAR_ERRORS: {
      ...state,
      error: null,
    },
  };
  return reducers[action.type] || { ...state };
};

const listReviewInitialState: reviewState = {
  loading: false
}

export const productReviewsReducer = (state = listReviewInitialState, action: ListReviews) => {
  const reducers = {
    ALL_REVIEW_REQUEST: {
      ...state,
      loading: true,
    },
    ALL_REVIEW_SUCCESS: {
      loading: false,
      success: true,
      reviews: action.payload,
    },
    ALL_REVIEW_FAIL: {
      ...state,
      loading: false,
      error: action.payload,
    },
    CLEAR_ERRORS: {
      ...state,
      error: null,
    },
  };
  return reducers[action.type] || { ...state };
};

const deleteReviewInitialState: deleteReviewState = {
  loading : false
}

export const reviewReducer = (state = deleteReviewInitialState, action: deleteReviewActions) => {
  const reducers = {
    DELETE_REVIEW_REQUEST: {
      ...state,
      loading: true,
    },
    DELETE_REVIEW_SUCCESS: {
      ...state,
      loading: false,
      isDeleted: action.payload,
    },
    DELETE_REVIEW_FAIL: {
      ...state,
      loading: false,
      error: action.payload,
    },
    CLEAR_ERRORS: {
      ...state,
      error: null,
    },
  };
  return reducers[action.type] || { ...state };
};
