//Iproduct is the interface for the product object

export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface IProductsState {
  products: IProduct[];
  loading: boolean;
  error: string;
}

export enum IProductsActions {
  FETCH_PRODUCTS = "FETCH_PRODUCTS",
  FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
  FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR",
}

export interface FetchProductsAction {
  type: ProductActionTypes.FETCH_PRODUCTS;
}

export interface FetchProductsSuccessAction {
  type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS;
  payload: Product[];
}

export interface FetchProductsErrorAction {
  type: ProductActionTypes.FETCH_PRODUCTS_ERROR;
  payload: string;
}

export type ProductAction =
  | FetchProductsAction
  | FetchProductsSuccessAction
  | FetchProductsErrorAction;
