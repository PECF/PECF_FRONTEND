export interface ForgotPasswordState {
    loading?: boolean
    message?: string
    error?: Error
}

export enum ForgotPasswordActionTypes {
    FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST",
    FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS",
    FORGOT_PASSWORD_FAIL = "FORGOT_PASSWORD_FAIL"
}

export interface forgotPasswordRequest {
    type: ForgotPasswordActionTypes.FORGOT_PASSWORD_REQUEST
    payload: any
}
export interface forgotPasswordSuccess {
    type: ForgotPasswordActionTypes.FORGOT_PASSWORD_SUCCESS
    payload: any
}
export interface forgotPasswordFailure {
    type: ForgotPasswordActionTypes.FORGOT_PASSWORD_FAIL
    payload: Error
}

export type ForgotPasswordTypes =
| forgotPasswordRequest
| forgotPasswordSuccess
| forgotPasswordFailure