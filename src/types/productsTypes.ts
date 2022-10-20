export interface IProduct {
  _id: string;
  name: string;
  description: string;
  images: [
    {
      public_id: string;
      url: string;
    }
  ];
  price: number;
  ratings: number;
  category: string;
  stock: number;
  numOfReviews: number;
  user: string;
  reviews: [
    {
      name: string;
      rating: number;
      comment: string;
    }
  ];
  createdAt: string;
  numReviews: number;
  visibility: boolean;
}

export interface IProductState {
  products: IProduct[];
  product: IProduct | null;
  loading: boolean;
  error: string;
}

export enum IProductActionTypes {
  GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST",
  GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS",
  GET_PRODUCTS_FAIL = "GET_PRODUCTS_FAIL",
  GET_PRODUCT_DETAILS_REQUEST = "GET_PRODUCT_REQUEST",
  GET_PRODUCT_DETAILS_SUCCESS = "GET_PRODUCT_SUCCESS",
  GET_PRODUCT_DETAILS_FAIL = "GET_PRODUCT_FAIL",
  CLEAR_ERRORS = "CLEAR_ERRORS",
}

export interface getProductsRequest {
  type: IProductActionTypes.GET_PRODUCTS_REQUEST;
}

export interface getProductsSuccess {
  type: IProductActionTypes.GET_PRODUCTS_SUCCESS;
  payload: IProductState["products"];
}

export interface getProductsFail {
  type: IProductActionTypes.GET_PRODUCTS_FAIL;
  payload: IProductState["error"];
}

export interface getProductRequest {
  type: IProductActionTypes.GET_PRODUCT_DETAILS_REQUEST;
}

export interface getProductSuccess {
  type: IProductActionTypes.GET_PRODUCT_DETAILS_SUCCESS;
  payload: IProductState["product"];
}

export interface getProductFail {
  type: IProductActionTypes.GET_PRODUCT_DETAILS_FAIL;
  payload: IProductState["error"];
}

export interface clearErrors {
  type: IProductActionTypes.CLEAR_ERRORS;
}

export type IProductActions =
  | getProductsRequest
  | getProductsSuccess
  | getProductsFail
  | getProductRequest
  | getProductSuccess
  | getProductFail
  | clearErrors;
