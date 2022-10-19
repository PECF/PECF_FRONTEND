export interface ProductUpdateState {
    loading?: boolean
    isUpdated?: boolean
    error?: Error
}

export enum ProductUpdateActionTypes {
    UPDATE_PRODUCT_REQUEST = "UPDATE_PRODUCT_REQUEST",
    UPDATE_PRODUCT_SUCCESS = "UPDATE_PRODUCT_SUCCESS",
    UPDATE_PRODUCT_FAIL = "UPDATE_PRODUCT_FAIL"
}

export interface productUpdateRequest {
    type: ProductUpdateActionTypes.UPDATE_PRODUCT_REQUEST
    payload: any
}
export interface productUpdateSuccess {
    type: ProductUpdateActionTypes.UPDATE_PRODUCT_SUCCESS
    payload: any
}
export interface productUpdateFailure {
    type: ProductUpdateActionTypes.UPDATE_PRODUCT_FAIL
    payload: Error
}

export type ProductUpdateTypes =
| productUpdateRequest
| productUpdateSuccess
| productUpdateFailure