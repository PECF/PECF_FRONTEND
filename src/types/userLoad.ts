import { User } from "./User";

export interface LoadUserState {
    user?: User;
    loading?: boolean;
    isAuthenticated?: boolean;
    error?: Error;
}

export enum LoadUserTypes {
    LOAD_USER_REQUEST = "LOAD_USER_REQUEST",
    LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS",
    LOAD_USER_FAIL = "LOAD_USER_FAIL"
}

export interface LoadUserRequest {
    type: LoadUserTypes.LOAD_USER_REQUEST
    payload: any
}
export interface LoadUserSuccess {
    type: LoadUserTypes.LOAD_USER_SUCCESS
    payload: User
}
export interface LoadUserFailure{
    type: LoadUserTypes.LOAD_USER_FAIL
    payload: Error
}

export type LoadTypes =
| LoadUserRequest
| LoadUserSuccess
| LoadUserSuccess