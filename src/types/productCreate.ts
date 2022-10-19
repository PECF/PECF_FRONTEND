import { Product } from "./productList";

export interface ProductCreateState {
    loading?: boolean;
    success?: boolean;
    product?: Product[]
    error?: Error
}

export enum ProductCreateActionTypes {
    NEW_PRODUCT_REQUEST = "NEW_PRODUCT_REQUEST",
    NEW_PRODUCT_SUCCESS = "NEW_PRODUCT_SUCCESS",
    NEW_PRODUCT_FAIL = "NEW_PRODUCT_FAIL"
}

export interface ProductCreateRequest {
    type: ProductCreateActionTypes.NEW_PRODUCT_REQUEST
    payload: any
}
export interface ProductCreateSuccess {
    type: ProductCreateActionTypes.NEW_PRODUCT_SUCCESS
    payload: Product
}
export interface ProductCreateFailure {
    type: ProductCreateActionTypes.NEW_PRODUCT_FAIL
    payload: Error
}

export type CreateActionTypes =
| ProductCreateRequest
| ProductCreateSuccess
| ProductCreateFailure