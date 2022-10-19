export interface UpdatePasswordState {
    loading?: boolean
    isUpdated?: boolean
    error?: Error
}

export enum UpdatePasswordActionTypes {
    UPDATE_PASSWORD_REQUEST = "UPDATE_PASSWORD_REQUEST",
    UPDATE_PASSWORD_SUCCESS = "UPDATE_PASSWORD_SUCCESS",
    UPDATE_PASSWORD_FAIL = "UPDATE_PASSWORD_FAIL"
}
export interface updatePasswordRequest {
    type: UpdatePasswordActionTypes.UPDATE_PASSWORD_REQUEST
    payload: any
} 
export interface updatePasswordSuccess { 
    type: UpdatePasswordActionTypes.UPDATE_PASSWORD_SUCCESS
    payload: any
}
export interface updatePasswordFailure {
    type: UpdatePasswordActionTypes.UPDATE_PASSWORD_FAIL
    payload: Error
}

export type UpdatePasswordTypes = 
| updatePasswordRequest
| updatePasswordSuccess
| updatePasswordFailure