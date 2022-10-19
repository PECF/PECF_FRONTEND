export interface ProductDeleteState {
    success?: boolean;
    loading?: boolean;
    error?: Error;
  }

export enum ProductDeleteTypes {
    DELETE_PRODUCT_REQUEST = "DELETE_PRODUCT_REQUEST",
    DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS",
    DELETE_PRODUCT_FAIL = "DELETE_PRODUCT_FAIL"
}
export interface ProductDeleteRequest {
    type: ProductDeleteTypes.DELETE_PRODUCT_REQUEST
    payload: any
}

export interface ProductDeleteSuccess {
    type: ProductDeleteTypes.DELETE_PRODUCT_SUCCESS
    payload: any
}
export interface ProductDeleteFailure{
    type: ProductDeleteTypes.DELETE_PRODUCT_FAIL
    payload: Error
}

export type DeleteActionTypes = 
| ProductDeleteRequest
| ProductDeleteSuccess
| ProductDeleteFailure