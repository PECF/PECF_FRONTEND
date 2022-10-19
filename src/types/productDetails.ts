import { Product } from "./productList";

export interface ProductDetailState {
    loading: boolean;
    product?: Product;
    error?: Error;
}

export enum ProductDetailActionTypes {
    PRODUCT_DETAILS_REQUEST = "PRODUCT_DETAILS_REQUEST",
    PRODUCT_DETAILS_SUCCESS = "PRODUCT_DETAILS_SUCCESS",
    PRODUCT_DETAILS_FAIL = "PRODUCT_DETAILS_FAIL"
}

export interface ProductDetailRequest {
    type: ProductDetailActionTypes.PRODUCT_DETAILS_REQUEST
    payload: any
}
export interface ProductDetailSuccess {
    type: ProductDetailActionTypes.PRODUCT_DETAILS_SUCCESS
    payload: Product
}
export interface ProductDetailFailure{
    type: ProductDetailActionTypes.PRODUCT_DETAILS_FAIL
    payload: Error
}

export type DetailActionTypes =
| ProductDetailRequest
| ProductDetailSuccess
| ProductDetailFailure