export interface ResetPasswordState {
    loading?: boolean
    success?: boolean
    error?: Error
}

export enum ResetPasswordActionTypes {
    RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST",
    RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS",
    RESET_PASSWORD_FAIL = "RESET_PASSWORD_FAIL"
}

export interface resetPasswordRequest {
    type: ResetPasswordActionTypes.RESET_PASSWORD_REQUEST
    payload: any
}
export interface resetPasswordSuccess {
    type: ResetPasswordActionTypes.RESET_PASSWORD_SUCCESS
    payload: any
}
export interface resetPasswordFailure {
    type: ResetPasswordActionTypes.RESET_PASSWORD_FAIL
    payload: Error
}

export type ResetPasswordTypes = 
| resetPasswordRequest
| resetPasswordFailure
| resetPasswordSuccess