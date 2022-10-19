
export interface UserUpdateState {
    loading?: boolean;
    success?: boolean;
    isUpdated?: boolean;
    error?: Error;
}

export enum UserUpdateActionTypes {
    UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST",
    UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS",
    UPDATE_USER_FAIL = "UPDATE_USER_FAIL"
  }

export interface userUpdateRequest{
    type: UserUpdateActionTypes.UPDATE_USER_REQUEST
    payload: any
}
export interface userUpdateSuccess{
    type: UserUpdateActionTypes.UPDATE_USER_SUCCESS
    payload: any
}
export interface userUpdateFailure{
    type: UserUpdateActionTypes.UPDATE_USER_FAIL
    payload: Error
}

export type UserUpdateTypes =
| userUpdateRequest
| userUpdateSuccess
| userUpdateFailure