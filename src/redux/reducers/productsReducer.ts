import {
  ProductCreateAction,
  ProductCreateActionTypes,
  ProductCreateReviewAction,
  ProductCreateReviewActionTypes,
  ProductCreateReviewState,
  ProductCreateState,
  ProductDeleteAction,
  ProductDeleteActionTypes,
  ProductDeleteState,
  ProductUpdateAction,
  ProductUpdateActionTypes,
  ProductUpdateState,
  ProductTopAction,
  ProductTopActionTypes,
  ProductTopState,
  ProductListAction,
  ProductListActionTypes,
  ProductListState,
  ProductDetailsAction,
  ProductDetailsActionTypes,
  ProductDetailsState,
  productFeatureAction,
  ProductFeatureState,
  ProductFeatureActionTypes,
  productTagAction,
  ProductTagState,
  ProductTagActionTypes,

} from "../../types/productsTypes";

const initialProductListState: ProductListState = {
  products: [],
  loading: false,
};

/**
 * Reducer used for fetching the full list of products
 */
export const productListReducer = (
  state: ProductListState = initialProductListState,
  action: ProductListAction
) => {
  switch (action.type) {
    case ProductListActionTypes.PRODUCT_LIST_REQUEST:
      return { loading: true, products: initialProductListState.products };
    case ProductListActionTypes.PRODUCT_LIST_SUCCESS:
      return {
        loading: initialProductListState.loading,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case ProductListActionTypes.PRODUCT_LIST_FAILURE:
      return {
        loading: false,
        error: action.payload,
        products: initialProductListState.products,
      };
    default:
      return state;
  }
};

const initialProductDetailsState: ProductDetailsState = {
  loading: false,
  product: undefined,
  error: false,
};

/**
 * Reducer used for fetching details about a product
 */
export const productDetailsReducer = (
  state: ProductDetailsState = initialProductDetailsState,
  action: ProductDetailsAction
) => {
  switch (action.type) {
    case ProductDetailsActionTypes.PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
        product: initialProductDetailsState.product,
        error: false
      };
    case ProductDetailsActionTypes.PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
        error: false
      };
    case ProductDetailsActionTypes.PRODUCT_DETAILS_FAILURE:
      return {
        loading: false,
        error: action.payload,
        product: undefined
      };
    default:
      return state;
  }
};

const initialProductDeleteState: ProductDeleteState = {
  loading: false,
};

/**
 * Reducer used for deleting a product
 */
export const productDeleteReducer = (
  state: ProductDeleteState = initialProductDeleteState,
  action: ProductDeleteAction
) => {
  switch (action.type) {
    case ProductDeleteActionTypes.PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case ProductDeleteActionTypes.PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case ProductDeleteActionTypes.PRODUCT_DELETE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

const initialProductCreateState: ProductCreateState = {
  loading: false,
  success: false,
  error: null,
};

/**
 * Reducer used for creating a new product
 */
export const productCreateReducer = (
  state: ProductCreateState = initialProductCreateState,
  action: ProductCreateAction
) => {
  switch (action.type) {
    case ProductCreateActionTypes.PRODUCT_CREATE_REQUEST:
      return {
        loading: true,
        success: initialProductCreateState.success,
        product: initialProductCreateState.product,
        error: initialProductCreateState.error
      };
    case ProductCreateActionTypes.PRODUCT_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        product: action.payload,
        error: initialProductCreateState.error
      };
    case ProductCreateActionTypes.PRODUCT_CREATE_FAILURE:
      return {
        loading: false,
        error: action.payload,
        success: initialProductCreateState.success,
        product: initialProductCreateState.product,
      };
    case ProductCreateActionTypes.PRODUCT_CREATE_RESET:
      return {
        loading: initialProductCreateState.loading,
        success: initialProductCreateState.success,
        product: initialProductCreateState.product,
        error: initialProductCreateState.error
      };
    case ProductCreateActionTypes.PRODUCT_CREATE_PREVIEW:
      return {
        loading: initialProductCreateState.loading,
        success: initialProductCreateState.success,
        product: action.payload,
        error: initialProductCreateState.error
      };

    default:
      return state;
  }
};

const initialProductUpdateState: ProductUpdateState = {
  loading: false,
  success: false,
  error: null,
  product: undefined,
};

/**
 * Reducer used for updating a product's details
 */
export const productUpdateReducer = (
  state: ProductUpdateState = initialProductUpdateState,
  action: ProductUpdateAction
) => {
  switch (action.type) {
    case ProductUpdateActionTypes.PRODUCT_UPDATE_REQUEST:
      return {
        loading: true,
        success: false,
        product: initialProductUpdateState.product,
        error: null
      };
    case ProductUpdateActionTypes.PRODUCT_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        product: action.payload,
        error: null
      };
    case ProductUpdateActionTypes.PRODUCT_UPDATE_FAILURE:
      return {
        loading: false,
        error: action.payload,
        success: false,
        product: initialProductUpdateState.product,
      };
    case ProductUpdateActionTypes.PRODUCT_UPDATE_RESET:
      return {
        loading: initialProductUpdateState.loading,
        success: initialProductUpdateState.success,
        product: initialProductUpdateState.product,
        error: initialProductUpdateState.error
      };

    case ProductUpdateActionTypes.PRODUCT_UPDATE_PREVIEW:
      return {
        loading: initialProductUpdateState.loading,
        success: initialProductUpdateState.success,
        product: action.payload,
        error: initialProductUpdateState.error
      };
    default:
      return state;
  }
};

const initialProductCreateReviewState: ProductCreateReviewState = {
  loading: false,
};

/**
 * Reducer used for creating a review for a product
 */
export const productCreateReviewReducer = (
  state: ProductCreateReviewState = initialProductCreateReviewState,
  action: ProductCreateReviewAction
) => {
  switch (action.type) {
    case ProductCreateReviewActionTypes.PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case ProductCreateReviewActionTypes.PRODUCT_CREATE_REVIEW_SUCCESS:
      return {
        loading: initialProductCreateReviewState.loading,
        success: true,
      };
    case ProductCreateReviewActionTypes.PRODUCT_CREATE_REVIEW_FAILURE:
      return {
        error: action.payload,
      };
    case ProductCreateReviewActionTypes.PRODUCT_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

const initialProductTopRatedState: ProductTopState = {
  loading: false,
  products: [],
};

/**
 * Reducer used for fetching the top rated products
 */
export const productTopRatedReducer = (
  state: ProductTopState = initialProductTopRatedState,
  action: ProductTopAction
) => {
  switch (action.type) {
    case ProductTopActionTypes.PRODUCT_TOP_REQUEST:
      return { loading: true, products: [] };
    case ProductTopActionTypes.PRODUCT_TOP_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case ProductTopActionTypes.PRODUCT_TOP_FAILURE:
      return {
        products: [],
        error: action.payload,
      };
    default:
      return state;
  }
};



const initialProductFeatureState: ProductFeatureState = {
  feature: [],
};

export const productFeature = (
  state: ProductFeatureState = initialProductFeatureState,
  action: productFeatureAction
) => {
  switch (action.type) {
    case ProductFeatureActionTypes.PRODUCT_FEATURE_REQUEST:
      return { feature: [] };
    case ProductFeatureActionTypes.PRODUCT_FEATURE_SUCCESS:
      return {
        feature: action.payload,
      };
    case ProductFeatureActionTypes.PRODUCT_FEATURE_FAILURE:
      return {
        feature: [],
        error: action.payload,
      };
    default:
      return state;
  }
}

const initialProductTagState: ProductTagState = {
  tag: [],
};

export const productTag = (
  state: ProductTagState = initialProductTagState,
  action: productTagAction
) => {
  switch (action.type) {
    case ProductTagActionTypes.PRODUCT_TAG_REQUEST:
      return { feature: [] };
    case ProductTagActionTypes.PRODUCT_TAG_SUCCESS:
      return {
        feature: action.payload,
      };
    case ProductTagActionTypes.PRODUCT_TAG_FAILURE:
      return {
        feature: [],
        error: action.payload,
      };
    default:
      return state;
  }
}

