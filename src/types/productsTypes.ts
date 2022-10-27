export interface Product {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
  reviews: Array<Review>;
  offer: boolean;
  discount: number;
}

export interface Review {
  _id: string;
  user: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface ProductCreateState {
  success?: boolean;
  product?: Product;
  loading?: boolean;
  error?: any;
}

export enum ProductCreateActionTypes {
  PRODUCT_CREATE_REQUEST = "PRODUCT_CREATE_REQUEST",
  PRODUCT_CREATE_SUCCESS = "PRODUCT_CREATE_SUCCESS",
  PRODUCT_CREATE_FAILURE = "PRODUCT_CREATE_FAILURE",
  PRODUCT_CREATE_RESET = "PRODUCT_CREATE_RESET",
}

export interface ProductCreateRequestAction {
  type: ProductCreateActionTypes.PRODUCT_CREATE_REQUEST;
}

export interface ProductCreateSuccessAction {
  type: ProductCreateActionTypes.PRODUCT_CREATE_SUCCESS;
  payload: Product;
}

export interface ProductCreateFailureAction {
  type: ProductCreateActionTypes.PRODUCT_CREATE_FAILURE;
  payload: any;
}

export interface ProductCreateResetAction {
  type: ProductCreateActionTypes.PRODUCT_CREATE_RESET;
}

export type ProductCreateAction =
  | ProductCreateRequestAction
  | ProductCreateSuccessAction
  | ProductCreateFailureAction
  | ProductCreateResetAction;

export interface ProductCreateReviewState {
  success?: boolean;
  loading?: boolean;
  error?: any;
}

export enum ProductCreateReviewActionTypes {
  PRODUCT_CREATE_REVIEW_REQUEST = "PRODUCT_CREATE_REVIEW_REQUEST",
  PRODUCT_CREATE_REVIEW_SUCCESS = "PRODUCT_CREATE_REVIEW_SUCCESS",
  PRODUCT_CREATE_REVIEW_FAILURE = "PRODUCT_CREATE_REVIEW_FAILURE",
  PRODUCT_CREATE_REVIEW_RESET = "PRODUCT_CREATE_REVIEW_RESET",
}

export interface ProductCreateReviewRequestAction {
  type: ProductCreateReviewActionTypes.PRODUCT_CREATE_REVIEW_REQUEST;
}

export interface ProductCreateReviewSuccessAction {
  type: ProductCreateReviewActionTypes.PRODUCT_CREATE_REVIEW_SUCCESS;
}

export interface ProductCreateReviewFailureAction {
  type: ProductCreateReviewActionTypes.PRODUCT_CREATE_REVIEW_FAILURE;
  payload: any;
}

export interface ProductCreateReviewResetAction {
  type: ProductCreateReviewActionTypes.PRODUCT_CREATE_REVIEW_RESET;
}

export type ProductCreateReviewAction =
  | ProductCreateReviewRequestAction
  | ProductCreateReviewSuccessAction
  | ProductCreateReviewFailureAction
  | ProductCreateReviewResetAction;

export interface ProductDeleteState {
  success?: boolean;
  loading?: boolean;
  error?: any;
}

export enum ProductDeleteActionTypes {
  PRODUCT_DELETE_REQUEST = "PRODUCT_DELETE_REQUEST",
  PRODUCT_DELETE_SUCCESS = "PRODUCT_DELETE_SUCCESS",
  PRODUCT_DELETE_FAILURE = "PRODUCT_DELETE_FAILURE",
}

export interface ProductDeleteRequestAction {
  type: ProductDeleteActionTypes.PRODUCT_DELETE_REQUEST;
}

export interface ProductDeleteSuccessAction {
  type: ProductDeleteActionTypes.PRODUCT_DELETE_SUCCESS;
}

export interface ProductDeleteFailureAction {
  type: ProductDeleteActionTypes.PRODUCT_DELETE_FAILURE;
  payload: any;
}

export type ProductDeleteAction =
  | ProductDeleteRequestAction
  | ProductDeleteSuccessAction
  | ProductDeleteFailureAction;

export interface ProductDetailsState {
  loading: boolean;
  product?: Product;
  error?: undefined;
}

export enum ProductDetailsActionTypes {
  PRODUCT_DETAILS_REQUEST = "PRODUCT_DETAILS_REQUEST",
  PRODUCT_DETAILS_SUCCESS = "PRODUCT_DETAILS_SUCCESS",
  PRODUCT_DETAILS_FAILURE = "PRODUCT_DETAILS_FAILURE",
}

export interface FetchProductRequestAction {
  type: ProductDetailsActionTypes.PRODUCT_DETAILS_REQUEST;
}

export interface FetchProductSuccessAction {
  type: ProductDetailsActionTypes.PRODUCT_DETAILS_SUCCESS;
  payload: Product;
}

export interface FetchProductFailureAction {
  type: ProductDetailsActionTypes.PRODUCT_DETAILS_FAILURE;
  payload: any;
}

export type ProductDetailsAction =
  | FetchProductSuccessAction
  | FetchProductFailureAction
  | FetchProductRequestAction;

export interface ProductListState {
  products: Product[];
  pages?: number;
  page?: number;
  loading: boolean;
  error?: undefined;
}

export enum ProductListActionTypes {
  PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST",
  PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS",
  PRODUCT_LIST_FAILURE = "PRODUCT_LIST_FAILURE",
}

export interface FetchProductsRequestAction {
  type: ProductListActionTypes.PRODUCT_LIST_REQUEST;
}

export interface FetchProductsSuccessAction {
  type: ProductListActionTypes.PRODUCT_LIST_SUCCESS;
  payload: { products: Product[]; pages: number; page: number };
}

export interface FetchProductsFailureAction {
  type: ProductListActionTypes.PRODUCT_LIST_FAILURE;
  payload: any;
}

export type ProductListAction =
  | FetchProductsSuccessAction
  | FetchProductsFailureAction
  | FetchProductsRequestAction;

export interface ProductTopState {
  products: Product[];
  loading?: boolean;
  error?: undefined;
}

export enum ProductTopActionTypes {
  PRODUCT_TOP_REQUEST = "PRODUCT_TOP_REQUEST",
  PRODUCT_TOP_SUCCESS = "PRODUCT_TOP_SUCCESS",
  PRODUCT_TOP_FAILURE = "PRODUCT_TOP_FAILURE",
}

export interface ProductTopRequestAction {
  type: ProductTopActionTypes.PRODUCT_TOP_REQUEST;
}

export interface ProductTopSuccessAction {
  type: ProductTopActionTypes.PRODUCT_TOP_SUCCESS;
  payload: Product[];
}

export interface ProductTopFailureAction {
  type: ProductTopActionTypes.PRODUCT_TOP_FAILURE;
  payload: any;
}

export type ProductTopAction =
  | ProductTopSuccessAction
  | ProductTopFailureAction
  | ProductTopRequestAction;

// TODO: Change from temporary product to real Product including reviews, using this for now to make ProductEditScreen work
export interface TemporaryProduct {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  offer: boolean;
  discount: number;
}

export interface ProductUpdateState {
  success?: boolean;
  product?: TemporaryProduct;
  loading?: boolean;
  error?: any;
}

export enum ProductUpdateActionTypes {
  PRODUCT_UPDATE_REQUEST = "PRODUCT_UPDATE_REQUEST",
  PRODUCT_UPDATE_SUCCESS = "PRODUCT_UPDATE_SUCCESS",
  PRODUCT_UPDATE_FAILURE = "PRODUCT_UPDATE_FAILURE",
  PRODUCT_UPDATE_RESET = "PRODUCT_UPDATE_RESET",
}

export interface ProductUpdateRequestAction {
  type: ProductUpdateActionTypes.PRODUCT_UPDATE_REQUEST;
}

export interface ProductUpdateSuccessAction {
  type: ProductUpdateActionTypes.PRODUCT_UPDATE_SUCCESS;
  payload: TemporaryProduct;
}

export interface ProductUpdateFailureAction {
  type: ProductUpdateActionTypes.PRODUCT_UPDATE_FAILURE;
  payload: any;
}

export interface ProductUpdateResetAction {
  type: ProductUpdateActionTypes.PRODUCT_UPDATE_RESET;
}

export type ProductUpdateAction =
  | ProductUpdateRequestAction
  | ProductUpdateSuccessAction
  | ProductUpdateFailureAction
  | ProductUpdateResetAction;
