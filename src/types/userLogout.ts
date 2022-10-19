export interface LogoutState {
    user?: null;
    loading?: boolean;
    isAuthenticated?: boolean;
    error?: Error;
}

export enum LogoutActionTypes {
    LOGOUT_SUCCESS = "LOGOUT_SUCCESS",
    LOGOUT_FAIL = "LOGOUT_FAIL"
}

export interface LogoutSuccess {
    type: LogoutActionTypes.LOGOUT_SUCCESS
    payload: any
}
export interface LogoutFail{
    type: LogoutActionTypes.LOGOUT_FAIL
    payload: Error
}

export type LogoutTypes =
| LogoutSuccess
| LogoutFail