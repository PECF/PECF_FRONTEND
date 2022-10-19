export interface UserDeleteState {
    success?: boolean;
    loading?: boolean;
    isDeleted?: boolean;
    message?: string
    error?: any;
  }

export enum DeleteUserActionTypes {
    DELETE_USER_REQUEST = "DELETE_USER_REQUEST",
    DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS",
    DELETE_USER_FAIL = "DELETE_USER_FAIL"
}

export interface userDeleteRequest { 
    type: DeleteUserActionTypes.DELETE_USER_REQUEST
    payload: any
}
export interface userDeleteSuccess {
    type: DeleteUserActionTypes.DELETE_USER_SUCCESS
    payload: any
}
export interface userDeleteFailure{
    type: DeleteUserActionTypes.DELETE_USER_FAIL
    payload: Error
}

export type UserDeleteTypes =
| userDeleteRequest
| userDeleteSuccess
| userDeleteFailure